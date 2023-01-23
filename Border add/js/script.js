document.querySelectorAll(".image").forEach(function(element){
	element.onclick = border;
});

function border(){
	if (this.classList.contains('border')){
		this.classList.remove('border');
	}
	else{
		document.querySelectorAll('.image').forEach(function(element){
		element.classList.remove('border');
	});
		this.classList.add("border");
	}	
}