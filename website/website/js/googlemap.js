var ItalianandSons = '<div class="black_border_div">' +
                      '<h3>Italian and Sons</h3>' +
                    '<div class="black_border_div_01">'+
                        '<img src="./images/location/is_logo.gif" style="width:200px;height:150px;"/>' +
                    '</div>'+
                    '<div class="black_border_div_02">'+
                        '<p class="p1">"A casual Italian trattoria that specialises in wood fried pizzas such as Rucola with Prosciutto di Parma,'+
                        'rucola & reggiano. Do not miss daily changing main dishes of the day such as their wood roast suckling pip,'+
                        'rosemary, garlic, baked baby fennel & mustard fruits." -Australian good Food Guide</p>' +
                        '<p class="p1"><a href="http://www.italianandsons.com.au/">Click Here </a>for the Italian and Sons website.</p>' +
                    '</div>'+
                '</div>';


var BluGinger = '<div class="black_border_div">' +
                      '<h3>Blu Ginger</h3>' +
                    '<div class="black_border_div_01">' +
                        '<img src="./images/location/bluginger_logo.png" style="width:200px;height:150px;"/>' +
                    '</div>' +
                    '<div class="black_border_div_02">' +
                        '<p class="p1">"At Blu Ginger we use only the freshest locally sourced produce, combined with' +
                        'authentic spices imported directly from the sub-continent, to offer classic, traditional recipes' +
                        'with a modern twist, creating a unique and memorable dining experience for you" -Blu Ginger Website</p>' +
                        '<p class="p1"><a href="http://www.bluginger.com.au/">Click Here </a>for the Blu Ginger website.</p>' +
                    '</div>' +
                '</div>';


var JewelofIndia = '<div class="black_border_div">' +
                      '<h3>Jewel of India</h3>' +
                    '<div class="black_border_div_01">' +
                        '<img src="./images/location/jewel_logo.jpg" style="width:200px;height:150px;"/>' +
                    '</div>' +
                    '<div class="black_border_div_02">' +
                        '<p class="p1">"Finding a balance between dishes inspired by authentic receipes and creating' +
                        'a modern take on classic cuisine sees a loyal following of Canberra locals returning for  ' +
                        'a mouth-watering feast"-Australian good Food Guide</p>' +
                        '<p class="p1"><a href="http://www.jewelofindia.com.au/">Click Here </a>for the Jewel of India website.</p>' +
                    '</div>' +
                '</div>';

var JamiesItalian = '<div class="black_border_div">' +
                      '<h3>Jamie&#39;s Italian</h3>' +
                    '<div class="black_border_div_01">' +
                        '<img src="./images/location/jamie_logo.png" style="width:200px;height:150px;"/>' +
                    '</div>' +
                    '<div class="black_border_div_02">' +
                        '<p class="p1">"With prime position in the Canberra centre on Bunda Street, Jamie&#39;s Italian is the ' +
                        'perfect place for a midshopping bit stop, or a buzzing evening out. With beautiful room-height windows' +
                        'and impressive lofty ceilings, the restaurant is full of atmosphere." -Jamie&#8217;s Italian Website</p>' +
                        '<p class="p1"><a href="https://www.jamieoliver.com/italian/australia/restaurants/canberra/">Click Here </a>for the Jamie&#39;s Italian Canberra website.</p>' +
                    '</div>' +
                '</div>';


var DicksonAsianNoodleHouse = '<div class="black_border_div">' +
                      '<h3>Dickson Asian Noodle House</h3>' +
                    '<div class="black_border_div_01">' +
                        '<img src="./images/location/noodle_logo.jpg" style="width:200px;height:150px;"/>' +
                    '</div>' +
                    '<div class="black_border_div_02">' +
                        '<p class="p1">"The Dickson Asian Noodle House specialises in traditional Malaysian, Thai and Lao cuisine.' +
                        'The dining atmosphere is casual and cosy providing for a la carte dining, banquets and take away" -Vibe FM Website</p>' +
                        '<p class="p1"><a href="https://www.facebook.com/pages/Dickson-Asian-Noodle-House/156690017692038">Click Here </a>for the Dickson Asian Noodle House Facebook page.</p>' +
                    '</div>' +
                '</div>';


var TheChairmanandYip = '<div class="black_border_div">' +
                      '<h3>The Chairman &amp; Yip</h3>' +
                    '<div class="black_border_div_01">' +
                        '<img src="./images/location/chairman_logo.png" style="width:200px;height:150px;"/>' +
                    '</div>' +
                    '<div class="black_border_div_02">' +
                        '<p class="p1">"The Chairman &amp; Yip has become one of Canberra&#39;s longest standing and most highly regarded institutions,' +
                        'having received numerous awards over the years, offering an ever consistent and professional quality of service for corporate' +
                        'dining, conferencea and presentations "-Chairman &amp; Yip website </p>' +
                        '<p class="p1"><a href="http://chairmangroup.com.au/chairmanyip/">Click Here </a>for The Chairman &amp; Yip website.</p>' +
                    '</div>' +
                '</div>';




var locations = [
    [BluGinger, -35.276853, 149.131889],
    [JewelofIndia, -35.320737, 149.132746],
    [JamiesItalian, -35.279527, 149.133558],
    [ItalianandSons, -35.274923, 149.132142],
    [DicksonAsianNoodleHouse, -35.249725, 149.136944],
    [TheChairmanandYip, -35.311811, 149.134050]
];

var map = new google.maps.Map(document.getElementById('googleMap'), {

    zoom: 13,
    center: new google.maps.LatLng(-35.280937, 149.130009),
    mapTypeId: google.maps.MapTypeId.ROADMAP

});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));
}