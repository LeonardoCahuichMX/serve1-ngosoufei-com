$(document).ready(function () {
    /* ====================================================
    smooth scrolling function on anchor tag
  ===================================================== */

    // smooth scrolling function on anchor tag
    /* Fuente: https://www.delftstack.com/es/howto/javascript/smooth-scroll-javascript/#google_vignette
    */
    $("a").on('click', function(event) {
        // if this.hash contain value
        if (this.hash !== "") {

            //default anchor click prevention
            event.preventDefault();

            // save hash
            var myHash = this.hash;

            // jQuery animate() method to call scroll
            // 1200 milliseconds takes to scroll to the desired area
            $('html, body').animate({
                scrollTop: $(myHash).offset().top
            }, 1200, function(){
                // when done scroll add # to URL
                window.location.hash = myHash;
            });
        } // End if
    });   

    var altoHeader = $("header").outerHeight();
    var ventanaHeader = $(window).outerHeight();
    //alert(ventanaHeader);
    $(".menu").css("top", altoHeader+20);
    $(".buscar-caja").css("top", altoHeader+20);
        $(".inicio .anuncio-portafolio").css("margin-top", altoHeader);
        $(".marginador").css("margin-top", altoHeader);

    //Portada
   /* $(".inicio .portada").css("padding-top", altoHeader);
    $(".inicio .portada .centro").css("height", ventanaHeader-altoHeader-10)*/
    //$(".inicio .portada .centro").css("padding-top", altoHeader);
    //$(".inicio .portada .centro").css("height", ventanaHeader-altoHeader);

    //miedo
    $(".muñeco-img, .img-responsiva").css("height", ventanaHeader-altoHeader-20);

    $('.menu').hide();
    $("#menu-x").hide();
    $("#menu").on( "click", function() {
        //$('header .menu').show();
        $('.menu').fadeIn("slow");
        $("#menu").toggle();
        $("#menu-x").toggle();
        //$("body").css("overflow", "hidden");
        //$('body').addClass('stopscrolling')
    });
    $("#menu-x").on( "click", function() {
        //$('header .menu').hide();
        $('.menu').fadeOut("slow");
        $("#menu").toggle();
        $("#menu-x").toggle();
        //$("body").css("overflow", "true");
        //$('body').removeClass('stopscrolling')
    });

    //$('body').addClass('classitem');
    function classPag1(classitem) {
        $('body').addClass(classitem);
        $(".menu").css("padding-top", altoHeader);
        $(".menu").css("height", ventanaHeader);
        return 0;
    }

    if(window.innerWidth<850){
        $(".menu-pagina").toggle();
    }

    var ancho = window.innerWidth;
    var alto = window.innerHeight;
    $(window).scroll(function(){
        if($(this).scrollTop() <= alto){
            $('.cont-menu-lateral').removeClass('menu-lateral-visible');
            /* ####Portada antigua $('.portada .caja').removeClass('caja-b');*/
        }
        if($(this).scrollTop() > alto) {
            $('.cont-menu-lateral').addClass('menu-lateral-visible');
            //alert("hola");
            /* ####Portada antigua $('.portada .caja').addClass('caja-b');*/
            //alert("hola");
        }
    });
    $(window).scroll(function(){
        if($(this).scrollTop() < 1){
            $('.menu-lateral').removeClass('menu-lateral-scroll');
        }
        if($(this).scrollTop() > 1) {
            $('.menu-lateral').addClass('menu-lateral-scroll');
        }
    });
    $(window).scroll(function(){
        if($(this).scrollTop() <= altoHeader){
            $('header').removeClass('header-scroll');
            $('header').addClass('animate-page-scroll-1');
            /* ####Portada antigua $('.portada .caja').removeClass('caja-b');*/
        }
        if($(this).scrollTop() > altoHeader) {
            $('header').addClass('header-scroll');
            $('header').removeClass('animate-page-scroll-1');
            //alert("hola");
            /* ####Portada antigua $('.portada .caja').addClass('caja-b');*/
            //alert("hola");
        }
    });

    function getCookieValue(nombre) {
        var cookies = document.cookie.split(";"); // Divide la cadena de cookies en un array
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim(); // Elimina los espacios en blanco al principio y al final
            if (cookie.startsWith(nombre + "=")) {
                return cookie.substring(nombre.length + 1); // Retorna el valor de la cookie
            }
        }
        return null; // Si no se encuentra la cookie, retorna null
    }

    /*let fecha = new Date(),
  formateada = fecha.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });*/
  //var d = new Date();

/*const meses = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var month = d.getMonth()+1;
var day = d.getDate();
var year = d.getYear()-100+2000+1;*/

/*const xmas = new Date();
const year = xmas.getYear()-100+2000;*/
  //alert(" "+day+" "+meses[d.getMonth()]+" "+year+"");
    if(getCookieValue('cookies-politica') == null) {
        $( "#btnCookie" ).on( "click", function() {
            /*var d = new Date();
            const meses = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var month = d.getMonth()+1;
            var day = d.getDate();
            var year = d.getYear()-100+2000+1;*/

            document.cookie = "cookies-politica=true";
            $(".banner").hide();
          } );
        //alert('cookies');
    } else {
        $(".banner").hide();
    }
    /*const btnCookie = document.getElementById("btnCookie");
        btnCookie.addEventListener("click", (e) => {
            if(getCookieValue('cookies' != null)) {
                //document.cookie = "cookies='aceptado'"
                btnCookie.parentElement.remove();
            }
        });*/
    /*const btnCookie = document.getElementById("btnCookie");
        btnCookie.addEventListener("click", (e) => {
            if(getCookieValue('cookies' != null)) {
                document.cookie = "cookies='aceptado'"
                btnCookie.parentElement.remove();
            }
    });*/
    
    const body = document.body;
    const nav = document.querySelector(".header-scroll");
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll == 0) {
        body.classList.remove(scrollUp);
        return;
    }
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
    });
});

$( window ).on( "load", function() {
    $(".loader").fadeOut("slow");
})