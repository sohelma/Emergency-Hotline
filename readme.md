1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById:
One element can select only
Syntax: document.getElementById("id")
use for unique ID
Cannot select multiple elements.

getElementsByClassName:
Select first element matching a CSS selector
Syntax: document.querySelector("class")
use for class-based selection & updates with DOM changes
select multiple elements

querySelector("selector")
Flexible CSS-style selection.
Syntax:document.querySelector(".class")
Static
Single-first match returned only 

querySelectorAll("selector")
Flexible CSS-style selection.
Syntax: document.querySelectorAll(".class")
Select all elements matching a CSS selector
Static
Multiple – returns all matches.

2. How do you create and insert a new element into the DOM?

document.createElement() to create a new HTML element,also add text or HTML inside the element.
createElement() only creates the element in memory, not in DOM
prepend, appendChild, insertBefore insert into the page.
Moreover nest elements by creating children first, then appending them.

3. What is Event Bubbling and how does it work?
After click on even (child) element first run on child then parents then parent’s parent, continuing like this by DOM tree called bubbling.

document.getElementById("child").addEventListener("click", () => {
  console.log("Child");
});
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent");
});
document.body.addEventListener("click", () => {
  console.log("Body");
});


4. What is Event Delegation in JavaScript? Why is it useful?
A process in java script where we can add single event listener to their parent element instead of individual listener add. Here event bubbling can use.
 
Use full as no need add multiple listener except one, easy and clean.


5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault():
Prevents the default action 

stopPropagation():
Stops the event from bubbling up the DOM tree.
Does NOT stop default action.








