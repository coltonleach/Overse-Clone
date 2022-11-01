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
