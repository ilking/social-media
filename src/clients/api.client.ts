import { Post, Comment } from 'appTypes';
import axios, { AxiosResponse } from 'axios';

export function getPosts(): Promise<AxiosResponse<Post[]>> {
  return axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts`);
}

export function getComments(): Promise<AxiosResponse<Comment[]>> {
  return axios.get(`${process.env.REACT_APP_API_BASE_URL}/comments`);
}
