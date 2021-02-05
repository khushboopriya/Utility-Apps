const input=document.querySelector('#input');
const output=document.querySelector('#output');
const encodeButton =document.querySelector('#encode-button');
encodeButton.addEventListener('click',() =>{
  output.value=encodeURIComponent(input.value);
});
