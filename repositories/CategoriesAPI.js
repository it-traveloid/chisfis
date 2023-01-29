import {axiosClient} from "~/repositories/axios";

class CategoriesAPI {
    async getCategories() {
        try {
            const response = await axiosClient.get('/api/categories');

            return response.data;
        } catch (e) {
            alert(e.message);
        }
    }
}

export default new CategoriesAPI();