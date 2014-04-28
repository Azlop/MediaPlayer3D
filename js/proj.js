
var targets = { 
		frase: [
		        //M
		        {"x":"-10","y":"1","z":"0"},//M
		        {"x":"-10","y":"2","z":"0"},
		        {"x":"-10","y":"3","z":"0"},
		        {"x":"-10","y":"4","z":"0"},
		        {"x":"-10","y":"5","z":"0"},
		        {"x":"-10","y":"6","z":"0"},
		        {"x":"-9","y":"5","z":"0"},
		        {"x":"-8","y":"4","z":"0"},
		        {"x":"-7","y":"3","z":"0"},
		        {"x":"-6","y":"4","z":"0"},
		        {"x":"-5","y":"5","z":"0"},
		        {"x":"-4","y":"6","z":"0"},
		        {"x":"-4","y":"5","z":"0"},
		        {"x":"-4","y":"4","z":"0"},
		        {"x":"-4","y":"3","z":"0"},
		        {"x":"-4","y":"2","z":"0"},
		        {"x":"-4","y":"1","z":"0"},//P
		        {"x":"-1","y":"1","z":"0"},		        
		        {"x":"-1","y":"2","z":"0"},
		        {"x":"-1","y":"3","z":"0"},
		        {"x":"-1","y":"4","z":"0"},
		        {"x":"-1","y":"5","z":"0"},
		        {"x":"-1","y":"6","z":"0"},
		        {"x":"0","y":"6","z":"0"},
		        {"x":"1","y":"6","z":"0"},
		        {"x":"2","y":"5","z":"0"},
		        {"x":"1","y":"4","z":"0"},
		        {"x":"0","y":"4","z":"0"},
		        //3
		        {"x":"8","y":"1","z":"0"},
		        {"x":"8","y":"2","z":"0"},
		        {"x":"8","y":"3","z":"0"},
		        {"x":"8","y":"4","z":"0"},
		        {"x":"8","y":"5","z":"0"},
		        {"x":"8","y":"6","z":"0"},
		        {"x":"7","y":"6","z":"0"},
		        {"x":"6","y":"6","z":"0"},
		        {"x":"5","y":"6","z":"0"},
		        {"x":"7","y":"3","z":"0"},
		        {"x":"6","y":"3","z":"0"},
		        {"x":"7","y":"1","z":"0"},
		        {"x":"6","y":"1","z":"0"},
		        {"x":"5","y":"1","z":"0"},//3
		        {"x":"0","y":"-2","z":"0"},
		        {"x":"0","y":"-3","z":"0"},
		        {"x":"0","y":"-4","z":"0"},
		        {"x":"0","y":"-5","z":"0"},
		        {"x":"0","y":"-6","z":"0"},
		        {"x":"0","y":"-7","z":"0"},
		        {"x":"-1","y":"-2","z":"0"},
		        {"x":"-2","y":"-2","z":"0"},
		        {"x":"-3","y":"-2","z":"0"},
		        {"x":"-1","y":"-5","z":"0"},
		        {"x":"-2","y":"-5","z":"0"},
		        {"x":"-1","y":"-7","z":"0"},
		        {"x":"-2","y":"-7","z":"0"},
		        {"x":"-3","y":"-7","z":"0"},//D
		        {"x":"2","y":"-2","z":"0"},
		        {"x":"2","y":"-3","z":"0"},
		        {"x":"2","y":"-4","z":"0"},
		        {"x":"2","y":"-5","z":"0"},
		        {"x":"2","y":"-6","z":"0"},
		        {"x":"2","y":"-7","z":"0"},
		        {"x":"3","y":"-2","z":"0"},
		        {"x":"4","y":"-2","z":"0"},
		        {"x":"5","y":"-3","z":"0"},
		        {"x":"6","y":"-4","z":"0"},
		        {"x":"6","y":"-5","z":"0"},
		        {"x":"5","y":"-6","z":"0"},
		        {"x":"4","y":"-7","z":"0"},
		        {"x":"3","y":"-7","z":"0"},//resto

		        {"x":"-18","y":"8","z":"0"},
		        {"x":"-17","y":"8","z":"0"},
		        {"x":"-16","y":"8","z":"0"},
		        {"x":"-15","y":"8","z":"0"},
		        {"x":"-14","y":"8","z":"0"},
		        {"x":"-13","y":"8","z":"0"},
		        {"x":"-12","y":"8","z":"0"},
		        {"x":"-11","y":"8","z":"0"},
		        {"x":"-10","y":"8","z":"0"},		        
		        {"x":"-9","y":"8","z":"0"},
		        {"x":"-8","y":"8","z":"0"},
		        {"x":"-7","y":"8","z":"0"},
		        {"x":"-6","y":"8","z":"0"},
		        {"x":"-5","y":"8","z":"0"},
		        {"x":"-4","y":"8","z":"0"},
		        {"x":"-3","y":"8","z":"0"},
		        {"x":"-2","y":"8","z":"0"},
		        {"x":"-1","y":"8","z":"0"},
		        {"x":"0","y":"8","z":"0"},
		        {"x":"1","y":"8","z":"0"},
		        {"x":"2","y":"8","z":"0"},
		        {"x":"3","y":"8","z":"0"},
		        {"x":"4","y":"8","z":"0"},
		        {"x":"5","y":"8","z":"0"},
		        {"x":"6","y":"8","z":"0"},
		        {"x":"7","y":"8","z":"0"},
		        {"x":"8","y":"8","z":"0"},
		        {"x":"9","y":"8","z":"0"},
		        {"x":"10","y":"8","z":"0"},
		        {"x":"11","y":"8","z":"0"},
		        {"x":"12","y":"8","z":"0"},
		        {"x":"13","y":"8","z":"0"},
		        {"x":"14","y":"8","z":"0"},
		        {"x":"15","y":"8","z":"0"},
		        {"x":"16","y":"8","z":"0"}
		       		        
		        ],  
		        helix: [], 
		        grid:[]
};

