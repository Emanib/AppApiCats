
// init selectors
const catbutton =document.getElementById("cat_btn");
const dogbutton =document.getElementById("dog_btn");
const catresult = document.getElementById("cat_result");
const dogresult = document.getElementById("dog_result");


// add eventlisteners 

catbutton.addEventListener('click', randomAnimals)

function randomAnimals ()
{
    fetch('https://aws.random.cat/meow')
    .then ( res => res.json())
    .then (data => 
        {
            catresult.innerHTML =`<img src=${data.file} alt="cat" />`
        });
}