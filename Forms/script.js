let first_input =document.querySelector("#firstname");
first_input.addEventListener('keyup' , ()=>{

    let enterd_text=first_input.value;
    let display_1=document.querySelector("#display-firstname");
    display_1.innerText=enterd_text;
})



const the_age =document.querySelector("#age");
const section_1=document.querySelector("#a-hard-truth");
the_age.addEventListener('keyup',()=>{

    input_value=the_age.value; // must be inside the if loop

    
    if(input_value > 18 ){
    section_1.style.visibility="visible";
    }else{
    section_1.style.visibility = "hidden";
    }

});