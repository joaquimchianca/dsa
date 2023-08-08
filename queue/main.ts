class Node<T> {
    value: T;
    next?: Node<T>;

    constructor(v: T) {
        this.value = v;
        this.next = undefined;
    }
}

export default class Queue<T> {
    public length: number;
    private head: Node<T>;
    private tail: Node<T>;
    

    constructor() {
        this.head = this.tail = undefined;
        this.length= 0;
    }

    enqueue(item: T): void {
        const newNode = new Node(item);
        this.length++;
        if (!this.head) {
            // if queue empty
            this.head = this.tail = newNode;
        } else {
            // if not
            let current = this.tail;
            this.tail = newNode;
            current.next = this.tail;
        }

}
    deque(): T | undefined {
        if(!this.head) {
            return undefined;
        }
        this.length--;
        let current = this.head;
        this.head = current.next;
        current.next = undefined;
        return current.value;
}
    peek(): T | undefined {
        if (this.head) {
            return this.head.value;
        }
        return undefined;
}
}