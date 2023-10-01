//get end of url to decide whether to display "home" on menu
const url = window.location.href
const lastSegment = url.split('/').pop()

// Mobile Nav Opener only loads after html has parsed else "navOpener" doesn't exist
document.addEventListener('DOMContentLoaded', (event) => {
  const navOpener = document.querySelector('.nav-opener')
  const nav = document.querySelector('nav')

  navOpener.addEventListener('click', () => {
    nav.classList.toggle('nav-open')
    navOpener.classList.toggle('exit')
  })
})

// the nav html
class Nav extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
    <!-- Start of Nav -->
    <div class="nav-opener">
        <div class="nav-icon-line-1"></div>
        <div class="nav-icon-line-2"></div>
        <div class="nav-icon-line-3"></div>
    </div>
    <nav>
    
      <div class="nav-other-links">
      ${
        lastSegment.length !== 0
          ? `<a href="/" class="nav-links" rel="noopener" target="_blank">Home</a>`
          : ``
      } 
        <a class="nav-links" href="/hall-of-fame.html" rel="noopener" target="_blank">Hall of Fame</a>
        <a class="nav-scrimba nav-links" href="https://scrimba.com/" rel="noopener" target="_blank"><img class="nav-logo" src="../../../imgs/scrimba-black.svg" alt="scrimba-logo"></a>
        <a class="nav-links" href="/#prev_challenges">Previous Challenges</a>
        <a class="nav-links" href="/javascriptmas/javascriptmas.html" rel="noopener" target="_blank">JavaScriptmas</a>
        </div>
        <a class="nav-links FAQ" href="/faq.html" rel="noopener" target="_blank"><img class="faq-logo" src="../imgs/faq logo.png"></a>
    </nav>    
    `

    
  }
}

customElements.define('nav-component', Nav)



