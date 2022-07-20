$(document).ready(function() {

window.onload = function () {
    var ArrayInput = document.getElementsByTagName('img');
    var d = new Date(); 
    var year = d.getYear(); 
    var month = d.getMonth()+1; 
    var date = d.getDate(); 
    var day = d.getDay(); 
    var hours = d.getHours(); 
    var minutes = d.getMinutes(); 
    var seconds = d.getSeconds(); 
    var ms = d.getMilliseconds();   
    var curDateTime = " ";
   if(date>9)
        curDateTime = curDateTime + date;
    else
        curDateTime = curDateTime +"0"+date;
    if(month>9)
        curDateTime = curDateTime +"."+month;
    else
        curDateTime = curDateTime + ".0" + month;
    
    curDateTime = curDateTime +"."+"20"+ year%100;
   
    if(hours>9)
        curDateTime = curDateTime +" "+hours;
    else
        curDateTime = curDateTime +" 0"+hours;
    if(minutes>9)
        curDateTime = curDateTime +":"+minutes;
    else
        curDateTime = curDateTime +":0"+minutes;
    if(seconds>9)
        curDateTime = curDateTime +":"+seconds;
    else
        curDateTime = curDateTime + ":0" + seconds;
    
    document.getElementById('result').innerHTML = ArrayInput.length  + ' ' + curDateTime ;
    }

    $("._img").click(function(){
        
        var img = $(this);
        
        var src = img.attr('src');
        
        $("body").append("<div class='popup'>"+ 
        
        "<div class='popup_bg'></div>"+ 
        
        "<img src='"+ src +"' class='popup_img' />" + 
        "<img class='close' src='close.png' height='50' width='50'>"+
        "</div>");
        
        $(".popup").fadeIn(800); 
        
        
        $(".popup_bg").click(function () {    
        
        $(".popup").fadeOut(800);    
        
        setTimeout(function() {    
        
        $(".popup").remove(); 
        
        }, 800);
        
        });

        $('.close').click(function() {
		  
            $(".popup").fadeOut(800);    
        
            setTimeout(function() {    
            
            $(".popup").remove(); 
            
            }, 800);
		});
        
        });
 }); 