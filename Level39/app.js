while(true){
    let x=prompt("Kiska square dekhna hai?")
    if(x===null){
      break;
    }
    let sq=x*x;
    document.write(`<p>${sq}</p>`);
  }