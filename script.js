document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".hamburger")
  const menu = document.querySelector(".nav-menu")
  const links = document.querySelectorAll(".nav-link")

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active")
    menu.classList.toggle("active")
  })

  links.forEach((l) => {
    l.addEventListener("click", () => {
      menuBtn.classList.remove("active")
      menu.classList.remove("active")
    })
  })

  const slider = document.querySelector(".hero-slider")

  if (slider) {
    const slides = document.querySelectorAll(".slide")
    const next = document.querySelector(".next-slide")
    const prev = document.querySelector(".prev-slide")
    let i = 0

    function show(idx) {
      slides.forEach((s) => s.classList.remove("active"))

      if (idx >= slides.length) i = 0
      else if (idx < 0) i = slides.length - 1
      else i = idx

      slides[i].classList.add("active")
    }

    next.addEventListener("click", () => show(i + 1))
    prev.addEventListener("click", () => show(i - 1))

    setInterval(() => {
      show(i + 1)
    }, 5000)
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show-element")
      }
    })
  })

  const hidden = document.querySelectorAll(".hidden-element")
  hidden.forEach((el) => obs.observe(el))
})
