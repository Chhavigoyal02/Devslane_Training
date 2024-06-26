let a=prompt("Aapka kitna invest karoge?");
let d=prompt("Dost kitna invest karega?");

let b=calc(a);
let c=calc(d);

function calc(inv){
  if(inv<100000){
    return 0;
  }
  let earning=inv*2+10000;
  return earning;
}

document.write(`Aapko milenge: Rs. ${b}.Dost ko milenge: Rs. ${c}.`)