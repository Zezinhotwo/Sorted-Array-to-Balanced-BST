function sortedArrayToBSTRecur(arr, start, end) {
    if (start > end)
        return null;
    let mid = start + Math.floor((end - start) / 2);
    let root = No(arr[mid]);
    root.left = sortedArrayToBSTRecur(arr, start, mid - 1);
    root.right = sortedArrayToBSTRecur(arr, mid + 1, end);
    return root;
}
function sortedArrayToBST(arr) {
    return sortedArrayToBSTRecur(arr, 0, arr.length - 1);
}
function preOrder(root) {
    if (root == null)
        return;
    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right);
}
function No(data) {
    return { data, left: null, right: null };
}
const arr = [10, 20, 30];
const root = sortedArrayToBST(arr);
preOrder(root);
export {};
