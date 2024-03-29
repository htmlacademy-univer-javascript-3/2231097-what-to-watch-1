import {Genre} from './genre.enum';

export type Film = {
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  description: string;
  rating: number
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: Genre;
  released: number;
  id: number;
  isFavorite: boolean;
  videoLink: string;
  previewVideoLink: string;
}

export enum RatingCategory {
  BAD = 'Bad',
  NORMAL = 'Normal',
  GOOD = 'Good',
  VERY_GOOD = 'Very good',
  AWESOME = 'Awesome'
}
