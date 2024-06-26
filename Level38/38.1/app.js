let n1=prompt();
let m1=prompt();
let n2=prompt();
let m2=prompt();

printTable(n1,m1);
printTable(n2,m2);

function printTable(n,m){
  for(let i=1;i<=m;i++){
    let table=`<p>${n} x ${i} = ${n*i}</p>`;
    document.write(table)
  }
}