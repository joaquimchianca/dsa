class Node<T> {
    data: T;
    next?: Node<T>;
    prev?: Node<T>;

    constructor(data: T) {
        this.data = data;
        this.next = this.prev = undefined;
    }
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const newNode = new Node(item);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            return;
        } else {
            let current = this.head;
            //head é novo node
            this.head = newNode;
            this.head.next = current;
            current.prev = this.head;
        }
}
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            return
        }
        this.length++;
        if (idx == 0) {
            //insert in head (prepend)
            this.prepend(item);
        } else if (idx == this.length-1) {
            // insert in tail (append)
            this.append(item);
        } else if (idx > 0 && idx < this.length-1) {
            // insert in middle
            const newNode = new Node(item);
            let current = this.get(idx);    
             
        }

}
    append(item: T): void {
        this.length++;
        const newNode = new Node(item)
        if (!this.head) {
            //se lista vazia
            this.head = newNode;
            this.tail = this.head;
            return;
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
        //get head
        if (idx == 0) {
            return this.head.data;
        }
        //get tail
        if (idx == this.length - 1) {
            return this.tail.data;
        }
        //get element in the middle
        if (idx > 0 && idx < this.length-1) {
            //if element [mid, length)
            if (idx >= (this.length/2)) {
                let current = this.tail;
                let i = this.length-1;
                while (current.prev) {
                    current = current.prev;
                    i--;
                    // when found element on idx position
                    if (idx == i) {
                        return current.data;
                    }
                }
            } else {
                let current = this.head;
                let i = 0;
                while (current.next) {
                    current = current.next;
                    i++;
                    if (idx == i) {
                        return current.data;
                    }
                }
            }
        }
        return undefined;
}
    removeAt(idx: number): T | undefined {
        // if list is empty or
        // if access index out of bounds
        if (!this.head || idx >= this.length) {
            return undefined;
        }

        // remove head
        if (idx == 0) {
            let current = this.head;
            this.head = current.next;
            this.head.prev = undefined;
            return current.data;
        }

        // remove tail
        if (idx == this.length - 1) {
            let current = this.tail;
            this.tail = current.prev;
            this.tail.next = undefined;
            return current.data;
        }

        // remove middle element
        if (idx > this.length / 2) {
            // if idx between (mid, this.length-2]
            let current = this.tail.prev;
            let i = this.length - 2;
            while (current.prev) {
                if (idx == i) {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    current.next = current.prev = undefined;
                    return current.data;
                }
                if (i <= this.length/2) {
                    break;
                }
                current = current.prev;
                i--;
            }
            return undefined;
        } else {
            // if idx between[1, mid]
            let current = this.head.next;
            let i = 1;
            while (current.next) {
                if (idx == i) {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    current.next = current.prev = undefined;
                    return current.data;
                }

                if (i > this.length/2) {
                    break;
                }
                current = current.next;
                i++;
            }
            return undefined;
        }
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
list.append(1);
list.append(4);

if (list.get(2) == 9) {
    console.log("PASS")
} else {
    console.log("FAIL")
}


if (list.removeAt(10) === undefined) {
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