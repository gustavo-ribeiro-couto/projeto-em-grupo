
var myQuestions = [
	{
		question: "Quando surgiu a primeira placa mãe?",
		answers: {
			a: '1985',
			b: '1952',
            c: '1982',
            d: '1882'
		},
		correctAnswer: 'c'
	},
	{
		question: "Qual desses nomes foi o fundador da Microsoft?",
		answers:
		
		{
			a: 'Bill Guetes',
			b: 'Martin Lutter King',
			c: 'Steve Jobs',
			d: 'Paul Allen'
		},
		correctAnswer: 'd'
	},
	{
		question: "Qual desses nomes foi o fundador da Apple?",
		answers: {
			a: 'Michael Jackson',
			b: 'Ronald Wayne',
			c: 'Bill Gates',
			d: 'John F.Kennedy'
		},
		correctAnswer: 'b'
	},
	{
		question: "Quando surgiu o primeiro pc ?",
		answers: {
			a: '1970',
			b: '1932',
			c: '1946',
			d: '1956'
		},
		correctAnswer: 'c'
	},
	{
		question: "Quanto vale 1 kB em bytes?",
		answers: {
			a: '1248',
			b: '1024',
			c: '1048',
			d: '1000'
		},
		correctAnswer: 'b'
	},
	{
		question: "Qual é o logo na Apple?",
		answers: {
			a: 'Banana',
			b: 'Coelho',
            c: 'Cenoura',
            d: 'Maçã',
		},
		correctAnswer: 'd'
	},
	{
		question: "Qual comando é usado para escrever na tela em php?",
		answers: {
			a: 'Echo',
			b: 'Console.log',
            c: 'main public static void main(String[] args) ',
            d: 'printf(“”);',
		},
		correctAnswer: 'a'
	},
	{
		question: "Qual o significado de T.I?",
		answers: {
			a: 'Information Technology',
			b: 'Tecnologia Interativa',
            c: 'Tecnologia inteligência',
            d: 'Informando a Tecnologia'
		},
		correctAnswer: 'a'
	},
	
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// precisaremos de um lugar para armazenar a saída e as opções de resposta
		var output = [];
		var answers; // poderia ter dado outro nome, alem do mais, eu mesmo me confundi :/

		// para cada questão
		for(var i=0; i<questions.length; i++){
			
			// mas, primeiro resetamos a lista de questões
			answers = [];

			// e aqui faremos para cada resposta na questão.
			for(letter in questions[i].answers){

				// Aqui será escrito para html para usar o Radio.
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					//	+ letter + ') ' vou deixar a letra comentada, porque achei melhor assim
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			// agora ele vai virar a letra que esta marcada.
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'lightgreen';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

			
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}

	// show questions right away
	showQuestions(questions, quizContainer);

	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
	
}