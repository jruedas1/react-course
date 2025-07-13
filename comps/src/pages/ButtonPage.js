import Button from "../components/Button";
import {GoBell, GoCloudDownload, GoDatabase} from "react-icons/all";

function ButtonPage(){
    const handleClick = () => {};

    return (
        <div>
            <div><Button onClick={handleClick} success rounded outline className='mb-5'><GoBell />Click Me!</Button></div>
            <div><Button danger outline><GoCloudDownload />Buy Now</Button></div>
            <div><Button warning><GoDatabase />See Deal</Button></div>
            <div><Button secondary outline>Hide Adds</Button></div>
            <div><Button primary rounded>See Similar</Button></div>
        </div>
    );
}

export default ButtonPage;