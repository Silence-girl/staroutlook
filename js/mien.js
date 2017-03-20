var index = {
	flag:true,
	start:function(){
		var _this = this;
		_this.playAudio();
		_this.other();
		$('#music').on('touchstart', function (e) {
            if (_this.flag==true) {
            	$('#music .music-btn').removeClass('play');
            	_this.stopAudio();
                _this.flag = false;
            }else{
            	$('#music .music-btn').addClass('play');
                _this.playAudio();
            	_this.flag = true;
            }
        });
	},
	playAudio: function (){
		var audio = document.getElementById('audio');
	    audio.play();
	    document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
	    }, false);
	    document.addEventListener('YixinJSBridgeReady', function() {
	        audio.play();
	    }, false);
	},
    stopAudio:function () {
    	var audio = document.getElementById('audio');
    	audio.pause();
    },
    other: function(){
    	var _this = this;
    	var pages = $(".swiper-slide").length - 1;
		var mySwiper = new Swiper('.swiper-container', {
			direction: 'vertical',
			onSlideChangeEnd: function(swiper) {
				if(swiper.activeIndex != 0 && swiper.activeIndex != pages) {
					$("#next").show();
				} else {
					$("#next").hide();
				}
			},
			onSlideChangeStart: function(swiper) {
				if(swiper.activeIndex == pages) {
					$("#next").hide();
				}
			}
		});
		
		setTimeout(function(){
			$("#open").show();
		},12000);
		
		$("#open").click(function() {
			mySwiper.slideTo(1, 600, true);
		});
    }
}
index.start();
// 参考样图展示
			
