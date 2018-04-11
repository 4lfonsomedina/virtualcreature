<!DOCTYPE html>
<html>
<head>
	<title>VirtualCreature</title>
	<link rel="shortcut icon" href="/img/wallpapers/icon1.ico" />
	<link rel="stylesheet" href="css/bootstrap.css">
	<script src="js/jquerymin.js"></script>
	<script src="js/bootstrap.js"></script>
	<script src="js/virtualcreature.js"></script>
	<style type="text/css">
		.modal-content{
			border-radius: 30px !important;
		}
		body{
			font-family: Courier New;
			background-color: #FFD700;
  			background-image: url(/img/wallpapers/w2.png);
		}
		table{
			width: 100%;
		}
		.vc_celda{
			text-align: center;
			width: 5%;
		}
		.container{
			padding-top: 50px;
		}
		.vc_menu{
			padding:10px;
			text-align: center;
		}
		.vc_menu img{
			width: 60px;
		}
		.vc_alto{
			height: 300px;
		}
		.a{
			padding-top: 110px;
		}
		.vc_celda_estatus{
			text-align: center;
			padding-bottom: 10px;
			height: 65px !important;
		}
		.carcasa{
			border-radius: 30px !important;
			background-color:  #D22020;
			border-color: #D22020;
		}
		.pantalla{
			border-radius: 10px !important;
		}
		.res td{
			padding-top: 5px;
			font-size: 10px;
		}
		.tabla_energia td {
			padding-top: 5px;
			font-size: 10px;
		}
		.barra1{
			height: 10px;
			width: 50px;
			border: 1px solid black;
		}
		.barra2{
			height: 100%;
			width: 50%;
			background-color: black;
		}
		.puntos{
			font-weight: bold;
		}
		.desc_hab{
			text-align: right;
			padding-right: 6px;
		}
		.carcasa-titulo{
			text-align: center;
			background-color: white;
			font-size: 16px;
			font-weight: bold;
			border-radius:15px; 
		}
		.bateria{
			height: 10px;
			width: 10px;
			background-color: white;
		}
		.tiene_bateria{
			background-color: black !important;
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="col-md-3"></div>
		<div class="col-md-6">
		<div class="panel panel-default carcasa">
			<div class="col-xs-12">
				<div class="col-xs-2"></div>
				<div class="col-xs-8 carcasa-titulo">Panfilo Filomeno</div>

			</div>
			<div class="panel-body">
				<div class="row">
					<div class="col-xs-3 vc_menu"><a href="#" id="btn_m_comer" btn="m_comer"><img src="img/menu/m_comer.png"></a></div>
					<div class="col-xs-3 vc_menu"><a href="#" id="btn_m_limpiar" btn="m_limpiar"><img src="img/menu/m_limpiar.png"></a></div>
					<div class="col-xs-3 vc_menu"><a href="#" id="btn_m_vacuna" btn="m_vacuna"><img src="img/menu/m_vacuna.png"></a></div>
					<div class="col-xs-3 vc_menu"><a href="#" btn="m_info"><img src="img/menu/m_info.png"></a></div>
				</div>
				<div class="row">
					<div class="col-xs-2 vc_menu vc_alto a"><a href="#" btn="m_compartir"><img src="img/menu/m_compartir.png"></a></div>
					<div class="col-xs-8 vc_alto">
<!--
	Zona de bateria
-->
						<div class="col-xs-12" style="height: 140px;">
					<table class="tabla_energia" width="100%">
						<tr>
							<td id="contador_bateria">Energy</td>
							<td><div class="bateria" id="bat_1"></div></td>
							<td><div class="bateria" id="bat_2"></div></td>
							<td><div class="bateria" id="bat_3"></div></td>
							<td><div class="bateria" id="bat_4"></div></td>
							<td><div class="bateria" id="bat_5"></div></td>
							<td><div class="bateria" id="bat_6"></div></td>
							<td><div class="bateria" id="bat_7"></div></td>
							<td><div class="bateria" id="bat_8"></div></td>
							<td><div class="bateria" id="bat_9"></div></td>
							<td><div class="bateria" id="bat_10"></div></td>
						</tr>
					</table>

					<br>
<!--
	Zona de estatus de la creatura
-->
							<table class="res">
								<tr>
									<td class="desc_hab">Food</td>
									<td><div class="barra1"><div class="barra2" id="foo_bar"></div></div></td>
									<td class="desc_hab">Level</td><td class="puntos">30</td>
								</tr>
								<tr>
									<td class="desc_hab">Happiness</td>
									<td ><div class="barra1"><div class="barra2" id="hap_bar"></div></div></td>
									<td class="desc_hab">Intelligence</td><td class="puntos">16</td>
								</tr>
								<tr>
									<td class="desc_hab">Cleaning</td>
									<td><div class="barra1"><div class="barra2" id="cle_bar"></div></div></td>
									<td class="desc_hab">Force</td><td class="puntos">20</td>
								</tr>

							</table>
						</div>

						<div class="panel panel-default" style="height: 100%">
							<div class="panel-body pantalla">
<!--
<table border="1">
-->
								<table>
									<tr>
										<td class="vc_celda_estatus" id="vc_ce1"></td>
										<td class="vc_celda_estatus" id="vc_ce2"></td>
										<td class="vc_celda_estatus" id="vc_ce3"></td>
										<td class="vc_celda_estatus" id="vc_ce4"></td>
										<td class="vc_celda_estatus" id="vc_ce5"></td>
										<td class="vc_celda_estatus" id="vc_ce6"></td>
										<td class="vc_celda_estatus" id="vc_ce7"></td>
										<td class="vc_celda_estatus" id="vc_ce8"></td>
										<td class="vc_celda_estatus" id="vc_ce9"></td>
										<td class="vc_celda_estatus" id="vc_ce10"></td>
										<td class="vc_celda_estatus" id="vc_ce11"></td>
										<td class="vc_celda_estatus" id="vc_ce12"></td>
										<td class="vc_celda_estatus" id="vc_ce13"></td>
										<td class="vc_celda_estatus" id="vc_ce14"></td>
										<td class="vc_celda_estatus" id="vc_ce15"></td>
										<td class="vc_celda_estatus" id="vc_ce16"></td>
										<td class="vc_celda_estatus" id="vc_ce17"></td>
										<td class="vc_celda_estatus" id="vc_ce18"></td>
										<td class="vc_celda_estatus" id="vc_ce19"></td>
										<td class="vc_celda_estatus" id="vc_ce20"></td>
									</tr>
									<tr>
										<td class="vc_celda" id="vc_c1"></td>
										<td class="vc_celda" id="vc_c2"></td>
										<td class="vc_celda" id="vc_c3"></td>
										<td class="vc_celda" id="vc_c4"></td>
										<td class="vc_celda" id="vc_c5"></td>
										<td class="vc_celda" id="vc_c6"></td>
										<td class="vc_celda" id="vc_c7"></td>
										<td class="vc_celda" id="vc_c8"></td>
										<td class="vc_celda" id="vc_c9"></td>
										<td class="vc_celda" id="vc_c10"><img src='img/creature/lvl1/creature2.gif'></td>
										<td class="vc_celda" id="vc_c11"></td>
										<td class="vc_celda" id="vc_c12"></td>
										<td class="vc_celda" id="vc_c13"></td>
										<td class="vc_celda" id="vc_c14"></td>
										<td class="vc_celda" id="vc_c15"></td>
										<td class="vc_celda" id="vc_c16"></td>
										<td class="vc_celda" id="vc_c17"></td>
										<td class="vc_celda" id="vc_c18"></td>
										<td class="vc_celda" id="vc_c19"></td>
										<td class="vc_celda" id="vc_c20"></td>
									</tr>
								</table>
							</div>
						</div>

					</div>
					<div class="col-xs-2 vc_menu vc_alto a"><a href="#" btn="m_donar" id="btn_m_donar"><img src="img/menu/m_donar.png"></a></div>
				</div>
				<div class="row">
					<div class="col-xs-3 vc_menu"><a href="#" id="btn_m_ejercicio" btn="m_ejercicio"><img src="img/menu/m_ejercicio.png"></a></div>
					<div class="col-xs-3 vc_menu"><a href="#" id="btn_m_leer" btn="m_leer"><img src="img/menu/m_leer.png"></a></div>
					<div class="col-xs-3 vc_menu"><a href="#" btn="m_batalla"><img src="img/menu/m_batalla.png"></a></div>
					<div class="col-xs-3 vc_menu"><a href="#" btn="m_clasificacion"><img src="img/menu/m_clasificacion.png"></a></div>
				</div>
				
			</div>
		</div>
		</div>
	</div>





	<div class="modal" id="donate_modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
      	<button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      	<center><img src="img/menu/secure_paypal.jpg" width="250px"></a></center>
      </div>
      <div class="modal-body">
        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
		<input type="hidden" name="cmd" value="_s-xclick">
		<input type="hidden" name="hosted_button_id" value="3Q57HV5HAU6UC">
		<table>
		<tr><td><input type="hidden" name="on0" value="Donative">Donative for the VirtualCreature developers</td></tr><tr><td><select name="os0" class="form-control">
			<option value="Water">Water $1.00 USD</option>
			<option value="Coffee">Coffee $5.00 USD</option>
			<option value="Beer">Beer $10.00 USD</option>
		</select> </td></tr>
		</table>
		<input type="hidden" name="currency_code" value="USD">
		<br><br><center>
		<input type="image" src="http://virtualcreature.habilidades-web.com/img/menu/donate.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
		</center>
		<img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">
		</form>

      </div>
    </div>
  </div>
</div>

<!-- Precargado de imagenes -->

<div class="hidden">
	<script type="text/javascript">
			var images = new Array()
			function preload() {
				for (i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preload.arguments[i]
				}
			}
			preload(
				"img/creature/estatus/estatus1.gif",
				"img/creature/estatus/estatus2.gif",
				"img/creature/estatus/estatus3.gif",
				"img/creature/estatus/experiencia.gif",

				"img/creature/lvl1/creature1.gif",
				"img/creature/lvl1/creature2.gif",
				"img/creature/lvl1/creature3.gif",
				"img/creature/lvl1/creature4.gif",
				"img/creature/lvl1/creature5.gif",
				"img/creature/lvl1/creature6.gif",
				"img/creature/lvl1/creature7.gif",

				"img/menu/h_m_comer.png",
				"img/menu/h_m_limpiar.png",
				"img/menu/h_m_vacuna.png",
				"img/menu/h_m_info.png",
				"img/menu/h_m_compartir.png",
				"img/menu/h_m_donar.png",
				"img/menu/h_m_ejercicio.png",
				"img/menu/h_m_leer.png",
				"img/menu/h_m_batalla.png",
				"img/menu/h_m_clasificacion.png",

				"img/comida/c1.gif",
				"img/acciones/bano.gif",
				"img/acciones/caca.gif",
				"img/acciones/ejercicio.gif",
				"img/acciones/lca.gif",
				"img/acciones/leer.gif",
				"img/acciones/vacuna.gif"
			)
	</script>
</div>

</body>
</html>



