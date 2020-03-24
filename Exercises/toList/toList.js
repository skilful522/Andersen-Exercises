const toList = (list) => list.reduceRight((prev, curr) => ({ next: prev, value: curr }), null);

export default toList;
