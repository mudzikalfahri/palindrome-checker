function palindrome(str) {
    let i;
    let indexAwal;
    let indexAkhir;
    let strr=str.replace(/[`~ !@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    strr = strr.toLowerCase().split("");
  
    for ( i=0; i<strr.length ;i++ ){
      indexAwal=i;
      indexAkhir=strr.length-i-1;
      if (strr[indexAwal] !== strr[indexAkhir]){
        return false;
      }
    }
  
    return true;
  }
  
  console.log(palindrome("a#@aa"));