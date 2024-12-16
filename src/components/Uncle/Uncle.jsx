import Cousin from "../Cousin/Cousin";


const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Orpy'}></Cousin>
                <Cousin name={'Mahin'}></Cousin>
                </section>
        </div>
    );
};

export default Uncle;