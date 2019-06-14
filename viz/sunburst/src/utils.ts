const d3 = Object.assign({}, require('d3'), require('d3-scale-chromatic'), require('d3-hierarchy'), require('d3-array'));

export const buildHierarchy: any = (table: any, fields: any, level: number = 0) => {
  const dimensionNum = table[0].dimension.length;
  if (level < dimensionNum - 1) {
    const grouped = d3.group(table, (d: {dimension: any[];}) => d.dimension[level]);
    const entries = Array.from(grouped.keys());
    return entries.map((k) => ({
      name: k,
      dimId: fields.dimension[level].id,
      children: buildHierarchy(grouped.get(k), fields, level + 1)
    }))
  } else {
    const grouped = d3.group(table, (d: {dimension: any[];}) => d.dimension[level]);
    const entries = Array.from(grouped.keys());
    return entries.map((k) => ({
      name: k,
      dimId: fields.dimension[level].id,
      value: grouped.get(k).reduce((acc: number, d: any) => acc + d.metric[0], 0)
    }))
  }

}
