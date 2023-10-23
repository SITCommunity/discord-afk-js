'use strict';

/*!
 * ignore
 */

class AfkRangeError extends RangeError { }

Object.defineProperty(AfkRangeError.prototype, 'name', {
  value: 'AfkRangeError'
});

module.exports = AfkRangeError;