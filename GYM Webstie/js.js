/*-------------------------- nav --------------------------*/

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{menu.classList.toggle('fa-times');
                     navbar.classList.toggle('active');}

window.onscroll = () =>{

menu.classList.remove('fa-times');
navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');}
}

/*-------------------------- contact --------------------------*/

document.querySelector('.contact form .btn').onclick = () => {
		document.querySelector('.contact .show').style.display = 'block';}
	
document.querySelector('.contact .show .pop button').onclick = () => {
	document.querySelector('.contact .show').style.display = 'none';}
