// desafio trocar o numero da var
let a = 12;
let b = 33;

/*
    Metodo 1
a = 33;
b = 12;

console.log(a);
console.log(b);
#############################################
    Metodo 2
let temp = a; 
a = b;
b = temp;

console.log(a);
console.log(b);
*/

//  Metodo 3 - desconhecido.

[a, b] = [b, a];

console.log(a);
console.log(b);
