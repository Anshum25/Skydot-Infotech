import React, { useState, useMemo } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import { Search, MapPin, Building, GraduationCap, Map as MapIcon } from "lucide-react";

const geoUrl = "/india-states.json";

const instituteData: Record<string, { total: number; institutes: string[] }> = {
  "Madhya Pradesh": { total: 39, institutes: ["National Academy of Customs", "State Training Institute MP", "Police Training College Indore"] },
  "Gujarat": { total: 25, institutes: ["Gujarat Police Academy", "SPIPA Ahmedabad", "NID Gandhinagar"] },
  "Maharashtra": { total: 85, institutes: ["YASHADA Pune", "National Fire Service College", "MJPTRTI"] },
  "Uttar Pradesh": { total: 112, institutes: ["Dr. B.R. Ambedkar Police Academy", "UPAM Lucknow"] },
  "Karnataka": { total: 64, institutes: ["ATI Mysore", "National Institute of Design Bangalore"] },
  "Andhra Pradesh": { total: 28, institutes: ["AP HRD Institute", "NACIN Zonal Campus"] },
  "Delhi": { total: 95, institutes: ["LBSNAA Delhi Branch", "Indian Institute of Public Administration"] }
};

const DEFAULT_CENTER: [number, number] = [80, 22];
const DEFAULT_ZOOM = 4;

