const menuToggle = document.getElementById('menuToggle')
const mainNav = document.getElementById('mainNav')
const scrollTopButton = document.getElementById('scrollUp')

const navOverlay = document.createElement('div')
navOverlay.className = 'nav-overlay'
document.body.appendChild(navOverlay)

function toggleMenu() {
	const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true'

	menuToggle.classList.toggle('active')
	mainNav.classList.toggle('active')
	navOverlay.classList.toggle('nav-overlay--active')

	menuToggle.setAttribute('aria-expanded', !isExpanded)

	document.body.style.overflow = mainNav.classList.contains('active')
		? 'hidden'
		: ''
}

menuToggle.addEventListener('click', toggleMenu)
navOverlay.addEventListener('click', toggleMenu)

const navLinks = document.querySelectorAll('.main-nav__link')
navLinks.forEach(link => {
	link.addEventListener('click', () => {
		if (window.innerWidth <= 768 && mainNav.classList.contains('active')) {
			toggleMenu()
		}
	})
})

window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		scrollTopButton.classList.add('visible')
	} else {
		scrollTopButton.classList.remove('visible')
	}
})

scrollTopButton.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})
