$(document).ready(function () {
/* ===================================================
  
    Framework
    
  ===================================================== */ 

    /*function updateProgressBar(progressValue) {
        const progressBar = document.getElementById('progressBar');
        progressBar.style.width = progressValue + '%';
      }
      
      function simulateProgress() {
        let progress = 0;
        const interval = setInterval(() => {
          if (progress >= 100) {
            clearInterval(interval);
          } else {
            progress++;
            updateProgressBar(progress);
          }
        }, 100);
      }
      
      simulateProgress();*/

      //alert("hola1");
      //buscadorcreditos();
      /*observadoranimaciones();
      observadoranimacionesunica();
      buscadorlinkspage();*/
      //alert("hola");

      /* ===================================================
  
    Framework
    
  ===================================================== */
    //Framework
    function buscadorcreditos() {
        $("*").attr('creditos', function() {
            if($(this).attr('creditos') != undefined) {
                console.log( $(this).attr('creditos') );

                var idintenficador = 'data-info-'+$(this).attr('creditos-numero');
                var coordenadas = $(this).position();
                $(".creditos .data-creditos ul").prepend('<li><a href="#'+idintenficador+'">('+$(this).attr('creditos-numero')+')</a> '+$(this).attr('creditos')+' - <a href="'+$(this).attr('creditos-link')+'">'+$(this).attr('creditos-link')+'</a></li>');
                var altocontentThis = $(this).outerHeight() + coordenadas.top + 10;
                $(".creditos-data-info-content").prepend('<div style="position: absolute;top: '+altocontentThis+'px;left: '+coordenadas.left+'px;" class="creditos-data-info">('+$(this).attr('creditos-numero')+') <a href="#creditos">Datos en la seccion de creditos</a></div>');
                $(this).attr('id', idintenficador);
            }
        })
    };

    /* ===================================================
  
    Animaciones
    
  ===================================================== */

/* ====================================================
    Observador artivador de animaciones repetitivo
  ===================================================== */

    function observador(entrada, animacionclassitem) {
        // Crear el observador (Intersection Observer API)
        // En la función anónima se recibe una lista de entradas,
        //    no importa que solo se observe un elemento
        observer = new IntersectionObserver(entries => {
            // Recorrer las entradas recibidas
            entries.forEach(entry => {
                // Está visible en el viewport
                //console.log(entry.intersectionRatio);
                if (entry.intersectionRatio == 0) {
                    //alert(entry.intersectionRatio);
                    //entry.target.classList.add(animacionclassitem+"-salida");
                    entry.target.classList.remove(animacionclassitem);
                    //console.log(""+entrada+" No visto ="+entry.intersectionRatio)
                } else if (entry.intersectionRatio > 0) {
                    // entry.target es el elemento que se está observando
                    // Agregar la clase para animar
                    //alert("1")
                    //entry.target.classList.remove(animacionclassitem+"-salida");
                    entry.target.classList.add(animacionclassitem);
                    // Dejar de observar
                    //console.log(""+entrada+" Visto = "+entry.intersectionRatio)
                    //lo de abajo acaba la observacion
                    //observer.unobserve(entry.target)                    
                }
                //alert("2")}
                //$(entrada).removeClass(animacionclassitem)
            });
        });
        // Observar elemento a animar
        observer.observe(document.querySelector(entrada));
        return 0;
    };
    function observadorlink(entrada, entrada2, classEntrada) {
        // Crear el observador (Intersection Observer API)
        // En la función anónima se recibe una lista de entradas,
        //    no importa que solo se observe un elemento
        observer = new IntersectionObserver(entries => {
            // Recorrer las entradas recibidas
            entries.forEach(entry => {
                // Está visible en el viewport
                //console.log(entry.intersectionRatio);
                if (entry.intersectionRatio == 0) {
                    //alert(entry.intersectionRatio);
                    //entry.target.classList.add(animacionclassitem+"-salida");
                    //entry.target.classList.remove(animacionclassitem);
                    console.log(""+entrada+" No visto ="+entry.intersectionRatio);
                    $(entrada2).removeClass(classEntrada);
                } else if (entry.intersectionRatio > 0) {
                    // entry.target es el elemento que se está observando
                    // Agregar la clase para animar
                    //alert("1")
                    //entry.target.classList.remove(animacionclassitem+"-salida");
                    //entry.target.classList.add(animacionclassitem);
                    // Dejar de observar
                    console.log(""+entrada+" Visto = "+entry.intersectionRatio)
                    $(entrada2).addClass(classEntrada);
                    //lo de abajo acaba la observacion
                    //observer.unobserve(entry.target)                    
                }
                //alert("2")}
                //$(entrada).removeClass(animacionclassitem)
            });
        });
        // Observar elemento a animar
        observer.observe(document.querySelector(entrada));
        return 0;
    };

/* ====================================================
    Observador artivador de animaciones unico
  ===================================================== */

    function observadorUnica(entrada, animacionclassitem) {
        // Crear el observador (Intersection Observer API)
        // En la función anónima se recibe una lista de entradas,
        //    no importa que solo se observe un elemento
        observer = new IntersectionObserver(entries => {
            // Recorrer las entradas recibidas
            entries.forEach(entry => {
                // Está visible en el viewport
                if (entry.intersectionRatio > 0) {
                    // entry.target es el elemento que se está observando
                    // Agregar la clase para animar
                    //alert("1")
                    entry.target.classList.add(animacionclassitem);
                    // Dejar de observar
                    console.log(""+entrada+" Visto = "+entry.intersectionRatio)
                    //lo de abajo acaba la observacion
                    observer.unobserve(entry.target)                    
                }
                //alert("2")}
                //$(entrada).removeClass(animacionclassitem)
            });
        });
        // Observar elemento a animar
        observer.observe(document.querySelector(entrada));
        return 0;
    };

/* ====================================================
    Avtiador de observador de animaciones
  ===================================================== */

    function observadoranimaciones() {
        $("*").attr('observadoranimaciones', function() {
            if($(this).attr('observadoranimaciones') != undefined) {
                console.log( $(this).attr('observadoranimaciones') );
                //alert($(this).attr('class'));
                observador("#"+$(this).attr('id'), $(this).attr('observadoranimaciones'));
                //$(this).css( "background-color", "green" )
                //$("header .nav nav ul.links-page").prepend('<li><a href="#'+$(this).attr('id')+'">'+$(this).attr('linknav1')+'</a></li>');
            }
            //$(this).css( "background-color", "red" );
        })
    };
    function observadoranimacionesunica() {
        $("*").attr('observadoranimacionesunica', function() {
            if($(this).attr('observadoranimacionesunica') != undefined) {
                console.log( $(this).attr('observadoranimacionesunica') );
                //alert($(this).attr('class'));
                observadorUnica("#"+$(this).attr('id'), $(this).attr('observadoranimacionesunica'));
                //$(this).css( "background-color", "green" )
                //$("header .nav nav ul.links-page").prepend('<li><a href="#'+$(this).attr('id')+'">'+$(this).attr('linknav1')+'</a></li>');
            }
            //$(this).css( "background-color", "red" );
        })
    };

    /* ====================================================
    Buscador de links de menu de pagina
  ===================================================== */

    function buscadorlinkspage() {
        $("*").attr('linknav1', function() {
            if($(this).attr('linknav1') != undefined) {
                console.log( $(this).attr('linknav1') );
                //$(this).css( "background-color", "green" )
                $("header .nav nav ul.links-page").prepend('<li><a id="'+$(this).attr('id')+'-link" href="#'+$(this).attr('id')+'">'+$(this).attr('linknav1')+'</a></li>');
                //observadorlink("#"+$(this).attr('id'), "linkvisto", $(this).attr('id')+"-link");
                observadorlink("#"+$(this).attr('id'), "#"+$(this).attr('id')+"-link", "link-visto");
            }
            //$(this).css( "background-color", "red" );
        })
    };
    /*alert("hola encendido");*/
    buscadorcreditos();
    observadoranimaciones();
    observadoranimacionesunica();
    buscadorlinkspage();
})