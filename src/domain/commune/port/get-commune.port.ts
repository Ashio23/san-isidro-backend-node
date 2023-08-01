export const GET_COMMUNE_ADAPTER = 'GetCommuneAdapter';

export interface ICommunePort {
  getCommune(): Promise<unknown>;
}
