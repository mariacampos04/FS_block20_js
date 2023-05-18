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
const rootElement = document.getElementById("root");
const h1Element = document.createElement("h1");
h1Element.innerHTML = "FREELANCERS";
rootElement.appendChild(h1Element);

const unorderedList = document.createElement("ul");


for(let i = 0; i < users.length; i++){
    const user = users[i];
    const listElement = document.createElement("li"); 
    listElement.innerHTML = `name: ${user.name} age: ${user.age} occupation: ${user.occupation}`
    unorderedList.appendChild(listElement);


}

rootElement.appendChild(unorderedList);
//Continue working inside your main() function to create an unordered list element.


//Loop through the users array creating li elements. 


//Append those elements to your HTML document.



//Style your site using CSS.
//document.querySelector(root);
root.style.backgroundColor = 'pink'
}

//call the main function
main();