export default function fibonacci(number) {
    let a = 1;

    let b = 1;

    for (let i = 3; i <= number; i++) {
        let c = a + b;

        a = b;
        b = c;
    }
    return b;
}
