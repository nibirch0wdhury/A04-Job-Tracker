1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById is used to select one element using its unique id. Since id is always unique, it returns only one element.
getElementsByClassName is used to select elements using their class name. It can return multiple elements because many elements can have the same class.
querySelector is used to select the first element that matches a CSS selector. It is more flexible because it can select by id, class, or tag.
querySelectorAll is used to select all elements that match a CSS selector. It returns a list of elements instead of just one.

2. How do you create and insert a new element into the DOM?

To create a new element, first a new element is made using JavaScript. Then content like text or attributes can be added to it. After that, the element is inserted into the webpage by attaching it to an existing parent element. This makes the new element visible on the page.

3. What is Event Bubbling? And how does it work?

Event bubbling is when an event starts from the element where it happened and then moves upward to its parent elements.
For example, if you click a button inside a div, the event first happens on the button, then the div, then the body, and so on. This is called bubbling because the event moves upward like a bubble.

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where you add an event listener to a parent element instead of adding it to many child elements.
It works because of event bubbling. The parent can detect events from its children.
It is useful because it improves performance, reduces code, and works for elements that are added later dynamically.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() is used to stop the default behavior of an element. For example, stopping a form from submitting or stopping a link from opening.
stopPropagation() is used to stop the event from moving to parent elements. It stops event bubbling.
