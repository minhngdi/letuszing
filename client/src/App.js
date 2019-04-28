import React, { Component } from 'react';
import logo from './logo.png';
import NavbarMenu from './components/NavbarMenu'
import SlideShow from './components/SlideShow'
import Footer from './components/Footer'

class App extends Component {
  render() {
    let links = [
      { label: 'About', link: '#about' },
      { label: 'Help', link: '#help' },
      { label: 'Contact', link: '#contact' },
    ];

    return (
      <div className="App">
        <div>
          <header>
            <NavbarMenu links={links} logo={logo} />
          </header>

          <body>
            <div className="slideshow-container">
              <SlideShow />
            </div>
          </body>

          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
