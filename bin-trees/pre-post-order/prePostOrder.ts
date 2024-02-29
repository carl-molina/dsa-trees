import { BNodeNum } from "../common/bintree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of visited nodes. */

function preOrder(node: BNodeNum | null): number[] {

  if (!node) return [];
  if (!node.lnode && !node.rnode) return [node.val];

  let nums: number[] = [];

  nums.push(node.val);

  if (node.lnode) {
    nums.push(...preOrder(node.lnode));
  }

  if (node.rnode) {
    nums.push(...preOrder(node.rnode));
  }

  return nums;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of visited nodes. */

function postOrder(node: BNodeNum | null): number[] {
  return [42];
}

export { preOrder, postOrder };