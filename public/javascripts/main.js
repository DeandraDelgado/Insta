$('.cora').on('click', function() {
	$.ajax({
    method: "PUT",
    url: "http://localhost:3000/updatep",
    data: {
    id: $('.cora').attr('data-id')
    }
})
});
