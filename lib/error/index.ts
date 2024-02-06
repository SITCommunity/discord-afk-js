/*!
 * ignore
 */

// =================================================================
class AfkTypeError extends TypeError {
    constructor(message: string) {
        super(message);
        this.name = 'AfkTypeError';
    };
};
// =================================================================
class AfkError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AfkError';
    };
};
// =================================================================
class AfkDbError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AfkDbError';
    };
};
// =================================================================
class AfkTimeout extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AfkTimeout';
    };
};
// =================================================================
class AfkConnectionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AfkConnectionError';
    };
};
// =================================================================
export {
    AfkDbError,
    AfkError,
    AfkTypeError,
    AfkTimeout,
    AfkConnectionError,
};  