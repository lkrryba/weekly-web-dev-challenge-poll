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
      <a rel="noopener" href="https://scrimba.com/">Scrimba</a>
      <a rel="noopener" href="https://scrimba.com/learn/weeklychallenge">Weekly Web Dev Challenge</a>
    </div>
    <div class="footer-col-two">
      <p>Resources/Social</p>
      <a rel="noopener" href="https://twitter.com/scrimba">Twitter</a>
      <a rel="noopener" href="https://www.youtube.com/c/Scrimba">YouTube</a>
      <a rel="noopener" href="https://scrimba.com/podcast/">Scrimba Podcast</a>
    </div>
    <div class="footer-col-three">
      <p>Site Engineers</p>
      <a rel="noopener" href="https://twitter.com/RybaLeanne">@RybaLeanne</a>
      <a rel="noopener" href="https://twitter.com/thebigdavec">@thebigdavec</a>
      <a rel="noopener" id="pumpkin" class="confettiClicks" onmousedown="party.confetti(this)">@pumpkin</a>
    </div>
  </footer >
    `
}

}

customElements.define('footer-component', Footer)