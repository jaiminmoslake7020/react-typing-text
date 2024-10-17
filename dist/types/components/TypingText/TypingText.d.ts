import { ElementType, ComponentPropsWithoutRef } from 'react';
export declare const defaultCursorValue: {
    symbol: string;
    className: string;
};
export type CursorPropTypes = {
    symbol: string;
    className?: string;
};
export type TypingTextPropTypes<T extends ElementType> = {
    as?: T;
    duration?: number;
    text: string;
    cursor?: CursorPropTypes;
    noCursor?: boolean;
    spaceAtTextEnd?: boolean;
    eachCharAsSpan?: boolean;
} & ComponentPropsWithoutRef<T>;
export declare const typingTextDefaultDuration = 100;
export declare const TypingText: (props: TypingTextPropTypes<ElementType>) => import("react/jsx-runtime").JSX.Element;
