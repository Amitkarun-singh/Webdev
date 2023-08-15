/*20. Dynamically Adding List Items to an Ordered List
Visit page and look for “What you'll learn” section.
The section consists of a list of information on what you will be learning in the course. You are required to write
a JavaScript program that stores a pre-existing array of list items. On each button click, the program should
add a new list item in sequential order. The program should verify if any remaining items are available in the list
item array and add the next item to the list accordingly. If no items are left, the function should display a
message indicating that all items have been added.*/ 
const learnItems = [
    "HTML",
    "CSS",
    "JavaScript",
    "Web Development",
    "Frontend Frameworks",
    "Backend Technologies"
];

const learnList = document.getElementById("learnList");
const addButton = document.getElementById("addButton");
let currentItemIndex = 0;

addButton.addEventListener("click", function() {
    if (currentItemIndex < learnItems.length) {
        const newItem = document.createElement("li");
        newItem.textContent = learnItems[currentItemIndex];
        learnList.appendChild(newItem);
        currentItemIndex++;
    } else {
        addButton.disabled = true;
        addButton.textContent = "All Items Added";
    }
});
