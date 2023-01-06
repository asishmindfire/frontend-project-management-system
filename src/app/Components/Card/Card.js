import React, { useState } from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";
import Chip from "../Chip/Chip";
import "./Card.css";
import Dropdown from "../Dropdown/Dropdown";
import Cardinfo from "./Cardinfo/Cardinfo";

function Card(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const [selectedUser, setSelectedUser] = useState("");
  // const [selectCategory, setSelectCategory] = useState("");

  return (
    <>
      {showModal && (
        <Cardinfo
          card={props.card}
          userName={props.userName}
          boardId={props.boardId}
          updateCard={props.updateCard}
          // selectedUser={selectedUser}
          // setSelectedUser={setSelectedUser}
          // selectCategory={selectCategory}
          // setSelectCategory={setSelectCategory}
          onClose={() => setShowModal(false)}
        />
      )}
      <div
        className="card"
        draggable={true}
        onDragEnd={() => props.handleDragEnd(props.card?.id, props.boardId)} // Target
        onDragEnter={() => props.handleDragEnter(props.card?.id, props.boardId)}  // Soruce
        onClick={() => setShowModal(true)}
      >
        <div className="card_top">
          <div className="card_top_labels">
            {props.card?.labels?.map((item, index) => {
              return <Chip key={index} text={item?.text} color={item?.color} />;
            })}
          </div>
          <div
            className="card_top_more"
            onClick={(event) => {
              event.stopPropagation();
              setShowDropdown(true);
            }}
          >
            <MoreHorizontal />
            {showDropdown && (
              <Dropdown
                onClose={() => {
                  setShowDropdown(false);
                }}
              >
                <div className="card_dropdown">
                  <p
                    onClick={() =>
                      props.removeCard(props.card?.id, props.boardId)
                    }
                  >
                    Delete
                  </p>
                </div>
              </Dropdown>
            )}
          </div>
        </div>
        <div className="card_title">{props.card?.title}</div>
        <div className="card_footer">
          {props.card?.date && (
            <p>
              <Clock />
              {props.card?.date ? new Date(props.card?.date).toISOString().substring(0, 11) : ""}
            </p>
          )}
          {props.card?.tasks?.length > 0 && (
            <p>
              <CheckSquare />
              {props.card?.tasks?.filter((item) => item.completed).length}/
              {props.card?.tasks?.length}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
