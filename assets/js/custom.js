/*
Copyright (c) 2017 
------------------------------------------------------------------


-------------------------------------------------------------------*/

(function ($) {
	"use strict";
	var Kindergarten = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			/*-------------- Kindergarten Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.Teacher_slider();
			this.Gallery_filter();
			this.toggleButton();
			this.Conuter();
			this.TestimonialSlider();
			this.BackToTop();
			this.Wow_animation();
			this.MailFunction();
			
		},
		
		/*-------------- Kindergarten Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/

		// Teacher slider
		 Teacher_slider: function() {
		 	 if($('.teacher_slider .owl-carousel').length > 0){	
            $('.teacher_slider .owl-carousel').owlCarousel({
				    loop:true,
				    delay:100,
				    margin:30,
				    nav:false,
				    autoplay:true,
				    dots:false,
				    responsive:{
				        0:{
				            items:1
				        },
				        480:{
				            items:2
				        },
				        1000:{
				            items:4
				        }
				    }
				})
        	}
        },

        // toggle button 

        toggleButton: function(){
        	var counter = 0;
			  $('.kz_toggle_btn').click(function(){
			    if( counter == '0') {
			      $('.header_menu').addClass('header_menu_hide');
			      $(this).children().removeAttr('class');
			      $(this).children().attr('class','fa fa-close');
			      counter++;
			    }
			    else {
			      $('.header_menu').removeClass('header_menu_hide');
			      $(this).children().removeAttr('class');
			      $(this).children().attr('class','fa fa-bars');
			      counter--;
			    }   
			  });
        },

        // gallery filter

        Gallery_filter: function(){
        	if($('.filter-button').length){
				 $(".filter-button").click(function(){
				        var value = $(this).attr('data-filter');
				        
				         if(value == "all")
				        {
				            //$('.filter').removeClass('hidden');
				            $('.filter').show('1000');
				        }
				        else
				        
				        {
				//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
				//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
				            $(".filter").not('.'+value).hide('3000');
				            $('.filter').filter('.'+value).show('3000');
				            
				        }
				 
				    
				        if ($(".filter-button").removeClass("active")) {
				$(this).removeClass("active");
				}
				$(this).addClass("active");
				     });

				}
        },

        // back to top js

        BackToTop: function(){

        	//hide #back-top first
  			$("#back-top").hide();
  
   			//fade in #back-top
        	$(function () {
			    $(window).scroll(function () {
			      if ($(this).scrollTop() > 100) {
			        $('#back-top').fadeIn();
			      } else {
			        $('#back-top').fadeOut();
			      }
			    });

			    // scroll body to 0px on click
			    $('#back-top a').click(function () {
			      $('body,html').animate({
			        scrollTop: 0
			      }, 800);
			      return false;
			    });
			  });
        },

        // mail function

        MailFunction: function(){
        	$("#submit").click(function(){
			          var fname = $('#f_name').val();
			          var phone = $('#phone').val();
			          var lname = $('#l_name').val();
			          var email = $('#email').val();
			          var message = $('#message').val();
			          var letters = /^[A-Za-z]+$/;
			          var number = /^[0-9]+$/;
			          var mail_letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

			          
			          if (fname != "" && phone != "" && lname != "" && email != "" && message != "") {
			            if(fname.match(letters)) { 
			              if(phone.match(number) && phone.length == 10) {
			                if(email.match(mail_letters)){
			                  $.ajax({
			                  method : 'post',
			                  url : 'assets/js/ajax.php',
			                  data :  {'first_name' : fname ,
			                        'phone_number' : phone,
			                        'last_name' : lname ,
			                        'email' : email,
			                        'message' : message,
			                        },
			                   }).done(function(resp){
			                     if( resp == 1){
			                      document.getElementById("error").style.color = "green";
			                       document.getElementById("error").innerHTML = "Mail Send Successfully";
			                      $('#f_name').val('');
			                       $('#phone').val('');
			                       $('#l_name').val('');
			                       $('#email').val('');
			                       $('#message').val('');
			                     }else{
			                      document.getElementById("error").style.color = "rgb(227,39,35)";
			                        document.getElementById("error").innerHTML = "Mail not Send";
			                     }
			                   console.log(resp);});
			                }else{
			                  document.getElementById("error").style.color = "rgb(227,39,35)";
			                  document.getElementById("error").innerHTML = "Please Fill The  Correct Mail Id";
			                }
			              }else{
			                document.getElementById("error").style.color = "rgb(227,39,35)";
			                document.getElementById("error").innerHTML = "Please Fill The  Correct Number";
			              }
			            }else
			            { document.getElementById("error").style.color = "rgb(227,39,35)";
			              document.getElementById("error").innerHTML = "Please Fill The Correct Name";
			            }   
			          }else{
			            document.getElementById("error").style.color = "rgb(227,39,35)";
			            document.getElementById("error").innerHTML = "Please Fill All Detail";
			          }
			        });

        },
		
		//counter
		 Conuter: function(){
			 if($('.timer').length > 0){	
				 $('.timer').appear(function(){
				    $(this).countTo();
				  });
			 }
		 },

		//Testimonial slider on home page
		 TestimonialSlider: function(){
			 if($('.testimonial_slider .owl-carousel').length > 0){		
				$('.testimonial_slider .owl-carousel').owlCarousel({
					 	loop:true,
					    delay:100,
					    margin:30,
					    nav:false,
					    autoplay:true,
					    dots:true,
					    responsive:{
					        0:{
					            items:1
					        },
					        600:{
					            items:2
					        },
					        1000:{
					            items:3
					        }
					    }
				 });
			 }
		 },

		 // wow animation

		 Wow_animation: function(){
		 	new WOW().init();
		 }
		

		   
	};

	Kindergarten.init();

	// Load Event
	// Loader js
	   $(window).on('load', function() {
		  $('#status').fadeIn(); // will first fade out the loading animation 
  		  $('#preloader').delay(1000).fadeOut('slow'); // will fade out the white DIV that covers the website. 
          $('body').delay(1000).css({'overflow':'visible'});
               //window height
		var h = window.innerHeight;
		$(".kz_index_banner").css("height", h);
		$(".kz_index_banner").css("width", "100%");
		
	
    });

	   var moveForce = 80; // max popup movement in pixels
		var rotateForce = 20; // max popup rotation in deg

		$(document).mousemove(function(e) {
		    var docX = $(document).width();
		    var docY = $(document).height();
		    
		    var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
		    var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;
		    
		    var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
		    var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);
		    
		    $('.popup')
		        .css('left', moveX+'px')
		        .css('top', moveY+'px')
		        .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
		 });
}(jQuery));
