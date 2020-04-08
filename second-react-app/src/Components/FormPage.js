import React from "react";
import "../index.css"
import { RegisterForm } from "../Components/RegisterFrom.js"

export class FormPage extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Cadastro Alunas</h2>
                <RegisterForm />
            </div>
        )
    }
}
