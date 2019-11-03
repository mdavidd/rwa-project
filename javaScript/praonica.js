
$("#nastavi").on("click", function() {
  if ($("#ime").val() == "" || $('input[name=vrstePlacanja]:checked').val() == "") {
    alert("neispravan unos!");
  } else {
    var ime = $("#ime").val();
    localStorage.setItem("imeKey", ime);
    var prezime = $("#prezime").val();
    localStorage.setItem("prezimeKey", prezime);
    var vPranja = $(".selGumb").val();
    localStorage.setItem("vPranjaKey", vPranja);
    var vPlacanja = $('input[name=vrstePlacanja]:checked').val()
    localStorage.setItem("vPlacanjaKey", vPlacanja);
    window.location.href='../html/front.html';
  }
})

$(".card").on("click", ".btn-outline-success", function(){
  $(this).parent().parent().find("span:eq(0)").text(localStorage.getItem("imeKey"));
  $(this).parent().parent().find("span:eq(1)").text(localStorage.getItem("prezimeKey"));
})
