function validateForm() {
  var x =
    document.forms["formulario"][("form-name", "form-email")].value;
  if (x == "") {
    alert("obrigatorio preencher todos os campos");
    console.log(x);
    return false;
  }
}