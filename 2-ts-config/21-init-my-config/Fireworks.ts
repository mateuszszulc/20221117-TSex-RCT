/**
 *
 * Writing functions as an interface should not surprise you.
 *
 * First of all:
 * - Functions in JS are objects too (but with special purpose and behavior)
 *
 * Second:
 * - Interface cannot be simple type or alias/extend simple type (so it's object-oriented only!)
 * - So there must be a notation to define it as: function interface
 *
 */

export interface Fireworks {
    (): string
}
