$('.cora').on('click', function() {
	$.ajax({
    method: "PUT",
    url: "http://localhost:3000",
    data: {
    	id: $('.cora').attr('data-id')
    }
})

router.put('/update', imagencontroller.update);

