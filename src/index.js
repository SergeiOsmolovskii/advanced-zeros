module.exports = function getZerosCount(number, base) {
  let i;
  let a;
  let b;
  let c;
  let d;
  let counter;  
  d=0;
  
  counter = number;
    b = base;
    for (i = 2; i <= base; i++) {
      if (b%i == 0) {
        a = 0;
        while (b%i == 0) {
        a++;
        b = Math.floor(b/i);
        }
        c = 0;
        d = number;   
        while (d/i>0) {
        c = c + Math.floor(d/i);
        d = Math.floor(d/i);
        }
         counter = Math.floor(Math.min(counter,c/a));
      }
    }
    return counter;
  }