import React, { useState, useEffect } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import { debounce } from 'lodash'; // Import Lodash's debounce function

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const cache = {}; // Basic cache object

const App = () => {
  document.title = "Chat GPT - FeHuce"
  
  const [messages, setMessages] = useState([
    {
      message: "Hello bà con!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // Debounce handleSendRequest function to mitigate rapid API calls
  const sendRequestDebounced = debounce(async (message) => {
    // Check the cache first
    if (cache[message]) {
      console.log('Returning cached response');
      setMessages((prevMessages) => [...prevMessages, cache[message]]);
      return;
    }
    setIsTyping(true);

    try {
      const response = await processMessageToChatGPT([...messages, { message, direction: 'outgoing', sender: "user" }]);
      if (response.choices) {
        const content = response.choices[0]?.message?.content;
        if (content) {
          const chatGPTResponse = {
            message: content,
            sender: "ChatGPT",
          };
          setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
          cache[message] = chatGPTResponse; // Cache the response
        }
      }
    } catch (error) {
      console.error("Error processing message:", error);
      if(error.status === 429) {
        console.error("Rate limit exceeded. Please try again later.");
      }
    } finally {
      setIsTyping(false);
    }
  }, 1000); // Debouncing with a 1-second interval

  async function processMessageToChatGPT(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        { role: "system", content: "I'm a Student using ChatGPT for learning" },
        ...apiMessages,
      ],
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });

    return response.json();
  }

  useEffect(() => {
    // Debounced function should be called in useEffect or similar triggers to avoid being recreated on each render
  }, []);
  
  return (
    <div className="App">
      <div style={{ position: "relative", height: "580px", width: "100%" }}>
        <MainContainer>
          <ChatContainer className='pt-2'>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
            >
              {messages.map((message, i) => (
                <Message key={i} model={message} />
              ))}
            </MessageList>
            <MessageInput placeholder="Send a Message" onSend={(message) => sendRequestDebounced(message)} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default App;
