let n=prompt();
let m=prompt();
for(let i=m;i>=1;i--){
  let table=`<p>${n} x ${i} = ${n*i}</p>`;
  document.write(table);
}