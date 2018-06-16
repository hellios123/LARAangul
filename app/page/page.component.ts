import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { inherits } from 'util';

@Component({ 
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {  $( document )
    .ready(function() { 
       
 var lg1= ($("#zg").css("width"));
 
var lg=Math.round((Number(lg1.substring(0,lg1.length-2))-0)/3);

//////////////hover on red div
$(".ss").hover(function(){$(this).css({"background": "white","color": "rgb(158, 43, 40)" , 
}); $(this).children("p").css({"border-color":"rgb(158, 43, 40)"})

},function(){$(this).css({"background":"rgb(158, 43, 40)","color":"white"}) ; $(this).children("p").css("border-color","white")

} )
//////////////// opace dive slide;
 $("#kk,#diap").mouseenter(function(event){ event.stopPropagation?event.stopPropagation():event.stopImmediatePropagation();

  var h1=$( "#kk").css("height");    var h2=$( "#diap").css("top");  var h3=$( "#diap").css("height"); 
  var lg2,lg1,lg3,v1,v2,v3
  lg1=h1.substring(0,h1.length-2);
  lg2=h2.substring(0,h2.length-2);
  lg3=h3.substring(0,h3.length-2);

  v1=parseFloat(lg1);  v2=parseFloat(lg2); v3=parseFloat(lg3);
  v1=Math.round(v1); v2=Math.round(v2);

  $("#kk").css({"background": "rgb(8, 8, 8,0.0)"});
$("#kk").find("p:eq(1)").css("visibility","hidden");
$("#kk").find("p:eq(2)").css("visibility","hidden");



 $( "#diap").animate({top: "60%" },"slow")


  event.preventDefault();} 
)

$("#hvr").mouseleave(function(event){  event.stopPropagation?event.stopPropagation():event.stopImmediatePropagation();

  var h1=$( "#kk").css("height");    var h2=$( "#diap").css("top");  var h3=$( "#diap").css("height"); 

  var lg3,lg2,lg1,v1,v2,v3
  lg1=h1.substring(0,h1.length-2);
  lg2=h2.substring(0,h2.length-2);
  lg3=h3.substring(0,h3.length-2);

  v1=Math.round(parseFloat(lg1));  v2=Math.round(parseFloat(lg2)); v3=Math.round(parseFloat(lg3));

{
 $("#kk").css({"background": "rgb(8, 8, 8,0.5)","margin":"0%"}) ; 
$("#kk").find("p:eq(1)").css("visibility","visible");
$("#kk").find("p:eq(2)").css("visibility","visible");

 $( "#diap").animate({top: "100%" },"slow")
 ;
  
}   event.preventDefault(); }
 )
 ///general slide///
 $(".asl").each(function(i,el){ $(el). mouseenter(function(event){ event.stopPropagation?event.stopPropagation():event.stopImmediatePropagation();

  var h1=$( ".asl").css("height");    var h2=$( ".bsl").css("top");  var h3=$( ".bsl").css("height"); 
  var lg2,lg1,lg3,v1,v2,v3
  lg1=h1.substring(0,h1.length-2);
  lg2=h2.substring(0,h2.length-2);
  lg3=h3.substring(0,h3.length-2);

  v1=parseFloat(lg1);  v2=parseFloat(lg2); v3=parseFloat(lg3);
  v1=Math.round(v1); v2=Math.round(v2);

  $(el).css({"background": "rgba(150, 144, 144, 0.0)"});
$(el).find("p >span:eq(1)").css("visibility","hidden");
$(el).find("p:eq(2)").css("visibility","hidden");
var ch=$(el).find( ".bsl");


 $(ch).animate({top: "50%" },"slow")


  event.preventDefault();} 
)

$(el).mouseleave(function(event){  event.stopPropagation?event.stopPropagation():event.stopImmediatePropagation();

  var h1=$( ".asl").css("height");    var h2=$( ".bsl").css("top");  var h3=$( ".bsl").css("height"); 

  var lg3,lg2,lg1,v1,v2,v3
  lg1=h1.substring(0,h1.length-2);
  lg2=h2.substring(0,h2.length-2);
  lg3=h3.substring(0,h3.length-2);

  v1=Math.round(parseFloat(lg1));  v2=Math.round(parseFloat(lg2)); v3=Math.round(parseFloat(lg3));

{
 $(el).css({"background": "rgb(8, 8, 8,0.5)","margin":"0%"}) ; 
$(el).find("p:eq(1)").css("visibility","visible");
$(el).find("p:eq(2)").css("visibility","visible");
var ch=$(el).find( ".bsl");


 $(ch).animate({top: "100%" },"slow") ;
  
}   event.preventDefault(); }
 )
}) 


 $("#diap,.bsl").find("a").hover(function(){$(this).css({"color":"rgb(91, 187, 216)"})},function(){ $(this).css({"color":"rgb(158, 43, 40)"})}

 )

 
 $("#tm").parent().parent().find("a").each(function(i,el){ if($(el).css("color")=='rgb(255, 255, 255)') {
  $(el).hover(function(ev ){ ev.preventDefault(); $(this).css({"color":"black"})},function( ev){  ev.preventDefault();$(this).css({"color":"white"})})}
 else if($(el).css("color")=='rgb(97, 95, 95)') {  $(el).hover(function(ev ){ ev.preventDefault(); $(this).css({"color":"white"})},function( ev){  ev.preventDefault();$(this).css({"color":"rgb(97, 95, 95)"})})}

})
var t, co=0;
console.log($("a").find("span")[1]? $("a").find("span")[1].innerHTML:"mmm")
  t=$("a").each(function(i,el){if($(el).find("span")[1] && $(el)
  .find("span")[1].innerHTML=="TEILEN")
 { $(".btn").click(function(ev){ $(".flex-row")
 .animate({height:"0%",width:"0%",opacity:"0"},"slow");co++})
   
  $(el).click(function(ev){ev.preventDefault();if((co%2)==0){ $(".flex-row")
 .animate({height:"250%",width:"55%",opacity:"1"},"slow")} else{ $(".flex-row")
 .animate({height:"0%",width:"0%",opacity:"0"},"slow"); } co++ });
 
} else {};
 })

 

 var tempx1,tempy1,tempx2=0,tempy2=0;
 $(document).mousemove(function(ev){tempx1=tempx2,tempy1=tempy2,tempx2 = ev.pageX ,
  tempy2 = ev.pageY;     
  //console.log(tempx1+','+tempy1+','+tempx2+','+tempy2)
})


})

}

}