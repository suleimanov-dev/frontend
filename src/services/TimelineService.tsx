import axios from 'axios';

export default class TimelineService {
    static async list() {
        const response = await axios.get(`/api/about_me/timeline/`);
        return response.data;
    }
}
