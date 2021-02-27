import { PortsAPI } from '../PortsAPI';
const mockInstanceGet = jest.fn((path: string) => ({ data: [] }));

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: mockInstanceGet,
  })),
}));

const ApiUrl = process.env.REACT_APP_API_URL;
const ApiToken = process.env.REACT_APP_API_TOKEN;

describe('PortsAPI', () => {
  beforeAll(() => {
    process.env.REACT_APP_API_URL = 'https://youtube.com';
    process.env.REACT_APP_API_TOKEN = 'my-token';
  });
  afterAll(() => {
    process.env.REACT_APP_API_URL = ApiUrl;
    process.env.REACT_APP_API_TOKEN = ApiToken;
  });

  it('should use instance get on getAllPorts with path argurment', async () => {
    await new PortsAPI().getAllPorts();
    expect(mockInstanceGet).toHaveBeenCalledWith('/ports');
  });

  it('should throw error if something goes wrong', async () => {
    (mockInstanceGet as jest.Mock).mockImplementationOnce(() => new Promise((res, rej) => rej(new Error('error'))));

    await expect(new PortsAPI().getAllPorts()).rejects.toEqual(new Error('error'));
  });
});
