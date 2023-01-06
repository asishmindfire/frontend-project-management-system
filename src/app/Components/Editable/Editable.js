import React,{ useState } from "react";
import { X } from "react-feather";
import "./Editable.css";

function Editable(props) {
    
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState(props.default || "");

  return (
    <div className="editable">
      {show ? (
        <form
          className={`editable_edit ${props.editClass || ""}`}
          onSubmit={(e) => {
            e.preventDefault();
            if (props.onSubmit) props.onSubmit(inputValue);
            setShow(false);
            setInputValue("");
          }}
        >
          <input
            autoFocus
            value={inputValue}
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            // defaultValue={}
            placeholder={props.placeholder || "Enter item"}
          />
          <div className="editable_edit_footer">
            <button type="submit">{props.buttonText || "Add"}</button>
            <X onClick={() => setShow(false)} />
          </div>
        </form>
      ) : (
        <p
          className={`editable_display ${props.displayClass || ""}`}
          onClick={() => setShow(true)}
        >
          {props.text || "Add item"}
        </p>
      )}
    </div>
  );
}

export default Editable;
