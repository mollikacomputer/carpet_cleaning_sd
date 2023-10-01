import "server-only";
import DbConnect from "./DbConnect";

export const getServicesFromDb = async() =>{
    const db = await DbConnect();
    const servicesCollections = db.collection("services");
    return servicesCollections.find({}).toArray();
};