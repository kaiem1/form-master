import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin asset={asset} name={'Orpy'}></Cousin>
                <Cousin name={'Mahin'}></Cousin>
                </section>
        </div>
    );
};

export default Uncle;