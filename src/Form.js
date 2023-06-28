import React, {Fragment, useState} from 'react';

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
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        //myHeaders.append("Cookie", "Authorization=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODA1Mjk0NjQsImV4cCI6MTY4MDUzMzA2NCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiY3Jpcy5tc2ZAZ21haWwuY29tIn0.rBvV96T2Y0tcPDpeybpQPVjHx7aY78wpPsnhlkIHKwTjgIWMCrHzWJkbqZATK2YenTN_dTAyKxYNYLN-5DB8BwyIei3nXfhgYJiWxc7M2lNq_gMib7hqoHRhk1uqcsWP_Ex9dfIqaWrQWKPo3fUd6Jlgu4QQJ-SlF6JZbTShpgEjf4fSOVrFmNc15bUwUxsctGigFrZ0YWTVYlEaDuFJj1bOtI47vbPRSLEHAsX88rdpCQOikrxEx545BRsmpoB9-YBxpuRAc7RyMVcEF08WY10h1VHSTsSvNps9PNImLMd95FZuRPpE5DL511WvlwhY4ytpyfXq5UQy9_5QyJGxhg; BEARER=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODA1Mjk0NjQsImV4cCI6MTY4MDUzMzA2NCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiY3Jpcy5tc2ZAZ21haWwuY29tIn0.rBvV96T2Y0tcPDpeybpQPVjHx7aY78wpPsnhlkIHKwTjgIWMCrHzWJkbqZATK2YenTN_dTAyKxYNYLN-5DB8BwyIei3nXfhgYJiWxc7M2lNq_gMib7hqoHRhk1uqcsWP_Ex9dfIqaWrQWKPo3fUd6Jlgu4QQJ-SlF6JZbTShpgEjf4fSOVrFmNc15bUwUxsctGigFrZ0YWTVYlEaDuFJj1bOtI47vbPRSLEHAsX88rdpCQOikrxEx545BRsmpoB9-YBxpuRAc7RyMVcEF08WY10h1VHSTsSvNps9PNImLMd95FZuRPpE5DL511WvlwhY4ytpyfXq5UQy9_5QyJGxhg");

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
            var token = JSON.parse(result).token;
            console.log(token);
            localStorage.setItem('token', token);
            // Ya meter un token: authToken
        }

        fetch("http://127.0.0.1:8001/api/login_check", requestOptions)
        .then(response => response.text())
        .then(result => saveToken(result))
        .catch(error => console.log('error', error));
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
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