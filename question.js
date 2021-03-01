function Quiz(Strengths) {
    this.score = 0;
    this.Strengths = Strengths;
    this.questionIndex = 0;
    this.result=0
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.Strengths[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    console.log(this.Strengths[this.questionIndex])
    if(answer=== "Disagree") {
        this.score++;
    }else if(answer === "nor disagree"){
        this.score=this.score+2
    }else {
        this.score=this.score+3
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
   
    return this.questionIndex === this.Strengths.length;

}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 

 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
    
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.Strengths.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Score</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    
};
 
// create questions here
var Strengths = [
    new Question("We have a high level of competence.?", ["Disagree", "nor disagree","Agree"]),
    new Question("Which language is used for styling web We have competitive skill.?", ["Disagree", "nor disagree", "Agree"]),
    new Question("We are ahead on the experience curve.?", ["Disagree", "nor disagree","Agree"]),
    new Question("We have adequate financial resources.?", ["Disagree", "nor disagree", "Agree"]),
    new Question("We have a good reputation with buyers.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question("We are an acknowledged market leader.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question("We have well-conceived functional area strategies.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question("We have access to economies of scale.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question("We are somewhat insulated from strong competitive pressures.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question("We have proprietary technology.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question("We have better advertising campaigns than the competition.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question("We are good at creating new products.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question("We have strong management.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question("We have superior technological/technical skills.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question("We have cost/pricing advantages.?", ["Disagree", "nor disagree ", " Agree"]),



];
 
// create quiz
var quiz = new Quiz(Strengths);
 
// display quiz
populate();


// quiz 2

function Quiz2(Weaknesses) {
    this.score1 = 0;
    this.Weaknesses = Weaknesses;
    this.questionIndex1 = 0;
}
 
Quiz2.prototype.getQuestionIndex1 = function() {
    return this.Weaknesses[this.questionIndex1];
}
 
Quiz2.prototype.guess1 = function(answer) {
    if(answer=== "Disagree") {
        this.score1++;
    }else if(answer === "nor disagree"){
        this.score1=this.score1+2
    }else {
        this.score1=this.score1+3
    }
 
    this.questionIndex1++;
}
 
Quiz2.prototype.isEnded1 = function() {
    
    return this.questionIndex1 === this.Weaknesses.length;

}
 
 
function Question1(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 

 
function populate1() {
    if(quiz2.isEnded1()) {
        showScores1();
    }
    else {
        // show question
        var element = document.getElementById("question1");
        element.innerHTML = quiz2.getQuestionIndex1().text;
 
        // show options
        var choices = quiz2.getQuestionIndex1().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choicee" + i);
            element.innerHTML = choices[i];
            guess1("btne" + i, choices[i]);
        }
 
        showProgress1();
    }
    
};
 
function guess1(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz2.guess1(guess);
        populate1();
    }
};
 
 
function showProgress1() {
    var currentQuestionNumber = quiz2.questionIndex1 + 1;
    var element = document.getElementById("progress1");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz2.Weaknesses.length;
};
 
function showScores1() {
    var gameOverHTML = "<h1>Score</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz2.score1 + "</h2>";
    var element = document.getElementById("quiz1");
    element.innerHTML = gameOverHTML;

    
};
 
// create questions here
var Weaknesses = [
    new Question1("We have no clear strategic direction.?", ["Disagree", "nor disagree","Agree"]),
    new Question1("Our facilities are obsolete.?", ["Disagree", "nor disagree", "Agree"]),
    new Question1("We are lacking managerial depth and talent.?", ["Disagree", "nor disagree","Agree"]),
    new Question1("We are missing some key skills or competencies..?", ["Disagree", "nor disagree", "Agree"]),
    new Question1("We have a poor track record in_implementing strategy..?", ["Disagree", "nor disagree ", " Agree"]),
    new Question1("We are plagued with internal operating problems..?", ["Disagree", "nor disagree ", " Agree"]),
    new Question1("We are falling behind on Research & Development..?", ["Disagree", "nor disagree ", " Agree"]),
    new Question1("We have a narrow product line.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question1("We have a weak market image.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question1("We have below average marketing skills.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question1("We are unable to finance needed strategy changes.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question1("We have higher overall costs relative to our key competitors.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question1("We have subpar profitability.?", ["Disagree", "nor disagree ", " Agree"]),


];
 
// // create quiz
var quiz2 = new Quiz2(Weaknesses);
 
// // display quiz
populate1();




// quiz 3

function Quiz3(Opportunities) {
    this.score2 = 0;
    this.Opportunities = Opportunities;
    this.questionIndex2 = 0;
}
 
Quiz3.prototype.getQuestionIndex2 = function() {
    return this.Opportunities[this.questionIndex2];
}
 
Quiz3.prototype.guess2 = function(answer) {
    if(answer=== "Disagree") {
        this.score2++;
    }else if(answer === "nor disagree"){
        this.score2=this.score2+2
    }else {
        this.score2=this.score2+3
    }
 
    this.questionIndex2++;
}
 
Quiz3.prototype.isEnded2 = function() {
    
    return this.questionIndex2 === this.Opportunities.length;

}
 
 
function Question2(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 

 
function populate2() {
    if(quiz3.isEnded2()) {
        showScores2();
    }
    else {
        // show question
        var element = document.getElementById("question2");
        element.innerHTML = quiz3.getQuestionIndex2().text;
 
        // show options
        var choices = quiz3.getQuestionIndex2().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choiceee" + i);
            element.innerHTML = choices[i];
            guess2("btnee" + i, choices[i]);
        }
 
        showProgress2();
    }
    
};
 
function guess2(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz3.guess2(guess);
        populate2();
    }
};
 
 
function showProgress2() {
    var currentQuestionNumber = quiz3.questionIndex2 + 1;
    var element = document.getElementById("progress2");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz3.Opportunities.length;
};
 
function showScores2() {
    var gameOverHTML = "<h1>Score</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz3.score2 + "</h2>";
    var element = document.getElementById("quiz2");
    element.innerHTML = gameOverHTML;
    
};
 
// create questions here
var Opportunities = [
    new Question2("There are additional customer groups that we could serve.?", ["Disagree", "nor disagree","Agree"]),
    new Question2("There are new markets or market segments to enter.?", ["Disagree", "nor disagree", "Agree"]),
    new Question2("We can expand our product/service line to meet customer needs.?", ["Disagree", "nor disagree","Agree"]),
    new Question2("We can diversify into related products.?", ["Disagree", "nor disagree", "Agree"]),
    new Question2("We can control sourcing or supply activities (vertical integration.).?", ["Disagree", "nor disagree ", " Agree"]),
    new Question2("Falling trade barriers are opening foreign markets to us.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question2("Our rivals are becoming complacent.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question2("The market is growing faster than in the past.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question2("Fewer regulatory requirements will making doing business easier for us.?", ["Disagree", "nor disagree ", " Agree"]),


];
 
// // create quiz
var quiz3 = new Quiz3(Opportunities);
 
// // display quiz
populate2();



// QUIZ 4 




function Quiz4(Threats) {
    this.score4 = 0;
    this.Threats = Threats;
    this.questionIndex4 = 0;
}
 
Quiz4.prototype.getQuestionIndex4 = function() {
    return this.Threats[this.questionIndex4];
}
 
Quiz4.prototype.guess4 = function(answer) {
    if(answer=== "Disagree") {
        this.score4++;
    }else if(answer === "nor disagree"){
        this.score4=this.score4+2
    }else {
        this.score4=this.score4+3
    }
 
    this.questionIndex4++;
}
 
Quiz4.prototype.isEnded4 = function() {
    
    return this.questionIndex4 === this.Threats.length;

}
 
 
function Question4(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 

 
function populate4() {
    if(quiz4.isEnded4()) {
        showScores4();
    }
    else {
        // show question
        var element = document.getElementById("question4");
        element.innerHTML = quiz4.getQuestionIndex4().text;
 
        // show options
        var choices = quiz4.getQuestionIndex4().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choiceeee" + i);
            element.innerHTML = choices[i];
            guess4("btneeee" + i, choices[i]);
        }
 
        showProgress4();
    }
    
};
 
function guess4(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz4.guess4(guess);
        populate4();
    }
};
function getresult() {
        var res=quiz.score+quiz3.score2-(quiz2.score1+quiz4.score4)
        var gameOverHTML = "<h1>Result</h1>";
        gameOverHTML += "<h2 id='score'> Your result: "+res+"</h2> "
        var element = document.getElementById("quiz4");
        element.innerHTML = gameOverHTML;

    
};
 
 
function showProgress4() {
    var currentQuestionNumber = quiz4.questionIndex4 + 1;
    var element = document.getElementById("progress4");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz4.Threats.length;
};
 
function showScores4() {
    var gameOverHTML = "<h1>Score</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz4.score4 + "</h2> <br/>  <button id='res' class='bt' onclick='getresult()'><i class='fa fa-spinner fa-spin'></i> Show Result</button>"
    var element = document.getElementById("quiz4");
    element.innerHTML = gameOverHTML;
    // var result= "<h1>Result</h1>"
    // result += "h2 id='score'> RESULT SWOT :" +quiz2.score1+quiz.score+quiz3.score2+quiz4.score4 +"</h2>"

    
};
 
// create questions here
var Threats = [
    new Question4("Low-cost foreign competitors are entering the market.?", ["Disagree", "nor disagree","Agree"]),
    new Question4("Sales of substitute products are rising The market is growing more slowly than we expected..?", ["Disagree", "nor disagree", "Agree"]),
    new Question4("There are adverse shifts in foreign exchange rates and/or trade policies..?", ["Disagree", "nor disagree","Agree"]),
    new Question4("Regulatory requirements are becoming onerous.?", ["Disagree", "nor disagree", "Agree"]),
    new Question4("We are vulnerable to changes in the business cycle or to recessions.", ["Disagree", "nor disagree ", " Agree"]),
    new Question4("Our customers and/or suppliers are_enjoying growing bargaining power.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question4("Buyers’ needs and tastes are changing in directions that point away from our current expertise.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question4("Demographic changes are having a negative impact on business.?", ["Disagree", "nor disagree ", " Agree"]),
    new Question4("It’s easy to enter this industry (very low barriers to entry).?", ["Disagree", "nor disagree ", " Agree"]),
    new Question4("Technology could change this industry with little or no warning.?", ["Disagree", "nor disagree ", " Agree"]),


];
 
// // create quiz
var quiz4 = new Quiz4(Threats);
 
// // display quiz
populate4();
