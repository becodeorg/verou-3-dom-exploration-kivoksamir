


Timer=()=> {               // anonymous function

    time = new Date(); // get everything (javascript works with milisecounds) .. 
    
    const minuteTimer = time.getMinutes(); 
    const secondTimer = time.getSeconds();

    // select timing place

    const timing = document.getElementById('time');
    const list = document.createElement('li');


    


    const li_delete =document.getElementById("time");  // delete the list by press (I) ;
    
    window.addEventListener("keydown" , (e)=>{    
    
        if(e.key==="i"){
        
            li_delete.remove(); // using styling .. 
        }
        
        });





    list.innerHTML =`${minuteTimer}.${secondTimer }` 
    timing.appendChild(list)   
   }



createList=(e)=>{
    // select container
    const box = document.getElementById('displayedsquare')
    // create sub-container
    const subContainer = document.createElement('DIV')
    // create boxes
    let div = document.createElement("DIV")
    div.className = "newList";
    const bgColor = e.target.id
    div.style.background = bgColor
    //append box to containers
    subContainer.appendChild(div)
    box.appendChild(subContainer)
    

    div.addEventListener('mouseover',colorAlert=()=>{
    alert(`The background color is ${bgColor}`)})
   // call timer function
   Timer()
   }

 
// add event Listener
const div1 = document.getElementById('lime')
const div2 = document.getElementById('violet')
const div3 = document.getElementById('orange')

div1.addEventListener('click', createList)
div2.addEventListener('click', createList)
div3.addEventListener('click', createList)


//// changing the background by using space .. 


window.addEventListener("keydown",(e)=>{

                        if(e.code==="Space"){   // space must be capital letter .... 

                            document.body.style.background="gray";


                        }

});


