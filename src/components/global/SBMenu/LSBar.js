import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Menu from "./_menu";

export default class LSBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: Menu.mni,
      amenu: {},
      child: []
    };
  }

  async componentDidMount() {
    return this.state.menu.map(async (v, i) => {
      if (v.default) {
        this.setState({ child: v.child, amenu: v });
      }
    });
  }

  _mchild = async c => {
    this.setState({ child: c.child, amenu: c });
  };

  render() {
    const { amenu, child, menu } = this.state;
    return (
      <div className="">
        <div className="left-sidenav">
          <div className="main-icon-menu">
            <nav className="nav">
              {menu.length > 0
                ? menu.map((v, i) => {
                    return (
                      <button
                        onClick={() => {
                          this._mchild(v);
                        }}
                        key={i}
                        className={
                          amenu.id === v.id ? "nav-link active" : "nav-link"
                        }
                        data-toggle="tooltip-custom"
                        data-placement="top"
                        title={v.title}
                        data-original-title={v.title}
                      >
                        <img
                          src={"/assets/images/sb-icons/" + v.icon + ".svg"}
                          className="svg nav-svg"
                          alt="alt"
                        />
                      </button>
                    );
                  })
                : null}
            </nav>
          </div>
          <div className="main-menu-inner">
            <div className="menu-body slimscroll">
              <div className="main-icon-menu-pane active">
                <div className="title-box">
                  <h6 className="menu-title">{amenu ? amenu.title : null}</h6>
                </div>
                <ul className="nav">
                  {child.length > 0
                    ? child.map((v, i) => {
                        return (
                          <NavLink
                            key={i}
                            to={v.path}
                            className="nav-link"
                            data-toggle="tooltip-custom"
                            data-placement="top"
                            title={v.title}
                            data-original-title={v.title}
                          >
                            <i className={v.icon}></i> {v.title}
                          </NavLink>
                        );
                      })
                    : null}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
