// Função para realizar o login do usuário
function login() {
  // Obter os valores dos campos de entrada de usuário e senha
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;
  // Buscar o usuário salvo no localStorage com base no nome de usuário inserido
  var savedUser = localStorage.getItem(username);
  // Verificar se o usuário existe no localStorage
  if (savedUser !== null) {
    // Se o usuário existir, analisar os dados salvos em formato JSON
    var user = JSON.parse(savedUser);
    // Verificar se a senha inserida corresponde à senha do usuário
    if (user.password === password) {
      alert("Login bem sucedido!"); // Mostrar mensagem de login bem-sucedido
    } else {
      alert("Senha incorreta!"); // Mostrar mensagem de senha incorreta
    }
  } else {
    alert("Usuário não encontrado!"); // Mostrar mensagem de usuário não encontrado
  }
}

// Função para registrar um novo usuário
function register() {
  // Obter os valores dos campos de entrada de usuário e senha
  var username = document.getElementById("registerUsername").value;
  var password = document.getElementById("registerPassword").value;
  // Verificar se o usuário já existe no localStorage
  var existingUser = localStorage.getItem(username);
  if (existingUser !== null) {
    alert("Usuário já existe!"); // Mostrar mensagem de usuário já existente
  } else {
    // Se o usuário não existe, criar um novo objeto de usuário
    var newUser = {
      username: username,
      password: password
    };
    // Salvar o novo usuário no localStorage
    localStorage.setItem(username, JSON.stringify(newUser));
    alert("Registro bem sucedido!"); // Mostrar mensagem de registro bem-sucedido
  }
}
