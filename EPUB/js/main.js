require.config({
	paths: {
		'jquery': 'libs/jquery'
	}
})


require(['jquery', 'person'], function($, person) {
	console.log($);
	console.dir(person);
});
