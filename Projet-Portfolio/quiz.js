var myQuestions = [
    {
      question: "Quelle est la resultat de cette opération: 2*2+3 ?",
      answers: {
        a: '7',
        b: '5',
        c: '10'
      },
      correctAnswer: 'a'
    },
    {
      question: "Quelle est la resultat de cette opération: 19-3+10/2 ?",
      answers: {
        a: '21',
        b: '16',
        c: '13'
      },
      correctAnswer: 'a'
    },
    {
        question: "Quelle est la resultat de cette opération: 67-10+5*0 ?  ",
        answers: {
          a: '0',
          b: '57',
          c: '62'
        },
        correctAnswer: 'b'
      },
      {
        question: "Quelle est la resultat de cette opération: a*0+1*8/2+6 ?",
        answers: {
          a: '0',
          b: '1',
          c: '8a'
        },
        correctAnswer: 'b'
      },
      {
        question: "Quelle est la resultat de cette opération: (5*9-1)/4 ?",
        answers: {
          a: '10',
          b: '8',
          c: '11'
        },
        correctAnswer: 'c'
      },
      {
        question: "Quelle est la resultat de cette opération: ((69*0*1+5)+7*5-3) ?",
        answers: {
          a: '32',
          b: '37',
          c: '106'
        },
        correctAnswer: 'b'
      },
      {
        question: "Quelle est la resultat de cette opération: (10+98*2-4)/37-5*7 ?",
        answers: {
          a: '101',
          b: '202',
          c: '175'
        },
        correctAnswer: 'a'
      },
      {
        question: "Quelle est la resultat de cette opération: (x*4*(7-2)/20) ?",
        answers: {
          a: 'X',
          b: '20X',
          c: '10'
        },
        correctAnswer: 'a'
      },
      {
        question: "Quelle est la resultat de cette opération: (54**5*0-10+50)*2-6 ?",
        answers: {
          a: '80',
          b: '74',
          c: '160'
        },
        correctAnswer: 'b'
      },
      {
        question: "Quelle est la resultat de cette opération:3+69**1-6/11 ?",
        answers: {
          a: '66',
          b: '11',
          c: '6'
        },
        correctAnswer: 'c'
      }
  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ':'
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join(' ') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }