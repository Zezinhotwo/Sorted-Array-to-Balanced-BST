"use strict";
class NodeQueue {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class SortedArrayToBST {
    constructor(arr) {
        this.arr = arr;
        this.root = this.buildTree();
    }
    buildTree() {
        let arrayLength = this.arr.length;
        if (arrayLength === 0)
            return null;
        let mid = Math.floor((arrayLength - 1) / 2);
        let root = new NodeQueue(arr[mid]);
        let queue = [{ node: root, range: [0, arrayLength - 1] }];
        let count = 0;
        while (count < queue.length) {
            let front = queue[count];
            let curr = front.node;
            let [s, e] = front.range;
            let index = s + Math.floor((e - s) / 2);
            if (s < index) {
                let midLeft = s + Math.floor((index - 1 - s) / 2);
                curr.left = new NodeQueue(arr[midLeft]);
                queue.push({ node: curr.left, range: [s, index - 1] });
            }
            if (e > index) {
                let midRight = index + 1 + Math.floor((e - (index + 1)) / 2);
                curr.right = new NodeQueue(arr[midRight]);
                queue.push({ node: curr.right, range: [index + 1, e] });
            }
            count++;
        }
        return root;
    }
    getRoot() {
        return this.root;
    }
}
let arr = [1, 2, 3, 4];
const tree = new SortedArrayToBST(arr);
console.log(tree.getRoot());
