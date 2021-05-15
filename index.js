const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const PUBLISHABLE_KEY = "pk_test_51I9gncBtjHfzenazraFQfwAQBMDkVmQOlYodVmcf72WSMbt8dXcKAvOFJfzlE3WAo1dgfAGzHUY2k1hCeFbRJAsn00Kycfa1f8"
const SECRET_KEY = "sk_test_51I9gncBtjHfzenaz6wJ6rmPciR2gfJbgkTtg5T9qfU88Qh6qz2wf4SiPBuL4bTEJZ4jG9J7PpiIT9MvAuqpWwD5n009V8zQFar"
const stripe = require('stripe')(SECRET_KEY)
const app = express();
const publicDirectory=path.join(__dirname,'./public');
await.use(express.static(publicDirectory));
app.set('view engine','hbs');

app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())
app.set("view engine", "ejs")
const PORT = process.env.PORT || 3000
app.get('/', (req, res) => {
	res.render('Home', {
		key: PUBLISHABLE_KEY
	})
})
app.post('/payment', (req, res) => {
	stripe.customers.create({
			email: req.body.stripeEmail,
			source: req.body.stripeToken,
			name: 'Happy Restaurant',
			address: {
				line1: '00 University Ave',
				postal_code: 'NNN 000',
				city: 'Waterloo',
				state: 'Ontario',
				country: 'Canada'
			}
		})
		.then((customer) => {
			return stripe.charges.create({
				amount: 7000,
				description: 'Restaurant Payment',
				currency: 'CAD',
				customer: customer.id
			})
		})
		.then((charge) => {
			console.log(charge)
			res.send("Success")
		})
		.catch((err) => {
			res.send(err)
		})
})

app.listen(PORT, () => {
	console.log(`App is listening on ${PORT}`)
})
