import React, {Fragment, useState} from 'react';
import {urlLogin} from './Servicies/urls';


const Form = () => {
    const [datos, setDatos] = useState({
        user: '',
        pass: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const handelPasswordToggle = () => {

        var inputPassword = document.querySelector('#password');
        if (inputPassword.type === "text") {
            inputPassword.type = "password";
        } else {
            inputPassword.type = "text";
        }

    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.user + ' ' + datos.pass)

        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "username": datos.user,
            "password": datos.pass
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        function saveToken(result) {
            //console.log(result)
            var token = JSON.parse(result).token;
            console.log(token);
            localStorage.setItem('token', token);
            alert('Acceso concedido y token guardado en localStorage')
            // Ya meter un token: authToken
        }

        fetch(urlLogin+"/api/login_check", requestOptions)
            .then(response => response.text())
            .then(result => saveToken(result))
            .catch(error => console.log('error', error));
    }

    return (
        <Fragment>
            <h1>Formulario de Login</h1>
            <form className="row" onSubmit={enviarDatos} noValidate>
                <div className="form-group p-3">
                    <label htmlFor="validationTooltip01" className="form-label">User</label>
                    <input type="text" placeholder="Jorge" className="form-control" id="validationTooltip01" onChange={handleInputChange} name="user" required></input>
                    <div className="valid-tooltip">
                        Looks good!
                    </div>
                </div>
                <div className="form-group p-3">
                    <input id="password" type="password" placeholder="Password" className="form-control" onChange={handleInputChange} name="pass" required></input>
                    <i id="togglePassword" onClick={handelPasswordToggle}>View</i>
                </div>
                <div className="form-group p-3">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
            {/*<ul>
                <li>{datos.nombre}</li>
                <li>{datos.apellido}</li>
            </ul>*/}
        </Fragment>
    );
}
 
export default Form;