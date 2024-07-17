import React, { useEffect, useRef } from "react";

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initMap = () => {
      const chicago = { lat: 41.85, lng: -87.65 };
      const map = new google.maps.Map(mapRef.current as HTMLDivElement, {
        zoom: 4,
        center: { lat: 49.496675, lng: -102.65625 },
      });

      const georssLayer = new google.maps.KmlLayer({
        url: "http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss",
      });
      georssLayer.setMap(map);

      const createCenterControl = (map: google.maps.Map) => {
        const controlButton = document.createElement("button");
        controlButton.classList.add("buttonStyle");
        controlButton.textContent = "Center Map";
        controlButton.title = "Click to recenter the map";
        controlButton.type = "button";
        controlButton.addEventListener("click", () => {
          map.setCenter(chicago);
        });
        return controlButton;
      };

      const centerControlDiv = document.createElement("div");
      const centerControl = createCenterControl(map);
      centerControlDiv.appendChild(centerControl);
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(
        centerControlDiv
      );
    };

    if (window.google) {
      initMap();
    } else {
      // Load the Google Maps script
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=INSERT_YOUR_API_KEY&callback=initMap&v=weekly&solution_channel=GMP_CCS_customcontrols_v2`;
      script.defer = true;
      script.async = true;
      script.onload = () => {
        initMap();
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div id="map" ref={mapRef} style={{ height: "100%", width: "100%" }} />
  );
};

export default MapComponent;
