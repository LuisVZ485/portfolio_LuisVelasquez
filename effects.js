
// MENU
const toggleMenu = document.querySelector('nav .toggle-menu');
const navMenu = document.querySelector('nav .nav-menu');

toggleMenu.addEventListener('click', function () {
	navMenu.classList.toggle('show');
})


const allSection = document.querySelectorAll('header, section');
const allLinkMenu = navMenu.querySelectorAll('a');


allSection.forEach(section=> {
	if((window.scrollY >= section.offsetTop - 64) && (window.scrollY <= (section.offsetTop - 64) + section.offsetHeight)) {
		allLinkMenu.forEach(link=> {
			if(link.getAttribute('href') === '#'+section.id) {
				link.classList.add('active');
			} else {
				link.classList.remove('active');
			}

			link.addEventListener('click', function () {
				navMenu.classList.remove('show');
			})
		})
	}
})

window.addEventListener('scroll', function () {
	allSection.forEach(section=> {
		if((this.scrollY >= section.offsetTop - 72) && (this.scrollY <= (section.offsetTop + section.offsetHeight) - 64)) {
			allLinkMenu.forEach(link=> {
				if(link.getAttribute('href') === '#'+section.id) {
					link.classList.add('active');
				} else {
					link.classList.remove('active');
				}
			})
		}
	})
})



// BUTTONS, CHANGE OF COLOR

// NAV

const toggleTheme1 = document.querySelector('#toggle-themej');
const navcolor = document.querySelector('nav');
const toggleIcon = document.querySelector('#toggle-icon');
const logoDev = document.querySelector('#logo-name');
const navMenuWhite = document.querySelector('.nav-menu');


toggleTheme1.addEventListener('click' , function(){
	navcolor.classList.toggle("white");
	toggleIcon.classList.toggle("toggle-theme___icon");
	
});

// LOGO BACKGROUNG

toggleTheme1.addEventListener('click' , function(){
	
	

	if(toggleIcon.classList.contains("bx-brightness-half"))
	{
		toggleIcon.classList.replace("bx-brightness-half", "bxs-brightness-half");
	}
	else
	{
		toggleIcon.classList.replace("bxs-brightness-half", "bx-brightness-half");
	}

	
	
});

// LOGO NAME

toggleTheme1.addEventListener('click' , function(){
	

	if(logoDev.classList.contains("logo"))
	{
		logoDev.classList.replace("logo", "logo-White");
	}
	else
	{
		logoDev.classList.replace ("logo-White", "logo");
	}
});

// MENU

toggleTheme1.addEventListener('click' , function(){
	

	if(toggleMenu.classList.contains("toggle-menu"))
	{
		toggleMenu.classList.replace("toggle-menu", "toggle-menu__white");
	}
	else
	{
		toggleMenu.classList.replace ("toggle-menu__white", "toggle-menu");
	}

	if(navMenuWhite.classList.contains("nav-menu"))
	{
		navMenuWhite.classList.replace("nav-menu", "nav-menu__white");
	}
	else
	{
		navMenuWhite.classList.replace ("nav-menu__white", "nav-menu" );
	}
});


// HEADER



