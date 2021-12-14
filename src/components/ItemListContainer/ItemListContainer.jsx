import React, {useState, useEffect} from 'react';

import ItemList from '../ItemList/ItemList';
export default function ItemListContainer() {
    const products = [
        {
            id: 12,
            sku: '12064273040195392',
            title: 'Cat Tee Black T-Shirt',
            description: '4 MSL',
            availableSizes: ['S', 'XS'],
            style: 'Black with custom print',
            price: 10.9,
            installments: 9,
            currencyId: 'USD',
            currencyFormat: '$',
            isFreeShipping: true,
        },

        {
            id: 13,
            sku: '51498472915966366',
            title: 'Dark Thug Blue-Navy T-Shirt',
            description: '',
            availableSizes: ['M'],
            style: 'Front print and paisley print',
            price: 29.45,
            installments: 5,
            currencyId: 'USD',
            currencyFormat: '$',
            isFreeShipping: true,
        },

        {
            id: 14,
            sku: '10686354557628303',
            title: 'Sphynx Tie Dye Wine T-Shirt',
            description: 'GPX Poly 1',
            availableSizes: ['X', 'L', 'XL'],
            style: 'Front tie dye print',
            price: 9.0,
            installments: 3,
            currencyId: 'USD',
            currencyFormat: '$',
            isFreeShipping: true,
        },
        {
            id: 8,
            sku: '5619496040738316',
            title: 'Tso 3D Black T-Shirt',
            description: '',
            availableSizes: ['XL'],
            style: 'Azul escuro',
            price: 18.7,
            installments: 4,
            currencyId: 'USD',
            currencyFormat: '$',
            isFreeShipping: false,
        },

        {
            id: 9,
            sku: '11600983276356165',
            title: 'Crazy Monkey Grey',
            description: '',
            availableSizes: ['L', 'XL'],
            style: '',
            price: 134.9,
            installments: 5,
            currencyId: 'USD',
            currencyFormat: '$',
            isFreeShipping: true,
        },

        {
            id: 10,
            sku: '27250082398145995',
            title: 'On The Streets Black T-Shirt',
            description: '',
            availableSizes: ['L', 'XL'],
            style: '',
            price: 49.0,
            installments: 9,
            currencyId: 'USD',
            currencyFormat: '$',
            isFreeShipping: true,
        },
    ];

    const [data, setData] = useState(null);

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 3000);
    });

    const resolverArray = async () => {
        try {
            const data = await promise;
            setData(data);
            console.log(data);
        } catch (e) {
            console.log(e);
        } finally {
            console.log('termino');
        }
    };

    useEffect(() => {
        resolverArray();
        console.log('--------------------');
    }, []);

    return (
        <div className="mt-5">
            <ItemList items={data} />
        </div>
    );
}
