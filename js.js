
function login() {
    const Nome = document.getElementById("Nome").value.trim();
    const Senha = document.getElementById("Senha").value;
    const message = document.getElementById("message");
  
    if (!Nome || !Senha) {
      message.style.color = "red";
      message.textContent = "Preencha todos os campos.";
      return;
    }
  
    const salvardados = JSON.parse(localStorage.getItem("usardados"));
  
    if (!salvardados) {
      // Nenhum usuário salvo ainda: salvar os dados como novo registro
      localStorage.setItem("usardados", JSON.stringify({ Nome, Senha }));
      message.style.color = "green";
      message.textContent = "Usuário registrado com sucesso!";
    } else {
      // Verificar se nome e senha batem
      if (Nome === salvardados.Nome && Senha === salvardados.Senha) {
        message.style.color = "green";
        message.textContent = "Login bem-sucedido!";
      } else {
        message.style.color = "red";
        message.textContent = "Usuário ou senha incorretos.";
      }
    }
  }