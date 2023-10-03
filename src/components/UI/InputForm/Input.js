import React, {useEffect, useRef,useImperativeHandle} from "react";
import styles from './Input.module.css';

const Input =React.forwardRef((props,ref)=>{
        const inputRef=useRef();

    const activate=()=>{
        inputRef.current.focus();
    }

    useImperativeHandle(ref,()=>{
        return {
            focus: activate
        }
    })
    return <div
    className={`${styles["form-control"]} ${
      props.isValid === false ? styles["invalid"] : ""
    }`}
  >
    <label htmlFor={props.id}>{props.label}</label>
    <input
    ref={inputRef}
      id={props.id}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  </div>
});

export default Input;