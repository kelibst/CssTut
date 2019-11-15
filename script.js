const clickme = document.querySelector('.clickMe');
const popup_wrapper = document.querySelector('.popup_Wrapper');
const close = document.querySelector('.close');

clickme.addEventListener('click', () =>{
    
    popup_wrapper.style.display = 'block';
})

close.addEventListener('click', () => {
    
    popup_wrapper.style.display = 'none';
})

// function translatePigLatin(str) { 
//     let vowels = [];
//     let fundVowel = /aeiou/;
//     //console.log(findVowel);
//     for(let i = 0; i< str.length; i++){
//         if(str[i] == findVowel){
//             console.log(str(i))
//         }
//     }

    
//   }
  
//   translatePigLatin("consonant");
 
const pattern = {
    username : /^[a-z\d]{5,12}$/i,
    email     : /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,15})(\.[a-z]{2,8})?$/,
    password: /^[\w@-]{8,20}$/,
    telephone: /^\d{10}$/,
    slug:     /^[a-z\d-]{8,20}$/
}


const formSelect = document.querySelector('form');

//validation function should go here

function validateForm(field, regex){
  if(regex.test(field.value)){
    field.className = 'valid';
  }else{
    field.className = 'invalid';
  };
}

formSelect.addEventListener('keyup', e => {
    //console.log(e.target.attributes.name.value);
    validateForm(e.target,pattern[e.target.attributes.name.value])
})


// function convertHTML(str) {
//   // &colon;&rpar;
//   //let char = ['<', '>', '\'', '\"', '&'];
//   const strSplit = str.split('');
//   //console.log(strSplit);
//   strSplit.forEach((item, index) => {
//     if(item == '&'){
//      // console.log(str = str.replace(item, '&amp;'))
//        str = str.replace(item, '&amp;');
//     }
//     if(item == '>'){
//      // console.log(str = str.replace(item, '&gt;'))
//       str = str.replace(item, '&gt;');
//     }
//     if(item == '<'){
//       //console.log(str = str.replace(item, '&lt;'))
//       str = str.replace(item, '&lt;');
//     }
//     if(item == '\''){
//      // console.log(str = str.replace(item, '&apos;'))
//       str = str.replace(item, '&apos;');
//     }
//     if(item == '\"'){
//       //console.log(str = str.replace(item, '&quote;'))
//        str = str.replace(item, '&quote;');
//     }
//   });
//   console.log(str)
// }
// convertHTML("Dolce & Gabbana > < ' \" ");





// function translatePigLatin(str) {
//    let vowels = /[aeiou]/;
//    if(vowels.test(str)){
//     let res = vowels.exec(str);

//     if(res.index==0 && res.index != null){
//         console.log(str + 'way')
//     }else{
//         let firstPart = str.slice(0, res.index);
//         let lastPart = str.slice(res.index);
//         console.log(lastPart + firstPart + 'ay')
//     }
//    }else{
//        console.log(str + 'ay');
//        return str + 'ay';
//    }
    
//     //console.log(res.index);

  

    
// }

// translatePigLatin("rhythm");

// function pairElement(str) {
//     let finalArr =[];
//     for(let i = 0; i < str.length; i++){
//       if(str[i]=== 'A'){
//         finalArr.push(['A', 'T']);
//         //let arr + i = ['A', 'T'];
//       }
//       if(str[i]=== 'T'){
//         finalArr.push(['T', 'A']);
//         //let arr + i = ['T', 'A'];
//       }
//       if(str[i]=== 'C'){
//         finalArr.push(['C', 'G']);
//         //let arr + i = ['C', 'G'];
//       }
//       if(str[i]=== 'G'){
//         finalArr.push(['G', 'C']);
//         // let arr + i = ['G', 'C'];
//       }
      
      
//     }
//     console.log(finalArr);
//     return finalArr;
//   }
  
//   pairElement("GCG");

// function convertHTML(str){
//   const characters = ['<', '&lt;', '>', '&gt;', '\'', '&apos;', '\"', '&quote'];
//   characters.forEach((item, index) =>{
//     str = str.replace(/[&<>"']/g, str[index+1])
//     console.log(str)
//   });
//   //console.log(str);
// }
  
//   convertHTML("<>");

//  // Kelly its a tip: const characters = { '&': '&', '<': '<', '>': '>', '"': '"', '\'': ''' };


// function sumFibs(num) {
//   let allFibs = [];
//   let newFibs = [1,1];
//   for(let i = 1; i <= num; i++){
//     allFibs.push(i);
//    }
   
  
//   console.log(allFibs);
  
// }


// sumFibs(10);