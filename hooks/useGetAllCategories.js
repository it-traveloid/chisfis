import {useEffect} from "react";

const UseGetAllCategories = ({getCategories}) => {
    useEffect(() => {
        getCategories();
    }, [])
};

export default UseGetAllCategories;