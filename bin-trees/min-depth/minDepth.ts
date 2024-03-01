import { BNodeNum } from "../common/bintree";

/** Get minimum depth from node.
 *
 * Minimum depth: length of shortest path from node to a leaf.
 **/

function minDepth(node: BNodeNum): number {

  if (!node) return Infinity;
  if (!node.lnode && !node.rnode) return 1;

  return Math.min(minDepth(node.lnode!), minDepth(node.rnode!)) + 1;
}

export { minDepth };
