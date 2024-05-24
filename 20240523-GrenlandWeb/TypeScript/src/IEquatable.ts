/**
 * Defines something that is equatable to something.
 *
 * @export
 * @interface IEquatable
 */
export interface IEquatable {
    /**
     * Check whether this is equal to other.
     *
     * @param {*} other
     * @returns {boolean}
     */
    equals(other: any): boolean
}
