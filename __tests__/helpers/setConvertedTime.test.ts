// const mockState = jest.fn();
// const mockConvert12To24hrHelper = jest.fn();
// const mockConvert24hrToMillisecondHelper = jest.fn();

// jest.mock('../../src/store', () => mockState);
// jest.mock('../../src/helpers/convert12To24hr', () => mockConvert12To24hrHelper);
// jest.mock('../../src/helpers/convert24hrToMillisecond', () => mockConvert24hrToMillisecondHelper);

// const Store = require('../../src/store');
// // import convert12To24hrHelper from '../../src/helpers/convert12To24hr';
// // import convert24hrToMillisecondHelper from '../../src/helpers/convert24hrToMillisecond';

// describe('setConvertedTime helper', () => {
//   // beforeEach(() => jest.clearAllMocks());
//   it('should set passed to false', done => {
//     Store.mockReturnValue({ prayers: [{ english: 'any input', time: 'any input' }] });
//     mockState.mockReturnValue({ prayers: [{ english: 'any input', time: 'any input' }] });

//     const handler = require('../../src/helpers/setConvertedTime').default;
//     handler();

//     done();
//   });

//   // it('should set passed to false', done => {
//   //   mockState.mockReturnValue({ prayers: [{ english: 'any input', time: 'any input' }] });
//   //   mockConvert12To24hrHelper.mockReturnValueOnce('any output');
//   //   mockConvert24hrToMillisecondHelper.mockReturnValueOnce(Number.POSITIVE_INFINITY);

//   //   const handler = require('../../src/helpers/setConvertedTime').default;
//   //   handler();

//   //   expect(mockState).toHaveBeenCalledTimes(3);
//   //   expect(mockConvert12To24hrHelper).toHaveBeenCalledTimes(1);
//   //   expect(mockConvert24hrToMillisecondHelper).toHaveBeenCalledTimes(1);
//   //   expect(State.prayers.length).toBe(1);
//   //   expect(State.prayers[0].passed).toBe(false);
//   //   expect(State.prayers[0].time).toBe('any output');

//   //   done();
//   // });

//   // it('should set passed to true', done => {
//   //   mockState.mockReturnValue({ prayers: [{ english: 'any input', time: 'any input' }] });
//   //   mockConvert12To24hrHelper.mockReturnValueOnce('any output');
//   //   mockConvert24hrToMillisecondHelper.mockReturnValueOnce(Number.NEGATIVE_INFINITY);

//   //   const handler = require('../../src/helpers/setConvertedTime').default;
//   //   handler();

//   //   expect(mockState).toHaveBeenCalledTimes(3);
//   //   expect(mockConvert12To24hrHelper).toHaveBeenCalledTimes(1);
//   //   expect(mockConvert24hrToMillisecondHelper).toHaveBeenCalledTimes(1);
//   //   expect(State.prayers.length).toBe(1);
//   //   expect(State.prayers[0].passed).toBe(true);
//   //   expect(State.prayers[0].time).toBe('any output');

//   //   done();
//   // });
// });

const mockState = jest.fn();

jest.mock('../../src/store', () => ({
  state: mockState
}));

const state = require('../../src/store').state;

describe('setConvertedTime helper', () => {
  it('should set passed to false', done => {
    mockState.mockReturnValue('AAAA');

    const handler = require('../../src/helpers/setConvertedTime').default;
    handler();

    console.log('=======');
    console.log(state);
    done();
  });
});
