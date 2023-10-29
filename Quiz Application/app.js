var questions = [
    {
        question:"HTML stands for",
        option1:"Hyper Text markup language",
        option2:"Hyper Link markup language",
        option3:"Hyper Text makeup language",
        correctAns:"Hyper Text markup language"
    },{
        question:"How does a WHILE loop start?",
        option1:"while(i <=10: i++)",
        option2:"while i= 1 to 10",
        option3:"while(i <=10)",
        correctAns:"while(i <=10: i++)"
    },
    {
        question:"How do you create a function in JavaScript?",
        option1:"function myfunction()",
        option2:"function:myfunction()",
        option3:"function = myfunction()",
        correctAns:"function myfunction()"
    },{
        question:"In how many ways can CSS be written in?",
        option1:"1",
        option2:"2",
        option3:"3",
        correctAns:"3"
    },{
        question:"The external JavaScript file must contain the <script> tag.",
        option1:"True",
        option2:"False",
        correctAns:"True"
    },{
        question:"What is the correct syntax for referring to an external script called xxx.js?",
        option1:"<script src=xxx.js>",
        option2:"<script href=xxx.js>",
        option3:"<script name=xxx.js>",
        correctAns:"<script src=xxx.js>"
    }
    ,{
        question:"How do you write Hello World in an alert box?",
        option1:"msgBox(Hello World)",
        option2:"msg(Hello World)",
        option3:"alert(Hello World)",
        correctAns:"alert(Hello World)"
    },{
        question:"Inside which HTML element do we put the JavaScript?",
        option1:"<scripting>",
        option2:"<script>",
        option3:"<javascript>",
        correctAns:"<js>"

    },{question:"Where is the correct place to insert a JavaScript",
    option1:"The<head>Section",
    option2:"The<Body>Section",
    option3:"Both the <head> section and the <body>section",
    correctAns:"The<Body>Section"

    }
]


    var para = document.getElementById("ques");
    var opt1 = document.getElementById("opt1");
    var opt2 = document.getElementById("opt2");
    var opt3 = document.getElementById("opt3");
    var button = document.getElementById("btn");
    var timer = document.getElementById("timer")
    var index = 0;
    var score = 0;
    var min = 1;
    var sec = 59;



    setInterval(function(){
        timer.innerHTML = `${min}:${sec}`;
        sec--
        if(sec<0){
            min--;
            sec = 59
        }
        if(min<0){
            min= 1;
            sec = 59;
            nextQuestion()
        }
    },100)

    function updateTimerDisplay(timeInSeconds) {
        var timerDisplay = document.getElementById("timerDisplay");
        timerDisplay.innerHTML = "Time: " + timeInSeconds + " seconds";
    }

    // Attach the startTimer function to the button's onclick event
    // document.getElementById("startButton").onclick = startTimer;



    function nextQuestion(){

        min = 1;
        sec = 59;
        var getOptions = document.getElementsByName("options");

        for(var i = 0;i<getOptions.length;i++)
        {
            if(getOptions[i].checked){
                var selectedValue = getOptions[i].value;
                // console.log(selectedValue)
                var selectedQues = questions[index - 1]["question"];
                var selectedAns = questions[index-1][`option${selectedValue}`]
                var correctAns = questions[index - 1]["correctAns"]
                if(selectedAns == correctAns){
                    score++
                }
            }
            getOptions[i].checked = false
        }

        button.disabled = true

        if(index >questions.length - 1){

            Swal.fire(
                'Good job!',
            `Your percentage is ${((score / questions.length)*100).toFixed(2)}`,
                'success'
              )
            console.log("your percentage is " + ((score / questions.length)*100).toFixed(2))
        }
        else{

            console.log(index);
            para.innerHTML = questions[index].question;
            opt1.innerText = questions[index].option1;
            opt2.innerText = questions[index].option2;
            opt3.innerText = questions[index].option3;
            index++;
        }
    }

    


    function clicked()
    {
        button.disabled = false
    }