class Queue {
    storage = {};

    #last = 0;

    #first = 0;

    enqueue(item) {
        this.storage[this.#last] = item;
        this.#last++;
    }

    dequeue() {
        if (this.size === 0) {
            return undefined;
        }
        const value = this.storage[this.#first];
        delete this.storage[this.#first];
        this.#first++;
        return value;
    }

    get size() {
        return this.#last - this.#first;
    }
}

const q = new Queue();
q.enqueue('10');
q.enqueue('20');
q.enqueue('30');
q.dequeue();

console.log(q, q.size);