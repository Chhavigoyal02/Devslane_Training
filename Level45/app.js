function sum(){
    let n1=document.getElementById('num1');
    let n2=document.getElementById('num2');
    let a=+n1.value;
    let b=+n2.value;
    n1.value='';
    n2.value='';
    let s=a+b;
    document.getElementById('result').innerHTML=s;
  }
  function minus(){
    let n1=document.getElementById('num1');
    let n2=document.getElementById('num2');
    let a=+n1.value;
    let b=+n2.value;
    n1.value='';
    n2.value='';
    let s=a-b;
    document.getElementById('result').innerHTML=s;
  }
  function multiply(){
    let n1=document.getElementById('num1');
    let n2=document.getElementById('num2');
    let a=+n1.value;
    let b=+n2.value;
    n1.value='';
    n2.value='';
    let s=a*b;
    document.getElementById('result').innerHTML=s;
  }
  function div(){
    let n1=document.getElementById('num1');
    let n2=document.getElementById('num2');
    let a=+n1.value;
    let b=+n2.value;
    n1.value='';
    n2.value='';
    let s=a/b;
    document.getElementById('result').innerHTML=s;
  }