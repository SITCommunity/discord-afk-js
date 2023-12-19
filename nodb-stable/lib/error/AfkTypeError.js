'use strict';

/*!
 * ignore
 */

class AfkTypeError extends TypeError { }

Object.defineProperty(AfkTypeError.prototype, 'name', {
  value: 'AfkTypeError'
});

module.exports = AfkTypeError;