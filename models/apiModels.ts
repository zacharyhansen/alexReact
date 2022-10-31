export interface IAPODResponse {
  url: string;
  date: string;
  explanation: string;
  title: string;
  copyright: string;
  hdurl: string;
  media_type: string;
}

export interface IAPODQueryParams {
  date?: string;
  count?: number;
}
