$(function(){
	//**************************************************************
	//start
	//**************************************************************

	//**************************************************************
	//skrollr
	//**************************************************************
	var s=skrollr.init({
				render: function(data) {
				  //Log the current scroll position.
				  $('#info').text(data.curTop);
				}
			});

	//**************************************************************
	//assciative arrays for poem lyrics
	//**************************************************************

	//stanza 1
	var s1={
		v1:"When I look at the sky, what do I see?",
		v1c:"Cuando miro al cielo, que es lo que veo?",

		v2:"Lights, like angels on high.",
		v2c:"Luceros, como angeles en lo alto.",

		v3:"Stars, like celestial guides.",
		v3c:"Estrellas, como guias celestiales",

		v4:"Lights, like wishes and dreams.",
		v4c:"Luceros, como deseos y suenos",

		v5:"When I look at the sky, all I see...",
		v5c:"Cuando miro al cielo, solo lo que veo...",

		v6:"...is a bright future for you and me.",
		v6c:"...es un futuro brillante para ti y para me.",

		v7:"...but...",
		v37:"...pero..."
	};

	//stanza 2
	var s2={
		v1:"When you left, it felt like the world ended.",
		v1c:"Cuando te fuiste, se sintio como el mundo se acabo.",

		v2:"Even though the sun still rose,",
		v2c:"Aunque el sol todavia salio,",

		v3:"and the clouds still flowed,",
		v3c:"y las nubes todavia fluia,",

		v4:"the truth is that",
		v4c:"la verdad es que",

		v5:"in my heart it was dark as the night.",
		v5c:"en mi corazon era oscuro como la noche.",

		v6:"The truth is that",
		v6c:"La verdad es que",

		v7:"the sky was filled with rain,",
		v7c:"el cielo estaba lleno con lluvia,",

		v8:"as if the sky was crying with me.",
		v18c:"como si el cielo lloraba con migo."

	};

	//stanza 3
	var s3={
		v1:"How could you leave?",
		v1c:"Como te pudiste ir?",

		v2:"We were so happy but now...",
		v2c:"Eramos tan felices pero ahora...",

		v3:"there is only sadness.",
		v3c:"no mas hay tristesa.",

		v4:"The springtime flowers are in full bloom",
		v4c:"Las flores de primavera estan en florecida",

		v5:"yet all I can see is the withering winter.",
		v5c:"pero todo lo que veo es el invierno fulminante.",

		v6:"I am full of anger at you,",
		v6c:"Estoy lleno de ira a ti,",

		v7:"I am full of sadness without you,",
		v17c:"estoy lleno de tristesa sin ti,",

		v8:"but in the end,",
		v8c:"pero al fin,",

		v9:"I am devastated, because I don't understand",
		v9c:"estoy devastado, porque no entiendo",

		v10:"why you're no longer here.",
		v10c:"porque no estas con migo."

	};

	//stanza 4
	var s4={
		v1:"But I still love you, now and forever...",
		v2c:"Pero todavia te amo, hoy y siempre...",

		v2:"no matter the time,",
		v2c:"no importa el tiempo,",

		v3:"no matter the place.",
		v3c:"ni importa el lugar.",

		v4:"In my heart for you there is always a space.",
		v4c:"En mi corazon para ti siempre hay un espacio.",

		v5:"In my memories I give my farewell.",
		v5c:"En mis memorias doy mi despedida.",

		v6:"I wish the best for you,",
		v6c:"Te deseo lo mejor,",

		v7:"and one day I'll be next to you again.",
		v7c:"y un dia otra vez estare junto a ti.",

	};

	//**************************************************************
	//function calls
	//**************************************************************

	//write poems to page
	write($("#s1v1"),s1.v1);
	write($("#s1v2"),s1.v2);
	write($("#s1v3"),s1.v3);
	write($("#s1v4"),s1.v4);
	write($("#s1v5"),s1.v5);
	write($("#s1v6"),s1.v6);
	write($("#s1v7"),s1.v7);

	write($("#s2v1"),s2.v1);
	write($("#s2v2"),s2.v2);
	write($("#s2v3"),s2.v3);
	write($("#s2v4"),s2.v4);
	write($("#s2v5"),s2.v5);
	write($("#s2v6"),s2.v6);
	write($("#s2v7"),s2.v7);
	write($("#s2v8"),s2.v8)

	write($("#s3v1"),s3.v1);
	write($("#s3v2"),s3.v2);
	write($("#s3v3"),s3.v3);
	write($("#s3v4"),s3.v4);
	write($("#s3v5"),s3.v5);
	write($("#s3v6"),s3.v6);
	write($("#s3v7"),s3.v7);
	write($("#s3v8"),s3.v8);
	write($("#s3v9"),s3.v9);
	write($("#s3v10"),s3.v10);

	write($("#s4v1"),s4.v1);
	write($("#s4v2"),s4.v2);
	write($("#s4v3"),s4.v3);
	write($("#s4v4"),s4.v4);
	write($("#s4v5"),s4.v5);
	write($("#s4v6"),s4.v6);
	write($("#s4v7"),s4.v7);

	//calling alias
	alias(s1.v1, s1.v1c);
	alias(s1.v2, s1.v2c);
	alias(s1.v3, s1.v3c);
	alias(s1.v4, s1.v4c);
	alias(s1.v5, s1.v5c);
	alias(s1.v6, s1.v6c);
	alias(s1.v7, s1.v7c);

	alias(s2.v1, s2.v1c);
	alias(s2.v2, s2.v2c);
	alias(s2.v3, s2.v3c);
	alias(s2.v4, s2.v4c);
	alias(s2.v5, s2.v5c);
	alias(s2.v6, s2.v6c);
	alias(s2.v7, s2.v7c);
	alias(s2.v8, s2.v8c);

	alias(s3.v1, s3.v1c);
	alias(s3.v2, s3.v2c);
	alias(s3.v3, s3.v3c);
	alias(s3.v4, s3.v4c);
	alias(s3.v5, s3.v5c);
	alias(s3.v6, s3.v6c);
	alias(s3.v7, s3.v7c);
	alias(s3.v8, s3.v8c);
	alias(s3.v9, s3.v9c);
	alias(s3.v10, s3.v10c);

	alias(s4.v1, s4.v1c);
	alias(s4.v2, s4.v2c);
	alias(s4.v3, s4.v3c);
	alias(s4.v4, s4.v4c);
	alias(s4.v5, s4.v5c);
	alias(s4.v6, s4.v6c);
	alias(s4.v7, s4.v7c);

	//**************************************************************
	//functions
	//**************************************************************

	//outputs verse into corresponding section
	function write($ID, verse){$ID.html(verse);};

	//replaces original text with alt text and back again on hover/hover off
	function alias(orig, alt){
		$(".poem").hover(
			function(){
				//checks if the html of the page matches the input of the function
				if($(this).text()===orig){$(this).text(alt);/*changes the text*/};
			},
			function(){
				if($(this).text()===alt){$(this).text(orig);/*restores the text*/};
			}
		);
	};

	//**************************************************************
	//end
	//**************************************************************
});