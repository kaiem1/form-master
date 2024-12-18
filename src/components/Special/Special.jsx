import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

 
const Special = ({asset}) => {
    const Gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special</h2>
            <p>Gift: {asset}</p>
            <p>Also Has Gift: {Gift}</p>
        </div>
    );
};

export default Special;