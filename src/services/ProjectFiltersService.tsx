import axios from 'axios';

export default class ProjectService {
    static async list() {
        const response = await axios.get('/api/projects/project_filters/');
        return response.data;
    }
}
