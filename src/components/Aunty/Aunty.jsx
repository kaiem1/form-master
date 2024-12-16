import Cousin from "../Cousin/Cousin";

 

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Shirly'}></Cousin>
                <Cousin name={'Silvy'}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;