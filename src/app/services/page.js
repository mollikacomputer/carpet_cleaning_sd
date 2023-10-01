import getServices from "@/utils/getServices";
import SingleService from "./SingleService";

export const metadata={
    title:"carpet cleaning service",
    description:"carpet cleaning service description",
};
const ServicePage = async() => {
    const services = await getServices();

    return (
        <div className="container mx-auto my-16">
           <h2 className='text-2xl text-green-500 font-semibold text-center my-10'>Service Page</h2>
          <div className="flex flex-wrap justify-between">
           {
            services.map((service)=> <SingleService key={service.id} service={service} > </SingleService> )
           }
          </div>
        </div>
    );
};

export default ServicePage;