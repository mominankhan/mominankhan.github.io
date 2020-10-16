
// You may see functions defined and invoked 
//     in slightly different ways. So far we have just created a function like so:
function myFunction() {
    alert('hello');
}

// But you can also create a function that doesn't have a name
/*
function() {
   alert('hello');
 }
*/

//This is called an anonymous function — it has no name! It also won't do anything on its own. You generally use an anonymous function along with an event handler, for example the 
//      following would run the code inside the function whenever the associated button is clicked
const myButton = document.getElementById('mybutton1');

myButton.onclick = function(){
    alert('hello');
   
}

// The above example would require there to be a <button> element available on the page to select and click. 
//document.querySelector('html').style.backgroundColor = 'red'; 