class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      h1 {
        font-family: 'Petit Formal Script', cursive;
        font-size: 5rem;
        font-weight: 500;
        color: #42001d;
      }
      @media only screen and (max-width: 1400px) {
        h1 {  
            font-size: 4rem;
        }
      }
      .header-container {
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding-bottom: 10px;
        padding-top: 20px;
        background-color: #fadcd9;
    }
    .nav-container {
        display: inline-flex;
        height: 140px;
        justify-content: center;
    }
    .logo {
        width: 20%;
    }
    .left, .right {
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
    }
    .left {
        width: 60%;
        /*background-image: url('./resources/wallpaper_pink.png');*/
    }
    .right {
        width: 20%;
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
        padding: 5px 10px;
        margin-top: 5px;
        border-radius: 5px;
    }
    .nav-container li:hover {
        color: #004225;
    }
    .nav-container a, .small-header-menu a {
        font-size: 0.8rem;
        text-transform: uppercase;
        text-decoration-line: none;
        font-family: 'Oswald', sans-serif;
        color: #42001d;
        transition: color, font-size, font-style;
    }
    .nav-container a:hover, .small-header-menu a:hover {
        color: #004225;
        font-size: 1rem;
        font-style: italic;
    }

    .header-small {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #fadcd9;
    }
    /* header for medium and small screens */
    
    .small-header-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        margin-top: 30px;
    }
    .small-header-logo img {
        height: 50px;
    }

    .small-header-menu {
        display: flex;
    }
    .small-header-menu ul {
        display: inline-flex;
        justify-content: space-evenly;
        width: 100%;
    }
    .small-header-menu li {
        display: flex;
    }
       
    @media only screen and (max-width: 1200px) {
        .header-container {
            display: none;
        }
        .header-small {
            display: block;
        }
        
        .small-header-logo h1 {
            font-size: 2.4rem;
            padding-left: 30px;
        }
    }
    @media only screen and (max-width: 500px) {
        a {
            font-size: 0.8rem;
        }
        .small-header-logo h1 {
            font-size: 1.6rem;
            padding-left: 30px;
        }
        .small-header-logo {
            margin-top: 10px;
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
                    <li><a href="index.html">Hem</a></li>
                    <li><a href="pub.html">Pub</a></li>
                    <li><a href="#">B&B</a></li>
                    <li><a href="#">Semesterbostad</a></li>
                </ul>
            </div>
        </nav>

        <!-- header medium and small screens -->
        <nav class="header-small">
            <div class="small-header-logo">
                <img src="./resources/logo.png" alt="logo with a deer jumping over a daisy">
                <h1>The Deer & Daisy</h1>
            </div>
            
            <div class="small-header-menu">
                <ul>
                    <li><a href="index.html">Hem</a></li>
                    <li><a href="#">Pub</a></li>
                    <li><a href="#">B&B</a></li>
                    <li><a href="#">Semesterbostad</a></li>
                </ul>
            </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);

function makeGray() {
    document.getElementById('logotype').style.backgroundColor = '#fadcd9';
}

document.addEventListener('scroll', makeGray);