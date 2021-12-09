import React from 'react';

export default function CartWidget() {
    return (
        <>
            <a className="nav-icon position-relative text-decoration-none">
                <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                    7
                </span>
            </a>
        </>
    );
}
