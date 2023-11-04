// Importa la librería
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define tus credenciales y opciones del mapa
const apiKey = 'AIzaSyBsq_enucAef610nxl5pO-CJV0xs5bb1Ec';
const mapStyles = { height: '100vh', width: '100%' };
const defaultCenter = { lat: 19.3402894, lng: -99.191796 };

interface MapProps {
   close: () => void;
}
// Crea un componente para renderizar el mapa
const Map = ({ close }: MapProps) => {
   return (
      <div className="w-full flex justify-center">
         <div className="" onClick={close}>
            X
         </div>
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1882.3407645207174!2d-99.190895!3d19.339621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20001bee8346d%3A0x9f9d0e0bee818bcb!2sPalacio%20La%20Rochelle%20San%20%C3%81ngel!5e0!3m2!1ses!2sus!4v1699087984496!5m2!1ses!2sus"
            width="1024"
            height="720"
            loading="lazy"></iframe>
      </div>
   );
};

export default Map;
