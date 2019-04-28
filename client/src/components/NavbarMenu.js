import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import './NavbarMenu.scss';

class NavbarMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    let linksMarkup = this.props.links.map((link, index) => {
      return (
        <li className="menu__list-item"><a className="menu__link" href={link.link}>{link.label}
        </a></li>
      )
    });

    return (
      <div>
        <nav className="menu">
          <h1 style={{
            backgroundImage: 'url(' + this.props.logo + ')'
          }} className="menu__logo">Let Us Zing</h1>

          <div className="menu__center collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav navbar-center ">
              <li><a className="menu__link">Zing with us</a></li>
            </ul>
          </div>

          <div className="menu__right">
            <ul className="menu__dropdown">
              <Dropdown style={{
                marginTop: '15px'
              }} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret color="#F2F0D0" font>
                  Account
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Profile</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Song list</DropdownItem>
                  <DropdownItem>Match list</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Log out</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ul>

            <ul className="menu__list">
              {linksMarkup}
              <Button outline color="danger">Zing with us♫</Button>{' '}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarMenu;
