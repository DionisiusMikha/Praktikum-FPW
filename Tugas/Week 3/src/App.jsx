import React, { useState } from 'react';
import Form from './form';
import View from './print';

function App() {
    const [state, setState] = useState("form");
    const [inputStatus, setInputStatus] = useState([false, false, false, false]);
    const [data, setData] = useState(null);

    return (
        <div>
            {state === "form" && (
                <Form
                    inputStatus={inputStatus}
                    setInputStatus={setInputStatus}
                    data={data}
                    setData={setData}
                    setState={setState}
                />
            )}
            {state === "view" && data && (
                <View data={data} setState={setState} />
            )}
        </div>
    );
}

export default App;
