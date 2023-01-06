import React,{ useEffect, useRef } from "react";

function Dropdown(props) {
  const dropdownRef = useRef();
  useEffect(() => {
    // Here it will ditinguise where the click happened.
    const handleClick = (event) => {
      // Check whether the click happened inside or outside of the dropdown
      if (!dropdownRef?.current?.contains(event?.target)) {
        if (props.onClose) {
          props.onClose();
        }
      }
    };

    // At the time of mount it will listen in the whole document, if any click happend.
    // Because the dropdown doesn't has any close button.
    document.addEventListener("mousedown", handleClick);

    // At the time of ummount it will remove the event listener.
    // Clean up function.
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  return (
    <div
      ref={dropdownRef}
      className="dropdown"
      style={{
        position: "absolute",
        top: "100%",
        right: "0",
      }}
    >
      {props.children}
    </div>
  );
}

export default Dropdown;
