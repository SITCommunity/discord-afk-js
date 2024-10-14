/**
 * @author brokenedtzjs
 * @license MIT-License
 * @copyright brokenedtzjs
 * @file index.js
 */

'use strict';

/*!
 * ignore
 */

// =================================================================
class AfkTypeError extends TypeError { }

Object.defineProperty(AfkTypeError.prototype, 'name', {
  value: 'AfkTypeError'
});
// =================================================================
class AfkError extends Error { }

Object.defineProperty(AfkError.prototype, 'name', {
  value: 'AfkError'
});
// =================================================================
class AfkDbError extends Error { }

Object.defineProperty(AfkDbError.prototype, 'name', {
  value: 'AfkDbError'
});
// =================================================================
class AfkTimeout extends Error { }

Object.defineProperty(AfkTimeout.prototype, 'name', {
  value: 'AfkTimeout'
});
// =================================================================
class AfkConnectionError extends Error { }

Object.defineProperty(AfkConnectionError.prototype, 'name', {
  value: 'AfkConnectionError'
});
// =================================================================
module.exports = {
  AfkDbError,
  AfkError,
  AfkTypeError,
  AfkTimeout,
  AfkConnectionError,
};  