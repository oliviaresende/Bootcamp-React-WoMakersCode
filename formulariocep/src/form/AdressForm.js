
import React from 'react'
import { Form, FormGroup, Label, Input, FormFeedback, Container, Row, Col, Button, Spinner } from 'reactstrap';

class AddressForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cep: '',
            bairro: '',
            logradouro: '',
            localidade: '',
            uf: '',
            numero: '',
            loading: false,
            error: ''
        }
    }

    verificaCep = async (cep) => {
        this.setState({ bairro: '', logradouro: '', localidade: '', uf: '', numero: '' })
        console.log("VERIFICA", cep)
        this.setState({ error: false })
        return await fetch(`http://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(cepResult => {
                this.setState({ loading: false })
                return cepResult
            })
            .catch(error => this.setState({ error: true, loading: false }))
    }

    handleChange = async (field) => {
        this.setState({ bairro: '', logradouro: '', localidade: '', uf: '', numero: '' })
        const { name, value } = field;
        this.setState({ [name]: value, error: false })
        if (name === 'cep' && value.length === 9) {
            this.setState({ loading: true })
            const cepObject = await this.verificaCep(value)
            if (!cepObject || cepObject.error) {
                this.setState({ error: true })
                return
            }
            console.log("CEPOBJ", cepObject)
            const { cep, logradouro, bairro, localidade, uf } = cepObject
            this.setState({ cep, logradouro, bairro, localidade, uf })
        }
    }

    handleBlur = async value => {
        if (value.length === 9) {
            this.setState({ loading: true })
            const cepObject = await this.verificaCep(value)
            if (!cepObject || cepObject.error) {
                this.setState({ error: true })
                return
            }
            const { cep, logradouro, bairro, localidade, uf } = cepObject
            this.setState({ cep, logradouro, bairro, localidade, uf })
        }
    }

    render() {
        const { loading, cep, logradouro, bairro, localidade, uf, numero, error } = this.state
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        {loading && <Spinner size="sm" color="primary" />}
                        <Form style={{ textAlign: 'left' }}>
                            <FormGroup>
                                <Label for="cep">CEP</Label>
                                <Input
                                    invalid={this.state.error}
                                    name="cep"
                                    value={cep}
                                    onChange={e => this.handleChange(e.target)}
                                    onBlur={e => this.handleBlur(e.target.value)}
                                    maxLength={9}
                                    placeholder="xxxxx-xxx"
                                />
                                <FormFeedback invalid={error.toString()}>Error</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="logradouro" style={{ marginTop: '10px' }}>Logradouro</Label>
                                <Input
                                    name="logradouro"
                                    value={logradouro}
                                    onChange={e => this.handleChange(e.target)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="bairro" style={{ marginTop: '10px' }}>Bairro</Label>
                                <Input
                                    name="bairro"
                                    value={bairro}
                                    onChange={e => this.handleChange(e.target)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="localidade" style={{ marginTop: '10px' }}>Localidade</Label>
                                <Input
                                    name="localidade"
                                    value={localidade}
                                    onChange={e => this.handleChange(e.target)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="uf" style={{ marginTop: '10px' }}>UF</Label>
                                <Input
                                    name="uf"
                                    value={uf}
                                    onChange={e => this.handleChange(e.target)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="numero" style={{ marginTop: '10px' }}>Numero</Label>
                                <Input
                                    name="numero"
                                    value={numero}
                                    onChange={e => this.handleChange(e.target)}
                                />
                            </FormGroup>
                            <FormGroup style={{ padding: '20px' }}>
                                <Button color="success" onClick={this.verificaCep}>Enviar</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AddressForm