let n=prompt();
for(let i=1;i<=10;i++){
  let table=`<p>${n-1} x ${i} = ${(n-1)*i}</p>`;
  document.write(table);
}