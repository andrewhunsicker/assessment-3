console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`submit successful`)
	//console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let duck = document.getElementById(`duck1`)
duck.addEventListener(`mouseover`, () =>{
	alert(`duckboi says that you are killin it!!
	ask him more on his profile page =)`)
})

// duck.addEventListener(`mousover`, () =>{
// 	alert(`duckboi thanks you and says "you're killing it!"`)
// } )
