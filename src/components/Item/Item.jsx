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

        // <div classNameName="carousel-item">

        //     <div classNameName="container">
        //         <div classNameName="row p-5">
        //             <div classNameName="mx-auto col-md-8 col-lg-6 order-lg-last">
        //                 <img
        //                     classNameName="img-fluid"
        //                     src="https://therichpost.com/wp-content/uploads/2021/05/banner_img_02.jpg"
        //                     alt=""
        //                 />
        //             </div>
        //             <div classNameName="col-lg-6 mb-0 d-flex align-items-center">
        //                 <div classNameName="text-align-left">
        //                     <h1 classNameName="h1">{item.title}</h1>
        //                     <h3 classNameName="h2">Lorem Ipsum Lorem Ipsum</h3>
        //                     <p>{item.description}</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <pre>{JSON.stringify(item)}</pre>
        // </div>
    );
};

export default Item;
