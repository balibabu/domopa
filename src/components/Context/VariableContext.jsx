import { createContext, useState } from "react";
import { addItem, removeItem } from "./stackActions";
import { addData, popAvalue } from "./dataActions";

const VariableContext = createContext();
export default VariableContext;

export const VariableProvider = ({ children }) => {
    const stringdata = localStorage.getItem("data");
    const [data, setData] = useState(JSON.parse(stringdata) || { domains: {}, operations: {}, activities: {} });
    const [stack, setStack] = useState([]);

    const contextData = {
        data, setData,
        insertData: (typ, newData) => addData(stack, setData, newData, typ),
        removeData: (typ, item) => popAvalue(stack, setData, typ, item),
        stack, setStack,
        insertInStack: (typ, item) => addItem(setStack, typ, item),
        removeFromStack: (index) => removeItem(setStack, index),
    }
    return (
        <VariableContext.Provider value={contextData}>
            {children}
        </VariableContext.Provider>
    )
}

const data = {
    domains: [
        {
            title: 'item1',
            children: {
                domains: [
                    {
                        title: 'item1',
                        children: {

                        }
                    }
                ],
                operations: [],
                activities: []
            }
        }
    ],
    operations: [],
    activities: []
}

const test = {
    domains: {
        item1: {
            domains: {},
            operations: {},
            activities: {},
        },
        item2: {
            domains: {},
            operations: {},
            activities: {},
        }
    },
    operations: {
        item1: {
            domains: {},
            operations: {},
            activities: {},
        }
    },
    activities: {
        item2: {
            domains: {},
            operations: {},
            activities: {},
            details: {
                name: '',
                status: ''
            }
        }
    },
}