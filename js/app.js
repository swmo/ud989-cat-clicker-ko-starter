var ViewModel = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/1413379559_412a540d29_z.jpg');
	this.imgAttribution = ko.observable('https://www.flicker.com/photos');
	this.catLevel = ko.computed(function(){

		if(this.clickCount() > 20)  return 'proably dead';

		if(this.clickCount() > 14)  return 'grandmother';

		if(this.clickCount() > 6)  return 'parent';

		if(this.clickCount() > 2)  return 'enfant';

		return "baby"
	}, this)

	this.incrementCounter = function() {
		this.clickCount((this.clickCount() + 1));
	};


}

ko.applyBindings(new ViewModel);
