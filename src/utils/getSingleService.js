import React from 'react';
import "server-only";
import {cache} from 'react';
import getServiceByIdFromDb from '@/dbservices/service';


const getSingleService = cache(getServiceByIdFromDb);

export default getSingleService;
