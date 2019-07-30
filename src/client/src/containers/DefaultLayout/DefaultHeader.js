import React, { Component } from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
//import logo from '../../assets/img/brand/logo.svg'
import logo from '../../assets/img/newIconBigger.png'
import sygnet from '../../assets/img/newIconBiggerCut.png'
import NewAsideBarToggler from './NewAsideBarToggler';


const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <NewAsideBarToggler className="d-lg-none" display="md" mobile />
          <AppNavbarBrand
            full={{ src: logo, width: 89, height: 25, alt: 'HRme Logo' }}
            minimized={{ src: sygnet, width: 30, height: 30, alt: 'HRme Logo' }}
          />
          
        <NewAsideBarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
        </Nav>
        <Nav className="ml-auto" navbar>
        </Nav>
        <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />

      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
