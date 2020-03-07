
$(document).ready(() =>{

  $('.homeDiv').show();
  $('.aboutDiv').hide();
  $('.projectsDiv').hide();
  $('.contactDiv').hide();
  $('.resumeDiv').hide();
  

  const nav = document.querySelector('#main');
  let topOfNav = nav.offsetTop;
  
  function fixNav() {
    if (window.scrollY >= topOfNav) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      document.body.classList.remove('fixed-nav');
      document.body.style.paddingTop = 0;
    }
  }
  
  window.addEventListener('scroll', fixNav);
  
  // Navbar functionality

  $('.nav-item-about').on("click", function(){

      $('.aboutDiv').show();
      $('.homeDiv').hide();
      $('.projectsDiv').hide();
      $('.contactDiv').hide();
      $('.resumeDiv').hide();
      
      
     
      console.log('about nav works');
  });



  $('.nav-item-projects').on("click", function(){

    $('.projectsDiv').show();
    $('.homeDiv').hide();
    $('.aboutDiv').hide();
    $('.contactDiv').hide();
    $('.resumeDiv').hide();

    
    
   
    console.log('project nav works');
});

$('.nav-item-contact').on("click", function(){

  $('.contactDiv').show();
  $('.homeDiv').hide();
  $('.aboutDiv').hide();
  $('.resumeDiv').hide();
  $('.projectsDiv').hide();

  
  
 
  console.log('contact nav works');
});

$('.nav-item-resume').on("click", function(){

  $('.resumeDiv').show();
  $('.homeDiv').hide();
  $('.aboutDiv').hide();
  $('.projectsDiv').hide();
  $('.contactDiv').hide();

  
 
  console.log('resume nav works');
});


$('.logo').on("click", function(){

  $('.header').show();
  $('.homeDiv').show();
  $('.aboutDiv').hide();
  $('.projectsDiv').hide();
  $('.contactDiv').hide();
  $('.resumeDiv').hide();

 
  console.log('logo home nav works');
});
// End Navbar functionality

// End document.ready function
});