

function save(){
  alert("your name & mail is saved");
  
  var n= document.getElementById('Input').value;
  localStorage.setItem('si',n);
  
var m=document.getElementById('mail').value; 
localStorage.setItem('bi',m);
}

function get() {
  
  
  var x = localStorage.getItem("si"); 
  var z = localStorage.getItem("bi");
  document.getElementById('nt').innerHTML='<strong>Welcome: <strong>'+x ; 
  document.getElementById('mt').innerHTML=z;
}