const section = document.querySelector("section");
console.log(section);

const ol_items = section.children[3];
console.log(ol_items);


const li_items = ol_items.querySelectorAll("li");
console.log(li_items[0]);


// switch the <li> content .. 
const btn = document.getElementById("btn_text");

btn.addEventListener('click', ()=>{
li_items[0].innerText=li_items[4].innerText;
})

