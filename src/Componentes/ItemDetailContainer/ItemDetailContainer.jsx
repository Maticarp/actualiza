import { useState, useEffect } from "react";
import { getProductos } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getProductos(1)
            .then(res => setProducto(res));
    }, []);

    return (
        <div>
            {producto && <ItemDetail item={producto} />}
        </div>
    );
};

export default ItemDetailContainer;