var generos_position = [];
var current_music_playing_oldPosition_x = null, current_music_playing_oldPosition_y = null, current_music_playing_oldPosition_z = null;
var musicPlayingPosition;
var objects = [];
var objects_cilin = [];
var music_playing = "";
var move = false;
var numObjectText = 0;
var cilindro_showed = false;
var controls;
var myArray = new Array();
var aspect = window.innerWidth / window.innerHeight;
var scene = new THREE.Scene();
var object3D = new THREE.Object3D();
// object3D.position.set(-2000,700,0);
scene.add(object3D);

var camera = new THREE.PerspectiveCamera(5, window.innerWidth/ window.innerHeight, 1, 10000);
camera.position.z = 40000;

var renderer = new THREE.CSS3DRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

controls = new THREE.TrackballControls(camera, renderer.domElement);
controls.reset();
controls.addEventListener('change', render);

/*x-------------------------------------------------------------X
 *|Função de Inicialização (on document ready)					|
 *x-------------------------------------------------------------X
 *|aroundrandom - diferencia o posicionamento do elemento quando|
 *|este começa a tocar, consoante a organização (random, helix,	|
 *|grid, etc).													|
 *|material - recebe todos os dados do ficheiro xml.			|																|
 *|																|
 *|--------------------------DESCRIÇAO--------------------------|
 *|1 - Leitura do ficheiro xml.									|
 *|1.2 - Adiciona os dados à variavel material e inicializa os	|
 *|componentes (neste caso divs) em cada objecto 3D				|
 *|2 - Função onClick dos elementos.							|
 *|2.1 - Mudança de posicionamentos consoante a musica estar a 	|
 *|tocar ou não e a organização escolhida (helix/as outras).	|
 *|2.2 - Trata da parte visual e auditiva, troca a image de play|	
 *|pela de pause, em conformidade com a devida reprodução da mú-|
 *|sica.														|
 *|3 - Posicionamento dos objectos 3D de forma random.			| 
 *|																|
 *|																|
 *x-------------------------------------------------------------x*/
