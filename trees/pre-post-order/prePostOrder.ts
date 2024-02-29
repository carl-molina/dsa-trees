import { Tree, TreeNodeNum } from "../common/tree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of visited nodes. */

function preOrder(node: TreeNodeNum | null): number[] {
  if (!node) return [];
  if (node.children.length === 0) {
    return [node.val];
  }
  let nums = [node.val];
  for (const c of node.children) {
    nums = nums.concat(preOrder(c));
  }
  
  return nums;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of visited nodes. */

function postOrder(node: TreeNodeNum | null): number[] {
  return [42];
}

export { preOrder, postOrder }; 