import "server-only";
import { getServicesFromDb } from '@/dbservices/services';
import {cache} from 'react';

const getServices = cache(() => {
    return getServicesFromDb();
});

export default getServices;
// const getServices = async() => {
//     const res = await fetch("http://localhost:5000/services");
//     return res.json();
// };
// export default getServices;