var aroundrandom = true;
var material = new Array();
$(document).ready(function() {
	//1. (Descrição)
	$.ajax({
		type : "GET",
		url : "music.xml",
		dataType : "xml",
		success : function(xml) {
			var i = 0;
			$(xml).find('music').each(function() {
				//1.2 (Descrição)
				material.push({'image': $(this).find('image').text(), 
								'song': $(this).find('song').text(),
								'genre': $(this).find('genre').text(),
								'band': $(this).find('banda').text(),
								'title': $(this).find('titulo').text(),
							});
				
				var id_string="control_play"+i;
		        var div_play = document.createElement("div");    
		        div_play.setAttribute("id", id_string);
		        div_play.setAttribute("class", "control");
	

				//cria o elemento html que corresponde a uma musica,
				//e trata dos parâmetros necessários	
		        var element = document.createElement('div');
		        element.className = 'element';
				element.setAttribute("id","id"+i);
				element.appendChild(div_play);
				element.style.backgroundImage = 'url("'+material[i].image+'")';
						
				
				toGridview(material[i].genre,i);
				
						
				//2. (Descrição)
				var updateSource = (function x(){
	            	for(var t=0;t<object3D.children.length;t++){
	            		if( $(this)[0]== object3D.children[t].element){
	            			//2.1
				        	if(current_music_playing_oldPosition_z!=null){
				        		new TWEEN.Tween( musicPlayingPosition.position )
								.to( { 
									x: current_music_playing_oldPosition_x, 
									y: current_music_playing_oldPosition_y, 
									z: current_music_playing_oldPosition_z }, 
									Math.random() * 2000 + 2000 )
								.easing( TWEEN.Easing.Exponential.InOut )	
								.start();
				        		
				            }			
			            	if(aroundrandom && musicPlayingPosition!=object3D.children[t]){
			            		current_music_playing_oldPosition_x=object3D.children[t].position.x;
					        	current_music_playing_oldPosition_y=object3D.children[t].position.y;
					        	current_music_playing_oldPosition_z=object3D.children[t].position.z;
					        	musicPlayingPosition=object3D.children[t];
					        	
			            		new TWEEN.Tween( object3D.children[t].position )
			            		.to( { x:0, y: 0, z: 35000 }, Math.random() * 2000 + 2000 )
								.easing(TWEEN.Easing.Exponential.InOut)	
								.start();
			            	}
			            	else if(musicPlayingPosition!=object3D.children[t]){
					        	current_music_playing_oldPosition_x=object3D.children[t].position.x;
					        	current_music_playing_oldPosition_y=object3D.children[t].position.y;
					        	current_music_playing_oldPosition_z=object3D.children[t].position.z;
					        	musicPlayingPosition=object3D.children[t];
				            }

				            if(cilindro_showed && !$('#control_play'+t).hasClass("control_pause")){//para o caso do cilindro
				            	new TWEEN.Tween( object3D.children[t].position )
								.to( { x:object3D.children[t].position.x,y:object3D.children[t].position.y+950, z: object3D.children[t].position.z}, Math.random() * 2000 + 2000 )
								.easing(TWEEN.Easing.Exponential.InOut)	
								.start();
			            	}else if(cilindro_showed && $('#control_play'+t).hasClass("control_pause")){//para o caso do cilindro
				            	new TWEEN.Tween( object3D.children[t].position )
								.to( { x:object3D.children[t].position.x,y:object3D.children[t].position.y-950, z: object3D.children[t].position.z}, Math.random() * 2000 + 2000 )
								.easing(TWEEN.Easing.Exponential.InOut)	
								.start();
			            	}
				            
				            //2.2 (Descrição)
				            var audio = document.getElementById('audio');
	    				    var source = document.getElementById('mp3source');
	    				    var id_indice=$(this).attr("id").substring(2, $(this).attr("id").length);
	    				    source.src = material[id_indice].song;
	    				    if(!isPlaying(audio)){
	    				    	$(music_playing).removeClass("control_pause");       
	    				        $(this.children).addClass("control_pause");
	    				        $(this.children).removeClass("control_play");
	    				        music_playing=this.children;
	    				        audio.load();
	    				        audio.play();
	    				    }
	    				    else{
	    				    	if($(this.children).hasClass("control_pause")){
	    				    		$(music_playing).removeClass("control_pause"); 
	    				    	    $(this.children).addClass("contrsol_play");        		
	    				    	    audio.pause();
	    				    	}
	    				    	else{
	    				    		$(music_playing).removeClass("control_pause");
	    				    		$(this.children).addClass("control_pause");
	    				    		music_playing=this.children;
	    				    		audio.load();
	    				    		audio.play();
	    				    	}
	    				    }
				            
	            		}
	            	}    
				});
				        
				element.onclick = updateSource;
				//3. (Descrição)      
				var object = new THREE.CSS3DObject(element);
				        
				object.position.x=Math.random() * 5000 - 2500;
			    object.position.y=-(Math.random() * 3000)+1600;
			    object.position.z=Math.random() * 1000 - 50;
			    	    
				scene.add(object);

			    object3D.add(object);
				        			            
				i++;				        				       
			});	
						
			toHelix();
		}

	});	

});

