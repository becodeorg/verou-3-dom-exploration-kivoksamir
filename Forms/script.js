let first_input =document.querySelector("#firstname");
first_input.addEventListener('keyup' , ()=>{

    let enterd_text=first_input.value;
    let display_1=document.querySelector("#display-firstname");
    display_1.innerText=enterd_text;
})
