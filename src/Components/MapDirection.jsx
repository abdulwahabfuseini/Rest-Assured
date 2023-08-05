import React from "react";

const MapDirection = () => {
  return (
    <div className="w-full h-[600px]">
      <header className="text-xl sm:text-2xl text-center py-4 pattern text-white">
        {" "}
        Locate Us
      </header>

      <iframe
        title="googleMap"
        width="100%"
        height="500"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=KUMASI%20GHANA%20-%20WEST-AFRICA+(Rest%20Assured)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.maps.ie/population/">Find Population on Map</a>
      </iframe>
    </div>
  );
};

export default MapDirection;
