import { useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.compoenent";

import { ButtonsContainer, SignInContainer } from "./sign-in.styles";
import { useDispatch } from "react-redux";
import { USER_ACTION_TYPES } from "../../store/user/user-action.types";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";

const defaultFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  // const logOnWithGoogle = async () => {
  //   const { user } = await signinWithGooglePopup();
  //   createUserDocFromAuth(user);
  //   // setCurrentUser(user);
  // };

  const logOnWithGoogle = () => {
    dispatch(googleSignInStart());
    // createUserDocFromAuth(user);
    // setCurrentUser(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const submitForm = async (event) => {
    event.preventDefault();
    dispatch(emailSignInStart(email, password));
    resetFormFields();
    // try {
    //   const { user } = await signinUserWithEmailAndPassword(email, password);
    //   // await createUserDocFromAuth(response.user);
    //   resetFormFields();
    // } catch (error) {
    //   switch (error.code) {
    //     case "auth/wrong-password":
    //       alert("Password is wrong!");
    //       break;
    //     case "auth/user-not-found":
    //       alert("User not found!");
    //       break;
    //     default:
    //       alert("athentication failed");
    //   }
    //}
  };
  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={submitForm}>
        <div>
          <FormInput
            label="Email"
            required
            type="text"
            value={email}
            onChange={handleChange}
            name="email"
          />

          <FormInput
            label="Password"
            required
            type="password"
            value={password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <ButtonsContainer>
          <Button
            children={`Sign In`}
            type="submit"
            buttonTypeClass={BUTTON_TYPE_CLASSES.base}
          />
          <Button
            children={`Google Sign in`}
            buttonTypeClass={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={logOnWithGoogle}
          />
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
