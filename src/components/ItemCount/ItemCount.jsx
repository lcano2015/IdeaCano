import React, {useState} from 'react';

export default function ItemCount({stock, initial}) {
    const [countInitial, setCountInitial] = useState(initial);
    const [countMax, setCountMax] = useState(stock);

    const increaseValue = () => {
        if (countMax > countInitial) {
            setCountInitial(countInitial + 1);
        }
    };
    const decreaseValue = () => {
        if (countInitial > 0) {
            setCountInitial(countInitial - 1);
        }
    };

    return (
        <div class="product-quantity p-details-qu">
            <form>
                <div class="value-button" id="decrease" onClick={decreaseValue}>
                    <i class="fa fa-minus"></i>
                </div>
                <input type="text" readonly="" value={countInitial} id="inputNumero" />
                <div class="value-button" id="increase" onClick={increaseValue}>
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
