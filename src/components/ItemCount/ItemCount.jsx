import React from 'react';

export default function ItemCount() {
    return (
        <div class="product-quantity p-details-qu">
            <form>
                <div class="value-button" id="decrease" onclick="decreaseValue()">
                    <i class="fa fa-minus"></i>
                </div>
                <input type="text" readonly="" value="1" id="inputNumero" />
                <div class="value-button" id="increase" onclick="increaseValue()">
                    <i class="fa fa-plus"></i>
                </div>
                <br />
                <button color="white" className="btn-cart">
                    Add to Cart
                </button>
            </form>
        </div>
    );
}
