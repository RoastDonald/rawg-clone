import { Platforms } from '../components/overviews/game-overview/game-platforms';

export type platform = keyof typeof Platforms;

export const getPlatform = (platform: platform) => {
  platform = platform.split(' ')[0] as platform;
  return Platforms[platform];
};
