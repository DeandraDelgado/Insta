let self = {}

self.imagen=   [ {
										id: 1,
										img: 'http://cocinarte.co/wp-content/uploads/2016/10/patacon.jpg',
									 	likes: 0,
									 	titulo: 'Patacon'},
									 {
									 	id: 2,
									 	img: 'https://i.ytimg.com/vi/4W4z6eFOMwQ/maxresdefault.jpg',
									 	likes: 0,
									 	titulo: 'Cachapa'
									 },
									 {
									 	id: 3,
									 	img: 'http://cookimia.com/wp-content/uploads/2012/11/pabellon.jpg',
									 	likes: 0,
									 	titulo: 'Pabellon'
									 },
									 {
									 	id: 4,
									 	img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKrUWZq-vKNgQNtfU_wv-Pr4boEiyb8ytHFBc6pXyBehpS6ka3',
									 	likes: 0,
									 	titulo: 'Arepa'
									 }
	];

self.insta = function(req, res){

	res.render('index', {feed: self.imagen});
}

self.update = function(req, res) {
	let likes = 0 
  for (var i = 0; i < self.imagen.length; i++) {
    if (self.imagen[i].id == req.body.id) {
      console.log(self.imagen[i])
      self.imagen[i]['likes'] = parseInt(self.imagen[i]['likes']) + 1

      likes = self.imagen[i]['likes']
      console.log(self.imagen[i])
    }
  }
  res.joson({likes:likes})
}


module.exports = self
