import { useState, useMemo, useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const locations = {
  institutes: [
    { name: "National Academy of Indian Railways (NAIR), Vadodara", pos: { lat: 22.2994, lng: 73.2081 } },
    { name: "National Academy of Agricultural Research Management (NAARM), Hyderabad", pos: { lat: 17.3151, lng: 78.4107 } },
    { name: "Indian Railways Institute of Mechanical and Electrical Engineering (IRIMEE), Jamalpur", pos: { lat: 24.9199, lng: 86.2176 } },
    { name: "Indian Railways Institute of Signal and Telecommunication Engineering (IRISET), Secunderabad", pos: { lat: 17.4361, lng: 78.4986 } },
    { name: "Indian Railways Institute of Disaster Management (IRIDM), Bengaluru", pos: { lat: 12.9716, lng: 77.5946 } },
    { name: "Multi-Disciplinary Divisional Training Institute (MDDTI), Bengaluru", pos: { lat: 12.98, lng: 77.60 } },
    { name: "Zonal Railway Training Institute (ZRTI), Udaipur", pos: { lat: 24.5713, lng: 73.691 } },
    { name: "Zonal Railway Training Institute (ZRTI), Alipurduar, WB", pos: { lat: 26.4919, lng: 89.5271 } },
    { name: "Signal and Telecom Training Institute (STTI), Sabarmati, Ahmedabad", pos: { lat: 23.0755, lng: 72.5667 } },
    { name: "Signal and Telecom Training Institute (STTI), Byculla, Mumbai", pos: { lat: 18.9904, lng: 72.8408 } },
    { name: "Signal and Telecom Training Institute (STTI), Pandu, Assam", pos: { lat: 26.1767, lng: 91.7073 } },
    { name: "Signal and Telecom Training Institute (STTI), Podanur, Tamil Nadu", pos: { lat: 11.006, lng: 76.956 } },
    { name: "Specialised Training Institute (STI), Ajmer, Rajasthan", pos: { lat: 26.4499, lng: 74.6399 } },
    { name: "Agricultural Co-operative Staff Training Institute (ACSTI), Shimla", pos: { lat: 31.1048, lng: 77.1734 } },
    { name: "All India Institute of Medical Science (AIIMS), Jodhpur", pos: { lat: 26.2515, lng: 73.0243 } },
    { name: "Institute of Teaching and Research in Ayurveda (ITRA), Jamnagar", pos: { lat: 22.4707, lng: 70.0577 } },
    { name: "Diesel Loco Shed, Andal, Asansol, WB", pos: { lat: 23.5907, lng: 87.1856 } },
    { name: "Divisional Railway Manager, Vadodara", pos: { lat: 22.3072, lng: 73.1812 } },
    { name: "Divisional Railway Manager, Jabalpur", pos: { lat: 23.1815, lng: 79.9864 } },
    { name: "Divisional Railway Manager, Kota", pos: { lat: 25.2138, lng: 75.8648 } },
    { name: "Divisional Railway Manager, Gwalior", pos: { lat: 26.2124, lng: 78.1772 } },
    { name: "Divisional Railway Manager, Agra", pos: { lat: 27.1767, lng: 78.0081 } },
    { name: "Divisional Railway Manager, Howrah", pos: { lat: 22.5958, lng: 88.3110 } },
    { name: "Divisional Railway Manager, Guntakal", pos: { lat: 15.1674, lng: 77.3813 } },
    { name: "Divisional Railway Manager, Secunderabad", pos: { lat: 17.4399, lng: 78.4983 } },
    { name: "Divisional Railway Manager, Vijayawada", pos: { lat: 16.5062, lng: 80.6480 } },
    { name: "Divisional Railway Manager, Kacheguda", pos: { lat: 17.3888, lng: 78.4975 } },
    { name: "Divisional Railway Manager, Nanded", pos: { lat: 19.1383, lng: 77.3210 } },
    { name: "Divisional Railway Manager, Agartala", pos: { lat: 23.8315, lng: 91.2868 } },
    { name: "District Institute of Education & Training (DIET'S), Gujarat", pos: { lat: 23.2156, lng: 72.6369 } },
  ]
};

const mapOptions = {
  center: { lat: 23.0225, lng: 72.5714 },
  zoom: 5,
  mapTypeId: "roadmap",
  gestureHandling: "greedy",
  streetViewControl: false,
  fullscreenControl: true,
  zoomControl: true,
  styles: [
    { featureType: "all", elementType: "labels.text.fill", stylers: [{ color: "#2c3e50" }] },
    { featureType: "water", elementType: "geometry.fill", stylers: [{ color: "#aadaff" }] },
    { featureType: "landscape", elementType: "geometry.fill", stylers: [{ color: "#e9e5dc" }] },
    { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#ffffff" }] },
    { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#d7d7d7" }] },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [{ visibility: "on" }],
    },
  ],
};

export function IndiaMapDashboard() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [activeMarker, setActiveMarker] = useState<string | null>(null);
  const markersRef = useRef<{ [key: string]: any }>({});
  const infoWindowRef = useRef<any>(null);

  type Location = { name: string; pos: { lat: number; lng: number } };

  const allLocations = useMemo(() => {
    return [...locations.institutes];
  }, []);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || !window.google) return;
      
      const newMap = new window.google.maps.Map(mapRef.current, mapOptions);
      setMap(newMap);
      
      const infoWindow = new window.google.maps.InfoWindow();
      infoWindowRef.current = infoWindow;

      allLocations.forEach((loc) => {
        const marker = new window.google.maps.Marker({
          position: loc.pos,
          map: newMap,
          title: loc.name,
        });
        
        markersRef.current[loc.name] = marker;

        marker.addListener("click", () => {
          infoWindow.setContent(`
            <div style="padding: 8px; font-family: 'Inter', sans-serif; max-width: 200px;">
              <h3 style="margin: 0; color: #0f2942; font-size: 14px; font-weight: 600;">${loc.name}</h3>
            </div>
          `);
          infoWindow.open(newMap, marker);
          setActiveMarker(loc.name);
        });
      });
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCBsxMiRZ1lgcPUaeJnkg5qcDcSP2mwepc";
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, [allLocations]);

  const handleLocationClick = (loc: Location) => {
    if (map) {
      map.panTo(loc.pos);
      map.setZoom(8);
      
      const marker = markersRef.current[loc.name];
      if (marker && infoWindowRef.current) {
        window.google.maps.event.trigger(marker, 'click');
      }
    }
    setActiveMarker(loc.name);
  };

  return (
    <>
      {/* Map Section */}
      <section id="global-office" className="bg-secondary/40 overflow-hidden py-16 rounded-2xl border border-border my-16">
        <div className="bg-secondary/30 px-6 py-8 border-b border-border text-center mb-12 rounded-t-[2rem]">
          <h2 className="text-3xl font-light text-foreground mb-2 flex items-center justify-center gap-3">
            ITMS Across <span className="text-[var(--skydot-orange)] font-medium">India</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore connected pathways to training, institutions, faculty and infrastructure across the ecosystem.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto bg-card rounded-[2rem] border border-border shadow-md overflow-hidden h-[600px] flex flex-col md:flex-row">
          <div className="md:w-80 border-r border-border bg-secondary/20 flex flex-col h-1/2 md:h-full">
            <div className="p-4 border-b border-border bg-background">
              <h3 className="font-bold text-lg">Our Clients</h3>
            </div>
            <div className="overflow-y-auto p-4 space-y-6 flex-1 min-h-0 custom-scrollbar overscroll-contain" data-lenis-prevent="true">
              <div>
                <h4 className="text-sm font-bold text-[var(--skydot-blue)] uppercase tracking-wider mb-3">
                  Our Institutes
                </h4>
                <ul className="space-y-1">
                  {locations.institutes.map((loc) => (
                    <li
                      key={loc.name}
                      onClick={() => handleLocationClick(loc)}
                      className={cn(
                        "text-sm p-2 rounded-lg cursor-pointer transition-colors",
                        activeMarker === loc.name
                          ? "bg-[var(--skydot-blue)]/10 text-[var(--skydot-blue)] font-medium"
                          : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground",
                      )}
                    >
                      {loc.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-1 relative h-1/2 md:h-full bg-slate-100" data-lenis-prevent="true">
            <div ref={mapRef} className="absolute inset-0 w-full h-full" />
            {!map && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100 z-10 pointer-events-none">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--skydot-blue)]"></div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
