import React, {useEffect, useState, ElementType, ComponentPropsWithoutRef} from 'react';
import styled, {keyframes} from 'styled-components';

const bounce = keyframes`
  0%, 100% {
    opacity: 100%;
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    opacity: 20%;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  50% {
    opacity: 60%;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
`;

const AnimatedCursor = styled.span`
  animation: ${bounce} 1s infinite;
`;

export const defaultCursorValue = {
    symbol: '|',
    className: "cursor-symbol-default-class"
};

export type CursorPropTypes = {
    symbol: string,
    className?: string
};

export type TypingTextPropTypes<T extends ElementType> = {
    as?: T;
    duration: number;
    text: string;
    cursor?: CursorPropTypes,
    noCursor?: boolean,
    spaceAtTextEnd?: boolean
} & ComponentPropsWithoutRef<T>;

export const TypingText = (props: TypingTextPropTypes<ElementType>) => {
    const {
        text,
        duration,
        as: Element = 'p',
        cursor,
        noCursor,
        spaceAtTextEnd,
        ...rest
    } = props;
    const {
        symbol,
        className
    } = cursor || defaultCursorValue;

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
            { spaceAtTextEnd ?  <span>&nbsp;</span> : null}
            {!noCursor && <AnimatedCursor className={className}>{symbol}</AnimatedCursor>}
        </Element>
    );
}
