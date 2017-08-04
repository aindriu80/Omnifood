$(document).ready(function() {

			/*
			* Plugin intialization
			*/
	    	$('#pagepiling').pagepiling({

                css3: false,
	    		menu: '#menu',
	    		anchors: ['page1', 'page2', 'page3', 'page4'],
			    sectionsColor: ['white', '#bdc3c7', '#2C3E50', '#333333'],
			    navigation: {
			    	'position': 'right',
			   		'tooltips': ['Home', 'Meals', 'Drinks', 'Contact']
			   	},
			    afterRender: function(){
			    	$('#pp-nav').addClass('custom');
			    },
			    afterLoad: function(anchorLink, index){
			    	if(index>1){
			    		$('#pp-nav').removeClass('custom');
			    	}else{
			    		$('#pp-nav').addClass('custom');
			    	}
                    if(index>3){
                        $('#arrow').hide();
                    }

			    }



			});





/* scrolling a section down */
$('#arrow').click(function () {
    $.fn.pagepiling.moveSectionDown();
});


	    });

 /* Maps */
     var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 53.3497, lng: -6.2604},
          zoom: 15
        });
      }


