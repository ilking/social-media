import { Post } from 'appTypes';
import * as apiClient from 'clients/api.client';
import { get } from 'lodash';

export async function getPosts(): Promise<Post[]> {
  const result = await apiClient.getPosts();

  return get(result, ['data'], []);
}
