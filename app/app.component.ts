import { Component,OnInit } from '@angular/core';
import {SecondComponent } from './second/second.component';
import * as $ from 'jquery';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() { $( document )
    .ready(function() {

    var lastScrollTop,lastScrollTop1 = 0;var min,min1,vv,vv1 ,v,minv,ls,min2;
    v=$(".dx:eq(1)").parent().parent().css("height");
    v=v.substring(0,v.length-2);
        minv=Number(v)


      $(window).scroll(function(event){

        var st = $(this).scrollTop();
        vv=$("#sl40").css("top");
        vv=vv.substring(0,vv.length-2);
        min=Number(vv)
        console.log('min   '+min);
        vv1=$("#sl40").css("height");
        vv1=vv1.substring(0,vv1.length-2);
        min1=Number(vv1)



        if (st > lastScrollTop && st > 30  && (min == 0) ){
          $("#sl40")
          .animate({top: "-100px"},"slow") ; 
          
        
        }
        else if ((st < lastScrollTop) && (st <= 30) && (min1 == -min ))
        {
          $("#sl40")
          .animate({top: "0" },"slow")}
        //shrinking box
         if (st > lastScrollTop1 && st > 30  && ($(".dx:eq(1)").parent().parent().css("height") == minv+"px") )
         {
          $(".dx:eq(1)").next("div").find("span").css("opacity","0")

         $(".dx:eq(1)").parent().parent().animate({height:"5%",fontSize:"40%"},"slow");
         $(".dx:eq(1)").parent().animate({left:"-30%",},"slow");


        }
         else if ((st < lastScrollTop1) && (st <= 30)  && ($(".dx:eq(1)").parent().parent().css("height") == ls+"px" ))
         {
          $(".dx:eq(1)").parent().parent().animate({height:"20%",fontSize:"70%"},"slow");
          $(".dx:eq(1)").parent().animate({left:"0%",},"slow");
          $(".dx:eq(1)").next("div").find("span").css("opacity","1")

          }
//
 if ((st > lastScrollTop1) && (st >= 1500) )
         {
          $(".dx:eq(1)").parent().parent().css("visibility","hidden")

          }
         else if ((st < lastScrollTop1) && (st <= 1500) )
         {
          $(".dx:eq(1)").parent().parent().css("visibility","visible")

          }


         ls= $(".dx:eq(1)").parent().parent().css("height")
         ls=ls.substring(0,ls.length-2);
        min2=Number(ls)

        console.log('minv  '+minv);
        console.log('ls '+ls);



       lastScrollTop = st;
       lastScrollTop1 = st;

   })
   $(".nav-link").hover(function(){$(this).css({"color": "rgb(160, 29, 29)" });

    },function(){$(this).css("color", "white")
  
})

$(".dx:eq(1)").next("div").find("span:eq(0)")
.click(function (ev) {$(".dx:eq(1)").parent().parent()
.css("visibility","hidden")}) 
//
$(".dx:eq(1)").next("div").next("div").find("p").mouseenter(function(ev ){
   $(this).css({"background-color":"rgb(158, 43, 40)","color":"white"})})
   $(".dx:eq(1)").next("div").next("div").find("p").mouseleave(function(ev ){$(this).css({"background":"black","color":"rgb(158, 43, 40)"})})

  
  setInterval(explode1,6000);

})


 

    } }
    //explode
     function explode1(){
      $(".dx").each(function(i,el){if ($(el).find("p")[0].innerHTML!="Automotive meets IT" )
      {
       $(el).fadeOut("slow",function(){  $(el).find("p")[0].innerHTML="Automotive meets IT";
   
       $(el).find("p")[1].innerHTML="Wir sehen uns in der Zukunft"
   
   })
   $(el).fadeIn("slow")
   
   }
   else {

    $(el).fadeOut("slow",function() {  $(el).find("p")[0].innerHTML=" ";
  
    $(el).find("p")[1].innerHTML="Wie wir die Zukunft der Mobilität mitgestalten"
    
    })
  $(el).fadeIn("slow")
  
  }
  })
   }
  

  
  
  
  
