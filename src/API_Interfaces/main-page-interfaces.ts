export interface HomePageResponse {
  count:                 number;
  next:                  string;
  previous:              null;
  results:               Result[];
  games_count:           number;
  reviews_count:         number;
  recommendations_count: number;
}

export interface Result {
  id:                 number;
  slug:               string;
  name:               string;
  released:           string;
  tba:                boolean;
  background_image:   string;
  rating:             number;
  rating_top:         number;
  ratings:            Rating[];
  ratings_count:      number;
  reviews_text_count: number;
  added:              number;
  added_by_status:    AddedByStatus;
  metacritic:         number | null;
  playtime:           number;
  suggestions_count:  number;
  user_game:          null;
  reviews_count:      number;
  saturated_color:    Color;
  dominant_color:     Color;
  platforms:          PlatformElement[];
  parent_platforms:   ParentPlatform[];
  genres:             Genre[];
  stores:             Store[];
  clip:               Clip | null;
  tags:               Genre[];
  short_screenshots:  ShortScreenshot[];
  community_rating?:  number;
}

export interface AddedByStatus {
  yet:      number;
  owned:    number;
  beaten?:  number;
  toplay:   number;
  dropped?: number;
  playing?: number;
}

export interface Clip {
  clip:    string;
  clips:   { [key: string]: string };
  video:   string;
  preview: string;
}

export enum Color {
  The0F0F0F = "0f0f0f",
}

export interface Genre {
  id:               number;
  name:             string;
  slug:             string;
  games_count:      number;
  image_background: string;
  domain?:          Domain;
  language?:        Language;
}

export enum Domain {
  EpicgamesCOM = "epicgames.com",
  GogCOM = "gog.com",
  MicrosoftCOM = "microsoft.com",
  NintendoCOM = "nintendo.com",
  StorePlaystationCOM = "store.playstation.com",
  StoreSteampoweredCOM = "store.steampowered.com",
}

export enum Language {
  Eng = "eng",
}

export interface ParentPlatform {
  platform: ParentPlatformPlatform;
}

export interface ParentPlatformPlatform {
  id:   number;
  name: PurpleName;
  slug: PurpleSlug;
}

export enum PurpleName {
  Android = "Android",
  AppleMacintosh = "Apple Macintosh",
  Linux = "Linux",
  Nintendo = "Nintendo",
  PC = "PC",
  PlayStation = "PlayStation",
  Xbox = "Xbox",
}

export enum PurpleSlug {
  Android = "android",
  Linux = "linux",
  MAC = "mac",
  Nintendo = "nintendo",
  PC = "pc",
  Playstation = "playstation",
  Xbox = "xbox",
}

export interface PlatformElement {
  platform:        PlatformPlatform;
  released_at:     null | string;
  requirements_en: RequirementsEn | null;
  requirements_ru: null;
}

export interface PlatformPlatform {
  id:               number;
  name:             FluffyName;
  slug:             FluffySlug;
  image:            null;
  year_end:         null;
  year_start:       number | null;
  games_count:      number;
  image_background: string;
}

export enum FluffyName {
  Android = "Android",
  Linux = "Linux",
  MACOS = "macOS",
  NintendoSwitch = "Nintendo Switch",
  PC = "PC",
  PlayStation4 = "PlayStation 4",
  PlayStation5 = "PlayStation 5",
  XboxOne = "Xbox One",
  XboxSeriesX = "Xbox Series X",
}

export enum FluffySlug {
  Android = "android",
  Linux = "linux",
  Macos = "macos",
  NintendoSwitch = "nintendo-switch",
  PC = "pc",
  Playstation4 = "playstation4",
  Playstation5 = "playstation5",
  XboxOne = "xbox-one",
  XboxSeriesX = "xbox-series-x",
}

export interface RequirementsEn {
  minimum:      string;
  recommended?: string;
}

export interface Rating {
  id:      number;
  title:   Title;
  count:   number;
  percent: number;
}

export enum Title {
  Exceptional = "exceptional",
  Meh = "meh",
  Recommended = "recommended",
  Skip = "skip",
}

export interface ShortScreenshot {
  id:    number;
  image: string;
}

export interface Store {
  id:     number;
  store:  Genre;
  url_en: string;
  url_ru: null | string;
}