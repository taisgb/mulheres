document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mainNav = document.querySelector(".main-nav")

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      const nav = mainNav.querySelector("ul")
      if (nav.style.display === "flex") {
        nav.style.display = "none"
      } else {
        nav.style.display = "flex"
        nav.style.flexDirection = "column"
        nav.style.position = "absolute"
        nav.style.top = "4rem"
        nav.style.left = "0"
        nav.style.right = "0"
        nav.style.backgroundColor = "white"
        nav.style.padding = "1rem"
        nav.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
        nav.style.zIndex = "50"
      }
    })
  }

  // Accordion functionality for FAQ sections
  const accordionItems = document.querySelectorAll(".accordion-item")

  if (accordionItems.length > 0) {
    accordionItems.forEach((item) => {
      const header = item.querySelector(".accordion-header")

      header.addEventListener("click", () => {
        // Close all other accordion items
        accordionItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active")
          }
        })

        // Toggle current item
        item.classList.toggle("active")
      })
    })
  }

  // Form validation
  const forms = document.querySelectorAll("form")

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault()

      let isValid = true
      const requiredFields = form.querySelectorAll(
        'input[type="text"], input[type="email"], input[type="tel"], textarea, select',
      )

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false
          field.style.borderColor = "#f43f5e"
        } else {
          field.style.borderColor = ""
        }
      })

      if (isValid) {
        // Show success message
        const successMessage = document.createElement("div")
        successMessage.className = "success-message"
        successMessage.textContent = "Formulário enviado com sucesso! Entraremos em contato em breve."
        successMessage.style.backgroundColor = "#dcfce7"
        successMessage.style.color = "#166534"
        successMessage.style.padding = "1rem"
        successMessage.style.borderRadius = "var(--border-radius)"
        successMessage.style.marginTop = "1rem"

        form.appendChild(successMessage)
        form.reset()

        // Remove success message after 5 seconds
        setTimeout(() => {
          successMessage.remove()
        }, 5000)
      } else {
        // Show error message
        const errorMessage = document.createElement("div")
        errorMessage.className = "error-message"
        errorMessage.textContent = "Por favor, preencha todos os campos obrigatórios."
        errorMessage.style.backgroundColor = "#fee2e2"
        errorMessage.style.color = "#b91c1c"
        errorMessage.style.padding = "1rem"
        errorMessage.style.borderRadius = "var(--border-radius)"
        errorMessage.style.marginTop = "1rem"

        // Remove existing error message if any
        const existingError = form.querySelector(".error-message")
        if (existingError) {
          existingError.remove()
        }

        form.appendChild(errorMessage)

        // Remove error message after 5 seconds
        setTimeout(() => {
          errorMessage.remove()
        }, 5000)
      }
    })
  })
})
