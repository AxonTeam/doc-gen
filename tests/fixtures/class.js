/**
 * Test class.
 *
 * @author KhaaZ
 *
 * @class Test
 *
 * @prop {Object} client
 */
class Test {
    /**
     * Creates an instance of Test.
     *
     * @param {Object} client
     *
     * @memberof Test
     */
    constructor(client) {
        this._client = client;
    }

    /**
     * Getter
     *
     * @readonly
     * @memberof Test
     */
    get client() {
        return this._client;
    }

    /**
     * Get clent
     *
     * @returns {Object}
     *
     * @memberof Test
     */
    getClient() {
        return this._client;
    }

    /**
     * Set client.
     *
     * @param {Object} [client=null]
     *
     * @memberof Test
     */
    setClient(client = null) {
        this._client = client;
    }

    /**
     * Promisify a function
     *
     * @param {Function} func
     * @param {*} args
     * @returns {Promise}
     *
     * @memberof Test
     */
    promisify(func, ...args) {
        return Promise.resolve(func(...args) );
    }
}

module.export = Test;