function animate() {

	requestAnimationFrame(animate);
	TWEEN.update();
	controls.update();
	render();
}

function render() {
	if (move) {
		object3D.rotation.y += 0.002;
	} else {
		object3D.rotation.y = 0;
	}
	renderer.render(scene, camera);
}
animate();
render();


/*x----------------------------------X
 *|Função que consoante o tipo de    |
 *|disposição a fazer, vai faze-la   |
 *|de uma forma animada com o "TWEEN"|
 *x----------------------------------X
 */

function transform(duration, organizacao) {

	TWEEN.removeAll();
	if (organizacao == 3) { //para o caso da disposição por genero musical
		removeTextElements();
		numObjectText = 0;
		for (var i = 0; i < object3D.children.length - numObjectText; i++) {//todos os obejctos 3D menos os objectos relativos ao texto

			var text_geom_exist = false;
			for (var d = 0; d < object3D.children.length; d++) {//todos os obejctos 3D inclusive os objectos relativos ao texto
				//se o objecto 3D for texto e o seu texto for igual ao do elemento no indice actual então...
				if (object3D.children[d].name == "texto_genero"
						&& object3D.children[d].element.textContent == targets.grid[i].genero) { 						
						
					text_geom_exist = true;//variavel que indica que o objecto 3D de texto com este texto já existe
				}
			}

			//se ainda não existe nenhum object 3D de texto com o texto relativo a este estilo então cria-o
			if (!text_geom_exist) {
				var number = document.createElement('div');
				number.className = 'number';
				number.textContent = targets.grid[i].genero;
				var object_text = new THREE.CSS3DObject(number);
				object_text.name = "texto_genero";
				object_text.position.x = 55555;
				object3D.add(object_text);
				numObjectText++;				
				//dá uma animção de movimento ao objecto de texto
				new TWEEN.Tween(object_text.position).to({
					x : -3500,
					y : -targets.grid[i].y * 300,
					z : targets.grid[i].z
				}, Math.random() * duration + duration).easing(
						TWEEN.Easing.Exponential.InOut).start();
			}

			//objecto actual
			var object = object3D.children[i];
			
			//faz uma animação de movimento a este objecto
			new TWEEN.Tween(object.position).to({
				x : targets.grid[i].x * 200,
				y : -targets.grid[i].y * 300,
				z : targets.grid[i].z
			}, Math.random() * duration + duration).easing(
					TWEEN.Easing.Exponential.InOut).start();

			//para o caso dos objecto terem definida algum tipo de rotação sobre eles, retira essa opereção
			new TWEEN.Tween(object.rotation).to({
				x : 0,
				y : 0,
				z : 0
			}, Math.random() * duration + duration).easing(
					TWEEN.Easing.Exponential.InOut).start();

		}
		new TWEEN.Tween(this).to({}, duration * 2).onUpdate(render).start();

		move = false;// variavel que vai indicar que nesta disposição não existe movimento
	} else if (organizacao == 2) {//para o caso da disposição em cilindro
		removeTextElements();
		for (var i = 0; i < object3D.children.length; i++) {

			//objecto actual
			var object = object3D.children[i];

			//faz uma animação de movimento a este objecto
			new TWEEN.Tween(object.position).to({
				x : targets.helix[i].x * 5,
				y : targets.helix[i].y * 5,
				z : targets.helix[i].z
			}, Math.random() * duration + duration).easing(
					TWEEN.Easing.Exponential.InOut).start();

			//aplica uma rotação sobre o objecto actual de modo a que o conjunto dos objectos forme um cilindro
			new TWEEN.Tween(object.rotation).to({
				x : 0,
				y : i * 0.175,
				z : 0
			}, Math.random() * duration + duration).easing(
					TWEEN.Easing.Exponential.InOut).start();

		}
		new TWEEN.Tween(this).to({}, duration * 2).onUpdate(render).start();

		move = true;// variavel que vai indicar que nesta disposição existe movimento
	} else {//para o caso da dispoção em "MP3 3D"
		removeTextElements();
		for (var i = 0; i < object3D.children.length; i++) {

			//objecto actual
			var object = object3D.children[i];

			//faz uma animação de movimento a este objecto
			new TWEEN.Tween(object.position).to({
				x : targets.frase[i].x * 200,
				y : targets.frase[i].y * 200,
				z : targets.frase[i].z
			}, Math.random() * duration + duration).easing(
					TWEEN.Easing.Exponential.InOut).start();

			//para o caso dos objecto terem definida algum tipo de rotação sobre eles, retira essa opereção		
			new TWEEN.Tween(object.rotation).to({
				x : 0,
				y : 0,
				z : 0
			}, Math.random() * duration + duration).easing(
					TWEEN.Easing.Exponential.InOut).start();

		}
		new TWEEN.Tween(this).to({}, duration * 2).onUpdate(render).start();

		move = false;// variavel que vai indicar que nesta disposição não existe movimento
		}
}

