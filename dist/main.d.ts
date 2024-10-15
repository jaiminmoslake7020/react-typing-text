import * as react_jsx_runtime from 'react/jsx-runtime';
import { ElementType, ComponentPropsWithoutRef } from 'react';

type TypingTextPropTypes<T extends ElementType> = {
    as?: T;
    duration: number;
    text: string;
} & ComponentPropsWithoutRef<T>;
declare const TypingText: (props: TypingTextPropTypes<ElementType>) => react_jsx_runtime.JSX.Element;

export { TypingText, type TypingTextPropTypes };
