import {axiosClient} from "~/repositories/axios";

class ProductsAPI {
    async getProducts({keyword, category, skip, take}) {
        try {
            const response = await axiosClient.get('/api/products', {params: {keyword, category, skip, take}});

            return response.data;
        } catch (e) {
            alert(e.message);
        }
    }

    // async getProduct({productId}) {
    //     try {
    //         const response = await axiosClient.get(`/api/product/${productId}`);
    //         const {data} = response;
    //
    //         return data;
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // }
}

export default new ProductsAPI();