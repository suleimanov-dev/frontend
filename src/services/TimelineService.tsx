import axios from 'axios';

export default class TimelineService {
    static async get() {
        const response = await axios.get(`/api/about_me/timeline/`);
        return response.data;
    }
}
