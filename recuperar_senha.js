let email = document.getElementById('email');
let form = document.querySelector('form')
let textForm = document.getElementById('textForm');
let btn = document.getElementById('enviar');

form.addEventListener('submit', (e) => {
    if(email.value == ''){
        textForm.textContent = "Campo Vazio."
    }else if(
        validarEmail(email.value) === true
    ){
        alert("Solicitação enviada");

        textForm.textContent ="";
        textEmail.textContent = "";
        
    }else{
        console.log('Requisição não atendida');
    }
    
    e.preventDefault()

});


email.addEventListener("keyup", () => {
    if (validarEmail(email.value) !== true){
        textEmail.textContent = "Ex: name@host.com";
    }else{
        textEmail.textContent = "";
    }
})

function validarEmail(email){
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    return emailPattern.test(email);
}