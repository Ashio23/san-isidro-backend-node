import { ProcessDto } from '../dto';

export const PROCESS_ADAPTER = 'processAdapter';

export interface IProcessPort {
  getProcesses(): Promise<ProcessDto[]>;
}
