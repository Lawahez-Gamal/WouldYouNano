import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";
import { Link , withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import React, { PureComponent, Fragment } from "react";
import User from "./User";

class NavBar extends PureComponent {
  state = {
    isOpen: false
  };

  toggle = () =>  {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { authUser } = this.props;

    return (
      <div>
        <Navbar  variant="dark" light expand="md">
          <NavbarBrand tag={Link} to="/" >Would You Rather</NavbarBrand>
          {authUser &&
          <Fragment>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/add">New Question</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/leaderboard">LeaderBoard</NavLink>
                </NavItem>
                <NavItem>
                  <User id={authUser}/>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to='/logout'>Logout</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Fragment>
          }
        </Navbar>
      </div>
    );
  }
}

NavBar.propTypes = {
  authUser: PropTypes.string,
};

function mapStateToProps ({ authUser }) {
  return {
    authUser
  }
}

export default withRouter(connect(mapStateToProps, null)(NavBar))
