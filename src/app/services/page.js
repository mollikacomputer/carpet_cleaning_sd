import SingleService from "./SingleService";

export const metadata={
    title:"carpet cleaning service",
    description:"carpet cleaning service description",
};
const ServicePage = async() => {
    const services=[
        {
            "id":1,
            "title":"Carpet cleaning Service",
            "body":"Carpet cleaning service details here...",
            "imageUrl":"/cleaning.jpg"
        },
        {
            "id":2,
            "title":"Deep Cleaning",
            "body":"Deep cleaning service details here... ",
            "price":550,
            "imageUrl":"/deep_cleaning.jpg"
        },
        {
            "id":3,
            "title":"Rug Cleaning",
            "body":"Rug cleaning service details here... ",
            "price":600,
            "imageUrl":"/rug_cleaning.jpg"
        }
    ]

    return (
        <div className="container mx-auto my-16">
           <h2 className='text-2xl text-green-500 font-semibold text-center my-10'>Service Page</h2>
          <div className="md:flex justify-between">
           {
            services.map((service)=> <SingleService key={service.id} service={service} > </SingleService> )
           }
          </div>
        </div>
    );
};

export default ServicePage;