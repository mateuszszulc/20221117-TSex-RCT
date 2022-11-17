/**
 *
 * Sometimes we need to "narrow down" the type we use.
 * Especially when we use a union of types, or a given value may be undefined
 *
 * https://www.typescriptlang.org/docs/handbook/2/narrowing.html#handbook-content
 *
 * https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards
 * https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing
 *
 * https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
 * */

interface Currency {
    value: number;
}

function makePayment(cashAmount: number | string | Currency) {
    const VAT_RATE = 1.22;
    let calculation: number
    if(typeof cashAmount === 'number') {  // typeof TypeGuard
        calculation = cashAmount * VAT_RATE;
    } else if(typeof cashAmount === 'string') {
        calculation = Number(cashAmount) * VAT_RATE;
    } else {
        calculation = cashAmount.value * VAT_RATE
    }
    console.log('You paid', calculation)
}

class HTTPError extends Error {
    constructor(message?: string, public httpStatus = 400) {
        super(message)
    }
}

function handleException(exception: HTTPError | Error) {
      if(exception instanceof HTTPError) { // instanceof TypeGuard
          console.log('Error', exception.message, 'Status', exception.httpStatus)
      } else {
          console.log('Error', exception.message)
      }
      // invalid:
      // console.log(exception.httpStatus)
}



function isCurrency(currency: number | string | Currency): currency is Currency {
    return (currency as Currency).value !== undefined;
}

const cash = getCash(20)

if(isCurrency(cash)) { // TypePredicate TypeGuard:
    console.log('Your $$ value is', cash.value)
}

function getCash(day: number): number | string | Currency {
  if(day > 0 && day <= 20) return 0
  if(day > 20 && day <= 30) return 'zero'
  if(day > 30) return { value: 200 }
}


export {}
