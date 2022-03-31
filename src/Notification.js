import React from "react";
import { useState } from "react";
import { Toast, ToastContainer } from 'react-bootstrap/Toast'


const Notification = () => {
    const [show, setShow] = useState(false)

    return (
        <ToastContainer position="top-end" className="p-3">
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <strong className="me-auto">NFT purchased</strong>
                </Toast.Header>
                <Toast.Body>Our blockchain-based machine learning algorithms powered by advanced AI have determined that you want this NFT, so it has been automatically purchased for you. This is in your web3 meta verse plot blockchain wallet</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default Notification