import React from 'react';

export default function ItemListContainer({greeting}) {
    return (
        <div>
            <section class="bg-light">
                <div class="container py-5">
                    <div class="row text-center py-3">
                        <div class="col-lg-6 m-auto">
                            <h1 class="h1">Mensaje</h1>
                            <p>{greeting}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
