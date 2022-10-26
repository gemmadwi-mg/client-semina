import React, { useState } from 'react'
import { Container, Card } from 'react-bootstrap';
import SAlert from '../../components/Alert';
import { useNavigate, Navigate } from 'react-router-dom';
import SForm from './form';
import { postData } from '../../utils/fetch';
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/auth/actions";

function PageSignIn() {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [alert, setAlert] = useState({
        status: false,
        message: '',
        type: 'danger'
    })

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const response = await postData(`/cms/auth/signin`,
                form
            );
            
            dispatch(userLogin(response.data.data.token, response.data.data.role))

            setIsLoading(false);
            navigate(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error.response.data.msg)
            setAlert({
                status: true,
                type: 'danger',
                message: error?.response?.data?.msg ?? 'Internal server error',
            })

        }

    };


    return (
        <Container md={12} className='my-5'>
            <div className='m-auto' style={{ width: '50%' }}>
                {alert.status && <SAlert message={alert.message} type={alert.type} />}
            </div>
            <Card style={{ width: '50%' }} className='m-auto mt-5'>
                <Card.Body>
                    <Card.Title className='text-center'>Form Signin</Card.Title>
                    <SForm form={form} handleChange={handleChange} isLoading={isLoading} handleSubmit={handleSubmit} />
                </Card.Body>
            </Card>
        </Container>
    );
}

export default PageSignIn;
