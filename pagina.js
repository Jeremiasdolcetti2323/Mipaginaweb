var informacion=document.getElementById("infopersonal");
var botoninformacion=document.getElementById("informacion");
var contador=0;
botoninformacion.addEventListener("click",()=>{
    if (contador==0){
        informacion.style.display="block";
        informacion.style.maxHeight=informacion.scrollHeight+ "px";
        contador=contador+1;
        return;
    }
    if(contador==1){
        informacion.style.maxHeight=0;
        informacion.style.display="none"; 
        contador=0;
        return;
    }
});

