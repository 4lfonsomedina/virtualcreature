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
		posicion = get_posicion();
		imagen 		= $("#vc_c"+posicion).html();
		imagenE 	= $("#vc_ce"+posicion).html();
		$("#vc_ce"+posicion).html("");
		$("#vc_c"+posicion).html("");
		if(posicion==1){dir=2;}
		if(posicion==20){dir=1;}
		if(dir==1){posicion--;}else{posicion++;}
		$("#vc_c"+posicion).html(imagen);
		$("#vc_ce"+posicion).html(imagenE);
	}//caminar
//alegria
	$(".vc_celda").click(function(){
		if($(this).html().indexOf("creature")>=0&&ocupado()){
			alegria();
		}
	})
	function alegria(){
		var posicion = get_posicion();
		var lvl 	= "lvl1";
		var alegria = "<img src='img/creature/"+lvl+"/creature6.gif'>";
		var estado 	= "<img src='img/creature/estatus/estatus2.gif'>";
		var criatura_actual  = $("#vc_c"+posicion).html();
		var estado_actual  = $("#vc_ce"+posicion).html();
		estado_normal_parar();
		$("#vc_c"+posicion).html(alegria);
		$("#vc_ce"+posicion).html(estado);
		setTimeout(function(){
			$("#vc_c"+posicion).html(criatura_actual);
			$("#vc_ce"+posicion).html(estado_actual);
			estado_normal_iniciar();
		},4000);


	}//alegria

//comer
$("#btn_m_comer").click(function(){
	if(ocupado()){
		comer();
	}
})
function comer(){
	var posicion = get_posicion();
	var lvl = "lvl1";
	var ima_cominda = "<img src='img/comida/c"+Math.floor((Math.random() * 3) + 1)+".gif'>";
	estado_normal_parar();
	var criatura_actual  = $("#vc_c"+posicion).html();
	var estado_actual  = $("#vc_ce"+posicion).html();
	if(posicion==20){posicion=posicion-1;}
	$("#vc_c"+(posicion+1)).html(ima_cominda);
	$("#vc_c"+posicion).html("<img src='img/creature/"+lvl+"/creature4.gif'>");
	setTimeout(function(){
			$("#vc_c"+posicion).html(criatura_actual);
			$("#vc_c"+(posicion+1)).html("");
			$("#vc_ce"+posicion).html(estado_actual);
			alegria();
			estado_normal_iniciar();
		},7500);
}//comer

//banio
$("#btn_m_limpiar").click(function(){
	if(ocupado()){
		banio();
	}
})
function banio(){
	var posicion = get_posicion();
	var lvl = "lvl1";
	var ima_banio = "<img src='img/acciones/bano.gif'>";
	estado_normal_parar();
	var criatura_actual  = $("#vc_c"+posicion).html();
	var estado_actual  = $("#vc_ce"+posicion).html();
	if(posicion==20){posicion=posicion-1;}
	$("#vc_ce"+(posicion+1)).html(ima_banio);
	$("#vc_c"+posicion).html("<img src='img/creature/"+lvl+"/creature1.gif'>");
	setTimeout(function(){
			$("#vc_c"+posicion).html(criatura_actual);
			$("#vc_ce"+(posicion+1)).html("");
			$("#vc_ce"+posicion).html(estado_actual);// aqui hay que quitar las moscas en caso de tenerlas
			alegria();
			estado_normal_iniciar();
		},7500);
}//comer
//banio

//funcion de ocupacion es para verificar que no este ocupado al querer ejecutar otra accion
function ocupado(){
	var ocu = false;
	$(".vc_celda").each(function(index){
		var posicion 	= parseInt(this.id.replace("vc_c",""));
		if($(this).html().indexOf("creature")>=0&&
			$("#vc_ce"+posicion).html()==""&&
			$("#vc_c"+(posicion+1)).html()==""&&
			$("#vc_ce"+(posicion+1)).html()==""){
			ocu=true;
		}
	})
	return ocu;
}
//regresa la pocicion de la creatura
function get_posicion(){
	var posicion = 0;
	$(".vc_celda").each(function(index){
		if($(this).html().indexOf("creature")>=0){
			posicion = parseInt(this.id.replace("vc_c",""));
		}
	})
	return posicion;
}

//menu
	$( ".vc_menu a" ).hover(
	  function() {
	  	$(this).find("img").attr("src","/img/menu/h_"+$(this).attr("btn")+".png");
	  }, function() {
	    $(this).find("img").attr("src","/img/menu/"+$(this).attr("btn")+".png");
	  }
	);//menu
})