
function CartItem({title, imgURL, price, description, amount}) {
	return (
		<li className="list-group-item d-flex p-3" style={{height: 160}}>
			<img src={ imgURL } alt={ title } style={{maxWidth: 160}} className="img-fluid rounded mx-2" />
			<div className="w-100">
				<h5 className="mb-1">{ title }</h5>
				<small>{ price }</small>
				<p>{ description }</p>
			</div>
			<div>
				<span className="badge text-white text-bg-info" style={{fontSize: 22}}> {amount} </span>
			</div>
		</li>
	)
}

export default CartItem;
