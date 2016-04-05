import expect from 'expect';
import {
  stylusFormat
} from '../formats';

describe('formats index', () => {

  it('should export a named stylusFormat fn', () => {
    expect(stylusFormat).toExist();
  });

});
