let numbers=[]
while(true){
  let x=prompt("enter a number");
  if(x===null){
    break;
  }
  numbers.push(+x);
}
numbers.sort((a,b)=>a-b);
let total=numbers.length;
for(let i=0;i<total;i++){
  let y=numbers[i];
  let sq=y*y;
  document.write(`<p>${sq}</p>`);
}