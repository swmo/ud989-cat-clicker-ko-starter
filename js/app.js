

var Cat = function(data){
	this.clickCount = ko.observable(0);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgSrc);
	this.catLevel = ko.computed(function(){

		if(this.clickCount() > 20)  return 'proably dead';

		if(this.clickCount() > 14)  return 'grandmother';

		if(this.clickCount() > 6)  return 'parent';

		if(this.clickCount() > 2)  return 'enfant';

		return "baby"
	}, this);

	this.nicknames = ko.observableArray(data.nicknames);
}

var ViewModel = function(){

	/* Using for binding inside a with */
	var self = this;


	this.cats = ko.observableArray([]);
	this.currentCat = ko.observable(null);

	this.addCat = function(cat){
		self.cats.push(cat);
	};

	this.setCurrentCat = function(cat){
		//alert("hiii");
		self.currentCat(cat);
	}

	this.assignRandomCurrentCat = function(){
		self.currentCat(self.cats()[Math.floor(Math.random() * self.cats().length)]);
	}

	/** Posiblity 1 when called inside of with:
	Moses recommends this -> because it should work inside a with and outside too.
	 */
	this.incrementCounter = function() {
		self.currentCat().clickCount((self.currentCat().clickCount() + 1));
	};

	/** Posiblity 2 when called inside of with: 
	-> this is not anymore ViewModel instead its direct currentCat()
	*/ 
	this.incrementCounter2 = function() {
		this.curentCat().clickCount((self.curentCat().clickCount() + 1));
	};

	/** 
	if you dont use with and you are not using the manueal 
	self = this declartion (of developers also define that = this sometimes)
	so you can use this
	*/ 
	this.incrementCounter3 = function() {
		this.curentCat().clickCount((this.curentCat().clickCount() + 1));
	};
}

var demoData = [
	{
		name: 'hans',
		imgSrc:'img/1413379559_412a540d29_z.jpg',
		imgAttribution: 'https://www.flicker.com/photos',
		nicknames:	[
	        { name: 'James' }
	    ]
	}
	,
	{
		name: 'peter',
		imgSrc:'img/22252709_010df3379e_z.jpg',
		imgAttribution: 'https://www.flicker.com/photos',
		nicknames:	[
	        { name: 'Bert' },
	        { name: 'Charles' },
	        { name: 'Denise' }
	    ]
	}
	,
	{
		name: 'maria',
		imgSrc:'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: 'https://www.flicker.com/photos',
		nicknames:	[
	        { name: 'Mari' },
	        { name: 'spatzu' }
	    ]
	}
];

viewModel = new ViewModel();
ko.applyBindings(viewModel);

demoData.forEach(function(data,key){
	cat = new Cat(data);
	/* or like this also possible:
	cat.name = catdata.name;
	cat.imgSrc = catdata.imgSrc;
	*/
	viewModel.addCat(cat);
});

viewModel.assignRandomCurrentCat();




