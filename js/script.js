window.onload = function()
{

	ancho			= 58;
	max				=0;
	arrayId 		= [];
	arrayVerifica	= [];
	select 			= nom_div("dificultad").value;
	nivel 			= 0;


    nom_div("dificultad").addEventListener('change', function(event)
        {
        	select = Number(nom_div("dificultad").value);
        	max		=select*select-1;
        	max		=1;
        	nuevoJuego();
        	posicionAleatoria();
        });
    if(nivel==select*select-1)
    {
    	limpiar();
    }
    
    function nuevoJuego()
    {

		txt     	= "<table>",
        nomID   	= "";
        eventos 	= [];
        arrayId 	= [];
		arrayVerifica	= [];
        ancho   	= ancho*select+(select*2+2)
        nom_div("escenario").style.height=ancho+"px";
        nom_div("escenario").style.width=ancho+"px";
        ancho=58;
        for(var fila = 0; fila < select; fila++)
        {
            txt += "<tr>";
            for(var col = 0; col < select; col++)
            {
            	nomID = col + "_" + fila;
                txt += "<td  class = 'cuadricula' id = 'td_"+(nomID)+"'>";
                txt += "</td>";
                posicion="td_"+fila+"_"+col;
                arrayId.push(posicion);

            }
            txt += "</tr>";
        }
        txt += "</table>";
        nom_div("escenario").innerHTML = txt;
        // para capturar los ids de cada uno de los td

    }

    

	
};
function limpiar()
    {
    	for(var i = 0; i < (select*select); i++)
        {
    		var g = document.getElementsByClassName("cuadricula")[i].style.backgroundColor="#fff";
    	}
    	
    	
    }
document.addEventListener('click', function(e) 
        {
        	dato = e.target.id;
        	if(arrayVerifica.indexOf(dato)<0 && arrayId.indexOf(dato)>=0)
	    	{
		    	arrayVerifica.push(dato);
		    	nom_div(dato).style.backgroundColor="#2247C0";
		    		if(arrayPosns.indexOf(arrayVerifica[arrayVerifica.length-1])>=0)
		    		{
		    			console.log("si esta");
		    			if(arrayVerifica.length==arrayPosns.length)
		    			{

		    				max+=1;
		    				
							arrayVerifica	= [];
			    			limpiar();
			    			alert("Felicidades lo lograste");
	        				posicionAleatoria();

		    			}
		    		}
		    		else
		    		{
		    			alert("Lo siento, perdiste");
						arrayVerifica	= [];
		    			max=1;
		    			nivel=0;
		    			limpiar();
		    			posicionAleatoria();
        				
        			}
			}

		});

function posicionAleatoria()
    {
    	posicion="";
    	
    	//posUsada=false;
    	arrayPosns=[];
    	for(nivel=0 ;nivel<max;nivel++)
    	{
	    	x = Math.floor(Math.random() * select);
	    	y = Math.floor(Math.random() * select);
	    	posicion="td_"+x+"_"+y;
	    	console.log("td_"+x+"_"+y);
	    	if(arrayPosns.indexOf(posicion)<0)
	    	{
	    		nom_div("td_"+x+"_"+y).style.backgroundColor="#66ff33";
	    		arrayPosns.push(posicion);
    			setTimeout(function(){limpiar()},1000); // 3000ms = 3s

			}
	    	else
	    	{
	    		max+=1;
	    	}
    	}

    }
function nom_div(div)
    {
        return document.getElementById(div);
    }

 