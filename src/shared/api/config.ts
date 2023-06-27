import axios from "axios";

axios.defaults.baseURL =
    "https://frontend-test-assignment-api.abz.agency/api/v1";

axios.defaults.timeout = 5000;

export default axios;
