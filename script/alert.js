function funcao1() {
  alert("Muito Obrigado por se Inscrever!");
}

var salvarEmail = function () {
  var email = document.getElementById("email").value;
  localStorage.setItem("email", email);
  console.log(email);
};
document.onchange = salvarEmail;
