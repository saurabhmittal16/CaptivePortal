import React from 'react';
import { Input } from 'antd';
import ScrollToBottom from 'react-scroll-to-bottom';
import { css } from 'glamor';

import BotMessage from './BotMessage';
import UserMessage from './UserMessage';
import fetchResponse from './FetchResponse';

const Search = Input.Search;
const ROOT_CSS = css({
    height: '100vh',
    width: '100%'
});

class ChatBot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    id: 0,
                    text: "Hello I am Bot"
                },
                {
                    id: 1,
                    text: "Hello I am Not bot"
                },
                {
                    id: 0,
                    text: "Nice to meet you"
                },
                {
                    id: 0,
                    text: "Hello I am Bot"
                },
            ]
        }
        this.inputRef = React.createRef();
    }

    async handleSend(val) {
        if (val.trim().length === 0)
            return;

        this.setState(
            prevState => ({
                messages: prevState.messages.concat({
                    id: 1,
                    text: val
                })
            })
        );
        this.inputRef.current.input.state.value = '';

        try {
            const response = await fetchResponse(val);
            if (response.status === 200) {
                this.setState(
                    prevState => ({
                        messages: prevState.messages.concat({
                            id: 0,
                            text: response.data
                        })
                    })
                );
            }
        } catch (err) {
            console.log(err);
        }
    } 
    
    render() {
        return (
            <ScrollToBottom className={ ROOT_CSS } mode="bottom">
                <div className='chat' ref={this.main}>
                    <div className='head'>Chatbot</div>
                    <div className='body'>
                    {
                        this.state.messages.map(
                            (message, i) => (
                                message.id === 0 ? <BotMessage text={message.text} key={i} /> : <UserMessage text={message.text} key={i} />
                            )
                        )
                    }
                    </div>
                    <div className='message'>
                        <Search ref={this.inputRef} enterButton={'>'} onSearch={val => this.handleSend(val)} className='search' />
                    </div>
                </div>
            </ScrollToBottom>
            
        );
    }
}

export default ChatBot;