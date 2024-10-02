---
layout: page-2
title: About
permalink: /Acerca-de/
author-dev: Leonardo Cahuich
---
<script>
  /*<alert("hola");
  $('body').addClass('home');*/
  var elemento = document.querySelectorAll("body");
  for (var i = 0; i < elemento.length; i++) {
    elemento[i].classList.add("inicio-pages");
  }
</script>

<div class="marginador"></div>
<section id="Acercademi" class="sec sec-basica sec-basica-10 inicio-s-1" linknav1="Acerca de mi">
  <div id="Acercademi-centro2" class="centro" observadoranimaciones="animate">
    <div class="caja">
      <h1>Hola, Soy Soufei</h1>
      <div class="responsivo centro">
        <img width="600px" height="auto" src="{{ site.baseurl }}/assets/img/about/lp_image.jpeg" style="margin: 20px;">
        <img width="600px" height="auto" src="{{ site.baseurl }}/assets/img/about/lp_image 2.jpeg" style="margin: 20px;">
      </div>
    </div>
  </div>
</section>
<section class="sec sec-basica sec-basica-10 inicio-s-1">
  <div id="Acercademi-centro" class="centro" observadoranimaciones="animate">
    <div class="caja">
      <div class="responsivo centro">
        <div class="r-caja caja-auto interior" data-aos="fade-up">
          <!--<h2 class="sub-titulo">
            Tradición funeraria
          </h2>-->
          <h1 class="titulo">
            我總覺得，如果有機會，人生要為了熱愛而活，然後留下一些果實。
          </h1>
          <h1 class="titulo" style="font-weight: normal;">
            經過深思熟慮，發現原來藝術就是我的道路和果實。
            於是，我從藝術荒漠廣州來到藝術之都巴塞羅那，求學、探索、生活。在一次次創作中，重新認識自己，反思身分，
            認識與世界的關係，也在創造自己的表達方式。雕塑和繪畫都是我的詩歌。
          </h1>
        </div>
        <div class="r-caja caja-auto espanol" data-aos="fade-up">
          <h2 style="font-weight: normal;">
            Siempre me parece que (si se permite) uno debe vivir por su pasión y dejar unos frutos.
          </h2>
          <p>
            Después de una profunda consideración, me daba cuenta de que el arte era el camino y fruto de mí.
            Por lo tanto, viajé de cantón, un desierto de arte, a Barcelona, un centro de arte, para estudiar, 
            explorar y vivir. En cientos de creación, me reconozco, reflexiono de mi identidad, 
            reconozco la relación con el mundo, y desarrollo mi propio idioma artística. Escultura y pintura son mi poesía.
          </p>
          <p id="botones"><a href="#colecciones"><span class="b-2">Ver mis colecciones</span></a></p>
        </div>
      </div>
    </div>
  </div>
</section>

