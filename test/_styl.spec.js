import expect from 'expect';
import stylusFormat from '../formats/_styl';

describe('stylus format', () => {

  const mockProperties = {
    props: {
      'my-prop-1': {
        name: 'prop-1-name',
        value: 'prop-1-value'
      },
      'my-prop-2': {
        name: 'prop-2-name',
        value: 'prop-2-value'
      }
    }
  }

  it('should export a function', () => {
    expect(typeof stylusFormat).toBe('function');
  });

  it('should return a function', () => {
    expect(typeof stylusFormat()).toBe('function');
  });

  it('should concat the name and values together', () => {
    const formattedValues = stylusFormat()(mockProperties);
    expect(formattedValues).toBe('prop-1-name = prop-1-value;\nprop-2-name = prop-2-value;');
  });

  it('should concat the name and values together along with the prefix', () => {
    const formattedValues = stylusFormat('$')(mockProperties);
    expect(formattedValues).toBe('$prop-1-name = prop-1-value;\n$prop-2-name = prop-2-value;');
  });

});
