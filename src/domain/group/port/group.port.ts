export const GROUP_ADAPTER = 'groupAdapter';
export interface IGroupPort {
  getGroups(branchName: string): Promise<unknown>;
}
