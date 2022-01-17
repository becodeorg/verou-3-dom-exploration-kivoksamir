


// just calling the element using its class name .. 
const important_items = document.querySelectorAll(".important")
console.log(important_items);


/* add attribute */
important_items.forEach((element)=>{

    element.setAttribute("title","This is an important item")

});







/* loop through , add classes to IMG */

const images=document.querySelectorAll("img");

images.forEach((img)=>{
    
    if(img.className != "important"){

        img.style.display="none";

}})



/* loop through P .. Show the paragraph content */
/*show the className  */

const paragraph = document.querySelectorAll("p");
console.log(paragraph);
paragraph.forEach((content)=>{console.log(content.innerHTML +"  "+ content.className)});



const parag_content = document.getElementsByTagName("p");

for (i=0; i < paragraph.length ; i++){

    function randomcolor(){
        let r = Math.random() *255 ; 
        let g = Math.random() *255 ;
        let b = Math.random() *255 ; 
    var bgcolor = "rgb(" + r + "," + g + "," + b + ")";
    paragraph[i].style.color=bgcolor;

    }
    randomcolor();
}


  

 












