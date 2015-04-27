(function(){
	var candidates = [
		{
			"firstname": "Hillary",
			"lastname" : "Clinton",
			"party" : "Democrat",
			"age" : 67,
			"currentPosition": "Homemaker",
			image: 'clinton.jpg',
			"quote":"'Everyday Americans need a champion and I want to be that champion.'"
		},
		{
			"firstname" : "Ted",
			"lastname" : "Cruz",
			"party" : "Republican",
			"age" : 44,
			"currentPosition": "Senator TX",
			image: 'cruz.jpg',
			"quote":"'It is a time for truth, it is a time for liberty, it is a time to reclaim the Constitution of the United States.'"
		},
		{
			"firstname" : "Rand",
			"lastname" : "Paul",
			"party" : "Republican",
			"age" : 52,
			"currentPosition": "Senator KY",
			image: 'paul.jpg',
			"quote":"'The Washington machine that gobbles up our freedoms and invades every nook and cranny of our lives must be stopped.'"
		},
		{
			"firstname" : "Marco",
			"lastname" : "Rubio",
			"party" : "Republican",
			"age" : 43,
			"currentPosition": "Senator FL",
			image: 'rubio.jpg',
			"quote":"'I live in an exceptional country where the son of a bartender and a maid can have the same dreams and the same future as those who come from power and privilege.'"
		}
		
	];

	console.log(candidates.quote);

	var formatHelpers = {
		toTitleCase: function(quote){
    	return quote.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		}
	}

	var templateHtml = $('#candidateInfo').html();
	var templateFactory = _.template(templateHtml);

	candidates.forEach(function(candidate){
					
		_.extend(candidate, formatHelpers);
		$('#container').append( templateFactory(candidate) );
	});

}).call(this);