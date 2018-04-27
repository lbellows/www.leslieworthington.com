$(function(){
  //query '../img/
  var imgData = '../imgData.json';
  var imageFolder = "../img/";

  //add images to dom
  $.get(imgData).then(function(data) {
    if(typeof data != "object")
      data = JSON.parse(data);

    data.forEach(imgName => {
    var imgSrc = imageFolder + imgName
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
  
    });
  });
})
