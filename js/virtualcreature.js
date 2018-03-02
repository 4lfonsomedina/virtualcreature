$(document).ready(function(){
	var t_caminar;
	estado_normal_iniciar();
//tiempo
	function estado_normal_iniciar(){
		clearInterval(t_caminar);
		t_caminar = setInterval(function(){ caminar(); }, 8000);
	}
	function estado_normal_parar(){
		clearInterval(t_caminar);
	}
	
//caminar
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
	}//caminar
//alegria
	$(".vc_celda").click(function(){
		var posicion 	= parseInt(this.id.replace("vc_c",""));
		if($(this).html()!=""&&$("#vc_ce"+posicion).html()==""){
			alegria();
		}
	})
	function alegria(){
		var lvl 	= "lvl1";
		var alegria = "<img src='img/creature/"+lvl+"/creature6.gif'>";
		var estado 	= "<img src='img/creature/estatus/estatus2.gif'>";
		$(".vc_celda").each(function(index){
			if($(this).html()!=''){
				estado_normal_parar();
				var posicion 	= parseInt(this.id.replace("vc_c",""));
				var criatura_actual  = $(this).html();
				var estado_actual  = $("#vc_ce"+posicion).html();
				$(this).html(alegria);
				$("#vc_ce"+posicion).html(estado);
				setTimeout(function(){
					$("#vc_c"+posicion).html(criatura_actual);
					$("#vc_ce"+posicion).html(estado_actual);
					estado_normal_iniciar();
				},4000);
			}
		});
	}
	//alegria
//menu
	$( ".vc_menu a" ).hover(
	  function() {
	  	$(this).find("img").attr("src","/img/menu/h_"+$(this).attr("btn")+".png");
	  }, function() {
	    $(this).find("img").attr("src","/img/menu/"+$(this).attr("btn")+".png");
	  }
	);//menu
})