import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';


const SignUp =() =>{
    const [state , setState] = useState({
        displayName: "",
        email : "",
        password : "",
        confirmPassword:""
    })

    const handleSubmit = async event =>{
        event.preventDefault();
        if(state.password!== state.confirmPassword){
            alert("password don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(state.email,state.password);
            await createUserProfileDocument(user, {displayName:state.displayName})
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = event =>{
        const {name , value} = event.target
        setState({...state,[name]: value});
    }

    return(
        <div className='sign-up'>
            <h2 className='title'>I do not have a accoiunt</h2>

            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                  type='text'
                  name='displayName'
                  value={state.displayName}
                  onChange={handleChange}
                  label='Display Name'
                  required
                  />
                  <FormInput 
                  type='email'
                  name='email'
                  value={state.email}
                  onChange={handleChange}
                  label='Email'
                  required
                  />
                  <FormInput 
                  type='password'
                  name='password'
                  value={state.password}
                  onChange={handleChange}
                  label='Password'
                  required
                  />
                  <FormInput 
                  type='password'
                  name='confirmPassword'
                  value={state.confirmPassword}
                  onChange={handleChange}
                  label='Confirm assword'
                  required
                  />
                  <CustomButton type='submit'>
                      SIGN UP
                  </CustomButton>
            </form>

        </div>
    )
}

export default SignUp;