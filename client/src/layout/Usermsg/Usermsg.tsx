import React, { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
type ChatMessage = {
text: string;
senderId: string;
};

function Usermsg() {

  const [message, setMessage] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const socketRef = useRef<any>(null);

const myUserId = useRef(
  "user-" + Math.random().toString(36).slice(2, 8)
).current;

  useEffect(() => {
    socketRef.current = io("http://localhost:3000");

    socketRef.current.on("chat message", (data: ChatMessage) => {
      setMessage((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && socketRef.current) {
      socketRef.current.emit("chat message",{

        
        text:input,
        senderId:myUserId
      }
      );
    }
    setInput("");
  };

  return (
    <main className="flex flex-col h-screen w-full  ">
    <div>
      
     

        <div className="flex space-x-5 bg-neutral-200 ">
          <img className="h-15 w-15 rounded-full " src="https://i.pravatar.cc/150?img=7" alt="" />
          <div>
            <h1 className="font-bold">Zahid hussain</h1>

          <p className="text-gray-400">Business account</p>
          </div>
          {/* icons */}
        </div>

    </div>
   <div className="flex-1 overflow-y-auto p-4 space-y-2">
  {message.map((msg, index) => {
    const isMe = msg.senderId === myUserId;

    return (
  <div className={`flex items-end gap-2 ${isMe ? "flex-row-reverse" : ""}`}>
  <img
    src={isMe 
      ? "https://i.pravatar.cc/150?img=7" 
      : "https://i.pravatar.cc/150?img=12"}
    className="w-8 h-8 rounded-full"
  />
 <div
  className={`px-4 py-2 rounded-lg max-w-xs
    ${isMe 
      ? "bg-green-500 text-white" 
      : "bg-red-500 text-white"
    }`}
>
  {msg.text}
</div>

</div>

      
    );
  })}
</div>


      <form
    className=" sticky bottom-0 flex gap-2 p-3 border-t"
    onSubmit={handleSubmit}
  >
    <input
      className="flex-1 border-2 px-3 py-2 rounded"
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      className="border-2 px-4 py-2 rounded"
      type="submit"
    >
      Send
    </button>
  </form>
    </main>
  );
}

export default Usermsg;
