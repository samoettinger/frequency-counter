// Link para o Botão Contador de Frequência
const counterButton = document.getElementById('counterButton')

// Botão para chamar as funções de contagem:
counterButton.addEventListener("click", function() {  
     counterLetters();
     counterWords();
});



// Função counterLetters
function counterLetters(){
     // Variável para Letras
     const letters = document.getElementById('divLetters');
     letters.innerHTML = '';

     // Variável para texto digitado:
     let typedText = document.getElementById('textInput').value;
     typedText = typedText.toLowerCase();
     typedText = typedText.replace(/[^a-z'\s]+/g, "");

     const letterCounter = {}
     for (let index = 0; index < typedText.length; index++){
          let currentLetter = typedText[index]
          if(letterCounter[currentLetter] === undefined){
               letterCounter[currentLetter] = 1
          } else {letterCounter[currentLetter]++}
     }

     for (let letter in letterCounter){ 
          const spanLetters = document.createElement("span"); 
          const textContent = `"${letter}": ${letterCounter[letter]}`;
          spanLetters.innerText = textContent;
          const letters = document.getElementById("divLetters");
          letters.appendChild(spanLetters);
     }
};

// Função counterWords
function counterWords(){
     // Variável para Palavras
     const words = document.getElementById('divWords');
     words.innerHTML = '';
     
     // Variável para palavra digitada:
     let typedWord = document.getElementById('textInput').value;
     typedWord = typedWord.toLowerCase();
     typedWord = typedWord.replace(/[^a-z'\s]+/g, "");
     typedWord = typedWord.split(/\s/);

     const wordCounter = {}
     for (let index = 0; index < typedWord.length; index++){
          let currentWord = typedWord[index]
          if(wordCounter[currentWord] === undefined){
               wordCounter[currentWord] = 1
          } else {wordCounter[currentWord]++}
     }

     for (let word in wordCounter){
          const spanWords = document.createElement('span');
          spanWords.innerHTML = word + ': ' + wordCounter[word];
          words.appendChild(spanWords)
     }
};