export default function promiseAll(promises) {
    const results = [];

    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise
                .then((value) => {
                    results[index] = value;
                    if (results.length === promises.length) {
                        resolve(results);
                    }
                })
                .catch((error) => reject(error));
        });
    });
}
