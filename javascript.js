console.log(document.title);
document.write(document.title);




console.log(document.title="Modifying DOM");
document.write(document.title);




console.log(document.body.style="background-color:#FF69B4");





var i = 0 ;

var children = document.body.children;

for (var i = 0; i < children.length; i++) {

  var elements = children[i];

  document.write(elements);

}




