---
layout: page-2
title: About
permalink: /buscar/
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
<section class="sec sec-basica sec-basica-10 inicio-s-1"  linknav1="Buscar" id="buscar">
  <div id="Acercademi-centro" class="centro" observadoranimaciones="animate">
    <div class="caja">
      <div class="buscar-caja">
      <div class="responsivo centro">
        <div class="r-caja caja-2" data-aos="fade-up">
          {% include search-lunr.html %}
        </div>
      </div>
    </div>
    </div>
  </div>
</section>

