import React, {useEffect, useState, ElementType, ComponentPropsWithoutRef  } from 'react';
import './typing-text.scss';

export type TypingTextPropTypes<T extends ElementType> = {
    as?: T;
    duration: number;
    text: string;
  } & ComponentPropsWithoutRef<T>;

export const TypingText = (props: TypingTextPropTypes<ElementType>) => {
    const {
        text,
        duration,
        as : Element = 'p',
        ...rest
    } = props;

    const maxCharLength = text.length;
    const addCharDuration = duration;

    const [start, setStart] = useState<number>(0);

    useEffect(() => {
        const mount = () => {
            let timer = 0;
            const i = setInterval(() => {
                setStart((x) => x + 1);
                if (timer === maxCharLength) {
                    clearInterval(i);
                }
                timer++;
            }, addCharDuration);
        }
        return mount();
    }, [addCharDuration, maxCharLength])

    return (
        <Element {...rest} >
            {text.slice(0, start)}
            <span className={"typing-text-cursor"} >|</span>
        </Element>
    );
}
