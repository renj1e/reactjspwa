import React from "react";
import "./TopBar.css";

function TopBar() {
  return (
    <div className="">
      <div className="topbar">
        <div className="topbar-left">
          <a href="/" className="logo">
            <span>
              <img
                src="/assets/images/logo-sm.png"
                alt="logo-small"
                className="logo-sm"
              />
            </span>
            <span>
              <img
                src="/assets/images/logo-dark.png"
                alt="logo-large"
                className="logo-lg"
              />
            </span>
          </a>
        </div>
        <nav className="navbar-custom">
          <ul className="list-unstyled topbar-nav float-right mb-0">
            <li className="hidden-sm">
              <a
                className="nav-link dropdown-toggle waves-effect waves-light"
                data-toggle="dropdown"
                href="/"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                English
                <img
                  src="/assets/images/flags/us_flag.jpg"
                  className="ml-2"
                  height="16"
                  alt=""
                />
                <i className="mdi mdi-chevron-down"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="/">
                  <span>German </span>
                  <img
                    src="/assets/images/flags/germany_flag.jpg"
                    alt=""
                    className="ml-2 float-right"
                    height="14"
                  />
                </a>
                <a className="dropdown-item" href="/">
                  <span>Italian </span>
                  <img
                    src="/assets/images/flags/italy_flag.jpg"
                    alt=""
                    className="ml-2 float-right"
                    height="14"
                  />
                </a>
                <a className="dropdown-item" href="/">
                  <span>French </span>
                  <img
                    src="/assets/images/flags/french_flag.jpg"
                    alt=""
                    className="ml-2 float-right"
                    height="14"
                  />
                </a>
                <a className="dropdown-item" href="/">
                  <span>Spanish </span>
                  <img
                    src="/assets/images/flags/spain_flag.jpg"
                    alt=""
                    className="ml-2 float-right"
                    height="14"
                  />
                </a>
                <a className="dropdown-item" href="/">
                  <span>Russian </span>
                  <img
                    src="/assets/images/flags/russia_flag.jpg"
                    alt=""
                    className="ml-2 float-right"
                    height="14"
                  />
                </a>
              </div>
            </li>
            <li className="dropdown notification-list">
              <a
                className="nav-link dropdown-toggle arrow-none waves-light waves-effect"
                data-toggle="dropdown"
                href="/"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="dripicons-bell noti-icon"></i>
                <span className="badge badge-danger badge-pill noti-icon-badge">
                  2
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-lg">
                <h6 className="dropdown-item-text">Notifications (18)</h6>
                <div className="slimscroll notification-list">
                  <a href="/" className="dropdown-item notify-item active">
                    <div className="notify-icon bg-success">
                      <i className="mdi mdi-cart-outline"></i>
                    </div>
                    <p className="notify-details">
                      Your order is placed
                      <small className="text-muted">
                        Dummy text of the printing and typesetting industry.
                      </small>
                    </p>
                  </a>
                  <a href="/" className="dropdown-item notify-item">
                    <div className="notify-icon bg-warning">
                      <i className="mdi mdi-message"></i>
                    </div>
                    <p className="notify-details">
                      New Message received
                      <small className="text-muted">
                        You have 87 unread messages
                      </small>
                    </p>
                  </a>
                  <a href="/" className="dropdown-item notify-item">
                    <div className="notify-icon bg-info">
                      <i className="mdi mdi-glass-cocktail"></i>
                    </div>
                    <p className="notify-details">
                      Your item is shipped
                      <small className="text-muted">
                        It is a long established fact that a reader will
                      </small>
                    </p>
                  </a>
                  <a href="/" className="dropdown-item notify-item">
                    <div className="notify-icon bg-primary">
                      <i className="mdi mdi-cart-outline"></i>
                    </div>
                    <p className="notify-details">
                      Your order is placed
                      <small className="text-muted">
                        Dummy text of the printing and typesetting industry.
                      </small>
                    </p>
                  </a>
                  <a href="/" className="dropdown-item notify-item">
                    <div className="notify-icon bg-danger">
                      <i className="mdi mdi-message"></i>
                    </div>
                    <p className="notify-details">
                      New Message received
                      <small className="text-muted">
                        You have 87 unread messages
                      </small>
                    </p>
                  </a>
                </div>
                <a href="/" className="dropdown-item text-center text-primary">
                  View all <i className="fi-arrow-right"></i>
                </a>
              </div>
            </li>
            <li className="dropdown">
              <a
                className="nav-link dropdown-toggle waves-effect waves-light nav-user"
                data-toggle="dropdown"
                href="/"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <img
                  src="/assets/images/users/user-4.jpg"
                  alt="profile-user"
                  className="rounded-circle"
                />
                <span className="ml-1 nav-user-name hidden-sm">
                  Amelia <i className="mdi mdi-chevron-down"></i>
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="/">
                  <i className="dripicons-user text-muted mr-2"></i> Profile
                </a>
                <a className="dropdown-item" href="/">
                  <i className="dripicons-wallet text-muted mr-2"></i> My Wallet
                </a>
                <a className="dropdown-item" href="/">
                  <i className="dripicons-gear text-muted mr-2"></i> Settings
                </a>
                <a className="dropdown-item" href="/">
                  <i className="dripicons-lock text-muted mr-2"></i> Lock screen
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                  <i className="dripicons-exit text-muted mr-2"></i> Logout
                </a>
              </div>
            </li>
          </ul>
          <ul className="list-unstyled topbar-nav mb-0">
            <li>
              <button className="button-menu-mobile nav-link waves-effect waves-light">
                <i className="dripicons-menu nav-icon"></i>
              </button>
            </li>
            <li className="hide-phone app-search">
              <form role="search" className="">
                <input
                  type="text"
                  placeholder="Search..."
                  className="form-control"
                />
                <a href="/">
                  <i className="fas fa-search"></i>
                </a>
              </form>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default TopBar;
