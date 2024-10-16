import React from 'react';
import {CursorPropertiesData} from '../data/data';

const CursorPropTypesTable = () => {
    return (
        <div className={"flex flex-col gap-4 "}>
            <h3>CursorPropTypes</h3>
            <table>
                <thead>
                <tr>
                    <th>Properties</th>
                    <th>Type</th>
                    <th>Values</th>
                    <th>Default</th>
                </tr>
                </thead>
                <tbody>
                {
                    CursorPropertiesData.map(({
                                                      Properties, Type, Values, Default
                                                  }) => {
                        return <tr key={Properties}>
                            <td>{Properties}</td>
                            <td>{Type}</td>
                            <td>{Values}</td>
                            <td>{Default}</td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default CursorPropTypesTable;
