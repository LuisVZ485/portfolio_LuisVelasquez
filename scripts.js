
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

// MENU

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
	toggleWords.classList.toggle("toggle-theme___icon")
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
// NAV


// HEADER

const headerWhite = document.querySelector('header');


toggleTheme1.addEventListener('click' , function(){

	headerWhite.classList.toggle("header-white");

});
// HEADER

// SERVICES SECTION


const servicesWhite = document.querySelector('#services');
const abilities = document.getElementsByClassName('blocks');
const nameOfAbilities = document.getElementsByClassName('skill-name');
const porcent = document.getElementsByClassName('porcent');

toggleTheme1.addEventListener('click' , function(){
	
	// section

	{// class services
		if(servicesWhite.classList.contains("services"))
		{
			servicesWhite.classList.replace("services", "services-white");
		}
		else
		{
			servicesWhite.classList.replace ("services-white", "services" );
		}
	}


	//container of skills

	//blocks of abilities
	
	{// abilities
		if(abilities[0].classList.contains("abilities"))
		{
			abilities[0].classList.replace("abilities", "abilities-white");
		}
		else
		{
			abilities[0].classList.replace ("abilities-white", "abilities" );
		}

		if(abilities[1].classList.contains("abilities"))
		{
			abilities[1].classList.replace("abilities", "abilities-white");
		}
		else
		{
			abilities[1].classList.replace ("abilities-white", "abilities" );
		}

		if(abilities[2].classList.contains("abilities"))
		{
			abilities[2].classList.replace("abilities", "abilities-white");
		}
		else
		{
			abilities[2].classList.replace ("abilities-white", "abilities" );
		}

		if(abilities[3].classList.contains("abilities"))
		{
			abilities[3].classList.replace("abilities", "abilities-white");
		}
		else
		{
			abilities[3].classList.replace ("abilities-white", "abilities" );
		}

		if(abilities[4].classList.contains("abilities"))
		{
			abilities[4].classList.replace("abilities", "abilities-white");
		}
		else
		{
			abilities[4].classList.replace ("abilities-white", "abilities" );
		}
	}
	//blocks of abilities

	
	

	// elements

	// name skill
	{//name of abilitie
		if(nameOfAbilities[0].classList.contains("name__abilitie"))
		{
			nameOfAbilities[0].classList.replace("name__abilitie", "name__abilitie-white");
		}
		else
		{
			nameOfAbilities[0].classList.replace ("name__abilitie-white", "name__abilitie" );
		}

		if(nameOfAbilities[1].classList.contains("name__abilitie"))
		{
			nameOfAbilities[1].classList.replace("name__abilitie", "name__abilitie-white");
		}
		else
		{
			nameOfAbilities[1].classList.replace ("name__abilitie-white", "name__abilitie" );
		}

		if(nameOfAbilities[2].classList.contains("name__abilitie"))
		{
			nameOfAbilities[2].classList.replace("name__abilitie", "name__abilitie-white");
		}
		else
		{
			nameOfAbilities[2].classList.replace ("name__abilitie-white", "name__abilitie" );
		}

		if(nameOfAbilities[3].classList.contains("name__abilitie"))
		{
			nameOfAbilities[3].classList.replace("name__abilitie", "name__abilitie-white");
		}
		else
		{
			nameOfAbilities[3].classList.replace ("name__abilitie-white", "name__abilitie" );
		}

		if(nameOfAbilities[4].classList.contains("name__abilitie"))
		{
			nameOfAbilities[4].classList.replace("name__abilitie", "name__abilitie-white");
		}
		else
		{
			nameOfAbilities[4].classList.replace ("name__abilitie-white", "name__abilitie" );
		}
	}
	// name skill

	// porcent
	{// class porcentaje
		if(porcent[0].classList.contains("porcentaje"))
		{
			porcent[0].classList.replace("porcentaje", "porcentaje-white");
		}
		else
		{
			porcent[0].classList.replace ("porcentaje-white", "porcentaje" );
		}

		if(porcent[1].classList.contains("porcentaje"))
		{
			porcent[1].classList.replace("porcentaje", "porcentaje-white");
		}
		else
		{
			porcent[1].classList.replace ("porcentaje-white", "porcentaje" );
		}

		if(porcent[2].classList.contains("porcentaje"))
		{
			porcent[2].classList.replace("porcentaje", "porcentaje-white");
		}
		else
		{
			porcent[2].classList.replace ("porcentaje-white", "porcentaje" );
		}

		if(porcent[3].classList.contains("porcentaje"))
		{
			porcent[3].classList.replace("porcentaje", "porcentaje-white");
		}
		else
		{
			porcent[3].classList.replace ("porcentaje-white", "porcentaje" );
		}

		if(porcent[4].classList.contains("porcentaje"))
		{
			porcent[4].classList.replace("porcentaje", "porcentaje-white");
		}
		else
		{
			porcent[4].classList.replace ("porcentaje-white", "porcentaje" );
		}
	}
	// porcent

	// elements
});


