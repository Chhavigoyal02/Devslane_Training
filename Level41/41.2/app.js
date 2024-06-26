let report_card={};
while(true){
  let x=prompt("Student ka name?");
  if(x===null){
    break;
  }
  let y=prompt(`${x} ke marks kya h?`);
  report_card[x]=y;
}
while(true){
  let z=prompt("Konse student ke marks display karne hai?")
  if(z===null){
    break;
  }
  document.write(`<p>${z} ke ${report_card[z]} marks hai.</p>`);
}
