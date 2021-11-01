console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert('The contact form has submitted successfully!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


	image.addEventListener('mouseover', function(){
  		// image.src = "images/walking-duck-rainbow.gif" ////<-------------BONUS TRICK IMAGE CHANGE 
		  														// ACTIVATE LINES 27-29 WITH LINE 19
		alert('Here comes jealous brother duck');
		// setTimeout(function(){
		// 	alert("Here comes brother duck!"); <-----------------couldn't get to work with line 19 trick but tried
		// 	},10000);
	});

	// image.addEventListener('mouseout', function(){ ////<--------------ACTIVATE WITH LINE 19
    // 	image.src = "images/rubberduck.png"
	// }); 