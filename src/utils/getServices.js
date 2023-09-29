const getServices = async() => {
    const res = await fetch("http://localhost:5000/services");

    return res.json();
};

export default getServices;