import React from 'react'
import { Modal, ModalFooter, ModalBody, Button, ModalHeader } from 'reactstrap';
import CardWrapper from '../CardWrapper/CardWrapper';

const ModelWrapper = (props) => {

    return (
        <Modal toggle={props.toggle} isOpen={props.isOpen} className={"modal-" + props.type} >
            <ModalHeader toggle={props.toggle}>
                {props.title}
            </ModalHeader>
            {props.children}
        </Modal>
    );
}

export default ModelWrapper;