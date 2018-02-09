


/*. Эт типа код который делает верхний отступ для инпута с емейлом

$(document).ready(function(){
    $(".click").click(function(){
        $(".email, .click2").animate({top: '250px'});
    });
});

   
*/ 



/* А вот этот, увеличивает div с картинкой. */

$('.click').on('click', function(e){
 e.preventDefault();
  $('#photo').animate({
     width : 300,
     height : 250
  });
});



function getName(str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }						
    var filename = str.slice(i);			
    var uploaded = document.getElementById("fileformlabel");
    uploaded.innerHTML = filename;
}