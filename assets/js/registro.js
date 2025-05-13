const usuario = document.querySelector("#log-usuario")
const senha = document.querySelector("#log-senha")
const confirmarSenha = document.querySelector("#log-confirmar-senha")
const btnCadastro = document.querySelector("#SignInBtn")

const cadastrarUsuario = ()=>{

    let user = usuario.value
    let password = senha.value
    let confirmPassword = confirmarSenha.value
    
    if(password == confirmPassword && user.trim() != ""){
        localStorage.setItem("user", user)
        localStorage.setItem("password", password)
        window.location.href = ".../index.html"
        alert("Cadastro finalizado com sucesso!")
        return;
    }
    alert("Falha no cadastro!")
    alert("Tente novamente!")


    }




btnCadastro.addEventListener("click", cadastrarUsuario) 