module.exports = function getZerosCount(number, base) {
  let zeros = Infinity;
  let points = [];
  for (j=2;j<base;){
      if(base%j==0){
        points.push(j);
        base/=j;
        }
      else {
        j++;
        }
    }
  
  points.push(base);
  points.reverse();
  while(points[0]){
    let currentBase = points[0];
    let count = 0;
    let l = points.length;
    let currentZeros = 0;
    for(i=0;i<l;i++){
      if(points[0]==currentBase){
        count++;
        points.splice(0,1);
        l--;
        i--;
      }  
    }
    currentNumber = number;
    while(Math.floor(currentNumber)>0){
      currentNumber/=currentBase;
      currentZeros+= Math.floor(currentNumber);
    }
    currentZeros/=count;
    if(currentZeros<zeros){
      zeros=Math.floor(currentZeros);
    }
    
  }
  return zeros;
}