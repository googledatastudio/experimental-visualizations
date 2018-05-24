// subscribe to data & get the viz
dscc.subscribeToData(drawChart);

function drawChart(data){
  renderViz(buildHierarchy(convertData(data)));
}

function renderViz(root) {
  var width = window.innerWidth - 50,
      height = window.innerHeight - 50,
      margin = 20,
      diameter = (Math.min(width, height)) - 10;

  var svg = d3.select("#circlepack");
  svg.remove();

  svg = d3.select("body").append("svg")
      .attr("id", "circlepack")
      .attr("width", width)
      .attr("height", height);
    g = svg.append("g")
      .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")")
      .attr("transform", "translate(" + width / 2 + "," + (height / 2) + ")");


  var color = d3.scaleOrdinal(d3.schemeCategory20);

  var pack = d3.pack()
      .size([diameter - margin, diameter - margin])
      .padding(2);

    root = d3.hierarchy(root)
        .sum(function(d) { return d.size; })
        .sort(function(a, b) { return b.value - a.value; });

    var focus = root,
        nodes = pack(root).descendants(),
        view;

    var t = d3.transition()
          .duration(500);

    var circle = g.selectAll("circle")
      .data(nodes)
      .enter().append("circle")
        .style("fill", function(d) { return d.children ? color(d.depth) : color(d.depth); })
        .on("click", function(d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); })
        .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
  ;

    var text = g.selectAll("text")
      .data(nodes)
      .enter().append("text")
        .attr("class", "label")
        .style("text-anchor", "middle")
        .style("text-shadow", "0 1px 0 #ccc, 1px 0 0 #ccc, -1px 0 0 #ccc, 0 -1px 0 #ccc")
        .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
        .style("display", function(d) { return d.parent === root ? "inline" : "none"; })
        .text(function(d) { return d.data.name; });

    var node = g.selectAll("circle,text");

    svg
      .on("click", function() { zoom(root); });

    zoomTo([root.x, root.y, root.r * 2 + margin]);

    function zoom(d) {
      var focus0 = focus; focus = d;

      var transition = d3.transition()
          .duration(d3.event.altKey ? 7500 : 750)
          .tween("zoom", function(d) {
            var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
            return function(t) { zoomTo(i(t)); };
          });

      transition.selectAll("text")
        .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
          .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
          .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
          .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
    }

    function zoomTo(v) {
      var k = diameter / v[2]; view = v;
      node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
      circle.attr("r", function(d) { return d.r * k; });
    }

}

function convertData(data) {
  var fields = data.fields.map(x=>x.id);
  var rowArrays = [];
  data.rows.forEach(function(row){
    var newRow = [];
    fields.forEach(function(field){
      newRow.push(row[field]);
    });
    rowArrays.push(newRow);
  });

  return rowArrays;

}

function buildHierarchy(csv) {
  // expects an array ["25-54", number]
  var root = {"name": "start", "children": []};
  for (var i = 0; i < csv.length; i++) {

    var size = +csv[i][csv[i].length - 1];

    if (isNaN(size)) { // e.g. if this is a header row
      continue;
    }
    var parts = [];
    for (var j = 0; j < csv[i].length - 1; j++) {
      parts.push(csv[i][j]);
    }

    var currentNode = root;
    for (var j = 0; j < parts.length; j++) {
      var children = currentNode["children"];
      var nodeName = parts[j];
      var childNode;
      if (j + 1 < parts.length) {
   // Not yet at the end of the sequence; move down the tree.
     var foundChild = false;
     for (var k = 0; k < children.length; k++) {
       if (children[k]["name"] == nodeName) {
         childNode = children[k];
         foundChild = true;
         break;
       }
     }
  // If we don't already have a child node for this branch, create it.
     if (!foundChild) {
       childNode = {"name": nodeName, "children": []};
       children.push(childNode);
     }
     currentNode = childNode;
      } else {
     // Reached the end of the sequence; create a leaf node.
     childNode = {"name": nodeName, "size": size};
     children.push(childNode);
      }
    }
  }
  return root;
};
