var Better	= Better	|| require('../build/better.js')

//////////////////////////////////////////////////////////////////////////////////
//		comment								//
//////////////////////////////////////////////////////////////////////////////////

var foo	= Better.Function(function(value){
	console.log('value', value)
}, {
	arguments	: [Number]
})

foo('dd')
