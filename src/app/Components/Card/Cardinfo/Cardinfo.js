import React, { useEffect, useState } from "react";
import {
  Calendar,
  CheckSquare,
  ChevronDown,
  List,
  MessageSquare,
  Tag,
  Trash,
  Type,
  User,
} from "react-feather";
import Chip from "../../Chip/Chip";
import Editable from "../../Editable/Editable";
import Modal from "../../Modal/Modal";
import "./Cardinfo.css";
import service from "../../../Api";
import moment from "moment-timezone";

function Cardinfo(props) {
  console.log(`I want this data =>`, props.card);
  const colors = [
    "#a8193d",
    "#4fcc25",
    "#1ebffa",
    "#8da377",
    "#9975bd",
    "#cf61a1",
    "#240959",
  ];

  const [activeColor, setActiveColor] = useState("");
  const [comments, setComments] = useState([]);
  const [selectedUser, setSelectedUser] = useState(props.userName);
  const [isActive, setIsActive] = useState(false);
  const [users, setUsers] = useState([]);
  const [values, setValues] = useState({ ...props.card });

  const addLabel = (value, color) => {
    const index = values.labels?.findIndex((item) => item.text === value);
    if (index > -1) return;
    const label = {
      text: value,
      color,
    };
    setValues({ ...values, labels: [...values.labels, label] });
    setActiveColor("");
  };

  const romoveLabel = (text) => {
    const tempLabels = values.labels?.filter((item) => item.text !== text);
    setValues({ ...values, labels: tempLabels });
  };

  const addTask = (value) => {
    const task = {
      id: Date.now() + Math.random(),
      text: value,
      completed: false,
    };

    setValues({ ...values, tasks: [...values.tasks, task] });
  };

  const removeTask = (id) => {
    const index = values.tasks?.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempTasks = values.tasks?.splice(index, 1);
    setValues({ ...values, tasks: tempTasks });
  };

  const calculatePercent = () => {
    if (values.tasks?.length === 0) return "0";
    const completed = values.tasks?.filter((item) => item.completed)?.length;
    return (completed / values.tasks?.length) * 100 + "";
  };

  // This will execute when there is a change in values object.
  useEffect(() => {
    props.updateCard(props.card.id, props.boardId, values);
  }, [values]);

  const [commentText, setCommentText] = useState("");

  const handleOnClick = () => {
    console.log("commentText", commentText);
    // return
    service
      .addComment({
        ticketId: props.card?.id,
        comments: [
          {
            id: 0,
            username: props.userName,
            comment: commentText,
          },
        ],
      })
      .then((res) => {
        console.log(`user ticket`, res.data);
        if (res.data.status === 1) {
          setCommentText("");
        } else {
          console.log(`Else block of fetch tickets ->`, res.data);
        }
      })
      .catch((err) => {
        console.log(`Error from login api ->`, err);
        return alert(err.message);
      });
  };

  const updateTask = (id, completed) => {
    const index = values.tasks?.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempTasks = [...values.tasks];
    tempTasks[index].completed = completed;
    setValues({ ...values, tasks: tempTasks });
  };

  const [bol, setBol] = useState(0);

  useEffect(() => {
    service
      .getComments({
        ticketId: props.card?.id,
      })
      .then((res) => {
        console.log("This is", res.data);
        if (res.data.status === 1) {
          // console.log(`user ticketuujjhhh`, res?.data?.data[0].comments);
          setComments(
            res?.data?.data[0] ? res?.data?.data[0].comments : res.data.data
          );
          setBol(0);
        } else {
          console.log(`Else block of fetch tickets ->`, res.data);
        }
      })
      .catch((err) => {
        console.log(`Error from login api ->`, err);
        return alert(err.message);
      });
  }, [comments.id, comments.username, comments.comment, commentText, bol]);

  const [assignee, setAssignee] = useState("");

  const [onOff, setOnOff] = useState(false);
  const [category, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState(
    props.card?.category_name
  );

  useEffect(() => {
    service
      .getAllUser()
      .then((res) => {
        console.log("This is user details", res.data);
        if (res.data.status === 1) {
          setUsers(res.data.data);
          service
            .getAllCategories()
            .then((res) => {
              console.log("This is category details", res.data);
              if (res.data.status === 1) {
                setCategory(res.data.data);
                service
                  .getUserById({
                    user_id: props.card?.assign_to,
                  })
                  .then((res) => {
                    console.log("This is category details", res.data);
                    if (res.data.status === 1) {
                      setAssignee(res.data.data[0].user_name);
                    } else {
                      console.log(`Else block of fetch tickets ->`, res.data);
                    }
                  })
                  .catch((err) => {
                    console.log(`Error from login api ->`, err);
                    return alert(err.message);
                  });
              } else {
                console.log(`Else block of fetch tickets ->`, res.data);
              }
            })
            .catch((err) => {
              console.log(`Error from login api ->`, err);
              return alert(err.message);
            });
        } else {
          console.log(`Else block of fetch tickets ->`, res.data);
        }
      })
      .catch((err) => {
        console.log(`Error from login api ->`, err);
        return alert(err.message);
      });
  }, []);

  const insertAsignee = (value) => {
    console.log("valuevalue =>", value);
    // const index = values.tasks?.findIndex((item) => item.id === id);
    // if (index < 0) return;

    // const tempTasks = values.tasks?.splice(index, 1);
    setValues({ ...values, assign_to: value });
  };

  const insertCategory = (value) => {
    console.log("valuevalue ==>", value);
    // const index = values.tasks?.findIndex((item) => item.id === id);
    // if (index < 0) return;

    // const tempTasks = values.tasks?.splice(index, 1);
    setValues({ ...values, category_name: value });
  };

  const [isEditMode, setIsEditMode] = useState(false);

  const changeToEditMode = () => {
    setIsEditMode(true);
  };

  const handleEnter = (e, id, username, comment) => {
    if (e.key === "Enter") {
      console.log(`onKeyEnter event =>`, e.key, id, username, comment);
      var obj = {
        ticketId: props.card?.id,
        update_data: {
          id: id,
          comment: comment,
          username: username,
        },
      };
      console.log("objobj =>", obj);
      // return;
      service
        .updateComment(obj)
        .then((res) => {
          console.log("This is category details", res.data);
          if (res.data.status === 1) {
            console.log("------>", comments);
            setBol(1);
            setIsEditMode(false);
            // setAssignee(res.data.data[0].user_name);
          } else {
            console.log(`Else block of fetch tickets ->`, res.data);
          }
        })
        .catch((err) => {
          console.log(`Error from login api ->`, err);
          return alert(err.message);
        });
    }
  };

  const [commentId, setCommentId] = useState(0);

  const deleteCommet = (id) => {
    service
      .deleteComment({
        ticketId: props.card?.id,
        id: id,
      })
      .then((res) => {
        console.log("This is", res.data);
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
  };

  return (
    <Modal onClose={() => props.onClose()}>
      <div className="cardinfo">
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Type />
            Title
          </div>
          <div className="cardinfo_box_body">
            <Editable
              text={values.title}
              default={values.title}
              placeholder={"Enter Title"}
              buttonText="Set Title"
              onSubmit={(value) => setValues({ ...values, title: value })}
            />
          </div>
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <List />
            Description
          </div>
          <div className="cardinfo_box_body">
            <Editable
              text={values.desc}
              default={values.desc}
              placeholder={"Enter Description"}
              buttonText="Set Description"
              onSubmit={(value) => setValues({ ...values, desc: value })}
            />
          </div>
        </div>

        <div className="cardinfo_box">
          <div className="dropdown">
            <div
              className="dropdown-btn"
              onClick={() => setIsActive(!isActive)}
            >
              {assignee || "Asignee"}
              <ChevronDown />
            </div>
            {isActive && (
              <div className="dropdown-content">
                {users &&
                  users.map((item) => {
                    return (
                      <div
                        onClick={() => {
                          setSelectedUser(item.user_name);
                          setIsActive(false);
                          insertAsignee(item.user_id);
                        }}
                        key={item.user_id}
                        className="dropdown-items"
                      >
                        {item.user_name}
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Calendar />
            Date
          </div>
          <div className="cardinfo_box_body">
            <input
              type="date"
              defaultValue={
                values.date
                  ? new Date(values.date).toISOString().substring(0, 11)
                  : ""
              }
              onChange={(e) => setValues({ ...values, date: e.target.value })}
            />
          </div>
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Tag />
            Labels
          </div>

          <div className="cardinfo_box_labels">
            {values.labels?.map((item, index) => (
              <Chip
                close
                onClose={() => romoveLabel(item.text)}
                key={item.text + index}
                color={item.color}
                text={item.text}
              />
            ))}
          </div>

          <div className="cardinfo_box_colors">
            {colors.map((color, index) => {
              return (
                <li
                  key={index}
                  style={{ backgroundColor: color }}
                  className={color === activeColor ? "active" : ""}
                  onClick={() => setActiveColor(color)}
                />
              );
            })}
          </div>
          <div className="cardinfo_box_body">
            <Editable
              text="Add Label"
              placeholder={"Enter Label"}
              buttonText="Add"
              onSubmit={(value) => addLabel(value, activeColor)}
            />
          </div>
        </div>

        <div className="cardinfo_box">
          <div className="dropdown">
            <div className="dropdown-btn" onClick={() => setOnOff(!onOff)}>
              {selectCategory || "Category"}
              <ChevronDown />
            </div>
            {onOff && (
              <div className="dropdown-content">
                {category &&
                  category.map((item) => {
                    return (
                      <div
                        onClick={() => {
                          // console.log({item});
                          setSelectCategory(item.category_name);
                          setOnOff(false);
                          insertCategory(item.category_name);
                        }}
                        key={item.category_id}
                        className="dropdown-items"
                      >
                        {item.category_name}
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <CheckSquare />
            Tasks
          </div>

          <div className="cardinfo_box_progress-bar">
            <div
              className="cardinfo_box_progress"
              style={{
                width: calculatePercent() + "%",
                backgroundColor:
                  calculatePercent() === "100" ? "limegreen" : "",
              }}
            ></div>
          </div>

          <div className="cardinfo_box_list">
            {values.tasks?.map((item, index) => {
              return (
                <div className="cardinfo_task" key={item.id}>
                  <input
                    type="checkbox"
                    defaultChecked={item.completed}
                    onChange={(e) => updateTask(item.id, e.target.checked)}
                  />
                  <p>{item.text}</p>
                  <Trash onClick={() => removeTask(item.id)} />
                </div>
              );
            })}
          </div>

          <div className="cardinfo_box_body">
            <Editable
              text="Add new task"
              placeholder={"Enter Task"}
              buttonText="Add Task"
              onSubmit={(value) => addTask(value)}
            />
          </div>
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <MessageSquare />
            Comments
          </div>
          {/* <form action="" onClick={}> */}
          <div className="form-group">
            <textarea
              className="form-control rounded-0"
              style={{ fontSize: "15px" }}
              placeholder="Leave a comment here"
              rows="4"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-primary p-2" onClick={handleOnClick}>
              Comment
            </button>
          </div>
          {comments &&
            comments.map((item) => {
              return (
                <p key={item.id}>
                  <strong style={{ paddingRight: "12px" }}>
                    {item.username}
                  </strong>
                  <span style={{ fontSize: "12px" }}>
                    {item.date
                      ? moment(item.date)
                          .tz("Asia/Kolkata")
                          .format("MMM DD YYYY, h:mm A")
                      : ""}
                  </span>
                  <br />
                  {isEditMode ? (
                    props.userName === item.username &&
                    isEditMode &&
                    item.id === commentId ? (
                      <div className="trash">
                        <input
                          type="text"
                          defaultValue={item.comment}
                          onKeyDown={(e) => {
                            handleEnter(
                              e,
                              item.id,
                              item.username,
                              e.target.value
                            );
                          }}
                        />
                        <Trash onClick={() => deleteCommet(item.id)} />
                      </div>
                    ) : props.userName === item.username && isEditMode ? (
                      <div className="trash">
                        {item.comment}
                        <Trash onClick={() => deleteCommet(item.id)} />
                      </div>
                    ) : (
                      <div>{item.comment}</div>
                    )
                  ) : props.userName === item.username ? (
                    <div
                      className="trash"
                      onDoubleClick={(e) => {
                        e.stopPropagation();
                        changeToEditMode();
                        setCommentId(item.id);
                      }}
                    >
                      {item.comment}
                      <Trash onClick={() => deleteCommet(item.id)} />
                    </div>
                  ) : (
                    <div>{item.comment}</div>
                  )}
                </p>
              );
            })}
        </div>
      </div>
    </Modal>
  );
}

export default Cardinfo;
