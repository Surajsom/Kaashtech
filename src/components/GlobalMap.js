"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function GlobalMap() {
  useEffect(() => {
    const map = L.map("map", {
      center: [20, 0],
      zoom: 2,

      // 🔒 Lock the map
      scrollWheelZoom: false,
      dragging: true,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      tap: false,
      touchZoom: false,
      zoomControl: false,
      worldCopyJump: true, 
  maxBoundsViscosity: 1.0,
    });

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution: "&copy; OpenStreetMap contributors",
      }
    ).addTo(map);

    const customPin = L.divIcon({
      className: "",
      html: `
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#1b4c53" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        </svg>
      `,
      iconSize: [30, 30],
      iconAnchor: [15, 30],
    });

    const locations = [
      { name: "Texas, USA", coords: [31.9686, -99.9018] },
      { name: "Wyoming, USA", coords: [43.0759, -107.2903] },
      { name: "United Kingdom", coords: [55.3781, -3.436] },
      { name: "India", coords: [20.5937, 78.9629] },
    ];

    locations.forEach((loc) => {
      L.marker(loc.coords, { icon: customPin })
        .addTo(map)
        .bindPopup(`<strong>${loc.name}</strong>`);
    });

    return () => map.remove();
  }, []);

  return (
    <div
      id="map"
      style={{
        height: "520px",
        width: "100%",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        pointerEvents: "auto",
      }}
    />
  );
}