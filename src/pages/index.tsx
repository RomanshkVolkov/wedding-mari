import React, { useEffect } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Table } from '../components/table';
import Maps from '../components/Maps';
import { Presentation } from '../components/Presentation';
import { ModalComponent } from '../components/Modal';
import { IDataLocations } from './api/locations';
import { LocationContainer } from '../components/LocationContainer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
   const [locations, setLocations] = React.useState<IDataLocations[]>([]);
   useEffect(() => {
      fetch('/api/locations')
         .then((res) => res.json())
         .then((data) => setLocations(data));
      console.log(locations);
   }, []);
   const theads = ['id', 'name', 'email', 'phone'];

   const body = [
      {
         id: 1,
         name: 'John',
         email: 'example@email.com',
         phone: '123456789',
      },
      {
         id: 2,
         name: 'Jane',
         email: 'pepe@pepito.com',
         phone: '987654321',
      },
   ];

   return (
      <main
         className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
         <div className="z-10 max-w-5xl w-full items-center justify-between flex-col font-mono text-sm lg:flex">
            <Presentation />
            {/* <Table theads={theads} body={body} /> */}
            <LocationContainer locations={locations} />
         </div>
      </main>
   );
}
