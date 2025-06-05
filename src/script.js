// Mobile Navigation Toggle
const mobileToggle = document.querySelector(".mobile-toggle")
const nav = document.querySelector("nav")

if (mobileToggle && nav) {
  mobileToggle.addEventListener("click", () => {
    nav.classList.toggle("active")
    mobileToggle.innerHTML = nav.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>'
  })
}

// Close mobile nav when clicking outside
document.addEventListener("click", (e) => {
  if (nav && nav.classList.contains("active") && !nav.contains(e.target) && !mobileToggle.contains(e.target)) {
    nav.classList.remove("active")
    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>'
  }
})

// Login Form Validation
const loginForm = document.querySelector(".auth-section .auth-form")
if (loginForm && window.location.pathname.includes("login")) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = loginForm.querySelector("#email").value
    const password = loginForm.querySelector("#password").value

    if (email && password) {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.")
        return
      }

      alert("Login successful! Redirecting to your dashboard...")
      // In real app: window.location.href = 'dashboard.html';
    } else {
      alert("Please fill in all required fields.")
    }
  })
}

// Registration Form Validation
const registerForm = document.querySelector(".auth-section .auth-form")
if (registerForm && window.location.pathname.includes("register")) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const fullName = registerForm.querySelector("#fullname").value
    const email = registerForm.querySelector("#email").value
    const password = registerForm.querySelector("#password").value
    const confirmPassword = registerForm.querySelector("#confirm-password").value
    const terms = registerForm.querySelector("#terms").checked

    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill in all required fields.")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.")
      return
    }

    // Password validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.")
      return
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.")
      return
    }

    if (!terms) {
      alert("Please agree to the Terms of Service and Privacy Policy.")
      return
    }

    alert("Registration successful! Welcome to Wanderlust Adventures.")
    // In real app: window.location.href = 'dashboard.html';
  })
}

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  if (header) {
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)"
      header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)"
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
    }
  }
})

// Social login handlers
const socialBtns = document.querySelectorAll(".social-btn")
socialBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault()
    const provider = btn.classList.contains("google") ? "Google" : "Facebook"
    alert(`${provider} login integration would be implemented here.`)
  })
})

// Enhanced form interactions
const formInputs = document.querySelectorAll(
  '.auth-form input[type="text"], .auth-form input[type="email"], .auth-form input[type="password"]',
)
formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.parentElement.classList.add("focused")
  })

  input.addEventListener("blur", () => {
    if (!input.value) {
      input.parentElement.classList.remove("focused")
    }
  })
})

// Dark mode toggle
const darkModeToggle = document.querySelector(".dark-mode-toggle")
if (darkModeToggle) {
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
  })
}