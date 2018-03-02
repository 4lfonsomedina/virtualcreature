$(document).ready(function(){
	
	var t_caminar = setInterval(function(){ caminar(); }, 8000);
	
	function caminar(){
		var dir 		= Math.floor((Math.random() * 2)+1);
		var imagen 		= "";
		var imagenE 	= "";
		var posicion 	= "";
		$(".vc_celda").each(function(index){
			if($(this).html()!=''){
				imagen 		= $(this).html();
				posicion 	= parseInt(this.id.replace("vc_c",""));
				imagenE 	= $("#vc_ce"+posicion).html();
				$("#vc_ce"+posicion).html("");
				$(this).html("");
				if(posicion==1){dir=2;}
				if(posicion==16){dir=1;}
			}
		})
		if(dir==1){posicion--;}else{posicion++;}
		$("#vc_c"+posicion).html(imagen);
		$("#vc_ce"+posicion).html(imagenE);
	}
	//menu
	$( ".vc_menu a" ).hover(
	  function() {
	  	$(this).find("img").attr("src","/img/menu/h_"+$(this).attr("btn")+".png");
	  }, function() {
	    $(this).find("img").attr("src","/img/menu/"+$(this).attr("btn")+".png");
	  }
	);
})