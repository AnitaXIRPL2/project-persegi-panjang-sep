var panjangInput = document.querySelector(".panjang-input-field");
var lebarInput = document.querySelector(".lebar-input-field");
var calculateButton = document.querySelector(".calculate");
var Luas, panjang, lebar;

function myFunction(){
    panjang = panjangInput.value;
    lebar = lebarInput.value;
    Luas = panjang*(lebar);
    alert("Luas persegi panjang adalah :" + Luas);
}