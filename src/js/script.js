const footerYear = document.querySelector('.footer__bottom-year')
const btnHumburger = document.querySelector('.humburger-btn')
const btnBars = document.querySelector('.fa-bars')
const navbarDesktop = document.querySelector('.navbar-desktop')
const navbarMobile = document.querySelector('.navbar-mobile')
const navbarItems = document.querySelectorAll('.navbar__item')
const navbarItemsMob = document.querySelectorAll('.navbar__item')
const navbarItemsDesk = navbarDesktop.querySelectorAll('.navbar__item')
const sections = document.querySelectorAll('.section')
const mainPage = document.querySelector('.main-page')

const navActive = () => {
	navbarMobile.classList.toggle('navbar-mobile--active')
	btnBars.classList.toggle('fa-xmark')
	mainPage.classList.toggle('no-scroll')

	navbarItemsMob.forEach(item => {
		item.addEventListener('click', navActive)
	})

	btnHumburger.addEventListener('click', navActive)
}

btnHumburger.addEventListener('click', navActive)

function currentYear() {
	footerYear.textContent = new Date().getFullYear()
}
currentYear()

//scrollSpy

const options = {
    rootMargin: '0px',
	threshold: 1.0
}

const handleScrollSpy = entries => {
	if (document.body.classList.contains('main-page')) {
		entries.forEach(entry => {
			// console.log(entry)
			const activeNav = navbarDesktop.querySelector(`a[href='#${entry.target.id}']`)
			console.log(`${entry.target.id}`)

			if (entry.isIntersecting) {
				navbarItemsDesk.forEach(item => item.classList.remove('active'))
				activeNav.classList.add('active')
                console.log(activeNav);
			}
		})
	}
}

const observer = new IntersectionObserver(handleScrollSpy, options)

sections.forEach(section => {
	observer.observe(section)
})
