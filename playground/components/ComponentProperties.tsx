import React from 'react';
import TypingTextPropTypesTable from './TypingTextPropTypesTable';
import CursorPropTypesTable from './CursorPropTypesTable';

const ComponentProperties = () => {
    return (
        <section className={"flex flex-col gap-8"}>
            <h2>Component Properties</h2>
            <TypingTextPropTypesTable />
            <CursorPropTypesTable />
        </section>
    );
}

export default ComponentProperties;
