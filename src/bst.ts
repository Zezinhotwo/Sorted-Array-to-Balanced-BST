export { };
interface TreeNode {
    data: number;
    left: TreeNode | null;
    right: TreeNode | null
}
function sortedArrayToBSTRecur(arr: number[], start: number, end: number) {

    if (start > end) return null;

    let mid: number = start + Math.floor((end - start) / 2);

    let root: TreeNode | null = No(arr[mid]);

    root.left = sortedArrayToBSTRecur(arr, start, mid - 1);

    root.right = sortedArrayToBSTRecur(arr, mid + 1, end);

    return root;
}

function sortedArrayToBST(arr: number[]) {
    return sortedArrayToBSTRecur(arr, 0, arr.length - 1);
}

function preOrder(root: TreeNode | null): void {
    if (root == null) return;
    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right);
}
function No(data: number): TreeNode {
    return { data, left: null, right: null };
}


const arr: number[] = [10, 20, 30];
const root: TreeNode | null = sortedArrayToBST(arr);
preOrder(root);