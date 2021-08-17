import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

function App() {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine 
      height="100vh"
      projectID="b383d630-600b-48ed-a65d-e3e2badf7661"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} 
    
    />
  );
}

export default App;
