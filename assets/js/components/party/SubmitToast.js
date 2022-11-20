import React, { useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';


const SubmitToast = ({type, message}) => {

    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);

    return (

            <ToastContainer className='toasted' containerPosition='absolute' position='middle-center'>
                <Toast bg={type} show={showA} onClose={toggleShowA} delay={2000} autohide>
                <Toast.Header>

                    <strong className="me-auto">{message}</strong>

                </Toast.Header>
                {/* <Toast.Body >Your vote has been send</Toast.Body> */}
                </Toast>
            </ToastContainer>
    
    );
}

export default SubmitToast;
