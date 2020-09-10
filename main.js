axios.get('https://api.github.com/users/gabrieloshiro1997')
	.then(function(response) {
		console.log(response);
	})
	.catch(function(error) {
		console.error(error);
	})