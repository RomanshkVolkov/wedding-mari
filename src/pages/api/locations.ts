// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export type IDataLocations = {
   name: string;
   date: string;
   address: string;
   src: string;
};

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse<IDataLocations[]>
) {
   res.status(200).json([
      {
         name: 'ceremony',
         date: 'Saturday, October 2nd, 2021',
         address: 'Palacio La Rochelle',
         src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.6661152524143!2d-99.19437092421148!3d19.340289381919487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20001bee8346d%3A0x9f9d0e0bee818bcb!2sPalacio%20La%20Rochelle%20San%20%C3%81ngel!5e0!3m2!1ses-419!2smx!4v1699147899863!5m2!1ses-419!2smx',
      },
      {
         name: 'ceremony',
         date: 'Saturday, October 2nd, 2021',
         address: 'Palacio La Rochelle',
         src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.6661152524143!2d-99.19437092421148!3d19.340289381919487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20001bee8346d%3A0x9f9d0e0bee818bcb!2sPalacio%20La%20Rochelle%20San%20%C3%81ngel!5e0!3m2!1ses-419!2smx!4v1699147899863!5m2!1ses-419!2smx',
      },
      {
         name: 'ceremony',
         date: 'Saturday, October 2nd, 2021',
         address: 'Palacio La Rochelle',
         src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.6661152524143!2d-99.19437092421148!3d19.340289381919487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20001bee8346d%3A0x9f9d0e0bee818bcb!2sPalacio%20La%20Rochelle%20San%20%C3%81ngel!5e0!3m2!1ses-419!2smx!4v1699147899863!5m2!1ses-419!2smx',
      },
   ]);
}
