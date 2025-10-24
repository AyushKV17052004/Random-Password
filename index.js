const SliderVal = document.querySelector(".SliderValue");
const Slider = document.querySelector(".neon-slider");
SliderVal.textContent = Slider.value;

Slider.addEventListener('input' , function(){
SliderVal.textContent = Slider.value;
});

const Password = document.querySelector('.Password');
const lower = 'abcdefgghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '1234567890';
const symbol = '!@#$%^*()-+=_~><?":|}{[]'; 

const LOWER = document.querySelector('#Lower');
const UPPER = document.querySelector('#Upper');
const NUMBER = document.querySelector('#Nums');
const SYMBOL = document.querySelector('#Symbols');

let Count = 0;


function Generate(){
 if(!LOWER.checked && !SYMBOL.checked && !UPPER.checked && !NUMBER.checked){
  Password.textContent = 'Select a Checkbox';
  return ;
 }
 else{
function randomString(length) {
  Count=0;
  let chars = "";
  if(LOWER.checked){ chars+=lower;
    Count++}
  if(UPPER.checked) {chars+=upper;
  Count++}
  if(NUMBER.checked){ chars+=nums;
    Count++}
  if(SYMBOL.checked) {chars+=symbol;
    Count++}

  if(Count>Number(Slider.value)){
    Slider.value = Count;
    SliderVal.textContent = Slider.value;
    length=Slider.value;
  }  
  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

Password.textContent = randomString(Slider.value);
 }
};


const Red = document.querySelector('.red');
const Green = document.querySelector('.green');
const Gray = document.querySelector('.gray');
function updateStrengthIndicator() {
  if(!LOWER.checked && !SYMBOL.checked && !UPPER.checked && !NUMBER.checked){
  
    Gray.classList.remove('hidden');
    Red.classList.add('hidden');
    Green.classList.add('hidden');
    return; 
  }
  else{
  const val = Number(Slider.value);

  if (val >= 12 || (SYMBOL.checked && NUMBER.checked && val >= 8)) {
    Green.classList.remove('hidden');
    Red.classList.add('hidden');
    Gray.classList.add('hidden');
  } else {
    Red.classList.remove('hidden');
    Green.classList.add('hidden');
     Gray.classList.add('hidden');

  }
}
};

const copy = document.querySelector('.COPY');

  copy.addEventListener('click', () => {
    navigator.clipboard.writeText(Password.textContent)
  });


  
Slider.addEventListener('input' , function(){
  Slider.style.cssText = `
box-shadow: 0 0 5px #ffff33;  
border-radius: 10px;`;

});

Slider.addEventListener('mouseup' , function(){
Slider.style.removeProperty("border-radius");
Slider.style.removeProperty("box-shadow");
});



