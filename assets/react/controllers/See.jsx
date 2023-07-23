import React from 'react';
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

export default function See() {

    const [objet, setObjet] = useState([]);
    const [dataObjet, setDataObjet] = useState([]);

    //http://127.0.0.1:8000/api/produits      https://jsonplaceholder.typicode.com/posts

    useEffect(() => {
        const dataObjet =
        fetch('http://127.0.0.1:8000/api/produits')
            .then((response) => response.json())
            .then((json) => setObjet(json['hydra:member']));
    },  [])
    
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/produits')
            .then((response) => response.json())
            .then((json) => setDataObjet(json['hydra:member']));
    },  [])

    //console.log(objet);
    
    return (
        
        <>
            <tr>
                <td><SearchBar placeholder={"filtre par ID"} filterField={(objet) => objet.id.toString()} list={dataObjet} setList={setObjet}></SearchBar></td>
                <td><SearchBar placeholder={"filtre par nom"} filterField={(objet) => objet.nom.toString()} list={dataObjet} setList={setObjet}></SearchBar></td>
                <td><SearchBar placeholder={"filtre par prix"} filterField={(objet) => objet.prix.toString()} list={dataObjet} setList={setObjet}></SearchBar></td>
                <td><SearchBar placeholder={"filtre par quantite"} filterField={(objet) => objet.quantite.toString()} list={dataObjet} setList={setObjet}></SearchBar></td>
            </tr>

            {objet.map((objet, index) => {
                return <tr key={index}>
                <td>{ objet.id }</td>
                <td>{ objet.nom }</td>
                <td>{ objet.prix }</td>
                <td>{ objet.quantite }</td>
                <td>
                <a href={objet.id}>show</a>
                <a href={objet.id +'/edit'}>edit</a>
                </td>
            </tr>;
            })}
        </>
    )
}
