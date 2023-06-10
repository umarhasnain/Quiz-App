var questions = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
    {
        question: 'Which character is used to indicate an end tag?',
        option1: '*',
        option2: '/',
        option3: '<',
        correctOption: "/"
    },
    {
        question: 'How can you open a link in a new tab/browser window?',
        option1: '<a href="url" target="new">',
        option2: '<a href="url" new>',
        option3: '<a href="url" target="_blank">',
        correctOption: '<a href="url" target="_blank">'
    },
];

var ques = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var btn = document.getElementById("btn");
var feedbackBtn = document.getElementById("FB_Btn");
var index = 0;
var score = 0;


function nextQuestion() {
    var options = document.getElementsByName("answer");
    
    for(var i = 0; i < options.length; i++){
    
        if(options[i].checked){
            var selected = options[i].value;
            var userAnswer = questions[index -1][`option${selected}`]
           var correctAnswer = questions[index -1].correctOption;
           if ( userAnswer === correctAnswer){
            score ++;
           }
            console.log()
        }

        options[i].checked = false;
        btn.disabled = true;
    }

    if (index > questions.length - 1) {

        var scoreBoard = ((score / questions.length) * 100 + "%" );
        if(scoreBoard > "70"){

            Swal.fire(
                'Good job!',
                'You are Passed!' +"<br>"+ "Your Score is "+ scoreBoard ,
                'success'
                
              )
              

             
           

        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You are Failed!' +"  "+ "Your Score is "+  scoreBoard , 
                footer: '<a href="web_quiz.html">RETAKE QUIZ</a>'
              })
        };
        



    } else {
   
        ques.innerHTML = questions[index].question;
        option1.innerText = questions[index].option1;
        option2.innerText = questions[index].option2;
        option3.innerText = questions[index].option3;

        index++;
    }

};


nextQuestion()

function closeBtn(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Cancel it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Cancel!',
            'Your Quiz Has Been Cancel.',
            'success',
          )
    
        }
      })


}



function enableBtn(){
    btn.disabled = false;
}


var min = 1;
var sec = 59;

var timer = document.getElementById("timer");


var interval = setInterval(function () {
    timer.innerHTML = `${min}:${sec}`
    sec --;
    if(sec < 0){
        if(min < 1){
            nextQuestion();
            min = 1;
            sec = 59;
            
        }else{
            min--
            sec = 59;
        }
    }

}, 1000)

