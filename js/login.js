function login() {
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;
  var savedUser = localStorage.getItem(username);
  if (savedUser !== null) {
    var user = JSON.parse(savedUser);
    if (user.password === password) {
      alert("Login bem sucedido!");
    } else {
      alert("Senha incorreta!");
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
    alert("Usuário já existe!");
  } else {
    var newUser = {
      username: username,
      password: password
    };
    localStorage.setItem(username, JSON.stringify(newUser));
    alert("Registro bem sucedido!");
  }
}
