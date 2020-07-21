function validations() {

    var heightB = document.getElementById("heightB").value;
    var widthB = document.getElementById("widthB").value;
    var depthB = document.getElementById("depthB").value;

    var heightC = document.getElementById("heightB").value;
    var widthC = document.getElementById("widthC").value;
    var depthC = document.getElementById("depthC").value;


    if (heightB === "" || widthB === "" || depthB === "" ||
        heightC === "" || widthC === "" || depthC === "") {
        alert("Todos los campos son obligatorios");
        return false;
    } else if (isNaN(heightB) || isNaN(widthB) || isNaN(depthB) ||
        isNaN(heightC) || isNaN(widthC) || isNaN(depthC)) {
        alert("Los campos deben ser númericos")
        return false;
    }
}