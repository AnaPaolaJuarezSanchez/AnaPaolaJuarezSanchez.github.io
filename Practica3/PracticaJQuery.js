$(document).ready(function(){

	$("#titulo").click(function(){
		$(this).fadeOut("slow");
	});

	$("#boton").click(function(){
		$("#e1").fadeToggle("slow");
		$("#e2").fadeToggle(2000);
		$("#e3").fadeToggle(2500);

		$("#e1").fadeTo("slow", 0.20);
		$("#e2").fadeTo("fast", 0.5);
		$("#e3").fadeTo("slow", 0.7);

	});

	$("#lista").click(function(){
		$("#contenido").slideToggle("slow")
	})
});
//fadeOut - Desaparece los elementos fadeOut();
//fadeTo - Intensidad de color fadeTo();