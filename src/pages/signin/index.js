import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import SButton from '../../components/Button';
import axios from 'axios';
import SAlert from '../../components/Alert';

function PageSignIn() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        try {
            const response = axios.post('http://localhost:4000/api/v1/cms/auth/signin', {
                email: form.email,
                password: form.password

            });
            console.log(response)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Container md={12}>
            <SAlert message={'test'}  type='danger'/>
            <Card style={{ width: '50%' }} className='m-auto mt-5'>
                <Card.Body>
                    <Card.Title className='text-center'>Form Signin</Card.Title>
                    <Form>
                        <TextInputWithLabel label="Email address" name='email' value={form.email} type="email" placeholder="Enter email" onChange={handleChange} />

                        <TextInputWithLabel label="Password" name='password' value={form.password} type="password" placeholder="Password" onChange={handleChange} />

                        <SButton action={handleSubmit} variant="primary">
                            Submit
                        </SButton>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default PageSignIn;
