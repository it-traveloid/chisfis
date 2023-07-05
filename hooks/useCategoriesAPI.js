import {useState} from "react";
import CategoriesAPI from "../repositories/CategoriesAPI";

const UseCategoriesApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [count, setCount] = useState(0);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState([]);

    return {
        loading,
        error,
        count,
        categories,
        category,
        getCategories: (params) => {
            setLoading(true);

            CategoriesAPI.getCategories(params)
                .then(({data, error}) => {
                    if (data) {
                        setError(null);

                        setCategories(data?.categories);
                        setCount(data?.count);

                    } else if (error) {
                        setError(error);

                        setCategories([]);
                        setCount(0);
                    }
                })

                .catch(error => setError(error))

                .finally(() => setLoading(false));
        },
    };
};

export default UseCategoriesApi;