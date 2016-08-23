var instructors = ["caitlin", "john", "emilia"];
var ta = [];

for(var i=0; i<instructors.length; i++){
  if(instructors[i] == "caitlin") {
    ta.push(instructors[i]);
  } else if (instructors[i] == "emilia"){
    ta.push(instructors[i]);
  } else {
    console.log(instructors[i]);
  }
}

var taString = ta.join(" and ");

console.log(taString + " are TAs");
