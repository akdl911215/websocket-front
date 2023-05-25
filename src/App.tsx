import React, { useEffect } from "react";
import "./App.css";
import { io, Socket } from "socket.io-client";

const App = () => {
  const str = "헬로 월드?";

  const [socket, setSocket] = React.useState<Socket | null>(null);

  useEffect(() => {
    const IO = io("http://localhost:81", {
      withCredentials: true,
      transports: ["websocket"],
    });

    setSocket(IO);
  }, []);

  useEffect(() => {
    socket?.on("eosLatestData", (data) => console.log(data));
  }, [socket]);

  return (
    <div className="App">
      <div>{str}</div>
    </div>
  );
};

export default App;
