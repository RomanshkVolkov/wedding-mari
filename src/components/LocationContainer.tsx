import React from 'react';
import { IDataLocations } from '../pages/api/locations';
import Map from './Maps';
import { ModalComponent } from './Modal';

interface LocationProps {
   locations: IDataLocations[];
}

export const LocationContainer: React.FC<LocationProps> = ({ locations }) => {
   const useMaps = (location: IDataLocations) => (
      <ModalComponent title="Ubicación">
         <Map frame={location?.src || ''} />;
      </ModalComponent>
   );
   return (
      <div className="grid grid-cols-3">
         {locations.map((location) => (
            <div className="flex flex-col justify-center items-center gap-4 shadow-2xl p-4 rounded">
               <h1>{location.name}</h1>
               <span>{location.date}</span>
               <strong>{location.address}</strong>

               {useMaps(location)}
            </div>
         ))}
      </div>
   );
};
