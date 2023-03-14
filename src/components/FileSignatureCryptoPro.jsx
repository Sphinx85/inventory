import React, {useState} from 'react';
import FileSignature from "file-signature-in-react";

const FileSignatureCryptoPro = () => {
    const [filesForSignature, setFilesForSignature] = useState(null);
    const [clear, setClear] = useState(false);

    const fileInputHandler = ({ target: { files = [] } }) => {
        setFilesForSignature(files);
    };


    const onChange = (e) => console.log(e.link)
    const callbackError = e => console.error(e);

    //experiment
    const [text, setText] = useState('')
    const textInputHandler = (text)=>{setText(text)}


    return (
        <div>
            <h2>Подписываем файл или файлы</h2>

            <input
                type="file"
                onChange={fileInputHandler}
                multiple // если хотим подписать много файлов скопом
            />

            <button onClick={() => setClear(true)}> Удалить подпись</button>



            <FileSignature
                {...{
                    onChange, // функция вызовится когда файл подпишится
                    files: filesForSignature, // самм файлы для подписи
                    clear, // флаг очищения подписи
                    callbackError  // функция вызовится когда будет ошибка
                }}
            />
        </div>
    );
};

export default FileSignatureCryptoPro;