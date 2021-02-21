import { PortsAPI } from '../PortsAPI'
const mockInstanceGet = jest.fn((path: string) => ({ data: [] }))

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: mockInstanceGet,
  })),
}))

describe('PortsAPI', () => {
  it('should use instance get on getAllPorts() with path argurment', async () => {
    await new PortsAPI().getAllPorts()
    expect(mockInstanceGet).toHaveBeenCalledWith('/ports')
  })
})
