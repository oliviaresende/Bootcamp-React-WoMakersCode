
import React from 'react'

import { getDepartments } from '../service/api'

function Departments(props) {

    const handleGetDepartaments = async () => {
        const { showLoading, hideLoading } = props

        showLoading('Carregando departamentos...')

        const response = await getDepartments().then(response => {
            hideLoading()
            return response
        })
        console.log({ response })
    }

    return (
        <button onClick={handleGetDepartaments}>Buscar departamentos</button>
    )
}

export default Departments
