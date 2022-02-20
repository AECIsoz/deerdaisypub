class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      h1 {
        font-family: 'Castellar', sans-serif;
        text-transform: uppercase;
        font-size: 4rem;
        font-weight: 500;
        color: #42001d;
        margin-bottom: 0;
        padding-left: 30px;
      }
      @media only screen and (max-width: 1400px) {
        h1 {  
            font-size: 4rem;
        }
      }
      .header-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding-bottom: 10px;
        padding-top: 20px;
        background-color: #fadcd9;
    }
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .logo img {
        width: 120px;
        height: 120px;
    }
   
    .menu-items {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        padding: 0;
    }
    .nav-container li {
        display: flex;
        align-items: center;
        padding: 5px 10px;
        margin-top: 5px;
        border-radius: 5px;
    }
    .nav-container li:hover {
        color: #004225;
    }
    .nav-container a, .small-header-menu a {
        font-size: 1.2rem;
        text-decoration-line: none;
        font-family: 'Open Sans Condensed', sans-serif;
        font-weight: 700;
        color: #42001d;
        transition: color, font-size, font-style;
    }
    .nav-container a:hover, .small-header-menu a:hover {
        color: #004225;
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

    .deer {
        width: 30px;
        padding-right: 10px;
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
            font-weight: 500;
        }
        .small-header-logo h1 {
            font-size: 1.8rem;
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
            <img src="./resources/Logo.png" alt="logo with a deer jumping over a daisy">
            <h1>The Deer & Daisy</h1>
            </div>
           
            <div class="nav-container ">
                <ul class="menu-items">
                    <li>
                    <img class="deer" src="./resources/001-deer-shape.png">
                    <a href="index.html">Hem</a></li>
                    <li>
                    <img class="deer" src="./resources/001-deer-shape.png">
                    <a href="afternoon_tea.html">Afternoon Tea</a></li>
                    <li>
                    <img class="deer" src="./resources/001-deer-shape.png">
                    <a href="#">Semesterbostad</a></li>
                    <li>
                    <img class="deer" src="./resources/001-deer-shape.png">
                    <a href="pub.html">Pub</a></li>
                    <li>
                    <img class="deer" src="./resources/001-deer-shape.png">
                    <a href="contact.html">Kontakt</a></li>
                </ul>
            </div>
        </nav>

        <!-- header medium and small screens -->
        <nav class="header-small">
            <div class="small-header-logo">
                <img src="./resources/Logo.png" alt="logo with a deer jumping over a daisy">
                <h1>The Deer & Daisy</h1>
            </div>            
            <div class="small-header-menu">
                <ul>
                    <li><a href="index.html">Hem</a></li>
                    <li><a href="#">Afternoon Tea</a></li>
                    <li><a href="#">Semesterbostad</a></li>
                    <li><a href="pub.html">Pub</a></li>
                    <li><a href="contact.html">Kontakt</a></li>
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