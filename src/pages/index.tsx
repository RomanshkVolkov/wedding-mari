import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Table } from '../components/table';
import Maps from '../components/maps';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
   const [isOpenMap, setIsOpenmap] = React.useState(false);
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
   const mapita = <Maps close={() => setIsOpenmap(false)} />;
   return (
      <main
         className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
         <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            {/* <Table theads={theads} body={body} /> */}
            <button className="bg-500 p-10" onClick={() => setIsOpenmap(true)}>
               Dirección
            </button>
            {isOpenMap && mapita}
         </div>
      </main>
   );
}
