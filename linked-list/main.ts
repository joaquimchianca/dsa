class Node<T> {
    data: T
    next: Node<T> | null

    constructor(d: T) {
        this.data = d;
        this.next = null;
    }
}

export default class SinglyLinkedList<T> {
    public length: number;
    public head: Node<T> | null;

    constructor() {
        this.head = null;
        this.length = 0;
    }

    prepend(item: T): void {
        const newNode = new Node(item);
        if(!this.head) {
            // se lista vazia
            this.head = newNode;
        } else {
            // se lista com no cabeça
            const current = this.head;
            this.head = newNode;
            newNode.next = current;
        }
        this.length++;
}
    insertAt(item: T, idx: number): void {
        const newNode = new Node(item);
        if(!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            let i = 0;
            while (current.next) {
                ++i;
                if (i == idx-1) {
                    let tmp = current.next;
                    current.next = newNode;
                    newNode.next = tmp;
                    return;
                }
            }
        }
        this.length++;
}
    append(item: T): void {
        const newNode = new Node(item);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next) {
               current = current.next; 
            }
            current.next = newNode;
        }
        this.length++;
}
    remove(item: T): T | undefined {
        if(!this.head) {
            return undefined
        } else {
            let current = this.head
            if (current.data == item) {
                this.head = current.next;
                current.next = null;
                this.length--;
                return current.data;
            } else {
                let tmp = current;
                while (current.next) {
                    current = current.next;
                    if (current.data == item) {
                        tmp.next = current.next;
                        current.next = null;
                        this.length--;
                        return current.data
                    } else {
                        tmp = current.next;
                    }
                }
            }
        }
        return undefined;
}
    get(idx: number): T | undefined {
        if (!this.head || idx > this.length) {
            return undefined;
        } else {
            if (idx == 0) {
                return this.head.data;
            } 
            let current = this.head;
            let i = 0;
            while (current.next) {
                //enquanto prox elemento nao for nulo
                if (i == idx-1) {
                    return current.next.data;
                }
                i++;
                current = current.next;
            }
            return undefined;
        }
}
    removeAt(idx: number): T | undefined {
        if (!this.head || idx >= this.length) {
            return undefined;
        } else {
            let current = this.head;
            let i = 0;
            
            if (idx == 0) {
                this.head = current.next;
                current.next = null;
                this.length--;
                return current.data;
            } else {
                while (current.next) {
                    if (i == idx - 1) {
                        let rmv = current.next;
                        current.next = rmv.next;
                        rmv.next = null;
                        this.length--;
                        return rmv.data;
                    }
                    i++;
                    current = current.next;
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
//tests
const list = new SinglyLinkedList<number>

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
}

if (list.length == 2) {
    console.log("PASS")
} else {
    console.log("FAIL")
    console.log(list.length)
}

list.append(11);
if (list.removeAt(1) == 9) {
    console.log("PASS")
} else {
    console.log("FAIL")
}

if (list.removeAt(9) === undefined) {
    console.log("PASS")
} else {
    console.log("FAIL")
}

if (list.removeAt(0) === 5) {
    console.log("PASS")
} else {
    console.log("FAIL")
}

if (list.removeAt(0) === 11) {
    console.log("PASS")
} else {
    console.log("FAIL")
}

if (list.length == 0) {
    console.log("PASS")
} else {
    console.log("FAIL")
}
list.prepend(5)
list.prepend(7)
list.prepend(9)

if (list.get(0) == 9 && list.get(2) == 5) {
    console.log("PASS")
} else {
    console.log("FAIL")
}

// list.print()

if (list.remove(9) == 9) {
    console.log("PASS")
} else {
    console.log("FAIL")
}

if (list.length == 2) {
    console.log("PASS")
} else {
    console.log("FAIL")
    console.log(list.length)
}

if (list.get(0) == 7) {
    console.log("PASS")
} else {
    console.log("FAIL")
}

console.log("PASSED ALL ?")



// list.print()



// for (let i = 0; i < list.length; i++) {
//     console.log(list.get(i));
// }

