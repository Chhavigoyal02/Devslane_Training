let n1=prompt();
let n2=prompt();
let n3=prompt();

printTable(n1);
printTable(n2);
printTable(n3);


function printTable(n){
  for(let i=1;i<=10;i++){
    let table=`<p>${n} x ${i} = ${n*i}</p>`;
    document.write(table)
  }
}