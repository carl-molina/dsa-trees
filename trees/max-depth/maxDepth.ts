import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  if (!node) return 0;
  if (node.children.length === 0) return 1;

  const depth = 1;

  const sums = [];

  for (const c of node.children) {
    sums.push(maxDepth(c));
  }

  return Math.max(...sums) + depth;
}

export { maxDepth };
