const peso1 = 1;
const peso2 = 2;

console.log(peso1), peso2;
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const av1 = 9.12;
const av2 = 7.55;

const total = av1 * peso1 + av2 * peso2;
const media= total / (peso1 + peso2);
console.log(media.toFixed(1));
console.log(media.toString(2));
console.log(typeof media)