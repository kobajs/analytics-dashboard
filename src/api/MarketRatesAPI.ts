import { MarketRate } from '../entities/MarketRate'
import { Port } from '../entities/Port'
import { BaseAPI } from './BaseAPI'

export class MarketRatesAPI extends BaseAPI {
  path = '/rates'

  async getAllMarketRatesForPorts(
    origin: Port['code'],
    destination: Port['code']
  ): Promise<MarketRate[]> {
    try {
      if (origin.length !== 5) {
        throw new Error('Origin needs to have 5 characters (Port Code)')
      }
      if (destination.length !== 5) {
        throw new Error('Origin needs to have 5 characters (Port Code)')
      }

      const result = await this.instance.get(this.path, {
        params: { origin, destination },
      })
      return result.data
    } catch (e) {
      throw e
    }
  }
}
