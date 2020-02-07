export default function createObject(prototype) {
    function F() {}
    F.prototype = prototype;
    return new F();
}
