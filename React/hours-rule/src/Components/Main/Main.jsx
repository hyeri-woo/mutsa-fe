import React, {useState} from 'react';
import Form from './Form/Form.jsx';
import Result from './Result/Result.jsx';
import './Main.css';

export default function Main({openModal}) {
    const [data, setData] = useState({});
    const [isSubmit, setSubmit] = useState(false);
    const submitTrue = () => {
        setSubmit(true);
    }
    return (
        <main>
            <Form 
                setData={setData}
                submitTrue={submitTrue}
            />
            {isSubmit &&
                <Result 
                    openModal={openModal} 
                    data={data}
                />
            }
        </main>
    )
}
