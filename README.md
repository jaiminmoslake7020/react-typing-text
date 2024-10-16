[# React Component Package

It is a package that contains reusable React component which is built with Styled-Components, React and TypeScript.
This package allows a typing text animation feature.

### Website

[https://react-typing-text.netlify.app/](https://react-typing-text.netlify.app/)

## Installation

```bash
npm install @jaiminmoslake7020/react-typing-text
```

## How to use it

```code
import { TypingText } from "@jaiminmoslake7020/react-typing-text";
```

```code
<TypingText as={"p"}
            text={"Some text you want to have!"}
            duration={100}
            className=" any-styling-class "
                />
```

## Component Properties

### TypingTextPropTypes

| Properties      | Type                                  | Values                                                     | Default                                                   |
|-----------------|---------------------------------------|------------------------------------------------------------|-----------------------------------------------------------|
| as?             | p \| h1 \| h2 \| h3 \| h4 \| h5 \| h6 | "p", "h1", "h2", "h3", "h4", "h5", "h6"                    | "p"                                                       |
| text            | string                                | "Some text you want to have!"                              |                                                           |
| duration?       | number                                | 100      (in milliseconds)                                 | 100                                                       |
| className?      | string                                | "any-styling-class"                                        |                                                           |
| cursor?         | CursorPropTypes                       | {symbol: "any character",  className?:"any-styling-class"} | {symbol: "\|",  className?:"cursor-symbol-default-class"} |
| noCursor?       | boolean                               | true, false                                                | false                                                     |
| spaceAtTextEnd? | boolean                               | true, false                                                | false                                                     |

### CursorPropTypes

| Properties | Type                                  | Values              | Default                       |
|------------|---------------------------------------|---------------------|-------------------------------|
| symbol     | p \| h1 \| h2 \| h3 \| h4 \| h5 \| h6 | "any character"     | "\|"                          |
| className? | string                                | "any-styling-class" | "cursor-symbol-default-class" |

