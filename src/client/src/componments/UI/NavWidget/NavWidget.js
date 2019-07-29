import React from 'react'
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';
import { Card, CardBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import * as cssClasses from './NavWidget.module.scss';



/**
 * Represnents dashboard nav widget
 *
 * @param {Object} props
 * @returns
 */
const NavWidget = (props) => {

    const { className, cssModule, header, value, icon, color, children, invert, link, disable, ...attributes } = props;


    const card = { style: '', bgColor: '', icon: icon };

    if (invert) {
        card.style = 'text-white';
        card.bgColor = 'bg-' + color;
    }

    let classes;
    let style = { textDecoration: 'none', color: 'white' };
    
    if (disable) {
         style["cursor"] = "auto";
         classes = mapToCssModules(classNames(className, card.style, card.bgColor, ""), cssModule);
    }
    else {
         classes = mapToCssModules(classNames(className, card.style, card.bgColor, cssClasses.grow), cssModule);
    }

    const handleClick = (e,disable) => {
        if(disable) e.preventDefault();
    }

    return (
        <div>
            <Card className={classes} {...attributes}>
                <NavLink onClick={(e) => {handleClick(e,disable)}} to={link ? link : '/'} exact style={style}>
                    <CardBody>
                        <div className="h1 text-muted text-right mr-3">
                            <i>{value ? value : ""}</i>
                            <i> </i>
                            <i className={card.icon}></i>
                        </div>
                        <div className="h4 mb-0">{header}</div>
                        <small className="text-muted text-uppercase font-weight-bold">{children}</small>
                    </CardBody>
                </NavLink>
            </Card>
        </div>
    )
}

export default NavWidget;
