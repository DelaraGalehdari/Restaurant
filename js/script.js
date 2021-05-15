let products = [
	{
		id: 1,
		name: 'Steak',
		tag: 'steak',
		price: 30,
		inCart: 0
	},

	{
		id: 2,
		name: 'Grilled Fish',
		tag: 'grilledfish',
		price: 25,
		inCart: 0
	},
	{
		id: 3,
		name: 'Persian Kabab',
		tag: 'persiankabab',
		price: 45,
		inCart: 0
	},
	{
		id: 4,
		name: 'Tiramisu',
		tag: 'tiramisu',
		price: 18,
		inCart: 0
	},
	{
		id: 5,
		name: 'Waffles with ice-cream',
		tag: 'Waffleswithice-cream',
		price: 15,
		inCart: 0
	},
	{
		id: 6,
		name: 'Waffles with fruits',
		tag: 'Waffleswithfruits',
		price: 15,
		inCart: 0
	}



];



let carts = document.querySelectorAll('.add-cart');
//let cart1 = localStorage.getItem('productsInCarts') ? JSON.parse(localStorage.getItem('productsInCarts')) : [];
//const getIndex = id => cart1.indexOf(cart1.find((item) => item.id === id));

for (let i = 0; i < carts.length; i++) {
	carts[i].addEventListener('click', () => {
		cartNumbers(products[i]);
		totalCost(products[i]);
	})
}


function onLoadCartNumbers() {

	let productNumbers = localStorage.getItem('cartNumbers');
	if (productNumbers) {
		document.querySelector('.navbar .cart').textContent = productNumbers;
	}
}

function cartNumbers(product, action) {

	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);

	let cartItems = localStorage.getItem('productsInCarts');
	cartItems = JSON.parse(cartItems);

	if (action) {
		localStorage.setItem('cartNumbers', productNumbers - 1);
		document.querySelector('.navbar .cart').textContent = productNumbers - 1;
		console.log("action running");
	} else if (productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.navbar .cart').textContent = productNumbers + 1;
	} else {
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.navbar .cart').textContent = 1;
	}

	setItems(product, action);
}

function setItems(product, action) {
	let cartItems = localStorage.getItem('productsInCarts');
	cartItems = JSON.parse(cartItems);

	if (cartItems != null) {
		let currentProduct = product.tag;

		if (cartItems[currentProduct] == undefined) {

			cartItems = {
				...cartItems,
				[currentProduct]: product
			}
		}
		if (action) {
			cartItems[currentProduct].inCart -= 1;
		} else {
			cartItems[currentProduct].inCart += 1;
		}
	} else {
		product.inCart = 1;
		cartItems = {
		[product.tag]: product
		}
	}

	localStorage.setItem("productsInCarts", JSON.stringify(cartItems));
}

function totalCost(product, action) {
	let cart = localStorage.getItem('totalCost');

	if (action) {
		cart = parseInt(cart);

		localStorage.setItem('totalCost', cart - product.price);
	} else if (cart != null) {
		cart = parseInt(cart);
		localStorage.setItem('totalCost', cart + product.price);
	} else {
		localStorage.setItem('totalCost', product.price);
	}


}


