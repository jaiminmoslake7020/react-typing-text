import React from "react";
import {TypingText} from "../lib/main";
import "./output.css";
import CodeBlockWrapper from './components/CodeBlockWrapper';
import ComponentProperties from './components/ComponentProperties';
import {text} from './data/data';

const App = () => {
    return <>
        <TypingText as={"h1"}
                    text={"React Typing Text"}
                    duration={500}
                    className="  text-2xl font-bold mb-16 "
                    spaceAtTextEnd
                    eachCharAsSpan
        />
        <div className="all-texts">
            <section className=" text-container text-one">
                <TypingText as={"p"}
                            text={text}
                            duration={100}
                            className=" h-[270px] sm:h-[180px] md:h-[150px] lg:h-[130px] xl:h-[100px] 2xl:h-[80px] "
                />
            </section>
            <CodeBlockWrapper />
            <ComponentProperties />
        </div>
    </>
};

export default App;
