//get all learner .. 
//create a section .. 
//create an artical .. 
//genertate a random color 
//do it per lerner .. 
//append to artical .. 








const learners=[
    "jordy",
    "ahmad",
    "michail",
    "danty"
];

const artical_1=document.createElement("artical")
document.body.appendChild(artical_1);



for (var i = 0; i < learners.length; i++){
    const learners_index=learners[i];

    const section_1=document.createElement("section");
    document.body.appendChild(section_1);
    section_1.innerHTML=(learners_index); // father include son

    console.log(learners_index);
    
    artical_1.append(section_1); // father include son
    section_1.style.backgroundColor="#" + Math.floor(Math.random()*5000);


}























