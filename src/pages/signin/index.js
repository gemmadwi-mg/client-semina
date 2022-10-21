import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import SAlert from '../../components/Alert';
import { useNavigate } from 'react-router-dom';
import { config } from '../../configs';
import SForm from './form';

function PageSignIn() {
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
            const response = axios.post(`${config.api_host_dev}/cms/auth/signin`, {
                form

            });
            console.log(response)

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

    }

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
