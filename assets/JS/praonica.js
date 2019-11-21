var test = 10000 //minuta za test za toggle klasa
var bijelo = 7200000 //120 minuta za bijelo pranje
var sareno = 3600000 //60 min za sareno pranje
var ostalo = 5400000 //90 min za ostalo
var adminPass = 4200
var isInUse = true;

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
    window.location.href = '../rwa-project/front.html';
  }
})

$(".card").on("click", ".btn-outline-success", function() {
  var toggleCard = $(this).parent().parent();
  var toggleButton = $(this);
  toggleCard.toggleClass("inUse");
  toggleButton.toggleClass("disabled");

  $(this).parent().parent().find("span:eq(0)").text(localStorage.getItem("imeKey"));
  $(this).parent().parent().find("span:eq(1)").text(localStorage.getItem("prezimeKey"));
  var brojac = $(this).parent().parent().find("span:eq(2)");
  var odabrana;
  if (localStorage.getItem("vPranjaKey") === "Bijelo"){
    odabrana = bijelo;
  }else if (localStorage.getItem("vPranjaKey") === "Sareno"){
    odabrana = sareno;
  }else if (localStorage.getItem("vPranjaKey") === "Test"){ //dodao za test
    odabrana = test;
  }else {
    odabrana = ostalo;
  }

  var x = setInterval(function() {
    odabrana -= 1000;
  var hours = Math.floor((odabrana % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((odabrana % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((odabrana % (1000 * 60)) / 1000);

  brojac.html(hours + "h " + minutes + "m "  + seconds + "s ");

  if (odabrana <= 0) {
    toggleCard.toggleClass("inUse");
    toggleButton.toggleClass("disabled");
    brojac.html("");
    clearInterval(x);
  }
}, 1000);

})

$(".btn-outline-danger").on("click", function(){
  var password = prompt("unesi admin lozinku!");
  if(password == adminPass){
    $(this).parent().parent().toggleClass("turnOff");
    $(this).parent().parent().toggleClass("tekst");
    $(this).parent().find(".btn-outline-success").toggleClass("disabled");
    if($(this).text() == "Turn Off"){
      $(this).text("Turn ON");
    }else{
      $(this).text("Turn Off")
    }
  }else{
    alert("netocna admin lozinka!");
  }
});
