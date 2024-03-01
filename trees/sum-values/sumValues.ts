import { TreeNodeNum } from "../common/tree";

/** sumValues(): add up all values of node and its descendants.
 * Returns sum as an integer. */
function sumValues(node: TreeNodeNum): number {
  if (!node) return 0;
  if (node.children.length === 0) return node.val;

  let sumChildren = 0;

  for (const c of node.children) {
    sumChildren += sumValues(c);
  }

  return node.val + sumChildren;
}

export { sumValues };
