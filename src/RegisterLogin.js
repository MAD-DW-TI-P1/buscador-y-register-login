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

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.user + ' ' + datos.pass)
        

        // Por Get no es seguro
        // fetch(urlLogin+"/front/register?username="+datos.user+"&password="+datos.pass)
        //     .then(response => response.json())
        //     .then(result => {
        //             console.log(result)
        //             alert('Usuario creado')
        //         }
        //     )
        //     .catch(error => {
        //         console.log('error', error)
        //         alert('Error al crear usuario')
        //     });




        // Por post no me funciona, tengo que sacar las variables del symfony
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
            console.log(result)
            localStorage.setItem('token', result);
            alert('Usuario registrado')
        }

        fetch(urlLogin+"/front/register", requestOptions)
        .then(response => response.text())
        .then(result => saveToken(result))
        .catch(error => console.log('error', error));
    }

    return (
        <Fragment>
            <h1>Formulario de Registro</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="form-group p-3">
                    <input type="text" placeholder="User" className="form-control" onChange={handleInputChange} name="user"></input>
                </div>
                <div className="form-group p-3">
                    <input type="text" placeholder="Password" className="form-control" onChange={handleInputChange} name="pass"></input>
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