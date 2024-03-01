import { BNodeNum } from "../common/bintree";

/** Minimum depth from node to an "incomplete node".
 *
 * An incomplete node is a node with 0 or 1 children (not 2).
 */

function minDepthToIncomplete(node: BNodeNum): number {
  if (!node) return 0;
  if (!node.lnode || !node.rnode) return 1;
  let depth = 1;

  const childrenMinDepth = Math.min(
    minDepthToIncomplete(node.lnode), minDepthToIncomplete(node.rnode));

  return childrenMinDepth + depth;
}

export { minDepthToIncomplete };