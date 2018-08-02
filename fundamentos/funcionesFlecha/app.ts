let miFuncion = function(a){
    return a;
}

let miFuncionF = a => a;

let miFuncion2 = function(a:number,b:number){
    return a + b;
}

let miFuncionF2 = (a:number, b:number) => a + b;

console.log(miFuncion("normal"));
console.log(miFuncionF("flecha"));
console.log(miFuncion2(5,8));
console.log(miFuncionF2(5,4));