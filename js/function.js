$(function(){
			//start

			//**************************************************************
			//poem

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
				//v1c:""
				v2:"Even though the sun still rose,",
				v3:"and the clouds still flowed,",
				v4:"the truth is that",
				v5:"in my heart it was dark as the night",
				v6:"The truth is that",
				v7:"the sky was filled with rain,",
				v8:"as if the sky was crying with me"
			};

			//stanza 3
			var s3={
				v1:"How could you leave?",
				v2:"We were so happy but now…",
				v3:"there is only sadness.",
				v4:"The springtime flowers are in full bloom",
				v5:"yet all I can see is the dread of winter.",
				v6:"I am full of anger at you,",
				v7:"I am full of sadness without you,",
				v8:"but ultimately, in the end,",
				v9:"I am devastated, because I don't understand",
				v10:"why you're no longer here."
			};

			//stanza 4
			var s4={
				v1:"But I still love you, now and forever",
				v2:"no matter the time",
				v3:"no matter the place",
				v4:"in my heart for you there is always a space",
				v5:"in my memories I give my farewell",
				v6:"All I can say is that I wish for you the best",
				v7:"and one day I hope to be with you again",
			};

			//**************************************************************
			//functions

			//outputs verse into corresponding section
			function write($ID, verse){$ID.html(verse);};

			//replaces original text with alternate text and back again on hover/hover off
			function alias(orig, alt){
				$(".poem").hover(
					function(){
						//this checks if the html of the page matches the input of the function
						if($(this).text()===orig){$(this).text(alt);/*changes the text*/};
					},
					function(){
						if($(this).text()===alt){$(this).text(orig);/*restores the text*/};
					}
				);
			};

			//**************************************************************
			//function calls

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

			//end
		});