function convertTime(numbers)
 { 
  const hours = Math.floor(numbers / 60);  
  const minutes = numbers % 60;
  return `${hours} hour :${minutes} minutes`;         
}

console.log(`The given number is equivalent to ${convertTime(82)}`);
console.log(`The given number is equivalent ${convertTime(391)}`);
console.log(`The given number is equivalent ${convertTime(1446)}`);