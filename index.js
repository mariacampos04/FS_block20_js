const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
//Inside your main() function, grab the "root" element, add an h1 element, 
//give it text of "FREELANCERS", and append the HTML document.
const root = document.getElementById("root");
const h1 = document.createElement("h1");
h1.innerHTML = "FREELANCERS";
root.appendChild(h1);


//Continue working inside your main() function to create an unordered list element.


//ul.setAttribute("id", "myUL")

// for (let i = 0; i<= users.length; i++){
    
//     let li = document.createElement("li")
//     li.innerHTML = `Freelancer name: ${users[i].name}, Age: ${users}`
//     rootElement.appendChild("li");
// }

//Loop through the users array creating li elements. 
// users.forEach(function(item) {
//     var li = document.createElement("li");
//     var text = document.createTextNode(item);
//     li.appendChild(text);
//     document.getElementById("myUl").appendChild(li);
//   });

  

//Append those elements to your HTML document.



//Style your site using CSS.
//document.querySelector(root);
root.style.backgroundColor = 'pink'
}

//call the main function
main();