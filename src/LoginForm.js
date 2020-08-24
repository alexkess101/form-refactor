import React, {useState} from 'react';
import BaseInput from "./BaseInput.js";
import FormInput from "./FormInput.js";
import Request from "./Request.js";
import {isUserThere} from "./utils/auth.js";
const login = new Request("/login");

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const inputs = {
        email: new BaseInput({
            type: "email",
            label: "Email",
        }),
        password: new BaseInput({
            type: "password",
            label: "Password",
        })
    };

    const submitRequest = async () => {
        const data = {
            email: inputs.email.value,
            password: inputs.password.value,
        };

        try {
            setIsLoading(true);
            // The api accepts a username and password and returns an array with the userId, username, and hashed password
            // (I realize the architecture of the api is really gross...but I wrote it a while ago)
            const responseData = await login.post(data);

            if (!isUserThere(responseData)) {
                setIsLoading(false);
                throw Error("Please enter valid username and password");
            } else {
                setIsLoading(false);
                alert("Successful login!");
            }
        } catch(err) {
            alert(err);
        }
    };

  return (
    <FormInput
        submitRequest={submitRequest}
        isLoading={isLoading}
    >
      {inputs.email.getInput()}
      {inputs.password.getInput()}
    </FormInput>
  );
};

export default LoginForm;