function change_text1() {
	let b = [
		{
			name: 'Steak & Eggs',
			tag: 'eggs',
			price: 15.95,
			inCart: 0,
			description: '7oz Sirloin, two eggs any style, hashbrowns and texas toast.'
			},
		{
			name: 'International Breakfast',
			tag: 'InternationalBreakfast',
			price: 14.95,
			inCart: 0,
			description: 'Three buttermilk pancakes with maple syrup, two eggs any style, with ham, bacon and sausage.'
		},
		{
			name: 'Breakfast Burrito',
			tag: 'BreakfastBurrito',
			price: 7.95,
			inCart: 0,
			description: 'Two scrambled eggs, choice of ham, bacon or sausage and cheese in a fresh tortillas. With hashbrown.'
		}, {
			name: 'Haystack',
			tag: 'Haystack',
			price: 12.95,
			inCart: 0,
			description: 'Three buttermilk pancakes with maple syrup, choice of bacon, ham or sausage.'
		}
		];


	document.getElementById("content").innerHTML = `
	           <div class="info">
					<h3><span>01.</span>STEAK & EGGS</h3>
					<p>7oz Sirloin, two eggs any style, hashbrowns and texas toast. $15.95</p>
					<a href="#"><button class="btn add-cart add-cart1">add to cart</button></a>
				</div>
				<div class="info">
					<h3><span>02.</span>INTERNATIONAL BREAKFAST</h3>
					<p>Three buttermilk pancakes with maple syrup, two eggs any style, with ham, bacon and sausage.
					$14.95</p>
					<a href="#"><button class="btn add-cart add-cart1">add to cart</button></a>
				</div>
				<div class="info">
					<h3><span>03.</span>BREAKFAST BURRITO</h3>
					<p>Two scrambled eggs, choice of ham, bacon or sausage and cheese in a fresh tortillas. With hashbrown. $7.95</p>
					<a href="#"><button class="btn add-cart add-cart1">add to cart</button></a>
				</div>
				<div class="info">
					<h3><span>04.</span>HAYSTACK</h3>
					<p>Three buttermilk pancakes with maple syrup, choice of bacon, ham or sausage. $12.95</p>
					<a href="#"><button class="btn add-cart add-cart1">add to cart</button></a>
				</div>`

	//	to add click event
	let list_b = document.querySelectorAll('.add-cart1');
	for (let i = 0; i < list_b.length; i++) {
		list_b[i].addEventListener('click', () => {
			cartNumbers(b[i]);
			totalCost(b[i]);
		})
	}
}

function change_text2() {

	let p = [
		{
			name: 'Persian Kabab Family',
			tag: 'persiankababfamily',
			price: 64.95,
			inCart: 0
	},
		{
			name: 'Lamb Kabab',
			tag: 'lambkabab',
			price: 64.95,
			inCart: 0
	},
		{
			name: 'Vaziri Kabab',
			tag: 'VaziriKabab',
			price: 19.99,
			inCart: 0
	},
		{
			name: 'Kadai Chicken',
			tag: 'KadaiChicken',
			price: 13.00,
			inCart: 0
	},
	];

	document.getElementById("content").innerHTML = `
	           <div class="info">
					<h3><span>01.</span>Persian Kabob Family</h3>
					<p>Any 6 skewers from our sizzler items. Platter is served with
                    flavoured persian rice, fries, salad and naan. $64.95</p>
					<a href="#"><button class="btn add-cart2">add to cart</button></a>
				</div>
				<div class="info">
					<h3><span>02.</span>Lamb Kabob</h3>
					<p>Savoury skewers of bonless lamb leg meat marinated in
						several phases with traditional and secret spices. $19.99</p>
					<a href="#"><button class="btn add-cart2">add to cart</button></a>
				</div>
				<div class="info">
					<h3><span>03.</span>Vaziri Kabob</h3>
					<p>One skewer of veal kofta kabob and one skewer of Joojeh kabob. Served with two sides. $17.99</p>
					<a href="#"><button class="btn add-cart2">add to cart</button></a>
				</div>
				<div class="info">
					<h3><span>04.</span>Kadai Chicken</h3>
					<p>Popular spicy subcontinent homestyle boneless chicken curry with fragrant spices and fresh ginger. $13.00</p>
					<a href="#"><button class="btn add-cart2">add to cart</button></a>
				</div>
				
`

	//	to add click event
	let c = document.querySelectorAll('.add-cart2');
	for (let i = 0; i < c.length; i++) {
		c[i].addEventListener('click', () => {
			cartNumbers(p[i]);
			totalCost(p[i]);
		})
	}
}

