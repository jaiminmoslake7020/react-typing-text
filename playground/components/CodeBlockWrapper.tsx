import React from 'react';
import {Attr, NewLineEndBracket, TagStart} from './Code';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopy} from '@fortawesome/free-solid-svg-icons';

const CodeBlockWrapper = () => {

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

    return (
        <section className={"code-block-wrapper"}>
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
                <code className={"code-block"}>
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
                        <Attr attrName={"duration"} attrValue={"100"} isValueInsideABracket/>
                    </p>
                    <p>
                        <TagStart elName={"TypingText"} inVisible={true}/>
                        <Attr attrName={"className"} attrValue={" any class you want to have for styling "}/>
                    </p>
                    <p>
                        <TagStart elName={"TypingText"} inVisible={true}/>
                        <Attr attrName={"cursor"} optional isValueInsideABracket
                              attrValue={"{symbol: \"|\", className?: \"any-class-name\" }"}/>
                    </p>
                    <p>
                        <TagStart elName={"TypingText"} inVisible={true}/>
                        <Attr attrName={"noCursor"} optional isValueInsideABracket attrValue={"true"}/>
                    </p>
                    <p>
                        <TagStart elName={"TypingText"} inVisible={true}/>
                        <Attr attrName={"spaceAtTextEnd"} optional isValueInsideABracket attrValue={"true"}/>
                    </p>
                    <p>
                        <NewLineEndBracket/>
                    </p>
                </code>
            </div>
            <div className={"copy-button"}>
                <button type={"button"} onClick={copyToClipboard}>
                    <FontAwesomeIcon icon={faCopy}/>
                </button>
            </div>
        </section>
    );
}

export default CodeBlockWrapper;
