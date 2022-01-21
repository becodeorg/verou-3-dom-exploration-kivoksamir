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

    
    if(input_value >= 18 ){
    section_1.style.visibility="visible";
    }else{
    section_1.style.visibility = "hidden";
    }

});

// password .. 

document.addEventListener("keyup" , ()=>{
    const password=document.getElementById("pwd").value; // using ("#id") not working with (getelementbyID) 
    const password_conf = document.getElementById("pwd-confirm").value;

    if(password.length < 6 ){
        document.getElementById("pwd").style.background="red";
    
        //alert("the password is too short");

        
        } else if(password != password_conf){
            document.getElementById("pwd").style.background="red"; // call one more time (not the value)
            document.getElementById("pwd-confirm").style.background="red";
            

        }else{
            document.getElementById("pwd").style.background="white";
            document.getElementById("pwd-confirm").style.background="white";
        }
        
})





//dark_Mode

document.addEventListener("change",()=>{
    const toggle=document.getElementById("toggle-darkmode").value;
    const inputs=document.querySelectorAll("input");
    
        if(toggle == "dark"){
        document.body.style.background="gray";
        for(i=0 ; i <= inputs.length ; i++){
            inputs[i].style.background="gray"
        };
        

        }else{
            document.body.style.background="white";
            for(i=0 ; i <= inputs.length ; i++){
                inputs[i].style.background="white"
            };
        }
    
})














