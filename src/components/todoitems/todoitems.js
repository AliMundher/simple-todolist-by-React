import React from 'react';
import "./todoitems.css";


const DisplayItems = (props) => {

    const { items, deleteitem } = props;
    let lenght_items = items.length;

    const results = lenght_items ? (
        items.map(item => {
            return (
                <div key={item.id} className="values">
                    <span className="title id">{item.id}</span>
                    <span className="title name">{item.name}</span>
                    <span className="title age">{item.age}</span>
                    <span className="btn_delete" onClick={() => deleteitem(item.id)}>&times;</span>
                </div>
            )
        })

    ) : (<p>There are no items</p>)


    return (
        <div className="list_item">
            <div className="moon">
                <span className="title id">id</span>
                <span className="title name">name</span>
                <span className="title age">age</span>
            </div>
            <div>{results}</div>
        </div>
    )
}

export default DisplayItems;