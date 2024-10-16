import React from "react";
import {TypingText} from "../lib/main";
import "./output.css";
import {Attr, NewLineEndBracket, TagStart} from './components/Code';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopy} from '@fortawesome/free-solid-svg-icons';

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const App = () => {

    const copyToClipboard = () => {
        // Get the text content
        const text = `<TypingText as={"p"}
                            text={"Some text you want to have!"}
                            duration={100}
                            className=" any css class "
                />`;

        // Copy the text to the clipboard
        navigator.clipboard.writeText(text).then(() => {
            console.log("text", text);
            alert('Text copied to clipboard!');
        }).catch(err => {
            console.error('Error copying text: ', err);
        });
    }

    return <>
        <TypingText as={"h1"}
                    text={"React Typing Text"}
                    duration={500}
                    className="  text-2xl font-bold mb-16 "
                    spaceAtTextEnd
        />
        <div className="all-texts">
            <div className=" text-container text-one">
                <TypingText as={"p"}
                            text={text}
                            duration={100}
                            className=" h-[270px] sm:h-[180px] md:h-[150px] lg:h-[130px] xl:h-[100px] 2xl:h-[80px] "
                />
            </div>
            <div className={"code-block-wrapper"}>
                <div className={"number-block"}>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                </div>
                <div className={"code-block-container"}>
                    <code className={"code-block"} >
                        <p>
                            <TagStart elName={"TypingText"}/>
                            <Attr attrName={"as"} attrValue={"p"}/>
                        </p>
                        <p>
                            <TagStart elName={"TypingText"} inVisible={true}/>
                            <Attr attrName={"text"} attrValue={"Some text you want to have!"}/>
                        </p>
                        <p>
                            <TagStart elName={"TypingText"} inVisible={true}/>
                            <Attr attrName={"duration"} attrValue={"100"} isValueInsideABracket />
                        </p>
                        <p>
                            <TagStart elName={"TypingText"} inVisible={true}/>
                            <Attr attrName={"className"} attrValue={" any class you want to have for styling "}/>
                        </p>
                        <p>
                            <TagStart elName={"TypingText"} inVisible={true}/>
                            <Attr attrName={"cursor"} optional isValueInsideABracket attrValue={"{symbol: \"|\", className?: \"any-class-name\" }"}/>
                        </p>
                        <p>
                            <TagStart elName={"TypingText"} inVisible={true}/>
                            <Attr attrName={"noCursor"} optional isValueInsideABracket attrValue={"true"} />
                        </p>
                        <p>
                            <TagStart elName={"TypingText"} inVisible={true}/>
                            <Attr attrName={"spaceAtTextEnd"} optional isValueInsideABracket attrValue={"true"} />
                        </p>
                        <p>
                            <NewLineEndBracket/>
                        </p>
                    </code>
                </div>
                <div className={"copy-button"}>
                    <button type={"button"} onClick={copyToClipboard} >
                        <FontAwesomeIcon icon={faCopy} />
                    </button>
                </div>
            </div>
        </div>
    </>
};

export default App;
