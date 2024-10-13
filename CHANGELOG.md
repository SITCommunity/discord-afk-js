# Changelog

All notable changes to this project will be documented in this file.

## [1.5.3] - 2024-10-13

### Revamp - Revamping error logging

- `addUser` > `findUser`
- `findMessage` > `getReason`

### Fixing - Fixing Known Bug / Error

- if reason undefined or null, return will return 'No Reason'
- "AfkTypeError: reason must not empty" when findUser

### Typings

- Fix module not found

## [1.5.2] - 2024-10-11

### Bug Fixes

- Fixing module not found (lib)