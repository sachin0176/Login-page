import React, { useContext, useEffect, useReducer, useState , useRef} from "react";
import styles from "./Login.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/AuthContext";
import Input from "../UI/InputForm/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT")
    return { value: action.val, isValid: action.val.includes("@") };

  if (action.type === "INPUT_BLUR")
    return { value: state.value, isValid: state.value.includes("@") };

  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT")
    return { value: action.val, isValid: action.val.length > 6 };

  if (action.type === "INPUT_BLUR")
    return { value: state.value, isValid: state.value.length > 6 };

  return { value: "", isValid: false };
};
const Login = (props) => {

  const emailInputRef=useRef();
  const passwordInputRef=useRef();

  const authCxt =useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const initialState = { value: "", isValid: null };

  const [emailState, dispatchEmail] = useReducer(emailReducer, initialState);
  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    initialState
  );

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifiers = setTimeout(() => {
      console.log("Checking form validaty");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifiers);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHadler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      authCxt.onLogin(emailState.value, passwordState.value);
    }

    else if(!emailIsValid){
          emailInputRef.current.focus();
    }

    else{
        passwordInputRef.current.focus();
    }
  };


  return (
    <Card className={styles["login"]}>
      <form className={styles["form-controls"]} onSubmit={submitHandler}>
        
          <Input
            ref={emailInputRef}
            id="email"
            type="email"
            label="E-Mail"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHadler}
          />
        

          <Input
            ref={passwordInputRef}
            id="password"
            type="password"
            label="Password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />

        <div className={styles["action"]}>
          <Button type="submit" >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
