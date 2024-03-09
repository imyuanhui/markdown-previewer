import React from 'react';
import Container from './components/Container';
import Markdown from 'react-markdown';
import './Main.css';

const Main = () => {
    const [fullScreenIndex, setFullScreenIndex] = React.useState(0);
    const [text, setText] = React.useState(`# Welcome to my React Markdown Previewer!\r## This is a sub-heading...\r### And here's some other cool stuff:\rYou can also make text **bold**... whoa!\rOr _italic_.\rOr... wait for it... **_both!_**\rAnd feel free to go crazy ~~crossing stuff out~~.`);
    const sizeRef = React.useRef(null);
    const editorClass = fullScreenIndex === 0 ? 'fullscreen-editor' : "editor";


    const toggleFullScreen = (index) => {
        setFullScreenIndex(index === fullScreenIndex ? 0 : index);
    };

    return (
        <div className="main">
            <Container
                title="Editor"
                content={
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        ref={sizeRef}
                        id='editor'
                        className={editorClass}
                    />
                }
                isFullScreen={fullScreenIndex === 1}
                toggle={() => toggleFullScreen(1)}
                style={fullScreenIndex === 1 ? { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999 } : {}}
            />

            <Container
                title="Preview"
                content={
                    <div id='preview'><Markdown>{text}</Markdown></div>
                }
                isFullScreen={fullScreenIndex === 2}
                toggle={() => toggleFullScreen(2)}
                style={fullScreenIndex === 2 ? { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999 } : {}}
            />
        </div>
    );
}

export default Main;
