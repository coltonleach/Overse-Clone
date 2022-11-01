const services = document.querySelectorAll('.services')

services.forEach((service, i) => {
  const title = service.querySelector('.service-title')
  title.addEventListener('click', () => {
    services.forEach((service, j) => {
      if (service.classList.contains('active') && i !== j) {
        service.classList.remove('active')
      }
    })
    service.classList.toggle('active')
  })
})

const cursor = document.querySelector('.cursor')
const borderCursor = document.querySelector('.border-cursor')
window.addEventListener('mousemove', (e) => {
  cursor.style.top = `${e.clientY}px`
  cursor.style.left = `${e.clientX}px`
  borderCursor.style.top = `${e.clientY}px`
  borderCursor.style.left = `${e.clientX}px`
})
