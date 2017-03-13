// @flow

import configureStore from './configureStore';

describe('Configure Store', () => {
  it('should be able to configure', () => {
    let state: AppState = {
      game: {
          status: 'notStarted'
        }      
    };

    const store: Store = configureStore(state);
    expect(store).toBeTruthy();
  });
});
 
