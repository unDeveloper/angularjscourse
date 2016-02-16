(function(){
	var app = angular.module('store',['store-products']);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	// app.controller("PanelController", function(){
	// 	this.tab = 1;

	// 	this.selectTab = function(setTab){
	// 		this.tab = setTab;
	// 	};

	// 	this.isSelected = function(checkTab){
	// 		return this.tab === checkTab;
	// 	};
	// });

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});



	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: '. . .',
			canPurchase: true,
			reviews:[
			{
				stars: 5,
				body: "Love the product!",
				author: "abcd@abcd.com",
			},
			{
				stars: 5,
				body: "Love the product!",
				author: "efgh@efgh.com",
			}
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: '. . .',
			canPurchase: true,
			reviews:[
			{
				stars: 2,
				body: "Love the product!",
				author: "abcd@abcd.com",
			},
			{
				stars: 4,
				body: "Love the product!",
				author: "efgh@efgh.com",
			}
			]
		}
	];
})();
