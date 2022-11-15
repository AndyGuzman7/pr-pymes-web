var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}

//Boton del Modal de Agregar un Cliente
$("#btn-addClient").click(() => {
  $("#modalRegister").modal('show');
})
$('#modalRegister').modal({backdrop: 'static', keyboard: false})

$("#btnCloseModal").click(() => {
  
  $("#modalRegister").modal('toggle');
})



//Boton del Modal de Agregar un Producto
$("#button-option-list-sale").click(() => {
  $("#modalRegisterProduct").modal('show');
})
$('#modalRegisterProduct').modal({backdrop: 'static', keyboard: false})

$("#btnCloseModalProduct").click(() => {
  
  $("#modalRegisterProduct").modal('toggle');
})

