import axios from 'axios';
import { globalConstant } from 'constant/constant';

export const axiosInstance = axios.create({
  baseURL: globalConstant.serverURL,
});
