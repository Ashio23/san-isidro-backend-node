import { Client } from '../dto';

export interface IClientePort {
  findById(id: number): Promise<Client>;
}