export function IndiaMapDashboard() {
  const [tooltipContent, setTooltipContent] = useState<any>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [position, setPosition] = useState({ coordinates: DEFAULT_CENTER, zoom: DEFAULT_ZOOM });

  const handleGeographyClick = (geo: any) => {
    const stateName = geo.properties.name;
    setSelectedState(stateName);
    
    try {
      const centroid = geoCentroid(geo);
      if (centroid && !isNaN(centroid[0]) && !isNaN(centroid[1])) {
        setPosition({ coordinates: centroid as [number, number], zoom: 12 });
      } else {
        // Fallback
        setPosition({ coordinates: DEFAULT_CENTER, zoom: DEFAULT_ZOOM });
      }
    } catch(e) {
       setPosition({ coordinates: DEFAULT_CENTER, zoom: DEFAULT_ZOOM });
    }
  };

  const handleReset = () => {
    setSelectedState(null);
    setPosition({ coordinates: DEFAULT_CENTER, zoom: DEFAULT_ZOOM });
  };

  const currentData = selectedState ? (instituteData[selectedState] || { total: Math.floor(Math.random() * 50) + 5, institutes: ["State Training Academy", "Regional Institute"] }) : { total: 936, institutes: ["ANDHRA PRADESH HUMAN RESOURCE DEVELOPMENT INSTITUTE", "COUNTER INSURGENCY AND ANTITERRORISM SCHOOL", "NACIN ZONAL CAMPUS VISAKHAPATNAM"] };

  return (
    <div className="w-full bg-background border border-border rounded-xl shadow-sm overflow-hidden my-16">
      <div className="bg-secondary/30 px-6 py-8 border-b border-border text-center">
        <h2 className="text-3xl font-light text-foreground mb-2 flex items-center justify-center gap-3">
          ITMS Across <span className="text-[var(--skydot-orange)] font-medium">India</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore connected pathways to training, institutions, faculty and infrastructure across the ecosystem.
        </p>
      </div>

      <div className="grid lg:grid-cols-2">
        {/* Map Section */}
        <div className="relative p-4 md:p-8 border-r border-border min-h-[500px] flex items-center justify-center bg-secondary/10">
          
          <div className="absolute top-6 left-6 z-10 flex gap-2">
            <button 
              onClick={handleReset}
              className="bg-background border border-border shadow-sm px-4 py-2 rounded-full text-sm font-semibold text-foreground flex items-center gap-2 hover:bg-secondary transition-colors"
            >
              <MapPin className="w-4 h-4 text-primary" />
              {selectedState || "All India"}
            </button>
            {selectedState && (
              <button 
                onClick={handleReset}
                className="bg-background border border-border shadow-sm px-4 py-2 rounded-full text-sm font-semibold text-[var(--skydot-blue)] flex items-center gap-2 hover:bg-secondary transition-colors"
              >
                <MapIcon className="w-4 h-4" />
                All India Map
              </button>
            )}
          </div>

          <div className="w-full h-full max-h-[600px] overflow-visible relative">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 1000 }}
              className="w-full h-full outline-none"
            >
              <ZoomableGroup
                zoom={position.zoom}
                center={position.coordinates}
                onMoveEnd={(position) => setPosition(position)}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const stateName = geo.properties.name;
                      const isSelected = selectedState === stateName;
                      
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onClick={() => handleGeographyClick(geo)}
                          onMouseEnter={() => {
                            const data = instituteData[stateName] || { total: Math.floor(Math.random() * 50) + 5 };
                            setTooltipContent({ name: stateName, total: data.total });
                          }}
                          onMouseLeave={() => setTooltipContent(null)}
                          style={{
                            default: {
                              fill: isSelected ? "#334155" : "#94a3b8", // Slate colors
                              stroke: "#e2e8f0",
                              strokeWidth: 0.5,
                              outline: "none",
                              transition: "all 250ms"
                            },
                            hover: {
                              fill: "#475569",
                              stroke: "#cbd5e1",
                              strokeWidth: 0.5,
                              outline: "none",
                              cursor: "pointer"
                            },
                            pressed: {
                              fill: "#1e293b",
                              stroke: "#cbd5e1",
                              strokeWidth: 0.5,
                              outline: "none"
                            },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
                {/* We could add markers here if needed, but the user showed dots on the map */}
              </ZoomableGroup>
            </ComposableMap>

            {/* Custom Tooltip */}
            {tooltipContent && (
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2d3748] text-white p-4 rounded-md shadow-xl pointer-events-none z-50 min-w-[200px]"
              >
                <h4 className="font-bold text-lg mb-2">{tooltipContent.name}</h4>
                <div className="text-sm text-gray-300">
                  <p>Total Training Institutes:</p>
                  <p className="text-[var(--skydot-orange)] font-bold text-xl">{tooltipContent.total}</p>
                </div>
              </div>
            )}
          </div>

          <div className="absolute bottom-6 right-6 flex flex-col gap-2 z-10">
            <button 
              onClick={() => setPosition(pos => ({ ...pos, zoom: pos.zoom * 1.5 }))}
              className="bg-background border border-border shadow-sm w-8 h-8 rounded-md flex items-center justify-center hover:bg-secondary font-bold text-lg"
            >
              +
            </button>
            <button 
              onClick={() => setPosition(pos => ({ ...pos, zoom: pos.zoom / 1.5 }))}
              className="bg-background border border-border shadow-sm w-8 h-8 rounded-md flex items-center justify-center hover:bg-secondary font-bold text-lg"
            >
              -
            </button>
          </div>
        </div>

        {/* Info Panel */}
        <div className="p-6 md:p-8 flex flex-col h-[600px] overflow-hidden">
          <div className="mb-6">
            <p className="text-[var(--skydot-orange)] text-sm font-bold uppercase tracking-wider mb-1">Region</p>
            <h3 className="text-3xl font-bold text-foreground">{selectedState || "All India"}</h3>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="border border-border rounded-lg p-4 bg-background shadow-sm">
              <p className="text-xs text-muted-foreground flex items-center gap-1 mb-2"><Building className="w-3 h-3"/> Central</p>
              <p className="text-3xl font-bold text-slate-800 dark:text-slate-200">
                {selectedState ? Math.floor(currentData.total * 0.3) : 296}
              </p>
            </div>
            <div className="border border-border rounded-lg p-4 bg-background shadow-sm">
              <p className="text-xs text-muted-foreground flex items-center gap-1 mb-2"><Building className="w-3 h-3"/> State/UT</p>
              <p className="text-3xl font-bold text-slate-800 dark:text-slate-200">
                {selectedState ? Math.floor(currentData.total * 0.6) : 614}
              </p>
            </div>
            <div className="border border-border rounded-lg p-4 bg-background shadow-sm">
              <p className="text-xs text-muted-foreground flex items-center gap-1 mb-2"><Building className="w-3 h-3"/> PSU/CPSE</p>
              <p className="text-3xl font-bold text-slate-800 dark:text-slate-200">
                {selectedState ? Math.floor(currentData.total * 0.1) : 26}
              </p>
            </div>
          </div>

          <div className="relative mb-6">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder={`Search Institutes in ${selectedState || "India"}...`}
              className="w-full bg-background border border-border rounded-md pl-9 pr-4 py-2.5 text-sm outline-none focus:border-[var(--skydot-blue)] focus:ring-1 focus:ring-[var(--skydot-blue)]/20 transition-all"
            />
          </div>

          <div className="flex-1 overflow-auto pr-2 custom-scrollbar">
            <h4 className="text-sm font-bold mb-4">{currentData.total} Institutes</h4>
            <div className="flex flex-col gap-3">
              {currentData.institutes.map((inst, i) => (
                <div key={i} className="bg-background border border-border p-4 rounded-lg shadow-sm hover:border-[var(--skydot-blue)]/50 transition-colors cursor-pointer group">
                  <h5 className="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-[var(--skydot-blue)] transition-colors mb-1">{inst}</h5>
                  <p className="text-xs text-muted-foreground">{selectedState || "New Delhi"}</p>
                </div>
              ))}
              {/* Add some dummy filler ones so it looks full */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={`dummy-${i}`} className="bg-background border border-border p-4 rounded-lg shadow-sm hover:border-[var(--skydot-blue)]/50 transition-colors cursor-pointer group">
                  <h5 className="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-[var(--skydot-blue)] transition-colors mb-1">Regional Training Center {i + 1}</h5>
                  <p className="text-xs text-muted-foreground">{selectedState || "Various Locations"}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
