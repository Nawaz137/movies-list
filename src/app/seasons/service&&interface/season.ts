export interface Season {
  id: number;
      url: string;
      name: string;
      type: string;
      language: string;
      genres: string [];

      status: string;
      runtime: string;
      premiered: string;
      officialSite: string;
      schedule: {
          time: number;
          days: string []
        };
      rating: {
          average: string;
      };
      weight: number;
      network: {
          id: number;
          name: string;
          country: {
              name: number;
              code: string;
              timezone: string;
          };
      };
      webChannel: string;
      externals: {
          tvrage: number;
          thetvdb: number;
          imdb: string;
      };
      image: {
          medium: string;
          original: string;
      };
      summary: string;
      updated: number;
      _links: {
          self: {
              href: string;
          };
          previousepisode: {
              href: string;
          };
      };
}
// id: any;
// url: string;
// name: string;
// type: string;
// language: string;
// genres: string[];
// status: string;
// runtime: number;
// premiered: number;
// officialSite: string;
// schedule: object;
// rating: object;
// weight: number;
// network: object;
// country: object;
// externals: object;
// image: object;
// summary: string;
// updated: number;
// _links: object;
// previousepisode: object;

// }
