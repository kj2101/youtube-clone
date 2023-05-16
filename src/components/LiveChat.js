import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    let i = setInterval(() => {
      console.log("asjk");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <div>
      <div className="ml-2 w-full h-[500px] p-2 border border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map(({ name, message }, index) => (
          <ChatMessage name={name} message={message} key={index} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Kamal",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
        className="flex w-full p-2 ml-2 border-black border"
      >
        <input
          type="text"
          className="w-full outline-none flex"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
