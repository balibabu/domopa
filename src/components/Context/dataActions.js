export function addData(stack, setData, newData, typ) {
    setData((prev) => {
        const allData = { ...prev };
        let node = allData;
        stack.forEach(item => {
            node = node[item]
        });
        node[typ][newData] = {
            domains: {},
            operations: {},
            activities: {},
        }
        storeData(allData)
        return allData;
    })
}

function storeData(jsonObject) {
    let jsonString = JSON.stringify(jsonObject);
    localStorage.setItem("data", jsonString);
}