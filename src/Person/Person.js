// File ini, gimana bentuk printan data ke browser
// props buat nampung semua variable yang ada di custom tag html
// import React aja, karena hanya untuk mentransformasi html ke JSX, dan hanyak menggunakan arrow function, tanpa Class
// kalo pake Class, harus import { Component } juga, dan didalamnya harus ada render() function
import React from 'react';
import './Person.css';

const person = (props) => { //Arrow function ES6
    return (
        <div className="Person">
            <p onClick={props.click}>Aku adalah { props.name }, umurku adalah { props.age } </p>
            <p>{ props.children }</p>
            <input type="text" onChange={props.change}/>
        </div>
    )
};

export default person;



/*
import React, { Component } from 'react';

class Person extends Component{
    render(){
        return <p>First React App!</p>
    }
}

export default Person;
*/