function change_text3() {
	let p3 = [
		{
			name: 'Steak',
			tag: 'steak',
			price: 30,
			inCart: 0
	},
		{
			name: 'Grilled Fish',
			tag: 'grilledfish',
			price: 25,
			inCart: 0
	},
		{
			name: 'Grilled Shrimp',
			tag: 'GrilledShrimp',
			price: 15.99,
			inCart: 0
	},
		{
			name: 'Lobster',
			tag: 'Lobster',
			price: 33.00,
			inCart: 0
	},
	];

	document.getElementById("content").innerHTML = `
	           <div class="info">
					<h3><span>01.</span>Steak</h3>
					<p>Marinated Flank steak with special spices. Served with
					Baked Potatoes with Onion Sour Cream. $30.00</p>
					<a href="#"><button class="btn add-cart3">add to cart</button></a>
				</div>
				<div class="info">
					<h3><span>02.</span>Grilled Fish</h3>
					<p>Barbecued Fish marinated in our special seasoning. $17.95</p>
					<a href="#"><button class="btn add-cart3">add to cart</button></a>
				</div>
				<div class="info">
					<h3><span>03.</span>Grilled Shrimp</h3>
					<p>Barbecued shrimp marinated in our special seasoning. 
						Served with two sides. $15.99</p>
					<a href="#"><button class="btn add-cart3">add to cart</button></a>
				</div>
				<div class="info">
					<h3><span>04.</span>Lobster Lover's Dream</h3>
					<p>A roasted rock lobster tail, butter-poached Maritime lobster tail and lobster-and-shrimp linguini Alfredo. Served with melted butter, lemon and choice of side.. $33.00</p>
					<a href="#"><button class="btn add-cart3">add to cart</button></a>
				</div>`

	//	to add click event
	let diner_list = document.querySelectorAll('.add-cart3');
	for (let i = 0; i < diner_list.length; i++) {
		diner_list[i].addEventListener('click', () => {
			cartNumbers(p3[i]);
			totalCost(p3[i]);
		})
	}
}



function change_text4() {
	let p4 = [
		{
			name: 'Praline And Ganache Cake',
			tag: 'Praline',
			price: 6.95,
			inCart: 0
	},
		{
			name: 'Re-Invented Cheesecake',
			tag: 'Re-InventedCheesecake',
			price: 7.99,
			inCart: 0
	},
		{
			name: 'Mixed Berry Mousse',
			tag: 'mousse',
			price: 4.99,
			inCart: 0
	},
		{
			name: 'Tea And Herbal Tea Ice Cream',
			tag: 'TeaCream',
			price: 5.00,
			inCart: 0
	},
	];

	document.getElementById("content").innerHTML = `
	           <div class="info">
					<h3><span>01.</span>Praline and ganache cake</h3>
					<p>Pralines, which are almonds or hazelnuts mixed with caramelized sugar, and ganache. $6.95</p>
					<a href="#"><button class="btn add-cart4">add to cart</button></a>
				</div>
				<div class="info">
					<h3><span>02.</span>Re-invented cheesecake</h3>
					<p>Take the classic American cheesecake and add other ingredients to bring out the flavors. $7.99</p>
					<a href="#"><button class="btn add-cart4">add to cart</button></a>
				</div>
				<div class="info">
					<h3><span>03.</span>Mixed berry mousse</h3>
					<p>A mousse is a great dessert option. This is the perfect light option to offer clients after a hearty meal. $4.99</p>
					<a href="#"><button class="btn add-cart4">add to cart</button></a>
				</div>
				<div class="info">
					<h3><span>04.</span>Tea and herbal tea ice cream</h3>
					<p>Swap traditional vanilla, chocolate, or strawberry ice creams for equally tasty but more modern flavors. $5.00</p>
					<a href="#"><button class="btn add-cart4">add to cart</button></a>
				</div>`

	//	to add click event
	let dessert_list = document.querySelectorAll('.add-cart4');
	for (let i = 0; i < dessert_list.length; i++) {
		dessert_list[i].addEventListener("click", () => {
			cartNumbers(p4[i]);
			totalCost(p4[i]);
		})
	}
}


function displayCart() {

	let cartItems = localStorage.getItem('productsInCarts');
	cartItems = JSON.parse(cartItems);

	let cart = localStorage.getItem('totalCost');
	cart = parseInt(cart);

	//	console.log("bEFORE", Object.values(cartItems));
	let productContainer = document.querySelector(".products");
	let cartContainer = document.querySelector(".formPayment");

	let productNumbers = localStorage.getItem('cartNumbers');
	let tax = cart * .13;

	tax = parseInt(tax);

	if (cartItems && productContainer) {
		var grandTotal = cart + tax + 15;
		var shippingPrice = 15;
		localStorage.setItem("grandTotal", grandTotal);
		productContainer.innerHTML = '';
		Object.values(cartItems).map((item, index) => {
			productContainer.innerHTML += `
               <div class="products">
				<div class="product">
					<img src="../images/${item.tag}.jpg">
					<div class="product-info">
						<h3 class="product-name">${item.name}</h3>
						<h2 class="product-price sm-hide">$${item.price}</h2>
						<div class="product-quantity">
							<ion-icon class="decrease" name="caret-back-outline"></ion-icon>
                    		<span>${item.inCart}</span>
							<ion-icon class="increase" name="caret-forward-outline"></ion-icon> 
						</div>
						<button type="button" id=${item.id} class="product-remove">
						<i class="far fa-trash-alt"></i>
						<span class="remove">Remove</span>
						</button>
					</div>
				</div>`;

		});
		cartContainer.innerHTML = `
			
					<p>
						<span>Total Price</span>
						<span>$${cart}</span>
					</p>

					<p>
						<span>Tax</span>
						<span>$${tax}</span>
					</p>
					<p>
						<span>Shipping</span>
						<span>$${shippingPrice}</span>
					</p>
						<p>
						<span>Grand Total</span>
						<span>$${grandTotal}</span>
					</p>`

	}




	deleteButtons();
	manageQuantity();

}

