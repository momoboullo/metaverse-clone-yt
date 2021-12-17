import { useMoralis } from "react-moralis";
import TimeAgo from "timeago-react";
import Avatar from "./Avatar";

function Message({ message }) {
  const { user } = useMoralis();

  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}>
        <Avatar user={message.get("username")} />
      </div>
      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage
            ? "rounded-br-none bg-blue-300"
            : "rounded-bl-none bg-green-200"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>

      {/* Time ago stamp */}
      <TimeAgo
        className={`text-[10px] italic text-gray-400 ${
          isUserMessage && "order-first pr-1"
        }`}
        datetime={message.createdAt}
      />
      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? "text-blue-400" : "text-green-400"
        }`}
      >
        {message.get("username")}
      </p>
    </div>
  );
}

export default Message;
