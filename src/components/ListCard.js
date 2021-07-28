import React from 'react'

import { Link } from 'react-router-dom'

function ListCard(props) {
    return (
        <div className = "card-wrapper">
            <h1 className = "list-header" >{props.heading}</h1>
            <ul classname = "list-items-block">
                {props.itemList.map(item =>{
                    return (
                    <li className = "list-items-individuals"><Link className = "ListCard__Link" to = {item[1]}>{item[0]}</Link></li>
                    );
                })}

            </ul>
        </div>
    )
}

export default ListCard



