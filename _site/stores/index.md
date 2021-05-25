---
title: Stores
date: Created
layout: page
tags:
  - home
  - welcome
  - info
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>
<div class="container stores">
  
  
  <h2>Stores</h2>
 <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark mb-5">
        <div class="col-12 px-0">
          
  <div id="mapid"></div> 

    
  </div>
</div>

<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
crossorigin=""></script>


 

{% image for in images %}
  
  <div class="row mb-5">
    <div class="col-md-4 col-sm-6">
      <div class="card">
  <img class="card-img-top" src="{{image.src}}" alt="{{image.title}}">
  <div class="card-body">
    <h3>{{image.title}}</h3>
    <p>{{image.description}}</p>
  </div>
</div>
    </div>
</div>
{% endfor %}
  
  
