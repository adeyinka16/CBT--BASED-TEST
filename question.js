let index=0;
let time=20;
let timer=document.getElementById('timer')
let score;
let display=document.getElementById('display')
let cbtquestions=[{
    question:'HTML stands for-',
    options:['HighText Machine Language','HyperText and links Markup Language','HyperText Markup Language','None of these'],
    answer:'HyperText Markup Language',
    select:''
},
{
  question:'Which of the following element is responsible for making the text bold in HTML?',
  options:['pre','a','b','br'],
  answer:'b',
  select:''
},
{
    question:'Which of the following attribute is used to provide a unique name to an element?',
    options:['class','id','type','None of the above'],
    answer:'id',
    select:''
},
{
    question:' Which of the following HTML tag is used to display the text with scrolling effect?',
    options:['marquee','scroll','div','output'],
    answer:'marquee',
    select:''
},
{
    question:' Which of the following is the container for tr, th, and td?',
    options:['data','table','group','All of the above'],
    answer:'table',
    select:''
},
{
    question:'Which of the following HTML attribute is used to define inline styles?',
    options:['style','type','class','None of the above'],
    answer:'style',
    select:''
},
{
    question:'Which of the following tag is used to create a combo box (or drop-down box)?',
    options:['list','select','input type="dropdown"s','ul'],
    answer:'select',
    select:''

},
{
    question:'HTML tags are enclosed in-',
    options:['# and #','{ and }','! and ?','< and >'],
    answer:'< and >',
    select:''
},
{
    question:' Which of the following element is responsible for making the text italic in HTML?',
    options:['i', 'italic', 'it','pre'],
    answer:'i',
    select:''   
},
{
    question:'Which of the following tag is used for inserting the largest heading in HTML?',
    options:['h3','h5','h6','h1'],
    answer:'h1',
    select:''
}
]
// let timmrr;
// function countdown(params) {
//     if (time>=0) {
//         timer.innerHTML=time;
        
//     }
//     else{
//         clearTimeout(timmrr);
//         submit();
//     }
//     time--;
//     timmrr=setTimeout(countdown,2000)
    
// }



function displayquestions() {
    // To display/show questions
    display.innerHTML =`<h3>${index+1}.${cbtquestions[index].question}</h3>`
    cbtquestions[index].options.forEach(function(element, i) {
        display.innerHTML += `<input type="radio" name= "answer" ${
            cbtquestions[index].select == element? "checked" :""
        } onclick ="answer('${element}')">${element}</input><br>`;  
    });
   
    display.innerHTML +=` <br><button class="btn btn-lg btn-primary mt-2 " onclick="previous()">Previous</button>
    <button class="btn btn-lg mx-auto btn-dark mt-2 " onclick="Next()">Next</button>
    <button class="btn btn-lg btn-success col-md-2 mt-2  mx-auto" onclick="submit()" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Submit</button>`
    head.style.display="none"
    bnt.style.display="none"
    // tym.style.display="block"
    /* // <button class="btn btn-success" onclick="submit()">Submit</button> */
}
    
    let timmrr;
function countdown(params) {
    if (time>=0) {
        timer.innerHTML=time;
        
    }
    else{
        clearTimeout(timmrr);
        submit();
    }
    time--;
    timmrr=setTimeout(countdown,2000)
  
}


function start() {
    displayquestions()
    countdown();
}
function answer(ans) {
    cbtquestions[index].select=ans
    
}
function previous(params) {
    if (cbtquestions[index-1]) {
        index --;
        displayquestions();
        
    }
    
}
function Next() {
    if (cbtquestions[index+1]) {
        index++;
        displayquestions();
        
    }
    // else{
    //     submit();
    // }
    
    
}
function submit() {
    score=cbtquestions.filter(function(element,i) {
        return element.select==element.answer   
    })
    display.innerHTML=`<h5>Total:${score.length}/${cbtquestions.length}
    <h4>${(score.length / cbtquestions.length)*100}%</h4>
    <button class="btn btn-secondary" onclick="preview()">Preview</button></h5>`
    
  clearTimeout(timmrr);    
  
}


function preview(element) {
    cbtquestions.forEach(function(element) {
        clearTimeout(timmrr);
        display.innerHTML+=`<p>
      <p>Question:${element.question}</p>
        <p>Answer:${element.answer}</p>
        <p>Select:${element.select}</p>`
        
    });
   
}
    

// let timer;
// function countdwn() {
//     if (testtime >=0) {
//         document.getElementById("testtime").innerHTML=testtime;
//         // settimeout(countdwn,1000)

        
//     }
//     else{
//         clearTimeout(timer);
//         Submit();
//     }
//     testtime--;
//     timer=setTimeout(countdwn,1000)
    
// }
// function displays() {
//     display.innerHTML= `<h1>${cbtquestions[index].question}</h1>`
//     cbtquestions[index].options.forEach(function (params,i) {
        
//     })
        
    
    
// }

// function starttest(params) {
//     countdwn();
//     display()          
// }
 // <table class="table bordered">
    //     <tr>
    //         <td>S/N</td>
    //         <td>Questions</td>
    //         <td>Answer</td>
    //         <td>select</td>
    //     </tr>
    //     </table>