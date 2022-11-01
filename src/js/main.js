const navBtn = document.querySelector(".burger-icon")
const navMobile = document.querySelector(".nav__mobile-list")
const allNavItems = document.querySelectorAll(".nav__item")

const handleNav = () => {
	navMobile.classList.toggle("navActive")
	// document.body.style.overflow = "hidden"

	allNavItems.forEach(item => {
		item.addEventListener("click", () => {
			navMobile.classList.remove("navActive")
		})
	})
}

navBtn.addEventListener("click", handleNav)