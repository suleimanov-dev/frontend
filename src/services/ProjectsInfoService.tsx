import axios from 'axios';

export default class ProjectsInfoService {
    static async get(project_name: any) {
        const response = await axios.get(`/api/projects/projects/${project_name}/`);
        return response.data;
    }
}
