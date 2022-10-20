import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import SButton from '../../components/Button';

function PageSignIn() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <Container md={12}>
            <Card style={{ width: '50%' }} className='m-auto mt-5'>
                <Card.Body>
                    <Card.Title className='text-center'>Form Signin</Card.Title>
                    <Form>
                        <TextInputWithLabel label="Email address" name='email' value={form.email} type="email" placeholder="Enter email" onChange={handleChange} />

                        <TextInputWithLabel label="Password" name='password' value={form.password} type="password" placeholder="Password" onChange={handleChange} />

                        <SButton variant="primary">
                            Submit
                        </SButton>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default PageSignIn;
