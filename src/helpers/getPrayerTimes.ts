import { IApi } from '../interfaces';

export default async (url: string): Promise<IApi> => {
  console.log('GET ', url);
  const response: Response = await fetch(url);
  return response.json();
};
