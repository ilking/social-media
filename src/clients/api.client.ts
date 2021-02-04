import { Post } from 'appTypes';
import axios, { AxiosResponse } from 'axios';

export function getPosts(): Promise<AxiosResponse<Post[]>> {
  return axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts`);
}
