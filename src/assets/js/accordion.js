var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}

$("#btn-addClient").click(() => {
  $("#modalRegister").modal('show');
})
$('#modalRegister').modal({backdrop: 'static', keyboard: false})

$("#btnCloseModal").click(() => {
  
  $("#modalRegister").modal('toggle');
})
