import { TreeNodeNum } from "../common/tree";

/** sumValues(): add up all values of node and its descendants.
 * Returns sum as an integer. */
function sumValues(node: TreeNodeNum): number {

  // base case
  if (!node) return 0;
  if (node.children.length === 0) return node.val;

  let sumChild = 0;

  for (const c of node.children) {
    sumChild += sumValues(c);
  }

  return node.val + sumChild;
}

export { sumValues };
