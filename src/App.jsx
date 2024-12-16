

import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusabaleForm from './components/ReusableForm/ReusabaleForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleFrom/SimpleForm'
// import StatefullForm from './components/StatefullForm/StatefullForm'

function App() {

//   const handleSignUpSubmit = data =>{
//     console.log('Sign Up data', data);
// }

//   const handleUpdeteProfile = data =>{
//     console.log('profile update', data);
//   }


  return (
    <>
     
      <h1>Form Master</h1>

      <Grandpa></Grandpa>


      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusabaleForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>please sign up right  now</p>
        </div>
      </ReusabaleForm>
      <ReusabaleForm formTitle={'Profile Updeted'} submitBtnText='Updete' handleSubmit={handleUpdeteProfile}>
        <div>
          <h2>Profile Update</h2>
          <p>Always keep your profile update</p>
        </div>
      </ReusabaleForm> */}
    </>
  )
}

export default App
