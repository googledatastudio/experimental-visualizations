const d3 = Object.assign({}, require('d3'), require('d3-scale-chromatic'), require('d3-hierarchy'), require('d3-array'));

export const createRoot = (data: any) => {
  const levels = data.fields.dimension.length;
  const dimensions = data.fields.dimension;
  const table = data.tables.DEFAULT;
  var nested;
  var nestedVals = [];

  switch (levels) {
    case 1:
      nested = d3.rollup(table, (v: {length: any;}) => v.length, (d: {dimension: any[];}) => d.dimension[0]);
      for (let [k1, v1] of nested.entries()) {
        nestedVals.push(
          {
            name: k1,
            value: v1
          }
        )
      }
      break;
    case 2:
      nested = d3.rollup(table, (v: {length: any;}) => v.length, (d: {dimension: any[];}) => d.dimension[0], (d: {dimension: any[];}) => d.dimension[1])
      for (let [k1, v1] of nested.entries()) {
        let c1 = [];
        for (let [k2, v2] of v1.entries()) {
          c1.push({
            name: k2,
            value: v2
          })
        }
        nestedVals.push(
          {
            name: k1,
            children: c1
          }
        )
      }
      break;
    case 3:
      nested = d3.rollup(table, (v: {length: any;}) => v.length, (d: {dimension: any[];}) => d.dimension[0], (d: {dimension: any[];}) => d.dimension[1], (d: {dimension: any[];}) => d.dimension[2])
      for (let [k1, v1] of nested.entries()) {
        let c1 = [];
        for (let [k2, v2] of v1.entries()) {
          let c2 = [];
          for (let [k3, v3] of v2.entries()) {
            c2.push({
              name: k3,
              value: v3
            });
          }
          c1.push({
            name: k2,
            children: c2
          })
        }
        nestedVals.push(
          {
            name: k1,
            children: c1
          }
        )
      }
      break;
    case 4:
      nested = d3.rollup(table, (v: {length: any;}) => v.length, (d: {dimension: any[];}) => d.dimension[0], (d: {dimension: any[];}) => d.dimension[1], (d: {dimension: any[];}) => d.dimension[2], (d: {dimension: any[];}) => d.dimension[3])
      for (let [k1, v1] of nested.entries()) {
        let c1 = [];
        for (let [k2, v2] of v1.entries()) {
          let c2 = [];
          for (let [k3, v3] of v2.entries()) {
            let c3 = [];
            for (let [k4, v4] of v3.entries()) {
              c3.push({
                name: k4,
                dimId: dimensions[3].id,
                value: v4
              });
            }
            c2.push({
              name: k3,
              dimId: dimensions[2].id,
              children: c3
            });
          }
          c1.push({
            name: k2,
            dimId: dimensions[1].id,
            children: c2
          })
        }
        nestedVals.push(
          {
            name: k1,
            children: c1,
            dimId: dimensions[0].id
          }
        )
      }
      break;
    default:
      return table;
  }

  return {children: nestedVals};

}

// onst processOrRecurse = ([k, v], level=0) => {
//   if (vCanBeRecursedInto(v)) {
//     return v.map(thing => ({
//       name: k,
//       dimId: dimensions[level].id,
//       children: processOrRecurse(thing, level +1),
//     })
//   } else {
//     return v.map(thing => ({
//                 name: k,
//                 dimId: dimensions[level].id,
//                 value: thing
//               }))
//   }
// }

// const processOrRecurse = (table: any, level = 0) => {
//   // decrement level
//   if (level > 0) {
//     // d3.group
//     return d3.group(table, (d: {dimension: any[];}) => d.dimension[0])
//   } else {

//   }

// }

// export const newRoot = (data: any) => {
//   const table = data.tables.DEFAULT;
//   const fields = data.fields;
//   console.log(data);
// }

// TODO figure out how to ass dimensionIds

export const buildHierarchy: any = (table: any, level: number = 0) => {
  const dimensionNum = table[0].dimension.length;
  if (level < dimensionNum) {
    const grouped = d3.group(table, (d: {dimension: any[];}) => d.dimension[level]);
    const entries = Array.from(grouped.keys());
    return entries.map((k) => ({
      name: k,
      children: buildHierarchy(grouped.get(k), level + 1)
    }))
  } else {
    const grouped = d3.group(table, (d: {dimension: any[];}) => d.dimension[level]);
    const entries = Array.from(grouped.keys());
    return entries.map((k) => ({
      name: k,
      value: grouped.get(k).reduce((acc: number, d: any) => acc + d.metric[0], 0)
    }))
  }

}
