function maskify(cc) {
    cc = cc.split("");
    for(var i = 0; i < cc.length - 4; i++){
      cc[i] = "#";
  }
  
  cc = cc.join("");
  return cc
  }
  
// alternative 

const maskify = (cc) => cc.replace(/(.)(?!.{0,3}$)/g, "#")