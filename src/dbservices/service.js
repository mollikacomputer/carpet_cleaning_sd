
import DbConnect from './DbConnect';
import { ObjectId } from 'mongodb';

const getServiceByIdFromDb = async(id) => {
    const db = await DbConnect();
    // const singleService = db.collection("services").findOne({ _id: ObjectId("your-service-id") })
    const serviceCollection = await db.collection("services");
    const query = {
        _id: new ObjectId(id)
    };


    return serviceCollection.findOne(query);
};

export default getServiceByIdFromDb;