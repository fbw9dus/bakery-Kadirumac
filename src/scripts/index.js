// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/

import {recipeData} from './data.js';
// \/ All of your javascript should go here \/

var data = JSON.parse(recipeData)

console.log(data.cakes[1].author)
console.log(data.cakes[1].title)


for (var i=0;i<data.cakes.length;i++){
    const cakesCard = `
    <div class="cakesTemplate">
           <img src=${data.cakes[i].image} id="image" alt="">
       <p>
           ${data.cakes[i].title}
       </p>
       
       <p class="author">${data.cakes[i].author}</p>
       <p class="ingredients">${data.cakes[i].ingredients}</p>
    </div>
   `;
    
     document.querySelector('#cakes').insertAdjacentHTML("afterend",cakesCard)
}


for (var i=0;i<data.biscuits.length;i++){
    const biscuitCard = `
    <div class="cakesTemplate">
        <img src=${data.biscuits[i].image} id="image" alt="">
       <p>     ${data.biscuits[i].title}   </p>       
       <p class="author">${data.biscuits[i].author}</p>
       <p class="ingredients">${data.biscuits[i].ingredients}</p>
    </div>
   `;
    
     document.querySelector('#biscuits').insertAdjacentHTML("afterend",biscuitCard)
}
   

for (var i=0;i<data.bread.length;i++){
    const breadCard = `
    <div class="cakesTemplate">
        <img src=${data.bread[i].image} id="image" alt="">
       <p>     ${data.bread[i].title}   </p>       
       <p class="author">${data.bread[i].author}</p>
       <p class="ingredients">${data.bread[i].ingredients}</p>
    </div>
   `;
    
     document.querySelector('#bread').insertAdjacentHTML("afterend",breadCard)
}