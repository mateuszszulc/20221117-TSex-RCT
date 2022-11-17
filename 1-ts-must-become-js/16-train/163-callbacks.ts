/**
 * Task 1.6.3:
 *
 * Without modifying the getVatTaxRateFromServer function, call it and pass the appropriate callback
 * to collect the tax value and recalculate the prices after VAT
 * come up with this price - e.g. basket value = PLN 300
 * For example, showing the result:
 * console.log(300 + 300 * vatRate) // where vatRate is the received callback argument
 *
 * Write the appropriate type for the calculations function and use it
 *
 *
 * 4.1 extra points:
 * - simulate tax return only after 3 seconds
 *
 * 4.2 bonus points +:
 * - throw an exception if calculations is not a function
 * - write such a case and handle it in try - catch
 * */

function getVatTaxRateFromServer(calculations: any) {
    calculations(0.23)
}


export {};
