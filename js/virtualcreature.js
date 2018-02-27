$(document).ready(function(){
	
	var t_caminar = setInterval(function(){ caminar(); }, 8000);
	
	function caminar(){
		// 0 - izq , 1 - der
		var dir 		= Math.floor((Math.random() * 2)+1);
		var imagen 		= "";
		var posicion 	= "";
		$(".vc_celda").each(function(index){
			if($(this).html()!=''){
				imagen 		= $(this).html();
				posicion 	= parseInt(this.id.replace("vc_c",""));
				if(posicion==1){dir=2;}
				if(posicion==16){dir=1;}
				$(this).html("");
			}
		})
		if(dir==1){posicion--;}else{posicion++;}
		$("#vc_c"+posicion).html(imagen);
	}
})