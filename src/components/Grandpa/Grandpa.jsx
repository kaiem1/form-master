import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';
import { useState } from "react";

export const AssetContext = createContext('gold')
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const [money, setMoney] = useState(1000);
    const asset = 'diamond';
    return (
        <div className="grandpa ">
            <h3>Grandpa</h3>
            <p>Net Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
            <AssetContext.Provider value="gold">
            <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
            </section>
            </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;



// 1. create a context and export it
// 2. Add provider for the context with a value. Value could be anything
// 3. useContext to access Value in the context API