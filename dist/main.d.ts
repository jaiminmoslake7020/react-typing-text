import * as react_jsx_runtime from 'react/jsx-runtime';
import { ElementType, ComponentPropsWithoutRef } from 'react';

type CursorPropTypes = {
    symbol: string;
    className?: string;
};
type TypingTextPropTypes<T extends ElementType> = {
    as?: T;
    duration: number;
    text: string;
    cursor?: CursorPropTypes;
    noCursor?: boolean;
    spaceAtTextEnd?: boolean;
} & ComponentPropsWithoutRef<T>;
declare const TypingText: (props: TypingTextPropTypes<ElementType>) => react_jsx_runtime.JSX.Element;

export { TypingText, type TypingTextPropTypes };
