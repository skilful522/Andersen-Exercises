export default function returnObject(str) {
    const props = str.split('.');

    return props.reduceRight((prevProp, currProp) => {
        return { [currProp]: prevProp };
    }, null);
}
