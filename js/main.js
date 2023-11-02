var typed = new Typed(".auto-type",{
	strings: ["Frontend Developer"],
	typeSpeed:150,
	backSpeed:150,
	loop:true
	
})

let order=document.querySelector(".order")

function selectcard() {
			
	order.classList.remove("d-none")			
	order.classList.remove("disallow")
}

function remove() {
order.classList.add("disallow")
order.classList.add("d-none")

}