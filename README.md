# Pattern-memory

Para la creacion del juego "patron de memoria" comence por el archivo Index.hmlt en donde inserte:

- una etiqueta select para seleccinar el nivel de dificultad del juego 
- una etiqueta div con el id escenario en donde se guarda la tabla con el tamaño seleccionado de a cuerdo a la dificultad

 El sigiente fue el archivo script.js 

 - comence por crear la captura del un cambio en el select el cual tiene unos valores de 3, 4 y 5 qusn los valoresque me serviran para determinar la dimension del juego dentro de el ira directamente a la funcion nuevoJuego que me crea cuadricula que es una tabla con tr y td, cada td tendra  un id con elnombre de la etique y la posicion en X y Y 

 - Despues me dispuse a diseñar la funcion que iba a arrojarme posiciones aleatorias con un color diferente, y con estas posiciones crear un array que las contenga y luego de que haya mostrado todas las posiciones va a aesperar un segundo borrara los cuadros coloreados anteriormente

Por ultimo diseñe la parte que me iba a validar que cuadros oprimia y si era valido el cuadro que estaba seleccionando, esta accion la realice con el evento click en donde despues de oprimir, guarda el id del cuadro oprimido ylo compara con el array creado anteriormente para asi saber si se habian oprimido los cudros correspondiente o por el contrario saber cuando no lo habia hecho y reiniciar el juego