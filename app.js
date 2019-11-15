const   quiz = [
    {q:'How do you recognize a ninja when you find one?',a:'Show them a map', b:'Don\'t worry the ninja will find you'},
    {q:'If a ninja has 3 apples, then gives one to Mario and one to Yoshi, how many apples does the ninja have left?', a:'1 apple', b: '3 apples and two corpses.'},
    {q:'What is a ninja\'s favorite array method', a:'forEach', b: 'slice.'},
    {q:'How do you reach a ninja?', a:'call him on the phone', b: 'Shout the name 3 good times.'},
    {q:'What is a ninja\'s favorite moment of the day', a:'afternoon', b: 'Midnight'},
    {q:'Where does a ninja pray?', a:'on his bed', b: 'In the cemetry.'},
    
]


const q1 = document.querySelector('.q1');
const q2 = document.querySelector('.q2');
const q3 = document.querySelector('.q3');
const q4 = document.querySelector('.q4');
const q5 = document.querySelector('.q5');
const q6 = document.querySelector('.q6');

q1.innerText += quiz[0].q;
q2.innerText += quiz[1].q;
q3.innerText += quiz[2].q;
q4.innerText += quiz[3].q;
q5.innerText += quiz[4].q;
q6.innerText += quiz[5].q;


const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const a3 = document.querySelector('.a3');
const a4 = document.querySelector('.a4');
const a5 = document.querySelector('.a5');
const a6 = document.querySelector('.a6');

a1.innerText += quiz[0].a;
a2.innerText += quiz[1].a;
a3.innerText += quiz[2].a;
a4.innerText += quiz[3].a;
a5.innerText += quiz[4].a;
a6.innerText += quiz[5].a;



const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const b4 = document.querySelector('.b4');
const b5 = document.querySelector('.b5');
const b6 = document.querySelector('.b6');

b1.innerText += quiz[0].b;
b2.innerText += quiz[1].b;
b3.innerText += quiz[2].b;
b4.innerText += quiz[3].b;
b5.innerText += quiz[4].b;
b6.innerText += quiz[5].b;

//ninja object question and answers;



const correctAns = ['B', 'B','B','B','B', 'B'];

const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value];

    userAns.forEach((answer, index)=>{
        if(answer == correctAns[index]){
            score +=16.666;
        }
    })
    console.log(Math.round(score));
})

// q1.binnerText += quiz[0].q;
//console.log(form);