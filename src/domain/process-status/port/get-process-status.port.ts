export const GET_PROCCES_STATUS_ADAPTER = 'getProcessStatusAdapter';

export interface IProcessStatusPort {
  checkProcessStatus(
    processId: string,
    routeName: string,
    documentStatus: number,
  ): Promise<boolean>;
}
