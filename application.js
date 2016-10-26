    $(document).ready(function() {
     $('button').on('click', function() {
       var intro = $('
         <p>興趣: 唱歌、攝影、喝咖啡</p>  
         <p>喜好: 專注的感覺</p>     
         <p>作品集: </p>');
       $('.navbar').append(intro);
       $('button').remove(); 
     });
    });
