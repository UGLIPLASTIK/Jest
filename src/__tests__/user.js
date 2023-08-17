import loadUser from '../loaduser';
import httpGet from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});
test('should call load user once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));
  loadUser(1);
  expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});
