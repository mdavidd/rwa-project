function provjera() {
  var i = document.getElementById("ime").value;
  var p = document.getElementById("prezime").value;
  if (i.length > 0 && p.length > 0) {
    alert("Svi podaci su uneseni");
  } else {
    alert("Nisu uneseni svi podaci!")
  }
}
