import { IScheduleSendProcessRequest } from '@domain/schedule-send-process';
export class ScheduleSendProcessRequest implements IScheduleSendProcessRequest {
  processId: number;
  route: string;
  documentTypeId: number;
}
