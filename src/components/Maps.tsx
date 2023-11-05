// Importa la librería
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define tus credenciales y opciones del mapa
const apiKey = 'AIzaSyBsq_enucAef610nxl5pO-CJV0xs5bb1Ec';
const mapStyles = { height: '100vh', width: '100%' };
const defaultCenter = { lat: 19.3402894, lng: -99.191796 };

interface MapProps {
   frame: string;
}
// Crea un componente para renderizar el mapa
const Map = ({ frame }: MapProps) => {
   return (
      <>
         <iframe src={frame} width="970" height="400" loading="lazy"></iframe>
      </>
   );
};

export default Map;
