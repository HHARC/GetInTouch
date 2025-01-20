const MessageBubble = ({ text, isSent }) => {
  return (
    <div
      className={`flex items-start space-x-2 ${
        isSent ? "justify-end" : "justify-start"
      }`}
    >
      {!isSent && (
        <img src="avatar.jpg" alt="Avatar" className="w-8 h-8 rounded-full" />
      )}
      <div
        className={`p-3 rounded-lg ${
          isSent
            ? "bg-blue-500 text-white"
            : "bg-gray-200 dark:bg-gray-700 text-black"
        }`}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};
export default MessageBubble;
