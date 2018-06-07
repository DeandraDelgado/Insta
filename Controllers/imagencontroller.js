let self = {}

self.imagen =  [ {
										id: 1,
										img: 'http://www.pantone.com/images/products/GG6103N-pantone-graphics-pms-srgb-cmyk-hex-color-bridge-coated-product-2.jpg',
									 	likes: 0,
									 	titulo: 'pantone'},
									 {
									 	id: 2,
									 	img: 'https://www.pantone.com/images/products/DRIVE-COY18-pantone-lifestyle-chip-drive-ultra-violet-18-3838-product-1.jpg',
									 	likes: 0,
									 	titulo: 'Violet'
									 },
									 {
									 	id: 3,
									 	img: 'https://www.pantone.com/images/products/DRIVE-COY17-pantone-color-of-the-year-2017-greenery-15-0343-usb-chip-thumb-drive.jpg',
									 	likes: 0,
									 	titulo: 'Green'
									 },
									 {
									 	id: 4,
									 	img: 'http://blog.visme.co/wp-content/uploads/2018/01/The-2013-Color-of-the-Year-Emerald-2.jpg',
									 	likes: 0,
									 	titulo: 'Esmerald'
									 }
	];

	self.insta = function(req, res){

	res.render('index', {feed: self.imagen});
}

self.update = function(req, res) {
	let likes = 0
  for (var i = 0; i< self.imagen.length; i++) {
    if (self.imagen[i].id == req.body.id) {
      self.imagen[i]['likes'] = parseInt(self.imagen[i]['likes']) + 1
      likes = self.imagen[i]['likes']
    }
  }
  res.json({likes:likes})
}

self.imagen = function(req, res) {
	var pic = req.params.id
	res.render('images', {feed: pic});
}

module.exports = self
