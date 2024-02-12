// Este script fue diseñado para la consexión entre archivos html
botones=["cortos","románticos","naturaleza","épicos","infantiles"]

document.getElementById("botones").addEventListener("click",function(id){
    valor=botones.indexOf(id.target.id)+1
    window.location.href="tipo_poema"+valor+".html"
})
