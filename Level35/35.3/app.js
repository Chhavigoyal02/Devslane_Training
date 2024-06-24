let n=prompt();
let m=prompt();
for(let i=1;i<=m;i++){
  let table=`<p>${n} x ${i} = ${n*i}</p>`;
  document.write(table);
}