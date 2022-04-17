class LinkedList {
    length = 0;

    head;

    tail;

    addToTail(value) {
        const node = { value, next: null };

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            console.log(this.tail);
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
    }

    removeFromHead() {}
}

const linkedList = new LinkedList();

linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(3);

console.log(JSON.stringify(linkedList.head.next.next, '', 2));

// ll = {
// next: { value: { b: 'World' }, next: { value: { a: 'Hello' }, next: null } },
// value: { c: 42 }
// }
