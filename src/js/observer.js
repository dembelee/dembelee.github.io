const observerFunction = (animationClass, classStyles) => {
	if (window.innerWidth >= 0 && window.innerWidth <= 1200) {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (!entry.isIntersecting) return
					entry.target.classList.add(animationClass)
				})
			},
			{
				threshold: 0.1,
			}
		)
		observer.observe(document.querySelector(classStyles))
	} else {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (!entry.isIntersecting) return
					entry.target.classList.add(animationClass)
				})
			},
			{
				threshold: 0.5,
			}
		)
		observer.observe(document.querySelector(classStyles))
	}
}

const observerAnimations = () => {
	const servicesSite = '/services.html'
	const crewSite = '/crew.html'
	const body = document.querySelector('body')
	body.style.overflowX = 'hidden'

	if (window.location.pathname === '/') {
		// main site animations
		// aboutus section
		observerFunction('aboutus__animation-first', '.aboutus__first')
		observerFunction('aboutus__animation-second', '.aboutus__second')
		observerFunction('aboutus__animation-third', '.aboutus__third')
		observerFunction('aboutus__box-styles', '.aboutus__box')
		// end of aboutus section
		// custody section
		observerFunction('custody__name-styles', '.custody__name')
		observerFunction('custody__container-first-styles', '.custody__container-first')
		observerFunction('custody__container-second-styles', '.custody__container-second')
		observerFunction('custody__container-third-styles', '.custody__container-third')
		// end of custody section
		// offers section
		observerFunction('offers__head-styles', '.offers__head')
		observerFunction('offers__body--title-styles', '.offers__body--title')
		observerFunction('offers__body--text-styles', '.offers__body--text')
		observerFunction('offers__body--services-styles', '.offers__body--services')
		observerFunction('offers__body--btn-styles', '.offers__body--btn')
		// end of offers section
		// office section
		observerFunction('office__styles', '.office')
		// end of office section
		observerFunction('findus__card-styles', '.findus__card')
		observerFunction('paws-walking', '.findus__paws')
		footerElementsAnimations()
	} else if (window.location.pathname === servicesSite) {
		// services site animations
		observerFunction('head__styles', '.head')
		observerFunction('services__styles', '.services__cards')
		observerFunction('visitus__styles', '.visitus__container')
		footerElementsAnimations()
	} else if (window.location.pathname === crewSite) {
		// crew site animations
		observerFunction('head__styles', '.head')
		observerFunction('meetus__card--styles', '.meetus__card')
		observerFunction('meetus__container--styles', '.meetus__container')
		observerFunction('banner__styles', '.banner')
		footerElementsAnimations()
	}
}

const footerElementsAnimations = () => {
	observerFunction('findus__top-styles', '.findus__box')
	observerFunction('findus__list-styles', '.findus__list')
}

observerAnimations()
