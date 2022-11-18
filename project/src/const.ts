export enum AppRoute {
  Login = '/login',
  Root = '/',
  Room = '/offer',
  Id = ':id'
}

export enum SortTypes {
  POPULAR = 'Popular',
  LOW = 'Price: low to high',
  HIGH = 'Price: high to low',
  TOP = 'Top rated first'
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';
