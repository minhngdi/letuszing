import React, { Component } from 'react';

class NavbarMenu1 extends Component {
  render() {
    return (
      <div>
        <div class="row">
        className={style.DropdownMenu}
          <div class="logo">
            <a href="index.html">Lhander</a>
          </div>

          <nav id="main-nav-wrap">
            <ul class="main-navigation">
              <li><a href="index.html#intro" title="">Home</a></li>
              <li><a href="index.html#process" title="">Process</a></li>
              <li><a href="index.html#features" title="">Features</a></li>
              <li><a href="index.html#pricing" title="">Pricing</a></li>
              <li><a href="index.html#faq" title="">FAQ</a></li>
              <li><a href="styles.html" title="">styles</a></li>
              <li class="highlight with-sep"><a href="#" title="">Sign Up</a></li>
            </ul>
          </nav>

          <a class="menu-toggle" href="#"><span>Menu</span></a>

        </div>

      </div>
    );
  }
}

export default NavbarMenu1;
