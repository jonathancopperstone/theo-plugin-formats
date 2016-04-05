import map from 'lodash/map';

/**
 * Registers a '.styl' format for stylus files.
 * This function is a wrapper fn, which allows you to define
 * a prefix for the transpiled variables. It returns the function
 * which will do the formatting in theo.
 *
 * You can also provide a prefix.
 */

export default function stylus(prefix) {
  return function(json) {
    return map(json.props, (prop) => {
      return `${prefix?prefix:''}${prop.name} = ${prop.value};`;
    }).join('\n');
  };
}
