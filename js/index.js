// 显示案例详细图片
function showMore(n){
		var data;
		$.ajax({
			url: 'data/anli.json',
			type: 'GET',
			dataType: 'json'
		})
		.done(function(res){
			//案例1 ~ 8
			if(n == 1){
				data = res.anli1
				// swiper.removeAllSlides()
				// console.log(data)
				// for(let i = 0; i<data.length; i++){
				// 	imgTemp += '<div class="swiper-slide"><img src="' + data[i] + '"></div>'
				// }
				// console.log(imgTemp)
				// swiper2.appendSlide(imgTemp)
				// $('.flexbg').show()
				createSlides(data)
			}
			else if(n == 2){
				data = res.anli2
				createSlides(data)
			}
			else if(n == 3){
				data = res.anli3
				createSlides(data)
			}
			else if(n == 4){
				data = res.anli4
				createSlides(data)
			}
			else if(n == 5){
				data = res.anli5
				createSlides(data)
			}
			else if(n == 6){
				data = res.anli6
				createSlides(data)
			}
			else if(n == 7){
				data = res.anli7
				createSlides(data)
			}
			else if(n == 8){
				data = res.anli8
				createSlides(data)
			}
		})
}

function createSlides(data){
	var imgTemp = ''
	swiper2.removeAllSlides()
	for(let i = 0; i<data.length; i++){
		imgTemp += '<div class="swiper-slide"><img src="' + data[i] + '"></div>'
	}
	console.log(imgTemp)
	swiper2.appendSlide(imgTemp)
	$('.flexbg').show()
}

function sendMsg(){
	var name = $('#name').val(),
		phone = $('#phone').val(),
		email = $('#email').val(),
		msg = $('#msgArea').val()
	if(name == ''){
		$('#alertText').html('请输入您的姓名')
		$('.alertBox').show()
	}
	else if(phone == ''){
		$('#alertText').html('请输入您的联系方式')
		$('.alertBox').show()
	}
	else if(email == ''){
		$('#alertText').html('请输入您的邮箱')
		$('.alertBox').show()
	}
	else{
		var jsonData = {
			"name" : name,
			"phone" : phone,
			"email" : email,
			"message" : msg
		}
		var _data = JSON.stringify(jsonData)
		console.log(jsonData)
		console.log(_data)
		$.ajax({
			url: "http://www.nexusest.com/website/email/send",
			type: 'POST',
			contentType: "application/json",
			data: _data,
			dataType: 'json'
		})
		.done(function(e){
			if(e.code == 200){
				$('#alertText').html(e.message)
				$('.alertBox').show()
			} else {
				$('#alertText').html(e.detailMessage)
				$('.alertBox').show()
			}
		})
		.fail(function(jqXHR, textStatus, errorThrown){
			console.log(jqXHR)
			console.log(textStatus)
			console.log(errorThrown)
		})
	}
}