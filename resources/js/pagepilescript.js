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
			   		'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4']
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