/*x---------------------------------X
 *|Evento para organizar os vários  |
 *|elementos de  formar a criar	 	|
 *|um cilindro						|
 *x---------------------------------X
 */
function btn_click_cilindro() {
	aroundrandom = false;
	cilindro_showed = true;
	current_music_playing_oldPosition_x = null;
	current_music_playing_oldPosition_y = null;
	current_music_playing_oldPosition_z = null;
	transform(3000, 2);
	$('#query').val('');
	xpto = new Array();
}

/*x---------------------------------X
 *|Evento para organizar os vários  |
 *|elemntos de acordo com o estilo  |
 *|musical 						|
 *x---------------------------------X
 */

function btn_click_estilo() {
	aroundrandom = true;
	cilindro_showed = false;
	current_music_playing_oldPosition_x = null;
	current_music_playing_oldPosition_y = null;
	current_music_playing_oldPosition_z = null;
	transform(3000, 3);
	$('#query').val('');
	xpto = new Array();
}

/*x---------------------------------X
 *|Evento para organizar os vários  |
 *|elementos de  formar a escrever 	|
 *|"MP3 3D" 						|
 *x---------------------------------X
 */
function btn_click_letra() {
	//	object3D.rotation.z=Math.PI ;
	aroundrandom = true;
	cilindro_showed = false;
	current_music_playing_oldPosition_x = null;
	current_music_playing_oldPosition_y = null;
	current_music_playing_oldPosition_z = null;
	transform(3000, 1);//1->organiza letra
	$('#query').val('');
	xpto = new Array();
}

/*x---------------------------------X
 *|Função para fazer update à câmera|
 *|para os dados iniciais.			|
 *x---------------------------------X
 */
function resetCameraAndObject() {
	controls.reset();
	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = 48000;
	camera.rotation.x = 0;
	camera.rotation.y = 0;
	camera.rotation.z = 0;
}


/*x---------------------------------X
 *|Função para verifica se uma  	|
 *|determinada musica está ou não   |
 *|a tocar							|
 *x---------------------------------X
 */
function isPlaying(player) {

	return !player.paused && !player.ended && 0 < player.currentTime;
}


/*x---------------------------------X
 *|Função para calcular as posições |
 *|de cada elemento de modo a ter   |
 *|cada musica organizada por estilo|
 *x---------------------------------X
 */
function toGridview(genero, i) {

	var elementoExistente = false;
	var indice;
	$.each(generos_position, function(index, value) {
		if (genero == value[0]) {
			value[1]++;
			elementoExistente = true;
			indice = index;
		}

	});
	if (!elementoExistente) {
		generos_position.push([ genero, 1 ]);
		indice = generos_position.length - 1;
	}

	targets.grid.push({
		genero : genero,
		x : generos_position[indice][1] - 15,
		y : generos_position.length - 8,
		z : -22000
	});

}

/*x---------------------------------X
 *|Função para calcular as posições |
 *|de cada elemento de modo a criar |
 *|um cilindro.            			|
 *x---------------------------------X
 */
function toHelix() {
	for (var i = 0; i < object3D.children.length; i++) {

		var phi = i * 0.175 + Math.PI;

		targets.helix.push({
			"x" : 250 * Math.sin(phi),
			"y" : -(i * 1.25) + 50,
			"z" : 1100 * Math.cos(phi)
		});
	}
}


/*x---------------------------------X
 *|Função para remover os elementos |
 *|de texto que são criados para a  |
 *|disposição por estilo musical.   |
 *x---------------------------------X
 */
