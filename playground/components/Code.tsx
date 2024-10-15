import React from 'react';

export type TagStartPropTypes = {
    elName: string,
    inVisible?: boolean
};

export type ElTagStartPropTypes = {
    elName: string,
};

export type AttrPropTypes = {
    attrName: string,
    attrValue: string,
    onChange?: Function,
    optional?: boolean,
    isValueInsideABracket?: boolean,
};

export const StartBracket = () => {
    return <span className={"tag-start"}>&lt;</span>
}

export const EndBracket = () => {
    return <span className={"tag-end"}>&gt;</span>
}

export const StartBracketEndTag = () => {
    return <span className={"tag-start"}>&lt;/</span>
}

export const SelfEndBracket = () => {
    return <span className={"tag-self-end"}>/&gt;</span>
}

export const NewLineEndBracket = () => {
    return <span className={"tag-end"}>/&gt;</span>
}

export const ElTag = (props: ElTagStartPropTypes) => {
    const {
        elName
    } = props;
    return <span className={"el-name "}>{elName}</span>;
}

export const TagStart = (props: TagStartPropTypes) => {
    const {
        elName,
        inVisible
    } = props;
    return (
        <span className={inVisible ? " invisible-item  " : ""}>
            <StartBracket/>
            <ElTag elName={elName}/>
        </span>
    );
}

export const TagEnd = (props: TagStartPropTypes) => {
    const {
        elName,
    } = props;
    return (
        <>
            <StartBracketEndTag/>
            <ElTag elName={elName}/>
            <EndBracket/>
        </>
    );
}

export const Attr = (props: AttrPropTypes) => {
    const {
        attrName, attrValue, onChange, optional, isValueInsideABracket
    } = props;
    return <>
        <span className={"attr-name"}>{attrName}</span>
        {optional ? <span className={"attr-optional-sign"}>?</span> : null}
        <span className={"attr-equal-sign"}>=</span>
        {isValueInsideABracket ? <span className={"attr-object-value"}>&#123;</span> : <>
            <span className={"attr-quote-sign"}>"</span>
        </>
        }
        <span className={"attr-value"} contentEditable={Boolean(onChange)} onInput={(e) => {
            if (onChange) {
                // @ts-ignore
                const content = e.target?.innerHTML;
                onChange(content);
            }
        }}>{attrValue}</span>
        {isValueInsideABracket ? <span className={"attr-object-value"}>&#125;</span> : <>
            <span className={"attr-quote-sign"}>"</span>
        </>}
    </>
}