// SERVICES SECTION

// PORTFOLIO

const portfolioInWhite = document.querySelector('#portfolio');

{//class portfolio
	toggleTheme1.addEventListener('click' , function(){

		if(portfolioInWhite.classList.contains("portfolio"))
		{
			portfolioInWhite.classList.replace("portfolio", "portfolio-white");
		}
		else
		{
			portfolioInWhite.classList.replace ("portfolio-white", "portfolio" );
		}
	
	});
	
}
// PORTFOLIO


// CONTACT SECTION

const contactInWhite = document.querySelector('#contact');


{//class portfolio
	toggleTheme1.addEventListener('click' , function(){

		if(contactInWhite.classList.contains("contact"))
		{
			contactInWhite.classList.replace("contact", "contact-white");
		}
		else
		{
			contactInWhite.classList.replace ("contact-white", "contact" );
		}
	});

	
	
}

// CONTACT SECTION


// FOOTER SECTION

const footer = document.querySelector('.footer');

{//class portfolio
	toggleTheme1.addEventListener('click' , function(){

		if(footer.classList.contains("footer"))
		{
			footer.classList.replace("footer", "footer-white");
		}
		else
		{
			footer.classList.replace ("footer-white", "footer" );
		}
	});

	
	
}


// FOOTER SECTION


// CODE TO CHANGE THE WORDS

// HEADER
const toggleWords = document.querySelector('#toggle-words');
const title1 = document.querySelector('.title1');
const btnMore = document.querySelector('.more_profie');
const myBio = document.querySelector('.bio');
// HEADER

// NAV
const menuLink1 = document.querySelector('.menu-link1');
const menuLink2 = document.querySelector('.menu-link2');
const menuLink3 = document.querySelector('.menu-link3');
const menuLink4 = document.querySelector('.menu-link4');
// NAV

// SECTION SERVICES
const skillTitleOfServices = document.querySelector('.skill_title');
// SECTION SERVICES


const skillForTitle = document.querySelector('.skill-title');

let lenguage = "Spanish";
{//words in English
	// toggleTheme1.addEventListener('click' , function(){

	// 	title1.textContent = "Luis Velásquez - Desarrollador FrontEnd";
	// });

	toggleWords.addEventListener('click' , function(){
		if(lenguage == "Spanish")
		{
			lenguage = "English"

			// NAV
			menuLink1.textContent = "About me";
			menuLink2.textContent = "Services";
			menuLink3.textContent = "Portfolio";
			menuLink4.textContent = "Contact";
			// NAV

			// HEADER
			title1.textContent = "Luis Velásquez - Frontend Developer";
			btnMore.textContent = "More ";
			myBio.textContent = "Welcome, I am a web developer and I work particularly in the frontend area, in my spare time I like to walk and learn new skills to provide new and better services. In the page you can see some of my projects, skills and more.";
			// HEADER

			// SECTION SERVICES
			skillTitleOfServices.textContent = "Skills"
			// SECTION SERVICES

			
			
			
		}
		else if(lenguage == "English")
		{
			lenguage = "Spanish";
			
			// NAV


			menuLink1.textContent = "Acerca de mí";
			menuLink2.textContent = "Servicios";
			menuLink3.textContent = "Portafolio";
			menuLink4.textContent = "Contacto";



			// NAV

			// HEADER
			title1.textContent = "Luis Velásquez - Desarrollador Frontend";
			btnMore.textContent = "Más ";
			myBio.textContent = "Bienvenido, soy un desarrollador web con conocimientos en el área del front-end, en mi tiempo libre me gusta caminar y aprender nuevas habilidades para brindar nuevos y mejores servicios. En este portafolio puedes encontar algunos de mis proyectos, servicios y mas.";
			// HEADER


			// SECTION SERVICES
			skillTitleOfServices.textContent = "Habilidades"
			// SECTION SERVICES
		}
		
		
		
	});
	
}
// CODE TO CHANGE THE WORDS