import React from 'react';
import {TypingTextPropertiesData} from '../data/data';

const TypingTextPropTypesTable = () => {
    return (
        <div className={"flex flex-col gap-4 "}>
            <h3>TypingTextPropTypes</h3>
            <div className={"table-container"}>
                <table>
                    <thead>
                    <tr>
                        <th>
                            Properties
                        </th>
                        <th>
                            Type
                        </th>
                        <th>
                            Values
                        </th>
                        <th>
                            Default
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        TypingTextPropertiesData.map(({
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
        </div>
    );
}

export default TypingTextPropTypesTable;
