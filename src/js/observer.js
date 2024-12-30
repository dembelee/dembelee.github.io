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

	if (window.location.pathname === '/') {
		// main site animations
		observerFunction('elements-slide', '.elements-styles')
		observerFunction('custody__styles', '.custody')
		observerFunction('offers__styles', '.offers__container')
		observerFunction('office__styles', '.office')
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
