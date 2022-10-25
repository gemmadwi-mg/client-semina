import React from 'react'
import Form from 'react-bootstrap/Form';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import SButton from '../../components/Button';

export default function SForm({form, handleChange, handleSubmit, isLoading }) {
    return (
        <Form>
            <TextInputWithLabel label={'Email'} name='email' value={form?.email} type="email" placeholder="Enter email" onChange={handleChange} />

            <TextInputWithLabel label={'Masukkan Password'} name='password' value={form?.password} type="password" placeholder="Password" onChange={handleChange} />

            <SButton loading={isLoading} disabled={isLoading} action={handleSubmit} variant="primary">
                Submit
            </SButton>
        </Form>
    )
}
