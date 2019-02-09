import React from 'react';
import ChatBlob from './ChatBlob.js';
import About1 from './About1.js';
import About2 from './About2.js';
import About3 from './About3.js';

class Home extends React.Component {
    render() {
        return (
            <div>
                <About1 />
                <About2 />
                <About3 />
                <ChatBlob />
            </div>
            
        );
    }
}

export default Home;