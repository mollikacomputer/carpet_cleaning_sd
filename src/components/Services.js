import SingleService from "@/app/services/SingleService";
import getServices from "@/utils/getServices";


const Services = async() => {
    const services = await getServices();
  return (
    <div>
      <h2 className="text-2xl text-green-500 font-semibold text-center my-10">
        Service Page
      </h2>
      <div className="flex flex-wrap justify-between">
        {services.map((service) => (
          <SingleService key={service.id} service={service}>
          </SingleService>
        ))}
      </div>
    </div>
  );
};

export default Services;
