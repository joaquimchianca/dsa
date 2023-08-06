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
        if (!this.head) {
            return undefined;
        }

        let current = this.head;
        while (current.next) {
            if (current.data == item) {
                // remove head node
                if (!current.prev ) {
                    if (this.length == 1) {
                        // if list constains one element.
                        this.head = this.tail = undefined;
                        this.length--;
                        return current.data;
                    }
                    this.head = current.next;
                    current.next = undefined;
                    this.length--;
                    return current.data;
                } else if (!current.next) {
                    // remove tail node
                    this.tail = current.prev;
                    current.prev = undefined;
                    this.length--;
                    return current.data;
                } else {
                    // remove middle node
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    current.next = current.prev = undefined;
                    this.length--;
                    return current.data;
                }
            }
            current = current.next;
        }
        // if do not find node
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
        
        if (idx >= this.length/2) {
            let current = this.tail;
            let i = this.length-1;
            while (current.prev) {
                if (idx == i) {
                    if (idx == this.length - 1) {
                        this.tail = current.prev;
                        current.prev = this.tail.next = undefined;
                        this.length--;
                        return current.data
                    }
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    current.next = current.prev = undefined;
                    this.length--;
                    return current.data;
                }
                if (i < this.length/2) {
                    break;
                }
                current = current.prev;
                i--;
            }
        } else {
            let current = this.head;
            let i = 0;
            while (current.next) {
                if (idx == i) {
                    if (idx == 0) {
                        this.head = current.next;
                        current.next = this.head.prev = undefined;
                        this.length--;
                        return current.data;
                    }
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    current.next = current.prev = undefined;
                    this.length--;
                    return current.data;   
                }
                if (i >= this.length/2) {
                    break;
                }
                current = current.next;
                i++;
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
list.append(1);
list.append(4);

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

if (list.length == 4) {
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


if (list.removeAt(list.length-1) === 11) {
    console.log("PASS")
} else {
    console.log("FAIL")
}

if (list.length == 2) {
    console.log("PASS")
} else {
    console.log("FAIL")
}
list.prepend(5)
list.prepend(7)
list.prepend(9)
list.print()
if (list.get(0) == 9 && list.get(2) == 5) {
    console.log("PASS")
} else {
    console.log("FAIL")
}

// // list.print()

if (list.remove(9) == 9) {
    console.log("PASS")
} else {
    console.log("FAIL")
}

if (list.length == 4) {
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