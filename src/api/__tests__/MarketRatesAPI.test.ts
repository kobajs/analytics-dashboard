import { AxiosRequestConfig } from 'axios';
import { MarketRatesAPI } from '../MarketRatesAPI';
const mockInstanceGet = jest.fn((path: string, options: AxiosRequestConfig) => ({ data: [] }));

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: mockInstanceGet,
  })),
}));

const ApiUrl = process.env.REACT_APP_API_URL;
const ApiToken = process.env.REACT_APP_API_TOKEN;

describe('MarketRatesAPI', () => {
  beforeAll(() => {
    process.env.REACT_APP_API_URL = 'https://youtube.com';
    process.env.REACT_APP_API_TOKEN = 'my-token';
  });
  afterAll(() => {
    process.env.REACT_APP_API_URL = ApiUrl;
    process.env.REACT_APP_API_TOKEN = ApiToken;
  });

  it('should use instance get on getAllMarketRatesForPorts() using path as argument and origin/destination as parameters', async () => {
    await new MarketRatesAPI().getAllMarketRatesForPorts('CNSGH', 'NLRTM');
    expect(mockInstanceGet).toHaveBeenCalledWith('/rates', {
      params: {
        origin: 'CNSGH',
        destination: 'NLRTM',
      },
    });
  });

  it('should throw error if origin has length different than 5 characters', async () => {
    await expect(new MarketRatesAPI().getAllMarketRatesForPorts('CNS', 'NLRTM')).rejects.toEqual(
      new Error('Origin needs to have 5 characters (Port Code)'),
    );
  });

  it('should throw error if destination has length different than 5 characters', async () => {
    await expect(new MarketRatesAPI().getAllMarketRatesForPorts('CNSGH', 'NLR')).rejects.toEqual(
      new Error('Origin needs to have 5 characters (Port Code)'),
    );
  });
});
