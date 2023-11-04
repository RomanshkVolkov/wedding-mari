import React from 'react';

interface TableProps {
   theads: string[];
   body: any[];
}

export const Table = ({ theads, body }: TableProps) => {
   const [activo, setActivo] = React.useState(0);

   const handleEventClick = (e: any) => {
      setActivo(activo + 1);
   };
   return (
      <div>
         <table onClick={handleEventClick}>
            <thead>
               {theads.map((thead: any) => (
                  <tr key={thead}>
                     <th>{thead}</th>
                  </tr>
               ))}
            </thead>
            <tbody>
               {body.map((row: any) => (
                  <tr key={row.id}>
                     <td>{row.id}</td>
                     <td>{row.name}</td>
                     <td>{row.email}</td>
                  </tr>
               ))}
            </tbody>
         </table>
         <strong>Valor De estado</strong>
         <br />
         <span>{activo}</span>
      </div>
   );
};
