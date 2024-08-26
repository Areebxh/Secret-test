import { useState } from 'react';
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function ChatBotRehaish() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;

    try {
      const response = await fetch('http://localhost:5000/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json();
      console.log(data);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMessage, isUser: true },
        { text: data.message, isUser: false },
      ]);
      setInputMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="p-4 border-b grid place-items-center">
        <h1 className="text-2xl font-bold">RehaishBot</h1>
      </header>
      <div className="flex-1 border-t grid place-items-center">
        <div className="w-full max-w-6xl flex flex-col h-[600px] border rounded-t-lg overflow-hidden">
          <div className="flex-1 flex flex-col p-6 gap-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 ${
                  message.isUser ? 'justify-end' : 'justify-start'
                }`}
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height={40}
                  src={
                    message.isUser
                      ? 'https://static.vecteezy.com/system/resources/previews/007/468/938/non_2x/colorful-simple-flat-of-business-man-icon-or-symbol-people-concept-illustration-vector.jpg'
                      : 'https://cdn-icons-png.flaticon.com/512/4711/4711987.png'
                  }
                  style={{ aspectRatio: '40/40', objectFit: 'cover' }}
                  width={40}
                />
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                  <p className="text-sm leading-none">{message.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t flex items-center p-4">
            <div className="w-full">
              <form className="flex w-full gap-2" onSubmit={handleSubmit}>
                <Textarea
                  className="flex-1 min-h-[40px] sm:min-h-[60px]"
                  placeholder="Type a message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                />
                <Button className="h-[40px]" type="submit">
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}