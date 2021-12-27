class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        .footer-container {
            display: inline-flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            font-size: 0.8rem;
            background-color: #555E56;
            padding: 10px;
            margin-top: 20px;
        }
        .icons {
            display: flex;
            justify-content: space-evenly;
            width: 30%;
        }
        .fab {
            font-size: 2.5rem;
        }
        </style>
        <footer class="footer-container">
            <article>
            <p>&copy; 2021 Isoz Creative Web</p>
            </article>
            <article class="icons">
                <a target="_blank" href="https://www.linkedin.com/in/annaisoz/"><i class="fab fa-linkedin"></i></a>
                <a target="_blank" href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
            </article>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);