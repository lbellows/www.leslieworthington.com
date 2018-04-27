$(function(){
  
  //query '../img/
  var imageFolder = "../img/";

  //add images to dom
  $.get(imageFolder).then(function(data) {

      $(data).find("a").attr("href", function (i, imgSrc) {
          if (imgSrc && imgSrc.match(/\.(jpe?g|png|gif)$/gi)) {

              var template = 
`
<div class="col-md-4">
  <div class="card mb-4 box-shadow">
    <a data-fancybox="gallery" href="${imgSrc}">
      <img class="card-img-top" src="${imgSrc}" />
    </a>
    <div class="card-body">
    </div>
  </div>
</div>`;
              $("#imgContainer").append(template);
          }

      });
  });

})
