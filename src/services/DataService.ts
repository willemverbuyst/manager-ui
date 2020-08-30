import { User } from '../models/DataModels';

const baseUrl = 'http://localhost:8080/';
const usersUrl = baseUrl + 'users';

export class DataService {
  public async getUsers(
    authorization: string,
    nameQuery: string
  ): Promise<User[]> {
    const url = usersUrl + '?name=' + nameQuery;
    const options = {
      method: 'GET',
      headers: {
        Authorization: authorization,
      },
    };
    const result = await fetch(url, options);
    console.log('getr', result);
    const resultJson = await result.json();
    console.log('getrj', resultJson);
    return resultJson;
  }
}
