export interface Team {
  id: number;
  name: string;
  logo: string;
  country: string;
  winRatio: number;
  ratingValue: number;
  rankingPosition: number;
  lastRatingValue: number;
  lastRankingPosition: number;
  lastResults: string[];
  rating: [];
}

export interface Player {
  id: number;
  name: string;
  nick: string;
  surname: string;
  birthYear: number;
  country: string;
  photo: string;
  bodyshot: string;
  team: Team;
  ratingValue: number;
  lastRatingValue: number;
  rating: [];
}

export interface PlayersData {
  content: Player[];
  pageable: {
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
