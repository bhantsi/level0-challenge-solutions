function areaOfTriangle(a,b,c){
    let  x = (a + b + c ) /2;
    let  y = Math.sqrt(x * (x - a )* (x - b) * (x - c));

    return y;
}
console.log(areaOfTriangle(11, 12, 4));