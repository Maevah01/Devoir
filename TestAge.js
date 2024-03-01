let age = 20;
function estAdo(age){
  if (age<=18){
    return true;
  }else{
    return false
  }
}
if (estAdo(age)){
  console.log("vous etes ado");
}else{
  console.log("vous etes majeur");
