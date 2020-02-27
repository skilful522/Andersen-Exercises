export default function EventEmmiter() {
    const events = Object.create(null);

    return {
        on(event, fn) {
            if (typeof fn === 'function') {
                if (events[event]) {
                    events[event].push(fn);
                } else {
                    events[event] = [fn];
                }
            }
        },
        emit(event) {
            if (events[event]) {
                return events[event].map((fn) => fn());
            }
        },
    };
}
