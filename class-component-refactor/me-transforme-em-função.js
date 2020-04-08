import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-react-ui'

function ExampleComponent(props) {
    const [showForm, setShowFrom] = useState(false)
    const [email, setEmail] = useState("")
    const [name, setName] = useState(props.name)

    useEffect(() => {
        //alguma coisa
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        /* executa alguma request 
        ....................
        */
    }

    const renderForm = () => {
        return (
            <Form onSubmit={handleSubmit}>
                <Form.Input name="name" value={name} onChange={e => setName(e.target.value)} />
                <Form.Input name="email" value={email} onChange={e => setEmail(e.target.value)} />
                <Form.Button type="submit">Submit!</Form.Button>
            </Form>
        )
    }
    return (
        <div >
            {showForm ? (renderForm())
                : (<Fragment>
                    <h3>Hi, {name}</h3>
                    <Button onClick={() => setShowFrom(!showForm)} >Enter Email Address!</Button>
                </Fragment>
                )}
        </div>
    );
}