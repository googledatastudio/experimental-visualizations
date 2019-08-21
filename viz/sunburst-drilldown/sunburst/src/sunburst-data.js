/* eslint-disable import/no-extraneous-dependencies */
const d3 = Object.assign(
    {},
    require("d3-array"),
    require("d3-selection"),
    require("d3-hierarchy")
);

export function prepareData() {
    this.totalMetric = d3.sum(this.dataset, d => d[this.metricAccessor]);

    // Create argumaents based on dimensions
    let rollupDim = [];
    this.dimensionsAccessor.forEach(item => {
        rollupDim.push(d => d[item]);
    });

    const nestedMap = d3.rollup(
        this.dataset,
        v => d3.sum(v, d => d[this.metricAccessor]),
        ...rollupDim
    );

    // #### reconverting to flat structure makes not really sense - However, not sure what the alternative might look like
    const flatArray = [];
    const parentArray = ["root"];
    let depth = 0;
    let itemID = 0;
    let parentID = [0];

    function convertNestdMap(map) {
        depth++;

        const convertedMap = Array.from(map);
        convertedMap.forEach((d, i) => {
            const obj = {};
            itemID++;
            obj.id = itemID;
            obj.parentID = parentID[depth - 1];
            obj.parent = parentArray[depth - 1];
            obj.key = d[0];
            obj.level = depth;

            d.forEach((item, index) => {
                if (index == 1) {
                    if (item instanceof Map) {
                        parentArray[depth] = d[0];
                        parentID[depth] = itemID;
                        convertNestdMap(item);
                    } else {
                        obj.value = item;
                    }
                }
            });

            flatArray.push(obj);

            if (i == convertedMap.length - 1) {
                depth--;
            }
        });
    }

    convertNestdMap(nestedMap);
    flatArray.unshift({ id: 0 });

    // #### reconverting END

    const tree = d3
        .stratify()
        .id(d => d.id)
        .parentId(d => d.parentID)(flatArray);

    return tree;
}

export function partitionData(data) {
    return d3.partition().size([2 * Math.PI, this.dimensions.boundedRadius])(
        d3
            .hierarchy(data)
            .sum(d => (d.children ? 0 : d.data.value))
            .sort((a, b) => b.value - a.value)
    );
}

export function getParentArray(clickedNode, type="id") {
    const parentArray = [];

    function getParent(node) {
        if (node.parent) {
          const id = node.data.data.id
            if (id >= 0) {
                parentArray.push(node.data.data[type]);
            }
            getParent(node.parent);
        }
    }
    getParent(clickedNode);

    return parentArray.reverse();
}

export function getNodeFromFunnel(funnel) {
    // funnel.pop();

    // START ROOT
    let root = this.partitionData(this.treeData);

    function getNode(level) {
        const children = root.children;

        for (let i in children) {
            const key = children[i].data.data.id;
            if (funnel[level] === key) {
                root = children[i];
                if (level + 1 < funnel.length) {
                    getNode(level + 1);
                } else {
                    return root;
                }
                break;
            }
        }
    }

    getNode(0);
    return root;
}

export default prepareData;
