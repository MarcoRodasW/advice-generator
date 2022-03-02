const randomBtn = document.querySelector('#random');
const adviceP = document.querySelector('#advice');
const adviceId = document.querySelector('#adviceid');
const dice = document.querySelector('#dice');
async function getAdvice(){
   const api = 'https://api.adviceslip.com/advice';
   const advice = await fetch(api)
   .then(res => res.json())
   .catch(error => console.log(`El error es: ${error}`));
   
   return advice.slip;
 }

 async function renderAdvice(){
    let {id, advice} = await getAdvice();
    adviceId.innerHTML = id;
    adviceP.innerHTML = `"${advice}"`;
 }

   window.onload = ()=>{
      renderAdvice();
   }

 randomBtn.addEventListener('click', ()=>{

  if(!dice.classList.contains('spin-in')){
    dice.classList.remove('spin-out');
    dice.classList.add('spin-in');
  }else{
    dice.classList.remove('spin-in');
    dice.classList.add('spin-out');
  }

   renderAdvice();
 });
 