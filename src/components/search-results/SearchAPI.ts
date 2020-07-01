import axios from 'axios';
import {
  UsersResponse,
  GamesResponse,
  CollectionResponse,
  CreatorResponse
} from '../../API_Interfaces/search-interfaces';

enum Queries {
  USERS = 'https://rawg.io/api/users?page_size=20&search=',
  GAMES = 'https://rawg.io/api/games?page_size=20&search=',
  COLLECTIONS = 'https://rawg.io/api/collections?page_size=20&search=',
  CREATORS = 'https://rawg.io/api/creators?page_size=20&search='
}

export class SearchAPI {
  private static async getData<T>(query: Queries, textToSearch: string) {
    try {
      const res = await axios.get(`${query}${textToSearch}`);
      console.log(res);
      return res.data as T;
    } catch (error) {
      return null;
    }
  }

  static getUsers = (user: string) => {
    return SearchAPI.getData<UsersResponse>(Queries.USERS, user);
  };
  static getGames = (game: string) => {
    return SearchAPI.getData<GamesResponse>(Queries.GAMES, game);
  };
  static getCollections = (collection: string) => {
    return SearchAPI.getData<CollectionResponse>(
      Queries.COLLECTIONS,
      collection
    );
  };
  static getCreators = (creator: string) => {
    return SearchAPI.getData<CreatorResponse>(Queries.CREATORS, creator);
  };
}
