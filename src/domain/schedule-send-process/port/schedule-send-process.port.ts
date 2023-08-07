export const SHCEDULE_SEND_PROCESS_PORT = 'schedule_send_process_port';
export interface IScheduleSendProcessPort {
  scheduleSendProcess(
    processId: number,
    route: string,
    documentTypeId: number,
  ): Promise<unknown>;
}
