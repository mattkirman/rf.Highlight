(function($){
	
	$.fn.highlight = function(userDefinedSettings){
		
		var s = $.extend({
			/*	DEFAULTS */
			color: [255, 255, 187],
			duration: 400,
			steps: 20,
			wait: 3000
		}, userDefinedSettings);
		
		$(this).css({
			backgroundColor: 'rgba('+s.color[0]+','+s.color[1]+','+s.color[2]+',1)'
		});
		
		var timeout = s.duration / s.steps;
		var alphaDiff = 1 / s.steps;
		
		setTimeout(fade, s.wait, this, s.color[0], s.color[1], s.color[2], 1, timeout, alphaDiff);
		
	}
	
	fade = function(item, color1, color2, color3, alpha, timeout, alphaDiff){
		alpha -= alphaDiff;
		$(item).css({
			backgroundColor: 'rgba('+color1+','+color2+','+color3+','+alpha+')'
		})
		
		if (alpha <= 0){
			$(item).css('backgroundColor','');
		} else {
			setTimeout(fade, timeout, item, color1, color2, color3, alpha, timeout, alphaDiff);
		}
	}
	
})(jQuery);