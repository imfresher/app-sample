import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Dropdown } from 'react-bootstrap';
import Block from 'views/components/Block';
import LanguageSwitcher from 'views/common/LanguageSwitcher';
import Avatar from 'assets/images/avatar.png';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    className="d-block link-dark text-decoration-none dropdown-toggle"
    href="javascript.void(0)"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

function Header(props) {
  return (
    <header id="AppHeader" className="AppHeader">
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2">
          <a href="/" className="d-flex align-items-center mr-3 text-dark text-decoration-none">
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path
                d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                fill="#FFF"
                />
                <path
                d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                fill="#555AB9"
                />
                <path
                d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                fill="#91BAF8"
                />
              </g>
            </svg>
          </a>

          <div className="d-flex align-items-center col">
            <form className="w-100 me-3">
              <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
            </form>
          </div>

          <div className="d-flex align-items-center">
            <Block
              className="Block__language d-flex"
              title={<FormattedMessage id="doc.Lifecycle.language" />}
            >
              <LanguageSwitcher id="language" />
            </Block>

            <Dropdown className="block block__account ml-4">
              <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
                <img src={Avatar} alt="mdo" width="32" height="32" className="rounded-circle" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/">Dashboard</Dropdown.Item>
                <Dropdown.Item href="/">My Profile</Dropdown.Item>
                <Dropdown.Item href="/">Register</Dropdown.Item>
                <Dropdown.Item href="/">Login</Dropdown.Item>
                <Dropdown.Item href="/">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
