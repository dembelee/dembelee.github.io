// body
const body = document.querySelector('body')

// hamburger icon
const bars = document.querySelector('.nav__mobile--bars')
const barsBtn = document.querySelector('.nav__mobile--btn')

// logo
const logo = document.querySelector('.nav__mobile--logo img')

// nav mobile, mobile menu & links
const navMobile = document.querySelector('.nav__mobile')
const mobileMenu = document.querySelector('.nav__mobile--menu')
const mobileLinks = document.querySelectorAll('.nav__mobile--link')

// nav desktop & desktop links
const navDesktop = document.querySelector('.nav__desktop')
const desktopLinks = document.querySelectorAll('.nav__desktop--link')

// footer year
const footerYear = document.querySelector('.footer__box--year')

const currentPageDesktop = () => {
	desktopLinks.forEach(link => {
		link.addEventListener('click', e => {
			// e.preventDefault()
			setTimeout(() => {
				// window.history.pushState({}, null, `${link.href}`)
			}, 100)
		})
	})
}

const handleNav = () => {
	const top = window.scrollY

	if (top > 0) {
		navMobile.classList.add('nav-handle')
		navDesktop.classList.add('nav-handle')
	} else if (top === 0) {
		navMobile.classList.remove('nav-handle')
		navDesktop.classList.remove('nav-handle')
	}
}

const currentPageMobile = e => {
	mobileLinks.forEach(link => {
		link.addEventListener('click', e => {
			e.preventDefault()
			setTimeout(() => {
				closeMenu()
				window.history.pushState({}, '', `${link.href}`)
			}, 300)
		})
	})
}

const closeMenu = () => {
	mobileMenu.classList.remove('handle-menu')
	resetAnimationBtn()
	bodyScroll()
}

const handleMenu = () => {
	mobileMenu.classList.toggle('handle-menu')
	currentPageMobile()
}

const resetAnimationBtn = () => {
	bars.classList.remove('btn-animation')
	bars.classList.add('btn-hide-animation')
}

const secondAnimation = () => {
	if (!bars.classList.contains('btn-animation')) {
		bars.classList.add('btn-hide-animation')
	} else {
		bars.classList.remove('btn-hide-animation')
	}
}

const animationBtn = () => {
	bars.classList.toggle('btn-animation')
	barsBtn.addEventListener('click', secondAnimation)
}

const bodyScroll = () => {
	body.classList.toggle('body-styles')
}

const actualYear = () => {
	const year = new Date().getFullYear()
	footerYear.textContent = year
}

actualYear()
currentPageDesktop()
window.addEventListener('scroll', handleNav)
barsBtn.addEventListener('click', () => {
	bodyScroll()
	animationBtn()
	handleMenu()
})
