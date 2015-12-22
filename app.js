(function(){
var app = angular.module('student', []);

app.controller('StudentController', function(){
	this.kids = students;
});

app.controller('PanelController', function(){
	this.tab = 1;

	this.selectTab = function(setTab) {
		this.tab = setTab;
	};
	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	};
});

var students = [{
	name: 'Deepan',
	section: 'L.K.G',
	parent: 'Murugan',
	roll_no: 'VVK001',
	description: 'Deepan is 3 years old and is quite jovial',
	reports: '',
	stars: '',
	edit: true
},
{
	name: 'Kylie',
	section: 'U.K.G',
	parent: 'David',
	roll_no: 'KGS002',
	image: 'kylie.jpg',
	description: 'Kylie is a bubbly, sweet natured 4 year old girl.',
	edit: true
},
{
	name: 'Becky',
	section: 'U.K.G',
	parent: 'Baeur',
	roll_no: 'KGS003',
	image: 'becky.jpg',
	description: 'Becky is quite and an introvert.',
	reports: '',
	stars: '',
	edit: true
}];
})();