// Database

/**
 * @typedef {object} Status
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef {object} Category
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef {object} Ticket
 * @property {number} id
 * @property {string} message
 * @property {string} imageFileId
 * @property {string} userId
 * @property {number} statusId
 * @property {string?} status
 * @property {number} categoryId
 * @property {string?} category
 * @property {Date} createdAt
 * @property {Date} closedAt
 */

/**
 * @typedef {object} Image
 * @property {number} id
 * @property {number} ticketId
 * @property {string} key
 */

/**
 * @typedef {object} Reply
 * @property {number} id
 * @property {string} userId
 * @property {number} ticketId
 * @property {string} message
 * @property {Date} createdAt
 */

// App

/**
 * @typedef {object} JwtPayload
 * @property {string} email
 * @property {"user" | "admin"} role
 */

/**
 * @template T
 * @typedef {object} ApiPayload
 * @property {boolean} success
 * @property {string[]} messages
 * @property {T} data
 */

export {};
