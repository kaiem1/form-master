import useInputState from "../../hooks/useInputState";


const HookForm = () => {
    //  const [name, handleNameChange ] = useInputState('Sokina muntaha')
        const emailState = useInputState('rojoni@shojoni.go')

     const handleSubmit = e => {
        console.log('form data', emailState.value)
        e.preventDefault();
     }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email"  />
                <br />
                <input type="password" name="password" />
                <br />
                {/* <input type="submit" value="submit" /> */}
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;