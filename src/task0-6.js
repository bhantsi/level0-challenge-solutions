function findMaxValue(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}

console.log(findMaxValue(1,0,19));
console.log(findMaxValue(0,-10,-20));
console.log(findMaxValue(1000,510,440));
