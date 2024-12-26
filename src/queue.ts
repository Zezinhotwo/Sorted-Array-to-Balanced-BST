interface QueueItem {
    node: NodeQueue;
    range: number[];
}

class NodeQueue {
    private data: number | null;
    public left: NodeQueue | null;
    public right: NodeQueue | null;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class SortedArrayToBST {
    private arr: number[];
    private root: NodeQueue | null;

    constructor(arr: number[]) {
        this.arr = arr;
        this.root = this.buildTree();
    }

    private buildTree(): NodeQueue | null {
        let arrayLength: number = this.arr.length;

        if (arrayLength === 0)
            return null

        let mid: number = Math.floor((arrayLength - 1) / 2);
        let root: NodeQueue | null = new NodeQueue(arr[mid]);
        let queue: QueueItem[] = [{ node: root, range: [0, arrayLength - 1] }]
        let count: number = 0;
        while (count < queue.length) {
            let front = queue[count];
            let curr: NodeQueue = front.node;
            let [s, e]: number[] = front.range

            let index: number = s + Math.floor((e - s) / 2);
            // esquerda
            if (s < index) {
                let midLeft: number = s + Math.floor((index - 1 - s) / 2);
                curr.left = new NodeQueue(arr[midLeft]);
                queue.push({ node: curr.left, range: [s, index - 1] })
            }
            // direita
            if (e > index) {
                let midRight: number = index + 1 + Math.floor((e - (index + 1)) / 2);
                curr.right = new NodeQueue(arr[midRight]);
                queue.push({ node: curr.right, range: [index + 1, e] })
            }
            count++;

        }
        return root;
    }
    public getRoot(): NodeQueue| null {
        return this.root;
    }

}



let arr: number[] = [1, 2, 3, 4];
const tree = new SortedArrayToBST(arr);
console.log(tree.getRoot());