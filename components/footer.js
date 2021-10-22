class Footer extends HTMLElement{
    constructor(){
        super()
    }


    
connectedCallback(){
    
    this.innerHTML = `
    <div id="pumpkinModal" class="modal">
    <div class="modal-content">
      <img id="pumpkinImage" src="./imgs/pumpkin-ee.png" onmousedown="party.confetti(this)" />
      <h3 id="pumpkinModalClose">🎉🎊 Pumpkin is proud of you 🎊 🎉</h3>
    </div>
  </div>
    <div id="pumpkinModal" class="modal">
    <div class="modal-content">
      <img id="pumpkinImage" src="./imgs/pumpkin-ee.png" onmousedown="party.confetti(this)" />
      <h3 id="pumpkinModalClose">🎉🎊 Pumpkin is proud of you 🎊 🎉</h3>
    </div>
  </div>
    <footer>
    <div class="footer-col-one">  
      <img class="footer-logo" src="../../../imgs/scrimba-black.svg" alt="scrimba-logo">
      <span class="spacing-span"><svg class="spacing-svg" width="15" height="10" viewBox="0 0 108 72" fill="black" xmlns="http://www.w3.org/2000/svg" class="ei ei-ag "><rect x="48" width="60" height="20" rx="10" class="ei ei-ai "></rect><rect x="25" y="52" width="60" height="20" rx="10" class="ei ei-aj "></rect><rect x="49" y="26" width="36" height="20" rx="10" class="ei ei-ak "></rect><rect y="52" width="20" height="20" rx="10" class="ei ei-al "></rect></svg><a rel="noopener" href="https://scrimba.com/">Scrimba</a></span>
      <span class="spacing-span"><svg class="spacing-svg" width="15" height="10" viewBox="0 0 108 72" fill="black" xmlns="http://www.w3.org/2000/svg" class="ei ei-ag "><rect x="48" width="60" height="20" rx="10" class="ei ei-ai "></rect><rect x="25" y="52" width="60" height="20" rx="10" class="ei ei-aj "></rect><rect x="49" y="26" width="36" height="20" rx="10" class="ei ei-ak "></rect><rect y="52" width="20" height="20" rx="10" class="ei ei-al "></rect></svg><a rel="noopener" href="https://scrimba.com/learn/weeklychallenge">Weekly Web Dev Challenge</a></span>
    </div>
    <div class="footer-col-two">
      <p>Resources/Social</p>
      <i class="fab fa-twitter"><a rel="noopener" href="https://twitter.com/scrimba">Twitter</a></i>
      <i class="fab fa-youtube"><a rel="noopener" href="https://www.youtube.com/c/Scrimba">YouTube</a></i>
      <i class="fab fa-discord"><a rel="noopener" href="https://discord.gg/xYbN3ukJZY">Discord</a></i>
      <i class="fas fa-podcast"><a rel="noopener" href="https://scrimba.com/podcast/">Scrimba Podcast</a></i>
    </div>
    <div class="footer-col-three">
      <p>Site Engineers</p>
      <a rel="noopener" href="https://twitter.com/RybaLeanne">@RybaLeanne</a>
      <a rel="noopener" href="https://twitter.com/thebigdavec">@thebigdavec</a>
      <a rel="noopener" id="pumpkin" class="confettiClicks" onmousedown="party.confetti(this)" style="cursor: pointer;">@pumpkin</a>
    </div>
  </footer >
    `
}

}

customElements.define('footer-component', Footer)