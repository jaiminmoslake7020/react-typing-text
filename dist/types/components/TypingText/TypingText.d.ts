import { ElementType, ComponentPropsWithoutRef } from 'react';
export type TypingTextPropTypes<T extends ElementType> = {
    as?: T;
    duration: number;
    text: string;
} & ComponentPropsWithoutRef<T>;
export declare const TypingText: (props: TypingTextPropTypes<ElementType>) => import("react/jsx-runtime").JSX.Element;
