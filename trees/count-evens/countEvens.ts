import { TreeNodeNum } from "../common/tree";

/** countEvens(): starting from the invoking node and moving through its
 * children, count how many nodes have even values. Returns that count as
 * an integer. */
function countEvens(node: TreeNodeNum): number {
  if (!node) return 0;
  if (node.children.length === 0) {
    if (node.val % 2 === 0) return 1;
    else return 0;
  }

  let countEvenChildrenAndCurr = 0;
  if (node.val % 2 === 0) countEvenChildrenAndCurr++;

  for (let c of node.children) {
    countEvenChildrenAndCurr += countEvens(c);
    }

  return countEvenChildrenAndCurr;
}

export { countEvens };
