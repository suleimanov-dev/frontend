import axios from 'axios';

export default class ProjectService {
    static async list() {
        const response = await axios.get('/api/projects/projects/');
        return response.data;
    }

    static async get(project_name: any) {
        const response = await axios.get(`/api/projects/projects/${project_name}/`);
        return response.data;
    }
}
