import { PortsAPI } from '../PortsAPI'
const mockInstanceGet = jest.fn(() => ({ data: [] }))

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: mockInstanceGet,
  })),
}))

describe('PortsAPI', () => {
  it('should use instance get on getAllPorts()', async () => {
    await new PortsAPI().getAllPorts()
    expect(mockInstanceGet).toHaveBeenCalled()
  })
})
