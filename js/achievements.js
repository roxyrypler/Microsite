



$(document).ready(function() { // wait for document ready
   
          
            // init
            let controller = new ScrollMagic.Controller();
			
            
            let slideOne = $('#sectionOne');
            let slideTwos = $('#sectionTwos');
            let slideThree = $('#sectionThree');
            let slideFour = $('#sectionFour');
            let slideFive = $('#sectionFive');
            let slideSix = $('#sectionSix');
	
	// ------------------  slide one anims ---------------
			let animSceneOne = new ScrollMagic.Scene({
				triggerElement: '#sectionTwos', 
                druration: 1,
                triggerHook: 0
			})
			.setClassToggle("#imgOne", "fade-in")/*
			.addIndicators({
                name: 'One',
                colorTrigger: 'black',
                colorStart: 'black',
                colorEnd: 'pink'
            })*/
			.addTo(controller);
	
			let animSceneTwo = new ScrollMagic.Scene({
				triggerElement: '#sectionTwos', 
                druration: 1,
                triggerHook: 0
			})
			.setClassToggle("#imgTwo", "fade-in")/*
			.addIndicators({
                name: 'Two',
                colorTrigger: 'black',
                colorStart: 'black',
                colorEnd: 'pink'
            })*/
			.addTo(controller);
	// ---------------------- slide two anims -------------------
	
	
			let animSceneThree = new ScrollMagic.Scene({
				triggerElement: '#sectionThrees', 
                druration: 1,
                triggerHook: 0
			})
			.setClassToggle("#imgThree", "fade-in")/*
			.addIndicators({
                name: 'Three',
                colorTrigger: 'black',
                colorStart: 'black',
                colorEnd: 'pink'
            })*/
			.addTo(controller);
	
	
	
	// ---------------------- slide three anims -------------------
	
	
			let animSceneFour = new ScrollMagic.Scene({
				triggerElement: '#sectionFours', 
                druration: 1,
                triggerHook: 0
			})
			.setClassToggle("#imgFour", "fade-in")/*
			.addIndicators({
                name: 'Four',
                colorTrigger: 'black',
                colorStart: 'black',
                colorEnd: 'pink'
            })*/
			.addTo(controller);
	
	
	// ---------------------- slide four anims -------------------
	
	
			let animSceneFive = new ScrollMagic.Scene({
				triggerElement: '#sectionFive', 
                druration: 1,
                triggerHook: 0
			})
			.setClassToggle("#imgFive", "fade-in")/*
			.addIndicators({
                name: 'Five',
                colorTrigger: 'black',
                colorStart: 'black',
                colorEnd: 'pink'
            })*/
			.addTo(controller);
	
	
			let animSceneSix = new ScrollMagic.Scene({
				triggerElement: '#sectionFive', 
                druration: 1,
                triggerHook: 0
			})
			.setClassToggle("#imgSix", "fade-in")/*
			.addIndicators({
                name: 'Six',
                colorTrigger: 'black',
                colorStart: 'black',
                colorEnd: 'pink'
            })*/
			.addTo(controller);
			
	
	
	
    /*
    slideOne = new ScrollMagic.Scene({
                triggerElement: slideOne,
                duration: $(window).height() - 100,
                triggerHook: 1
            })
            .setPin('#sectionOnes')
            .addIndicators({
                name: 'One',
                colorTrigger: 'black',
                colorStart: 'black',
                colorEnd: 'pink'
            }); 
            
      */      
    
    slideTwos = new ScrollMagic.Scene({
                triggerElement: '#sectionTwos', 
                druration: 1,
                triggerHook: 0
            })
            .setPin('#sectionTwos')/*
            .addIndicators({
                name: 'Two',
                colorTrigger: 'black',
                colorStart: 'black',
                colorEnd: 'pink'
            })*/
			.addTo(controller);
            
    
    slideThree = new ScrollMagic.Scene({
                triggerElement: '#sectionThrees', 
                druration: 1,
                triggerHook: 0
            })
            .setPin('#sectionThrees')/*
            .addIndicators({
                name: 'Three',
                colorTrigger: 'black',
                colorStart: 'black',
                colorEnd: 'pink'
            })*/
			.addTo(controller);
            
    
    slideFour = new ScrollMagic.Scene({
                triggerElement: '#sectionFours', 
                druration: 1,
                triggerHook: 0
            })
            .setPin('#sectionFours')/*
            .addIndicators({
                name: 'Four',
                colorTrigger: 'black',
                colorStart: 'black',
                colorEnd: 'pink'
            })*/
			.addTo(controller);
            
    
    slideFive = new ScrollMagic.Scene({
                triggerElement: '#sectionFives', 
                druration: 1,
                triggerHook: 0
            })
            .setPin('#sectionFives')/*
            .addIndicators({
                name: 'Five',
                colorTrigger: 'black',
                colorStart: 'black',
                colorEnd: 'pink'
            })*/
			.addTo(controller);
            
  
    slideSix = new ScrollMagic.Scene({
                triggerElement: '#sectionSix', 
                druration: 1,
                triggerHook: 0
            })
            .setPin('#sectionSix')/*
            .addIndicators({
                name: 'Six',
                colorTrigger: 'black',
                colorStart: 'black',
                colorEnd: 'pink'
            })*/
			.addTo(controller); 
			
	
			
});

window.onscroll = function() {
	console.log(window.pageYOffset);
    
    
}

// if small screen and landscape, inform user to rotate device back.

function rotateBack() {
	if(window.innerHeight < window.innerWidth && window.innerHeight < 768 && window.innerWidth < 812){
		document.getElementById("overlay").classList.add("overlay");
		document.body.classList.add("stop-Scrolling");
		console.log("Please use Portrait!");
	}else {
		document.getElementById("overlay").classList.remove("overlay");
		document.body.classList.remove("stop-Scrolling");
		console.log("Normal Mode");
	} 
}








	


























