/**
 * @typedef { import("./CartItem").CartItem } CartItem
 * */

/*
 * here is missing one "*" intentionally, above in comment
 *
 * @typedef { import("./Clearable").Clearable } Clearable
 * @implements Clearable
 * */
export class ShoppingCart {
	/**
	 * @private
	 * @type {CartItem[]}
	 * */
	items = []

	addItem(item) {
		this.items.push(item)
	}

	/**
	 * @return {readonly CartItem[]}
	 */
	getAll() {
		return this.items
	}
}


// implementtion testing:

const shoppingCart = new ShoppingCart()

shoppingCart.addItem({})
// Type checking:
shoppingCart.items.push({})

shoppingCart.getAll().push({})
