const section = document.querySelector("section");
console.log(section);

const ol_items = section.children[3];
console.log(ol_items);


const li_items = ol_items.querySelectorAll("li");
console.log(li_items[0]);


// switch the <li> content .. git add .git add
const btn = document.getElementById("btn_text");

btn.addEventListener('click', ()=>{
li_items[0].innerText=li_items[4].innerText;
})

 //////////


 const secound_header=document.getElementById("secound");
 const third_header=document.getElementById("third");
 const btn_1=document.getElementById("btn_header");



 const all_sections=document.querySelectorAll("section");
 const target=all_sections[2];
 btn_1.addEventListener('click' , ()=>{

third_header.innerHTML=secound.innerHTML;
target.remove();

    
 });

 