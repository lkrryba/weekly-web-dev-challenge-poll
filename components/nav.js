//get end of url to decide whether to display "home" on menu
const url = window.location.href;
const lastSegment = url.split("/").pop();

// Mobile Nav Opener only loads after html has parsed else "navOpener" doesn't exist
document.addEventListener('DOMContentLoaded', (event) => {
  const navOpener = document.querySelector('.nav-opener')
  const nav = document.querySelector('nav')
  
  navOpener.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
      navOpener.classList.toggle('exit')
  })

})

// the nav html
class Nav extends HTMLElement{
    constructor(){
        super()

    }
    

connectedCallback(){
    this.innerHTML = `
    <!-- Start of Nav -->
    <div class="nav-opener">
        <div class="nav-icon-line-1"></div>
        <div class="nav-icon-line-2"></div>
        <div class="nav-icon-line-3"></div>
    </div>
    <nav>
      <a class="nav-scrimba" href="https://scrimba.com/" rel="noopener" target="_blank"><img class="nav-logo" src="../../../imgs/scrimba-black.svg" alt="scrimba-logo"></a>
      <div class="nav-other-links">
        ${ lastSegment.length !== 0 ? `<a href="/" rel="noopener" target="_blank">Home</a>` : ``} 
        <a target="_blank" rel="noopener" href="https://scrimba.com/learn/weeklychallenge/the-weekly-web-dev-challenge-word-count-latest-challenge-code-to-win-cE62LvsB">Current Challenge</a>  
        <a href="/hall-of-fame.html" rel="noopener" target="_blank">Hall of Fame</a>
        <a href="/#prev_challenges">Previous Challenges</a>
      </div>
    </nav>    
    `
}

}

customElements.define('nav-component', Nav)