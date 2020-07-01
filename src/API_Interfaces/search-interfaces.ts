export interface SearchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<T>;
}

interface User {
  username: string;
  full_name: string;
  slug: string;
  avatar: string | null;
  games_count: number;
  collections_count: number;
  image_background: string | null;
  id: number;
  score: string;
}

export interface Game {
  slug: string;
  name: string;
  playtime: number;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  metacritic: string | null;
  suggestions_count: number;
  id: number;
  score: string;
  clip: Clip | null;
  user_game: string | null;
  reviews_count: number;
  community_rating: number;
  saturated_color: string;
  dominant_color: string;

  platforms: Array<Platform>;
  stores: Array<Store>;
  ratings: Array<Rating>;
  tags: Array<Tag>;
  short_screenshots: Array<ScreenShot>;
  genres: Array<Genger>;
}

interface Clip {
  clip: string;
  clips: Clips;
  video: string;
  preview: string;
}

interface Clips {
  '320': string;
  '640': string;
  full: string;
}

export interface Collection {
  name: string;
  noindex: boolean;
  slug: string;
  games_count: number;
  id: number;
  score: string;
  game_background: string | null;

  backgrounds: Array<Background>;
  game_covers: Array<Background>;
}

interface Creator {
  name: string;
  slug: string;
  image: string | null;
  games_count: number;
  image_background: string;
  id: number;
  score: String;

  positions: Array<Position>;
}

interface Position {
  id: number;
  name: string;
  slug: string;
}

export interface Background {
  url: string;
  dominant_color: string;
  saturated_color: string;
}

interface Genger {
  id: number;
  name: string;
  slug: string;
}

interface ScreenShot {
  id: number;
  image: string;
}

interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  game_count: number;
  image_background: string;
}

interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface Platform {
  platform: PlatformItem;
}

export interface PlatformItem {
  id: number;
  name: string;
  slug: string;
}

interface Store extends Platform {}

export interface SearchResultsResponse {
  users: UsersResponse | null;
  games: GamesResponse | null;
  collections: CollectionResponse | null;
  creators: CreatorResponse | null;
}

export interface CreatorResponse extends SearchResponse<Creator> {}
export interface GamesResponse extends SearchResponse<Game> {}
export interface UsersResponse extends SearchResponse<User> {}
export interface CollectionResponse extends SearchResponse<Collection> {}
