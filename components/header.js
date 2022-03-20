class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      h1 {
        font-family: 'Castellar', serif;
        text-transform: uppercase;
        font-size: 4.5rem;
        font-weight: 500;
        color: #42001d;
        margin: 0;
      }
      @media only screen and (max-width: 1400px) {
        h1 {  
            font-size: 4rem;
        }
      }
      .header-container {
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding-bottom: 10px;
        padding-top: 20px;
        background-color: #FBF7EB;
    }
    .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-right: 30px;
    }
    .logo {
        display: inline-flex;
        justify-content: center;
        width: 25%;
    }
    .logo img {
        width: 180px;
        height: 180px;
    }
    .heading {
        display: inline-flex;
    }
   
    .menu-items {
        display: inline-flex;
        flex-direction: column;
        width: 20%;
        padding: 0;
    }
    ul {
        padding-inline-start: 0;
    }
    .nav-container li {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 10px;
        border-radius: 5px;
    }
    .nav-container li:hover {
        color: #004225;
    }
    .nav-container a, .small-header-menu a {
        font-size: 0.8rem;
        text-decoration-line: none;
        font-family: 'Open Sans', sans-serif;
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
        background-color: #fbf7eb;
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
        height: 80px;
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

    @media only screen and (max-width: 1300px) {
        h1 {
            font-size: 3.4rem;
        }
    }
    @media only screen and (max-width: 1100px) {
        h1 {
            font-size: 3rem;
        }
        .logo img {
            width: 140px;
            height: 140px;
        }
    }
    @media only screen and (max-width: 950px) {
        h1 {
            font-size: 2.2rem;
        }
        .logo img {
            width: 110px;
            height: 110px;
        }
    }
       
    @media only screen and (max-width: 700px) {
        .header-container {
            display: none;
        }
        .header-small {
            display: block;
        }
        
        .small-header-logo h1 {
            font-size: 2rem;
            padding-left: 30px;
        }
    }
    @media only screen and (max-width: 550px) {
        a {
            font-size: 0.8rem;
            font-weight: 500;   
        }
        .small-header-logo h1 {
            font-size: 1.5rem;
            padding-left: 30px;
        }
        .small-header-logo {
            margin-top: 20px;
            margin-bottom: 10px;
        }
    }
      </style>
      <header>
        <nav class="header-container" id="header">
            <div class="nav-container">
                <div class="logo">
                    <img src="./resources/logo_utan_text.jpg" alt="logo artwork of a deer head with a daisy in it's mouth and green leaves gently falling around it">
                </div>
                <h1 class="heading">The Deer & Daisy</h1>
                <ul class="menu-items">
                    <li><a href="index.html">Hem</a></li>
                    <li><a href="afternoon_tea.html">Afternoon Tea</a></li>
                    <li><a href="pub.html">Pub</a></li>
                    <li><a href="about_us.html">Om oss</a></li>
                    <li><a href="contact.html">Kontakt</a></li>
                    <li><a href="index.html">Svenska / </a><a href="index_eng.html">English</a></li>
                </ul>
            </div>
        </nav>

        <!-- header medium and small screens -->
        <nav class="header-small">
            <div class="small-header-logo">
                <img src="./resources/logo_utan_text.jpg" alt="logo artwork of a deer head with a daisy in it's mouth and green leaves gently falling around it">
                <h1>The Deer & Daisy</h1>
            </div>            
            <div class="small-header-menu">
                <ul>
                    <li><a href="index.html">Hem</a></li>
                    <li><a href="afternoon_tea.html">Afternoon Tea</a></li>
                    <li><a href="pub.html">Pub</a></li>
                    <li><a href="about-us.html">Om oss</a></li>
                    <li><a href="contact.html">Kontakt</a></li>
                    <li><a href="index.html">Svenska / </a><a href="index_eng.html">English</a></li>
                </ul>
            </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);

/*function makeGray() {
    document.getElementById('logotype').style.backgroundColor = '#FBF7EB';
}

document.addEventListener('scroll', makeGray);*/