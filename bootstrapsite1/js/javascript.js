// указание интервалов смены фото карусели
$('.carousel').carousel({
	interval: 5000,
	keyboard: false
})

// отмена escape для закрытия модального окна
// $('#exampleModal1').modal ({
// 	keyboard: false
// })
// $('#exampleModal2').modal ({
//     keyboard: false
// })
// $('#exampleModal3').modal ({
//     keyboard: false
// })

//функция по закрытию модальных окон
$('.modal').on('hidden.bs.modal', function(event) {
	alert('It is a great advertizing!');
});


