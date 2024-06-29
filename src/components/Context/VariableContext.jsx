import { createContext, useState } from "react";
import { addItem, removeItem } from "./stackActions";
import { addData, popAvalue } from "./dataActions";
import { LocalStorageJSONModel } from "./LocalStorageJSONModel";

const VariableContext = createContext();
export default VariableContext;

export const VariableProvider = ({ children }) => {
    const stringdata = localStorage.getItem("data");
    const [data, setData] = useState(JSON.parse(stringdata) || { domains: {}, operations: {}, activities: {} });
    const [stack, setStack] = useState(['root']);
    const [selected, setSelected] = useState({});
    const model = new LocalStorageJSONModel();

    const contextData = {
        data, setData, model,
        insertData: (typ, newData) => addData(stack, setData, newData, typ),
        removeData: (typ, item) => popAvalue(stack, setData, typ, item),
        stack, setStack,
        insertInStack: (typ, item) => addItem(setStack, typ, item),
        removeFromStack: (index) => removeItem(setStack, index),
        selected, setSelected,
    }

    return (
        <VariableContext.Provider value={contextData}>
            {children}
        </VariableContext.Provider>
    )
}

// const t = {
//     dom: {
//         key: {
//             name: '',
//             attributes: { key: value },
//             space: {
//                 dom: {}, op: {}, act: {}
//             },
//             created: '',
//             modified: ''
//         },
//     },
//     op: {
//         key: {
//             name: '',
//             attributes: {},
//             space: {
//                 dom: {}, op: {}, act: {}
//             },
//             created: '',
//             modified: ''
//         },
//         key2: {
//             name: '',
//             attributes: {},
//             space: {
//                 dom: {}, op: {}, act: {}
//             },
//             created: '',
//             modified: ''
//         }
//     },
//     act: {
//         key: {
//             // domain: same layer domain(key),
//             // operation: same layer ops(key),
//             name: '',
//             attributes: {},
//             space: {
//                 dom: {}, op: {}, act: {}
//             },
//             created: '',
//             modified: '',
//             logStructure: {},
//             logs: [
//                 {}, {}
//             ]
//         }

//     }
// }