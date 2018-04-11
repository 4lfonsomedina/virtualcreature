$(document).ready(function(){
///////////////////////////////////////////////////////////////////////	
//******************************** TIEMPO **************************//
/////////////////////////////////////////////////////////////////////
var t_caminar;
estado_normal_iniciar();
function estado_normal_iniciar(){
	clearInterval(t_caminar);
	t_caminar = setInterval(function(){ caminar(); }, 8000);
}
un_segundo = setInterval(function(){ decision_cargar_energia(); }, 1000);
function estado_normal_parar(){
	clearInterval(t_caminar);
}
///////////////////////////////////////////////////////////////////////	
//******************************** COMIDA **************************//
/////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////	
//******************************* ALEGRIA **************************//
/////////////////////////////////////////////////////////////////////
//alegria
$(".vc_celda").click(function(){
	if($(this).html().indexOf("creature")>=0&&ocupado()){
		alegria();
	}
})
function alegria(){
	var posicion = get_posicion();
	var lvl 	= get_nivel();
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


}
///////////////////////////////////////////////////////////////////////	
//************************** EXPERIENCIA ***************************//
/////////////////////////////////////////////////////////////////////
//alegria
function experiencia(){
	quitar_bateria();
	var posicion = get_posicion();
	var lvl 	= get_nivel();
	var alegria = "<img src='img/creature/"+lvl+"/creature6.gif'>";
	var estado 	= "<img src='img/creature/estatus/experiencia.gif'>";
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


}
///////////////////////////////////////////////////////////////////////	
//******************************** COMER ***************************//
/////////////////////////////////////////////////////////////////////
$("#btn_m_comer").click(function(){
	if(ocupado()){
		comer();
	}
})
function comer(){
	var posicion = get_posicion();
	var lvl = get_nivel();
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
}
///////////////////////////////////////////////////////////////////////	
//******************************** BANIO ***************************//
/////////////////////////////////////////////////////////////////////
$("#btn_m_limpiar").click(function(){
	if(ocupado()){
		banio();
	}
})
function banio(){
	var posicion = get_posicion();
	var lvl = get_nivel();
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
}
///////////////////////////////////////////////////////////////////////	
//******************************* VACUNA ***************************//
/////////////////////////////////////////////////////////////////////
$("#btn_m_vacuna").click(function(){
	if(ocupado()){
		vacuna();
	}
})
function vacuna(){
	var posicion = get_posicion();
	var lvl = get_nivel();
	var ima_vacuna = "<img src='img/acciones/vacuna.gif'>";
	estado_normal_parar();
	var criatura_actual  = $("#vc_c"+posicion).html();
	var estado_actual  = $("#vc_ce"+posicion).html();
	if(posicion==20){posicion=posicion-1;}
	$("#vc_ce"+(posicion+1)).html(ima_vacuna);
	$("#vc_c"+posicion).html("<img src='img/creature/"+lvl+"/creature3.gif'>");
	setTimeout(function(){
		$("#vc_c"+posicion).html(criatura_actual);
		$("#vc_ce"+(posicion+1)).html("");
			$("#vc_ce"+posicion).html(estado_actual);// aqui hay que quitar las calaca en caso de tenerla
			alegria();
			estado_normal_iniciar();
		},7500);
}
///////////////////////////////////////////////////////////////////////	
//******************************* LEER *****************************//
/////////////////////////////////////////////////////////////////////
$("#btn_m_leer").click(function(){
	if(ocupado()){
		leer();
	}
})
function leer(){
	var posicion = get_posicion();
	var lvl = get_nivel();
	var ima_leer = "<img src='img/acciones/leer.gif'>";
	estado_normal_parar();
	var criatura_actual  = $("#vc_c"+posicion).html();
	var estado_actual  = $("#vc_ce"+posicion).html();
	if(posicion==20){posicion=posicion-1;}
	$("#vc_c"+(posicion+1)).html(ima_leer);
	$("#vc_c"+posicion).html("<img src='img/creature/"+lvl+"/creature1.gif'>");
	setTimeout(function(){
		$("#vc_c"+posicion).html(criatura_actual);
		$("#vc_c"+(posicion+1)).html("");
			$("#vc_ce"+posicion).html(estado_actual);
			experiencia();
			estado_normal_iniciar();
		},7500);
}
///////////////////////////////////////////////////////////////////////	
//******************************* EJERCICIO ************************//
/////////////////////////////////////////////////////////////////////
$("#btn_m_ejercicio").click(function(){
	if(ocupado()){
		ejercicio();
	}
})
function ejercicio(){
	var posicion = get_posicion();
	var lvl = get_nivel();
	var ima_ejercicio = "<img src='img/acciones/ejercicio.gif'>";
	estado_normal_parar();
	var criatura_actual  = $("#vc_c"+posicion).html();
	var estado_actual  = $("#vc_ce"+posicion).html();
	if(posicion==20){posicion=posicion-1;}
	$("#vc_c"+(posicion+1)).html(ima_ejercicio);
	$("#vc_c"+posicion).html("<img src='img/creature/"+lvl+"/creature1.gif'>");
	setTimeout(function(){
		$("#vc_c"+posicion).html(criatura_actual);
		$("#vc_c"+(posicion+1)).html("");
			$("#vc_ce"+posicion).html(estado_actual);
			experiencia();
			estado_normal_iniciar();
		},7500);
}
///////////////////////////////////////////////////////////////////////	
//********************** AJUSTAR ENERGIA ***************************//
/////////////////////////////////////////////////////////////////////
var temp_energia=10;
ajustar_energia(temp_energia);
var limite_tiempo = 900;
var cargando = false;
var tiempo_bateria = 0;
var una_bateria;
function quitar_bateria(){
	temp_energia=temp_energia-1;
	ajustar_energia(temp_energia);
}
function decision_cargar_energia(){
	if(!cargando&&temp_energia<10){
		cargando=true;
		una_bateria = setInterval(function(){ func_contador_bateria();}, 1000);
	}
	$(".bateria").html("");
	if(temp_energia<10){
		$("#bat_"+(temp_energia+1)).html(limite_tiempo-tiempo_bateria);
	}else{
		$("#bat_"+(temp_energia)).html(tiempo_bateria);
	}
}
function func_contador_bateria(){
	tiempo_bateria++;
	if(tiempo_bateria>limite_tiempo){
		tiempo_bateria=0;
		clearInterval(una_bateria);
		cargando = false;
		dar_energia();
	}
}
function dar_energia(){
	if(temp_energia<10){
		temp_energia++;
		ajustar_energia(temp_energia);
	}
}
function ajustar_energia(cant_baterias){
	$(".bateria").removeClass("tiene_bateria");
	for(var i = 1; i <= cant_baterias; i++){
		$("#bat_"+i).addClass("tiene_bateria");
	}
}
///////////////////////////////////////////////////////////////////////	
//****************************** OCUPADO? **************************//
/////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////	
//****************************** POSICION **************************//
/////////////////////////////////////////////////////////////////////
function get_posicion(){
	var posicion = 0;
	$(".vc_celda").each(function(index){
		if($(this).html().indexOf("creature")>=0){
			posicion = parseInt(this.id.replace("vc_c",""));
		}
	})
	return posicion;
}
///////////////////////////////////////////////////////////////////////	
//****************************** NIVEL *****************************//
/////////////////////////////////////////////////////////////////////
function get_nivel(){
	return "lvl1";
}
///////////////////////////////////////////////////////////////////////	
//******************************** MENU ****************************//
/////////////////////////////////////////////////////////////////////
$( ".vc_menu a" ).hover(
	function() {
		$(this).find("img").attr("src","/img/menu/h_"+$(this).attr("btn")+".png");
	}, function() {
		$(this).find("img").attr("src","/img/menu/"+$(this).attr("btn")+".png");
	}
);
///////////////////////////////////////////////////////////////////////	
//******************************** DONACION ************************//
/////////////////////////////////////////////////////////////////////
$("#btn_m_donar").click(function(){
	$("#donate_modal").modal('show');
})

})