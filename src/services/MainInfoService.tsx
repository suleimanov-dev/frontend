import axios from 'axios';

export default class MainInfoService {
    static async get() {
        const response = await axios.get(`/api/about_me/main_info/`);
        return response.data;
    }
}
