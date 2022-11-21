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

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const TIMEOUT_SHOW_ERROR = 2000;

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';
