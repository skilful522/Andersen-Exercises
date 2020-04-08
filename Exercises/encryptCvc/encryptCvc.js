import mod from './mod';

export default function encryptCvc(cvc, random3Numbers) {
    const cvcNumbers = cvc.split('');

    return cvcNumbers
        .map((number, index) => {
            return mod.call(number - random3Numbers[index], 10);
        })
        .join('');
}
