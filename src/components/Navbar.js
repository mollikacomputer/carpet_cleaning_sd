import NavLink from "./NavLink";
const navItemsLink = [
    {
        path:"/",
        title:"Home",
    },
    {
        path:"/about",
        title:"About",
    },
    {
        path:"/contact",
        title:"Contact",
    },
    {
        path:"/services",
        title:"Services",
    },
    {
        path:"/blog",
        title:"Blog",
    },
]

const Navbar = () => {
    return (
        <nav className="flex justify-between container mx-auto">
            <h2 className="font-2xl" >Ranjit</h2>
            <ul className="flex">
                {navItemsLink.map(({path, title})=>(
                    <li className="mx-2" key={path}>
                        <NavLink 
                        exact ={path==='/'}
                        activeClassName={"text-blue-500"}
                        href={path} 
                        >
                        {title}</NavLink> </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;