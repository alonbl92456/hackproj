import React from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const CardWrapper = (props) => {

    let body = props.body === undefined || props.body === null ? true : props.body;
    let link = props.link;
    let cardBody = props.children;
    let cardHeader = (
        <CardHeader>
            {props.title}
        </CardHeader>
    );
    if (body) {
        cardBody =
            <CardBody>
                {props.children}
            </CardBody>
    }

    if (link) {
        cardHeader =
            (
                <CardHeader>
                    {props.title}
                    <div className="card-header-actions">
                        <NavLink className="card-header-action btn" to={link} exact >
                            <i className={"fa fa-arrow-right"}></i>
                        </NavLink>

                    </div>
                </CardHeader>
            );
    }


    return (
        <Card>
            {cardHeader}
                {cardBody}
        </Card>
    );
}

export default CardWrapper;
