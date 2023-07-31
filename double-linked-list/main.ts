class Node<T> {
    data: T;
    next?: Node<T> 
    prev?: Node<T>

    constructor(data: T) {
        this.data = data;
        this.next = this.prev = undefined;
    }
}

export default class DoublyLinkedList<T> {
    public length: number;
    public head: Node<T> | null
    public tail: Node<T> | null

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const newNode = new Node(item);
        this.length++;
        if (this.head == null) {
            this.head = newNode;
        } else {
            let current = this.head;
            //head é novo node
            this.head = newNode;
            
            this.head.next = current;
            current.prev = this.head;
            while (current.next) {
                current = current.next;
            }
            this.tail = current;
        }
}
    insertAt(item: T, idx: number): void {
        if (idx > length || this.head == null || this.tail == null) {
            return
        }
        const newNode = new Node(item);
        if (idx > (this.length / 2) ) {
            //se indice for maior que metade da lista
            let current = this.tail
            for (let i = this.length; i > idx; i--) {
                //itera a partir do tail
                current = current.prev; 
            }
            let tmp = current.prev;
            tmp.next = newNode;
            current.prev = newNode;
            newNode.prev = tmp;
            newNode.next = current;
        } else {
            // se idx < length
            let current = this.head;
            for (let i = 0; i < idx; i++) {
                current = current.next;
            }
            let tmp = current.prev;
            tmp.next = newNode;
            current.prev = newNode;
            newNode.prev = tmp;
            newNode.next = current;
        }
        this.length++;
}
    append(item: T): void {
        this.length++;
        const newNode = new Node(item)
        if (this.head == null) {
            //se lista vazia
            this.head = newNode;
            this.tail = this.head;
        } else {
            let current = this.tail;
            current.next = newNode;
            this.tail = newNode;
            this.tail.prev = current;
        }

}
    remove(item: T): T | undefined {
        if (this.head == null) {
            return undefined;
        } else {
            let current = this.head;
            while (current.next) {
                if (current.data == item) {
                    let n = current.next;
                    let p = current.prev;
                    n.prev = p
                    p.next = n
                    if (current.prev == null) {
                        //se current for o head
                        this.head = n;
                    }
                    if (current.next == null) {
                        //se current for o tail
                        this.tail = p;
                    }
                    current.next = null;
                    current.prev = null;
                    this.length--;
                    return current.data;
                }
                current = current.next;
            }
        }
        return undefined;
}
    get(idx: number): T | undefined {
        if(!this.head || !this.tail) {
            return undefined;
        }  
        if (idx == 0 && this.head != null) {
            return this.head.data;
        }
        if (idx == this.length - 1 && this.tail != null) {
            return this.tail.data;
        }
        if (idx < this.length - 1 ) {
            let current = this.tail;
            for (let i = this.length-1; i > idx; i--) {
                current = current.prev;
            }
            return current.data;
        } else {
            let current = this.head;
            for (let i = 0; i < idx; i++) {
                current = current.next;
            }
            return current.data;
        }
}
    removeAt(idx: number): T | undefined {
        if (idx > this.length ||!this.head || !this.tail) {
            return undefined;
        } else {
            if (idx == 0) {
                this.length--;
                let current = this.head;
                this.head = current.next;
                current.next = null;
                return current.data;
            } else if (idx == this.length - 1) {
                this.length--;
                let current = this.tail;
                this.tail = current.prev;
                current.prev = null;
                return current.data;
            } else if (idx > this.length/2){
                let current = this.tail;
                for (let i = this.length-1; i > idx; i--) {
                    if (i == idx) {
                        let n = current.next;
                        let p = current.prev;
                        p.next = n;
                        n.prev = p;
                        current.next = null;
                        current.prev = null;
                        return current.data;
                    }
                }
            } else {
                let current = this.head;
                for (let i = 0; i < idx; i++) {
                    if (i == idx) {
                        let n = current.next;
                        let p = current.prev;
                        p.next = n;
                        n.prev = p;
                        current.next = null;
                        current.prev = null;
                        return current.data;
                    }
                }
            }
        }
        return undefined;
}

print(): void {
    for (let i = 0; i < list.length; i++) {
        console.log(list.get(i));
    }
}
}

const list = new DoublyLinkedList<number>

list.append(5);
list.append(7);
list.append(9);

if (list.get(2) == 9) {
    console.log("PASS")
} else {
    console.log("FAIL")
}

if (list.removeAt(1) === 7) {
    console.log("PASS")
} else {
    console.log("FAIL")
    list.print()
}

// if (list.length == 2) {
//     console.log("PASS")
// } else {
//     console.log("FAIL")
//     console.log(list.length)
// }

// list.append(11);
// if (list.removeAt(1) == 9) {
//     console.log("PASS")
// } else {
//     console.log("FAIL")
// }

// if (list.removeAt(9) === undefined) {
//     console.log("PASS")
// } else {
//     console.log("FAIL")
// }

// if (list.removeAt(0) === 5) {
//     console.log("PASS")
// } else {
//     console.log("FAIL")
// }

// if (list.removeAt(0) === 11) {
//     console.log("PASS")
// } else {
//     console.log("FAIL")
// }

// if (list.length == 0) {
//     console.log("PASS")
// } else {
//     console.log("FAIL")
// }
// list.prepend(5)
// list.prepend(7)
// list.prepend(9)

// if (list.get(0) == 9 && list.get(2) == 5) {
//     console.log("PASS")
// } else {
//     console.log("FAIL")
// }

// // list.print()

// if (list.remove(9) == 9) {
//     console.log("PASS")
// } else {
//     console.log("FAIL")
// }

// if (list.length == 2) {
//     console.log("PASS")
// } else {
//     console.log("FAIL")
//     console.log(list.length)
// }

// if (list.get(0) == 7) {
//     console.log("PASS")
// } else {
//     console.log("FAIL")
// }

// console.log("PASSED ALL ?")