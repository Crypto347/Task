import React from 'react';


const itemList = (props) => {
    const list = props.inputNotes.map((n,i)=>{
        return (
            <li key ={n+i}>
                {n}
            </li>
        );
    })

    return (
            <ul>
                 {list}
            </ul>
    );
}

export default itemList;