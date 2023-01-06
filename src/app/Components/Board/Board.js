import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";
import "./Board.css";
import Card from "../Card/Card";
import Editable from "../Editable/Editable";
import Dropdown from "../Dropdown/Dropdown";

export default function Board(props) {
  // console.log("props.board", props.board);
  const [showDropdown, setShowDropdown] = useState(false);
  console.log("showDropdown value after", showDropdown);

  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">
          {/* ? -> Here this is called chaining operator */}
          {props.board?.title} <span>{props.board?.cards.length || 0}</span>
        </p>

        <div className="board_top_more" onClick={() => setShowDropdown(true)}>
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown
              onClose={() => {
                setShowDropdown(false);
              }}
            >
              <div className="board_dropdown">
                <p onClick={() => props.romoveBoard(props.board?.id)}>Delete</p>
              </div>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="board_cards custom-scroll"
     
      >
        {props.board?.cards &&
          props.board?.cards?.map((item) => {
            return (
              <Card
                key={item.id}
                card={item}
                removeCard={props.removeCard}
                boardId={props.board?.id}
                handleDragEnter={props.handleDragEnter}
                handleDragEnd={props.handleDragEnd}
                updateCard={props.updateCard}
                userName={props.userName}
              />
            );
          })}
        <Editable
          displayClass="board_cards_add"
          text="Add Card"
          placeholder="Enter Card Title"
          // draggable={true}
          // onDragEnd={() => props.handleDragEnd(0, props.board?.id)} // Target
          // onDragEnter={() => props.handleDragEnter(0, props.board?.id)} // Source
          onSubmit={(value) => props.addCard(value, props.board?.id, props.board?.title)}
        />
      </div>
    </div>
  );
}
