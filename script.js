const btn = document.getElementById('btn');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btn.addEventListener('click', toggleMenu);


function mensagem(){
  var n1 = document.getElementById("txtNome").value;
  var n2 = document.getElementById("txtEmail").value;
  var n3 = document.getElementById("textarea-fc").value;
  
    if(n1==""){
        window.alert("Não enviado. Digite o seu nome!");
        return false;
    }
    else{
        window.alert("nome OK");
    }

    if(n2==""){
      window.alert("Não enviado. Digite o seu email!");
      return false;
  }
  else{
      window.alert("email OK");
  }

  if(n3==""){
    window.alert("Não enviado. Digite uma mensagem");
    return false;
  }
  else{
    window.alert("Enviado com sucesso!");
    return true;
}
}