import { Port } from '../entities/Port';
import { BaseAPI } from './BaseAPI';

export class PortsAPI extends BaseAPI {
  path = '/ports';

  async getAllPorts(): Promise<Port[]> {
    try {
      const result = await this.instance.get(this.path);
      return result.data;
    } catch (e) {
      throw e;
    }
  }
}
