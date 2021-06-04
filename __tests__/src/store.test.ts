jest.mock('vue');

import { reactive } from 'vue';

fdescribe('store', () => {
  const mockReactive = reactive as jest.Mock;

  it('should get state data', done => {
    mockReactive.mockReturnValue('2223222');

    const handler = require('../../src/store'); // mockReturnValue DOES NOT if imported using 'import'
    const state = handler.state;

    console.log('::::state:::');
    console.log(state);

    // expect(state.remainder).toBe('any output');
    // expect(reactive).toBeCalledTimes(1);

    done();
  });
});
