const rateContainer = document.querySelector('.rating-state__container')
const thankyouContainer = document.querySelector('.thankyou-state__container')
const circles = document.querySelectorAll('.rating-state__circle')
const btn = document.querySelector('.rating-state__btn')
const score = document.querySelector('.thankyou-state__score')
const previousElement = document.querySelector('.rating-state__circle-grey')
const deactivate = document.querySelector('.deactivate')

const removeGreyBgc = () => {
	circles.forEach(circle => circle.classList.remove('rating-state__circle-grey'))
}

const changeWindows = () => {
	if (score.innerHTML != '') {
		rateContainer.classList.add('deactivate')
		thankyouContainer.classList.remove('deactivate')
	}
}

const addGreyBgc = () => {
	for (let circle of circles) {
		circle.addEventListener('click', function () {
			removeGreyBgc()
			circle.classList.add('rating-state__circle-grey')
			score.textContent = circle.innerHTML
		})
	}
}

addGreyBgc()

btn.addEventListener('click', changeWindows)
