import { BaseAPI } from '../BaseAPI';

jest.mock('axios', () => ({
  create: jest.fn(() => 'instance'),
}));

describe('BaseAPI', () => {
  afterEach(() => {
    delete process.env.REACT_APP_API_URL;
    delete process.env.REACT_APP_API_TOKEN;
  });

  it('should have the environment variable REACT_APP_API_URL as baseUrl', async () => {
    process.env.REACT_APP_API_URL = 'https://youtube.com';
    process.env.REACT_APP_API_TOKEN = 'My Token';

    const baseAPI = new BaseAPI();
    expect(baseAPI.baseUrl).toBe('https://youtube.com');
  });

  it('should have the environment variable REACT_APP_API_TOKEN as token', async () => {
    process.env.REACT_APP_API_URL = 'https://youtube.com';
    process.env.REACT_APP_API_TOKEN = 'My Token';

    const baseAPI = new BaseAPI();
    expect(baseAPI.token).toBe('My Token');
  });

  it('should create a HTTP client instance', async () => {
    process.env.REACT_APP_API_URL = 'https://youtube.com';
    process.env.REACT_APP_API_TOKEN = 'My Token';

    const baseAPI = new BaseAPI();
    expect(baseAPI.instance).toBe('instance');
  });

  it('should throw an error if REACT_APP_API_URL is undefined', async () => {
    process.env.REACT_APP_API_TOKEN = 'My Token';

    expect(() => {
      new BaseAPI();
    }).toThrowError('REACT_APP_API_URL environment is not defined!');
  });

  it('should throw an error if REACT_APP_API_TOKEN is undefined', async () => {
    process.env.REACT_APP_API_URL = 'https://youtube.com';

    expect(() => {
      new BaseAPI();
    }).toThrowError('REACT_APP_API_TOKEN environment is not defined!');
  });
});
