
// init selectors
const catbutton =document.getElementById("cat_btn");
const catresult = document.getElementById("cat_result");



// add eventlisteners 

catbutton.addEventListener('click', randomAnimalsCats)



// functions 
function randomAnimalsCats ()
{
    fetch('https://aws.random.cat/meow')
    .then ( res => res.json())
    .then (data => 
        {
            catresult.innerHTML =`<img src=${data.file} alt="cat" />`
        });
}
