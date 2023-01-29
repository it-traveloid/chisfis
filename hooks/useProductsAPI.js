import {useState} from "react";
import ProductAPI from "~/repositories/ProductsAPI";


const useProductsAPI = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);

    return {
        loading,
        error,
        count,
        products,
        product,
        getProducts: (params) => {
            setLoading(true);

            ProductAPI.getProducts(params)
                .then(({data, error}) => {
                    if (data) {
                        setError(null);

                        setProducts(data?.products);
                        setCount(data?.count);

                    } else if (error) {
                        setError(error);

                        setProducts([]);
                        setCount(0);
                    }
                })

                .catch(error => setError(error))

                .finally(() => setLoading(false));
        },
        // getProduct: (params) => {
        //     setLoading(true);
        //
        //     ProductAPI.getProduct(params)
        //         .then(data => {
        //             console.log(data);
        //         })
        //
        //         .catch(error => setError(error))
        //
        //         .finally(() => setLoading(false));
        // }
    };
};

export default useProductsAPI;