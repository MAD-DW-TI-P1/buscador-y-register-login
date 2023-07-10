import React from 'react';

function Admin() {

  const loadPrivateData = async () => {
    const token = localStorage.getItem('token');

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "bearer "+ token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    function showInfo(result) {
      var info = JSON.parse(result)
      console.log(info, result)
      alert(info['info'])
    }

    fetch("http://127.0.0.1:8000/api/test", requestOptions)
      .then(response => response.text())
      .then(result => showInfo(result))
      .catch(error => console.log('error', error)
    );
  }

  return (
    <>
      <h1>Admin</h1>
      <button type="submit" onClick={loadPrivateData} className="btn btn-primary">Datos</button>
    </>
    );
}

export default Admin;
