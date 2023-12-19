'use strict';

/*!
 * ignore
 */

class AfkError extends Error { }

Object.defineProperty(AfkError.prototype, 'name', {
  value: 'AfkError'
});

module.exports = AfkError;