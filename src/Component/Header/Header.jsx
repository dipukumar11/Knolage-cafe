
import profile from '../../../images/profile.png'

const Header = () => {
 
    

    return (
        <div >
            <div className="bg-green-500 p-5 text-white lg:flex lg:justify-between items-center">
           <h1 className="text-4xl font-extrabold">Knolage Cafe </h1>
           <img src={profile} alt="" />
           
            
        </div>

        <hr />
        </div>
    );
};

export default Header;