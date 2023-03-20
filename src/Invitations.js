import React, { useState, useEffect } from 'react';
import Invitation from './Invitation';

function Invitations() {
  const [invitations, setInvitations] = useState([]);
  const [count, setCount] = useState(0);

  const [q, setQ] = useState("");
  const [searchParam] = useState(['nombre']);
  const [filterParam, setFilterParam] = useState(["all"]);

  // https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/
  /*
  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }); // Todo el rato se ejecuta
  */

  useEffect(() => {
    fetch('https://cristinamaser.com/api/invitations')
      .then(response => response.json())
      .then(responseJson => {setInvitations(responseJson.data); makeSelect(responseJson.data) });
  }, []);

  // El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada. Podría buscar en varios campos del array
  // Some evalua si al menos un elemento del array cumple con la condición
  // indexof busca un elemento
  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        if (filterParam == "all") {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          );
        } else {
          let group = item.groups.filter((g) => {
            return g.invitationgroup.nombre === filterParam;
          });
          if (group.length > 0) {
            return (
              item[newItem]
                .toString()
                .toLowerCase()
                .indexOf(q.toLowerCase()) > -1
            );
          }
        }


      });
    });
  }

  function makeSelect(items) {
    let select = document.querySelector('select');
    let groups = [];
    items.forEach((item) => {
      item.groups.forEach((g) => {
        if (!groups.includes(g.invitationgroup.nombre)) {
          groups.push(g.invitationgroup.nombre);
        }
      })
    });
    groups.forEach((group) => {
      let option = document.createElement('option');
      option.value = group;
      option.innerHTML = group;
      select.appendChild(option);
    });
  }

  return (
    <div>
      <h1>Invitaciones</h1>
      {/*<button onClick={() => setCount(count + 1)}>
        Sumar
      </button>*/}
      {/*<div className="select">
        <select
          onChange={(e) => {
            setFilterParam(e.target.value);
          }}
          className="custom-select"
          aria-label="Filtrar por grupo"
        >
          <option value="All">Todas</option>
          <option value="Arquitectura">Arquitectura</option>
          <option value="Flores">Flores</option>
        </select>
        <span className="focus"></span>
      </div>*/}
      <input
        type="search"
        name="search-form"
        id="search-form"
        className="form-control ds-input search-input"
        placeholder="Buscar..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <br/>
      <select name="select" className="form-select" onChange={(e) => {setFilterParam(e.target.value);}}>
        <option value="all" defaultValue>Todas</option>
      </select>
    
      <div className="container-flex d-flex flex-wrap align-items-center">
        {search(invitations).map((invitation, i) => (
          <Invitation src={invitation.invitationimg[0].src} name={invitation.nombre} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Invitations;