function removeTextElements() {

	var objToRemove = [];
	//corre o array que tem todos os elementos 3D e insere 
	//num array auxiliar (objToRemove) os elementos de texto que são parta remover
	for (var i = 0; i < object3D.children.length; i++) {
		if (object3D.children[i].name == "texto_genero") {
			objToRemove.push(object3D.children[i]);
		}
	}

	//movimenta os objectos para remover para fora do campo de visão do utilizador
	for (var i = 0; i < objToRemove.length; i++) {
		new TWEEN.Tween(objToRemove[i].position).to({
			x : -10000,
			y : 30000,
			z : 4000
		}, Math.random() * 2000 + 2000).easing(TWEEN.Easing.Exponential.InOut)
				.start();
	}
	
	//remove os objetos de texto
	for (var i = 0; i < objToRemove.length; i++) {
		object3D.remove(objToRemove[i]);
	}
}



/*x-------------------------------------------------------------X
 *|Função de pesquisa											|
 *x-------------------------------------------------------------X
 *|value - valor inserido no input da pesquisa					|
 *|xpto - serve de ponteiro para os object3D que				|
 *|sofreram alteração da sua posição.							|
 *|																|
 *|--------------------------DESCRIÇÃO--------------------------|
 *|1ª Parte - Controlo de teclas pressionadas, não relevantes.	|
 *|Como "cntrl", "alt", etc.									|
 *|2ª Parte - Verifica os matchs e retira-os do cenário.		|
 *|3ª Parte - Operação de retorno dos objectos ao cenário no 	|
 *|caso de apagar o que foi escrito.							|
 *|																| 
 *x-------------------------------------------------------------x*/

var value = "";
var xpto = new Array();
function search(e) {
	
	//1ª Parte (Descrição)
	var charCode = (e.charCode) ? e.charCode : ((e.keyCode) ? e.keyCode
			: ((evt.which) ? evt.which : 0));
	if (e.ctrlKey || e.altKey) {
		return false;
	} else {
		if (e.which != 13)
			value = $("#query").val() + String.fromCharCode(e.which);
		//2ª Parte (Descrição)
		if (e.which != 8 && value != "") {
			for (var i = 0; i < object3D.children.length; i++) {
				var music = material[i];
				if (!isMatch(value, music.band, music.title, music.genre)) {
					var object = object3D.children[i];
					var delay = i * 5;
					var tam = xpto.length;
					if (tam == 0) {
						xpto.push(i);
						new TWEEN.Tween(object.position).to({
							x : object.position.x,
							y : object.position.y - 6000,
							z : object.position.z
						}, 1000).delay(delay).easing(
								TWEEN.Easing.Exponential.In).start();
					} else {
						var aux = true;
						for (var x = 0; x < tam; x++){
							if (xpto[x] == i)
								aux = false;
							}
						if(aux){
							xpto.push(i);
						new TWEEN.Tween(object.position).to({
							x : object.position.x,
							y : object.position.y - 6000,
							z : object.position.z
						}, 1000).delay(delay).easing(
								TWEEN.Easing.Exponential.In).start();
						}
					}

				}
			}
			//3ª Parte
		} else if (e.which == 8) {
			value = value.slice(0, -2);
			for (var i = 0; i < object3D.children.length; i++) {
				var music = material[i];
				if (isMatch(value, music.band, music.title, music.genre)) {
					var object = object3D.children[i];
					var delay = i * 5;					
					for (var x = 0; x < xpto.length; x++)
						if (xpto[x] == i) {
							new TWEEN.Tween(object.position).to({
								x : object.position.x,
								y : object.position.y + 6000,
								z : object.position.z
							}, 1000).delay(delay).easing(
									TWEEN.Easing.Exponential.In).start();
							xpto.splice(x, 1);
						}
				}
			}
		}
	}
}


/*x---------------------------------X
 *|Função parar verificar os match's|
 *x---------------------------------X
 *|r1 - match nome da banda			|
 *|r2 - match titulo da musica		|
 *|r3 - match do genero				|
 *|									|
 *|									|
 *|									| 
 *x---------------------------------x*/

function isMatch(value, banda, titulo, genero){
	var r1 = banda.match(new RegExp(value, 'gi')), //'gi', para não existir destinção de maisculas 
	r2 = titulo.match(new RegExp(value, 'gi')),   // pois o onkeydown, quando acaba de receber a letra
	r3 = genero.match(new RegExp(value, 'gi'));   //interpreta-a como maiscula.
	if(value!= ""){
		if(r1 == null && r2 == null && r3 == null){
			return false;
		}else
			return true;
	}
	return true;
}