import React, { useEffect, useState } from "react";
import "./BlankPage.css";
import Board from "../Components/Board/Board";
import Editable from "../Components/Editable/Editable";
import service from "../Api";

function BlankPage(props) {
  // console.log(props.location.state);

  const [bol, setBol] = useState(0);
  const [user_id, setUser_id] = useState(0);
  const [userName, setUserName] = useState("");
  const [boards, setBoards] = useState();
  // JSON.parse(localStorage.getItem("kanban")) || []

  const [target, setTarget] = useState({
    cid: "",
    bid: "",
  });

  // Done
  const addCard = (title, bid, btitle) => {
    // const card = {
    //   id: Date.now() + Math.random(),
    //   title,
    //   labels: [],
    //   tasks: [],
    //   date: "",
    //   desc: "",
    // };

    // const index = boards.findIndex((item) => item.id === bid);
    // if (index < 0) return;

    // const tempBoard = [...boards];
    // tempBoard[index].cards.push(card);
    // setBoards(tempBoard);

    service
      .addTicket({
        bid,
        ticketId: 0,
        projectId: props.location.state?.pid,
        ticketname: title,
        ticketdescription: "",
        created_by: user_id,
        acceptance_criteria: "",
        status: btitle,
        assign_to: user_id,
        tags: [],
        // category_name: "Task",
      })
      .then((res) => {
        console.log(`addTicket`, res.data);
        if (res.data.status === 1) {
          // setBoards();
          // fetchBoard();
          setBol(1);
        } else {
          console.log(res.data);
          return alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(`Error from addTicket api ->`, err);
        return alert(err.response.data.message);
      });
  };

  // Done
  const removeCard = (cid, bid) => {
    // const bIndex = boards.findIndex((item) => item.id === bid);
    // if (bIndex < 0) return;

    // const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid);
    // if (cIndex < 0) return;

    // const tempBoards = [...boards];
    // tempBoards[bIndex].cards.splice(cIndex, 1);
    // setBoards(tempBoards);

    service
      .removeTicket({
        boardId: bid,
        projectId: props.location.state?.pid,
        ticketId: cid,
      })
      .then((res) => {
        console.log(`aremoveTicket`, res.data);
        if (res.data.status === 1) {
          // setBoards();
          // fetchBoard();
          setBol(1);
        } else {
          console.log(res.data);
          return alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(`Error from addTicket api ->`, err);
        return alert(err.response.data.message);
      });
  };

  // Done
  const addBoards = (title) => {
    // setBoards([
    //   ...boards,
    //   {
    //     id: Date.now() + Math.random(),
    //     title,
    //     cards: [],
    //   },
    // ]);
    service
      .addBoard({
        id: 0,
        projectId: props?.location?.state?.pid,
        title,
        cards: [],
      })
      .then((res) => {
        console.log(`addBoard`, res.data);
        if (res.data.status === 1) {
          // setBoards();
          setBol(1);
        } else {
          console.log(res.data);
          return alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(`Error from addBoard api ->`, err);
        return alert(err.response.data.message);
      });
  };

  // Done
  const romoveBoard = (bid) => {
    // const tempBoards = boards.filter((item) => item.id !== bid);
    // setBoards(tempBoards);
    service
      .removeBoard({
        projectId: props?.location?.state?.pid,
        boardId: bid,
      })
      .then((res) => {
        console.log(`romoveBoard`, res.data);
        if (res.data.status === 1) {
          // setBoards();
          // fetchBoard();
          setBol(1);
        } else {
          console.log(res.data);
          return alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(`Error from romoveBoard api ->`, err);
        return alert(err.response.data.message);
      });
  };

  // Done
  const handleDragEnter = (cid, bid) => {
    if (target.cid === cid) return;
    setTarget({
      cid,
      bid,
    });
  };

  // Done
  const handleDragEnd = (cid, bid) => {
    // // console.log("boardsboards", boards);
    // console.log("cidcid", cid, "bidbid", bid);
    // // return;
    // console.log("target.bid", target.bid, target.cid);
    // let s_bIndex, s_cIndex, t_bIndex, t_cIndex;

    // s_bIndex = boards.findIndex((item) => item.id === bid);
    // if (s_bIndex < 0) return;

    // s_cIndex = boards[s_bIndex].cards?.findIndex((item) => item.id === cid);
    // if (s_cIndex < 0) return;

    // t_bIndex = boards.findIndex((item) => item.id === target.bid);
    // if (t_bIndex < 0) return;

    // t_cIndex = boards[t_bIndex].cards?.findIndex(
    //   (item) => item.id === target.cid
    // );
    // if (t_cIndex < 0) return;

    // console.log(
    //   "s_bIndex",
    //   s_bIndex,
    //   "s_cIndex",
    //   s_cIndex,
    //   "t_bIndex",
    //   t_bIndex,
    //   "t_cIndex",
    //   t_cIndex
    // );

    // const tempboards = [...boards];
    // const tempCard = tempboards[s_bIndex].cards[s_cIndex];
    // console.log("tempCard", tempCard);

    // tempboards[s_bIndex].cards.splice(s_cIndex, 1);
    // tempboards[t_bIndex].cards.splice(t_cIndex, 0, tempCard);

    // setBoards(tempboards);

    // console.log(tempboards);
    service
      .dragAndDropFunctionality({
        boardId: bid, // Source
        projectId: props.location.state?.pid,
        ticketId: cid, // Source
        cid: target.cid, // Target
        bid: target.bid, // Target
      })
      .then((res) => {
        // console.log(`user ticket`, res.data);
        if (res.data.status === 1) {
          setTarget({
            bid: "",
            cid: "",
          });
          setBol(1);
        } else {
          console.log(`Else block of fetch tickets ->`, res.data);
        }
      })
      .catch((err) => {
        console.log(`Error from login api ->`, err);
        return alert(err.message);
      });
  };

  const updateCard = (cid, bid, card) => {
    console.log("updateCard =>", " cid", cid, "bid", bid, "card", card);
    console.log(card.labels.map((item) => item.text));
    // Card
    // {
    //   date: "2023-01-02T00:00:00.000Z";
    //   desc: "This is description";
    //   id: 629164;
    //   labels: [];
    //   tasks: [];
    //   title: "Task 3";
    // }
    // return;
    const bIndex = boards.findIndex((item) => item.id === bid);
    if (bIndex < 0) return;

    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid);
    if (cIndex < 0) return;

    const request_data = {
      ticketId: cid,
      update_data: {
        ticketname: card?.title,
        tags: card?.labels.map((item) => item.text), // {text: 'gh', color: '#a8193d'}
        ticketdescription: card?.desc,
        assign_to: card?.assign_to,
        category_name: card?.category_name,
        // updated_date: card?.date ? new Date(card?.date).toISOString().substring(0, 10) : "",
      },
    };
    console.log("request_data =>", request_data);
    // return;
    service
      .updateCard(request_data)
      .then((res) => {
        console.log(`user ticket`, res.data);
        if (res.data.status === 1) {
          setBol(1);
        } else {
          console.log(`Else block of fetch tickets ->`, res.data);
        }
      })
      .catch((err) => {
        console.log(`Error from login api ->`, err);
        return alert(err.message);
      });

    // const tempboards = [...boards];
    // tempboards[bIndex].cards[cIndex] = card;
    // setBoards(tempboards);
  };

  // useEffect(() => {
  //   localStorage.setItem("kanban", JSON.stringify(boards));
  // }, [boards]);

  useEffect(() => {
    console.log("useEffect Called");
    service
      .getUserDetails()
      .then((res) => {
        // console.log(`profile data`, res.data);
        if (res.data.status === 1) {
          // user_id = res.data.data.user_id;
          setUser_id(res.data.data.user_id);
          setUserName(res.data.data.user_name);
          service
            .fetchTicketsByUserid({
              user_id: res.data.data?.user_id,
              projectId: props.location.state?.pid,
            })
            .then((res) => {
              // console.log(`user ticket`, res.data);
              if (res.data.status === 1) {
                setBoards(res.data.data[0].boards);
                console.log(`bbbb-?`, res.data.data[0].boards);
                setBol(0);
              } else {
                console.log(`Else block of fetch tickets ->`, res.data);
              }
            })
            .catch((err) => {
              console.log(`Error from login api ->`, err);
              return alert(err.message);
            });
        } else {
          console.log(`Else block ->`, res.data);
        }
      })
      .catch((err) => {
        console.log(`Error from login api ->`, err);
        return alert(err.message);
      });
  }, [bol]);

  return (
    <div className="app">
      <div className="app_navbar">
        <h4>Board</h4>
      </div>
      <div className="app_outer">
        <div className="app_boards">
          {boards &&
            boards.map((item) => {
              return (
                <Board
                  key={item.id}
                  board={item}
                  romoveBoard={romoveBoard}
                  addCard={addCard}
                  removeCard={removeCard}
                  handleDragEnter={handleDragEnter}
                  handleDragEnd={handleDragEnd}
                  updateCard={updateCard}
                  userName={userName}
                />
              );
            })}
          <div className="app_boards_board">
            <Editable
              text="Add board"
              displayClass="app_boards_board_add"
              placeholder="Enter board title"
              onSubmit={(value) => addBoards(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlankPage;
