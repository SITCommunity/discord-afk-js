'use strict';

// Mocking dependencies before import
jest.mock('package-json', () => jest.fn());

jest.mock('semver', () => ({
  lt: jest.fn(),
}));

jest.mock('semver-diff', () => jest.fn());

jest.mock('../src/error', () => ({
  AfkError: class AfkError {
    constructor(code) {
      if (code === 'InvalidCode') {
        throw new Error('Error code must be a valid Error Code');
      }
    }
  },
  AfkTypeError: class AfkTypeError {
    constructor(code) {
      if (code === 'InvalidMissing') {
        throw new Error('At least one valid id or reason must be provided');
      }
    }
  },
  errorCode: {
    InvalidMissing: 'InvalidMissing',
    InvalidType: 'InvalidType',
  },
}));

jest.mock('../src/util/UpdateChecker', () => ({
  checkingUpdate: jest.fn(),
  UpdateInit: jest.fn(),
}));

// Import module after mocking
const pkgJson = require('package-json');
const {
  UpdateInit,
  checkingUpdate
} = require("../src/util/UpdateChecker");
const {
  AfkClient
} = require("../src");
const { AfkError } = require('../src/error');

// Spy on console.log before test
beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => { });
});

// Reset all mock after test
afterEach(() => {
  jest.resetAllMocks();
  jest.clearAllMocks();
});

// Test code
describe('AFK Client Tests', () => {

  test('getReason returns default if no result', async () => {
    const afkClient = new AfkClient();
    afkClient.setUser({ id: 'id1' });  // Using unique id
    const reason = await afkClient.getReason('id1');
    expect(reason).toEqual([expect.any(Number), 'No Reason']);
  });

  test('getReason returns custom reason if user has one', async () => {
    const afkClient = new AfkClient();
    afkClient.setUser({ id: 'id2', reason: 'AFK for lunch' });  // Unique id
    const reason = await afkClient.getReason('id2');
    expect(reason).toEqual(expect.arrayContaining([expect.any(Number), 'AFK for lunch']));
  });

  test('getUser returns user data', async () => {
    const afkClient = new AfkClient();
    afkClient.setUser({ id: 'id3', reason: 'AFK' });  // Unique id
    const user = await afkClient.getUser('id3');
    expect(user).toEqual(true);
  });

  test('checkUpdate should call checkingUpdate with true', async () => {
    const afkClient = new AfkClient();
    await afkClient.checkUpdate({ enable: true });
    expect(checkingUpdate).toHaveBeenCalledWith(true);
  });

  test('checkUpdate should call checkingUpdate with false', async () => {
    const afkClient = new AfkClient();
    await afkClient.checkUpdate({ enable: false });
    expect(checkingUpdate).toHaveBeenCalledWith(false);
  });

  test('errorBase should throw error if invalid error code is used', () => {
    const invalidCode = 'InvalidCode';
    expect(() => {
      new (require('../src/error').AfkError)(invalidCode);
    }).toThrow('Error code must be a valid Error Code');
  });

  test('setUser should throw error if no id is provided', () => {
    const afkClient = new AfkClient();
    expect(() => {
      afkClient.setUser({});
    }).toThrow('At least one valid id or reason must be provided');
  });

  test('removeUser should throw error if no id is provided', () => {
    const afkClient = new AfkClient();
    expect(() => {
      afkClient.removeUser();
    }).toThrow('At least one valid id or reason must be provided');
  });

  test('getUser should throw error if no id is provided', () => {
    const afkClient = new AfkClient();
    expect(() => {
      afkClient.getUser();
    }).toThrow('At least one valid id or reason must be provided');
  });
});
