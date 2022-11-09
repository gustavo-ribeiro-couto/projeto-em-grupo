// visuzalizar o objeto criado no console
const resposta = {}

const questao_um = document.querySelector('#q1');
const questao_dois = document.querySelector('#q2');
const questao_tres = document.querySelector('#q3');
const questao_quatro = document.querySelector('#q4');
const questao_cinco = document.querySelector('#q5');
const questao_seis = document.querySelector('#q6');
const questao_sete = document.querySelector('#q7');
const questao_oito = document.querySelector('#q8');
const questao_nove = document.querySelector('#q9');
const questao_dez = document.querySelector('#q10');

// alimenta o objeto "resposta" => o parametro event será definido posteriormenet
function armazenarResposta(n_questao, event){
    if (event.target.type === 'radio'){
        console.log(event.target.value);
        //Quando se recebe o evento o JS entende como string, abaixo é preciso trasnformar em numero inteiro. Posteriormente, armazenando no objeto
        resposta['questao' + n_questao] = parseInt(event.target.value)
        console.log(resposta);
    }  
}

//adicionar o evento de click em cada questão e alimentar qual é a questão na função acima. Está instanciando a função acima quando ela for chamada
questao_um.addEventListener('click', function(event){
    armazenarResposta(1,event)
})
questao_dois.addEventListener('click', function(event){
    armazenarResposta(2,event)
})
questao_tres.addEventListener('click', function(event){
    armazenarResposta(3,event)
})
questao_quatro.addEventListener('click', function(event){
    armazenarResposta(4,event)
})
questao_cinco.addEventListener('click', function(event){
    armazenarResposta(5,event)
})
questao_seis.addEventListener('click', function(event){
    armazenarResposta(6,event)
})

questao_sete.addEventListener('click', function(event){
    armazenarResposta(7,event)
})
questao_oito.addEventListener('click', function(event){
    armazenarResposta(8,event)
})
questao_nove.addEventListener('click', function(event){
    armazenarResposta(9,event)
})
questao_dez.addEventListener('click', function(event){
    armazenarResposta(10,event)
})

//calcular os ponstos 
function total_Pontos(){
    const total_p = 0;
    resposta.questao_um+
    resposta.questao_dois+
    resposta.questao_tres+
    resposta.questao_quatro+
    resposta.questao_cinco+
    resposta.questao_seis+
    resposta.questao_sete+
    resposta.questao_oito+
    resposta.questao_nove+
    resposta.questao_dez;

    return total_p;
}

// informar se a quatidade de resposta acertadas 
function verificarTotalDeAcertos (){
    if(total_Pontos() === 0){
        let mensagem_p = "";
    }else if(total_Pontos() <= 5){
        let mensagem_p = "";
    }
    else if (total_Pontos() >5 && total_Pontos() < 7 ){
        let mensagem_p = "";
    }else{
        let mensagem_p = "";
    }
    return mensagem_p;
}


//manipulando os butões submit
const submit1 = document.querySelector('#submit1');
const submit2 = document.querySelector('#submit2');
const submit3 = document.querySelector('#submit3');
const submit4 = document.querySelector('#submit4');
const submit5 = document.querySelector('#submit5');
const submit6 = document.querySelector('#submit6');
const submit7 = document.querySelector('#submit7');
const submit8 = document.querySelector('#submit8');
const submit9 = document.querySelector('#submit9');
const submit10 = document.querySelector('#submit10');

//passar as quetões
function pularQuestao(n_questao){
    //assim que eu clicar no primeiro submit o evento será disparado. A questa_atual se tornará o "2" e o n_questao "1"
    let questao_atual = (n_questao -1).toString();
    let n_questao = n_questao.toString();
   
    // É preciso transformar novamente em string para poder exibir na dela do usuário

    const elemento = document.querySelector('q'+n_questao);
    const elemento2 = document.querySelector('q'+questao_atual);
    
    //Assim que o usuario clica na segunda questão. a primeira deixa de ser exibida e a segunda aparece, isso sucessivamente
    elemento.style.display = 'block';
    elemento2.style.display = 'none'
}

//acionando a função acima
submit1.addEventListener('click', function(){
    pularQuestao(2);
    porcentagem_q_res('20%');
})
submit1.addEventListener('click', function(){
    pularQuestao(3);
    porcentagem_q_res('30%');
})
submit1.addEventListener('click', function(){
    pularQuestao(4);
    porcentagem_q_res('40%');
})
submit1.addEventListener('click', function(){
    pularQuestao(5);
    porcentagem_q_res('50%');
})
submit1.addEventListener('click', function(){
    pularQuestao(6);
    porcentagem_q_res('60%');
})
submit1.addEventListener('click', function(){
    pularQuestao(7);
    porcentagem_q_res('70%');
})
submit1.addEventListener('click', function(){
    pularQuestao(8);
    porcentagem_q_res('80%');
})
submit1.addEventListener('click', function(){
    pularQuestao(9);
    porcentagem_q_res('90%');
})
submit1.addEventListener('click', function(){
    pularQuestao(10);
    porcentagem_q_res('100%');
})

//exibir resultado ao usario
submit10.addEventListener('click', function() {
    document.querySelector("#").innerHTML = total_Pontos();
    document.querySelector("#").innerHTML = verificarTotalDeAcertos();
})
    

function alimentar_barra_porc (tamanho_porc) {
    let barra = document.querySelector("#")
    barra.style.width = tamanho_porc;
}

