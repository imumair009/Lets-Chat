import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';
import './App.css';

const projectID = '68a614b8-007e-4229-b9b9-7e3b835ef0dd';

const App = () => {
        if (!localStorage.getItem('username')) return <LoginForm / > ;

        return ( <
            ChatEngine height = "100vh"
            projectID = "68a614b8-007e-4229-b9b9-7e3b835ef0dd"
            userName = { localStorage.getItem('username') }
            userSecret = { localStorage.getItem('password') }
            renderChatFeed = {
                (chatAppProps) => < ChatFeed {...chatAppProps }
                />}
                onNewMessage = {
                    () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()
                }
                />
            );
        };

        export default App;