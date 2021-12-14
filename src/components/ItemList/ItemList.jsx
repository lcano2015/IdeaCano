import React from 'react';
import Item from '../Item/Item';

const ItemList = ({items}) => {
    return (
        <>
            <div className="row">
                {items ? (
                    items.map((item) => {
                        return <Item key={item.id} item={item} />;
                    })
                ) : (
                    <div className="container bg-light">
                        <h1> cargando...........</h1>
                    </div>
                )}
            </div>
        </>
    );
};

export default ItemList;
