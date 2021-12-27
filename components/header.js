class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      h1 {
        font-family: 'Petit Formal Script', cursive;
        font-size: 4.5rem;
        font-weight: 500;
        
      }
      .header-container {
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding-bottom: 10px;
        
    }
    .nav-container {
        display: inline-flex;
        height: 140px;
        justify-content: center;
    }
    .logo {
        width: 15%;
    }
    .left, .right {
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
    }
    .left {
        width: 80%;
        background-image: url('./resources/wallpaper_pink.png');
    }
    .right {
        width: 15%;
    }
    .menu-items {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        padding: 0;
    }
    .nav-container li {
        display: flex;
        padding: 10px;
        border-radius: 5px;
        transition: background-color 1s ease-in
    }
    .nav-container li:hover {
        background-color: #CCE3D0;
    }
    .nav-container a, .small-header-menu a {
        text-transform: uppercase;
        text-decoration-line: none;
        font-family: 'Lato', sans-serif;
        color: #558257;
        transition: color;
    }
    .nav-container a:hover, .small-header-menu a:hover {
        color: black;
    }

    .header-small {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
    /* header for medium and small screens */
    
    .small-header-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        background-image: url("./resources/background-backdrop-pattern-design-texture-shiny-1418296-pxhere.com.jpg");
        background-size: cover;
        background-repeat: no-repeat;
    }
    .small-header-logo img {
        height: 80px;
    }
    .small-header-menu {
        display: flex;
        background-color: #555E56;
    }
    .small-header-menu ul {
        display: inline-flex;
        justify-content: space-evenly;
        width: 100%;
    }
    .small-header-menu li {
        display: flex;
    }
    @media only screen and (max-width: 1150px) {
        .logo img {
            height: 90px;
        }
    }
    
    @media only screen and (max-width: 900px) {
        .header-container {
            display: none;
        }
        .header-small {
            display: block;
        }
    }
    @media only screen and (max-width: 500px) {
        a {
            font-size: 0.8rem;
        }
    }
      </style>
      <header>
        <nav class="header-container" id="header">
            <div class="nav-container logo" id="logotype">
            <img src="./resources/logo.png" alt="logo with a deer jumping over a daisy">
            </div>
            <div class="nav-container left">
                <h1>The Deer & Daisy</h1>
            </div>
            
            <div class="nav-container right">
                <ul class="menu-items">
                    <li><a href="#">Services</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </nav>

        <!-- header medium and small screens -->
        <nav class="header-small">
            <div class="small-header-logo">
                <img src="./resources/logo.png" alt="logo with a deer jumping over a daisy">
            </div>
            <div class="small-header-menu">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);

function makeGray() {
    document.getElementById('logotype').style.backgroundColor = '#cce3d0';
}

document.addEventListener('scroll', makeGray);