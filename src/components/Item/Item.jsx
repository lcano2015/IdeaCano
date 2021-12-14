import React from 'react';

const Item = ({item}) => {
    return (
        <>
            <div className="col-12 col-md-4 mb-4">
                <div className="card h-100">
                    <a href="#">
                        <img src={`./static/products/${item.sku}.jpg`} className="card-img-top" alt="..." />
                    </a>
                    <div className="card-body">
                        <ul className="list-unstyled d-flex justify-content-between">
                            <li className="text-muted text-right">${item.price}</li>
                        </ul>
                        <a href="#" className="h2 text-decoration-none text-dark">
                            {item.title}
                        </a>
                        <p className="card-text">{item.description}</p>
                        <button className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Item;