//	var remove_item_btn = document.querySelectorAll('.product-remove');
//	for (var i = 0; i < remove_item_btn.length; i++) {
//
//		
//		remove_item_btn[i].addEventListener("click", (event) => {
//
//			var buttonClicked = event.target;
//			var button_id = buttonClicked.id;
//
//			for (var i = 0; i < Object.values(cartItems).length; i++) {
//
//				if (Object.values(cartItems)[i].id == button_id) {
//
//					console.log("id", Object.keys(cartItems)[i]);
//					if (delete cartItems[Object.keys(cartItems)[i]]) {
//						console.log("Yes");
//					}
//
//					console.log(Object.values(cartItems));
//					localStorage.setItem('productsInCarts', JSON.stringify(cartItems));
//					buttonClicked.parentElement.parentElement.parentElement.remove();
//					localStorage.setItem('cartNumbers', productNumbers - cartItems[cartItems[Object.keys(cartItems)[i]]].inCart);
//
//				}
//			}
//		
//
//
//		})
//	}



function manageQuantity() {
	let decreaseButtons = document.querySelectorAll('.decrease');
	let increaseButtons = document.querySelectorAll('.increase');
	let currentQuantity = 0;
	let currentProduct = '';
	let cartItems = localStorage.getItem('productsInCarts');
	cartItems = JSON.parse(cartItems);

	for (let i = 0; i < increaseButtons.length; i++) {
		decreaseButtons[i].addEventListener('click', () => {
			console.log(cartItems);
			currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
			console.log('q', currentQuantity);
			currentProduct =
				decreaseButtons[i].parentElement.parentElement.querySelector('h3').textContent.toLocaleLowerCase()
				.replace(/ /g, '').trim();
			console.log(currentProduct);

			if (cartItems[currentProduct].inCart > 1) {
				cartItems[currentProduct].inCart -= 1;
				console.log('decrease', cartItems[currentProduct].inCart);
				cartNumbers(cartItems[currentProduct], "decrease");
				totalCost(cartItems[currentProduct], "decrease");
				localStorage.setItem('productsInCarts', JSON.stringify(cartItems));
				displayCart();
			}
		});
		increaseButtons[i].addEventListener('click', () => {

			console.log(cartItems);
			currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
			console.log(currentQuantity);
			currentProduct = increaseButtons[i].parentElement.parentElement.querySelector('h3').textContent.toLocaleLowerCase()
				.replace(/ /g, '').trim();
			console.log(currentProduct);

			cartItems[currentProduct].inCart += 1;
			cartNumbers(cartItems[currentProduct]);
			totalCost(cartItems[currentProduct]);
			localStorage.setItem('productsInCarts', JSON.stringify(cartItems));
			displayCart();
		});

	}
}

function deleteButtons() {
	let deleteButtons = document.querySelectorAll('.product-remove');
	let productNumbers = localStorage.getItem('cartNumbers');
	let cartCost = localStorage.getItem("totalCost");
	let cartItems = localStorage.getItem('productsInCarts');
	cartItems = JSON.parse(cartItems);
	let productName;
	console.log('delete', deleteButtons);
	for (let i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener('click', () => {
			productName = deleteButtons[i].parentElement.querySelector('h3').textContent.toLocaleLowerCase().replace(/ /g, '').trim();

			localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
			localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].inCart));

			delete cartItems[productName];
			localStorage.setItem('productsInCarts', JSON.stringify(cartItems));

			displayCart();
			onLoadCartNumbers();
		})
	}
}

displayCart();
onLoadCartNumbers();
change_text2();
