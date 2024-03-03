
function login() {

  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;

  var savedUser = localStorage.getItem(username);

  if (savedUser !== null) {

    var user = JSON.parse(savedUser);

    if (user.password === password) {
      alert("Login bem sucedido!");
      window.location.href = "../index.html"; // Redirecionar para a página principal após o login bem-sucedido
    } else {

      var loginBox = document.querySelector('.login-box');
      loginBox.innerHTML = "<p>Senha incorreta!</p>";
    }    
  } else {
    alert("Usuário não encontrado!"); 
  }
}


function register() {

  var username = document.getElementById("registerUsername").value;
  var password = document.getElementById("registerPassword").value;
  var existingUser = localStorage.getItem(username);

  if (existingUser !== null) {
  } else {
    var newUser = {
      username: username,
      password: password
    };
    // Salvar o novo usuário no localStorage
    localStorage.setItem(username, JSON.stringify(newUser));
    alert("Registro bem sucedido!");
    window.location.href = "../index.html"; // Redirecionar para a página principal após o registro bem-sucedido    
  }
}
