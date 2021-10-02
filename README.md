Hotel-Room-Booking-App Demo URL : https://hotel-booking-app-iw6tdpoyt-gilsongangadhar-gmailcom.vercel.app/

Hotel-Room-Booking-App walkthrough : https://www.awesomescreenshot.com/video/5472157?key=baf76a4db2ed8b2c0cc998e7cdadc8dd

This is a Hotel room-Booking-App, a next.js app, where you can look a hotel rooms for user/users in your/nearby cities (here cities are from UK). Here first, the user have to select the location where you need the hotel room and then select the number of days for your stay. Then the app will take you to search hotel locations, where you can look at the hotel rooms. This app also shows the available hotel rooms in the selected cities on the map.

Its build using : 

* front end : next js, react-router-dom, react-date-range, date-fns, tailwind-scrollbar-hide, react-map-gl, geolib
* Map got from mapbox(through style key and access key)
* styling done using tailwind.css
* backend data done using JSON

Its Main features : 

1. Listing the cities(cities where service available) on homepage. 
2. Mentioning the city in the search bar and also mentioning the date range for which you want to use the hotel room(created using react-date-range and date-fns)
3. New page loading scroll bar is made using tailwind-scrollbar-hide/ bar-of-progess package, until the search/home page loads
4. Map showed on the search screen is made using react-map-gl package (react wrapper for mapbox GL JS), to show available hotel rooms in the searched cities
5. Pining the hotel on the map for the searched city and popping up the name of the hotel over the pinpoint(from the click)  
