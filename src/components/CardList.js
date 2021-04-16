import React from 'react'
import '../App.scss';
import Bloc from './Bloc';
import { useEffect, useState } from "react";


function CardList(props) {

    const [state, setstate] = useState(null);


    let generateurCard;

    useEffect(() => {
        const asyncFunction = async() => {
            const resultApi = await fetch(props.url);
            const result = await resultApi.json();
            setstate(result.data);
        }
        asyncFunction();
    }, [props.url]);

    console.log(state);

    if (state === null) {
        generateurCard = "chargement"
    }else{
        generateurCard = state.map((element) => {
            return <Bloc 
            data = {element}
            />
        })
    }

    return (
        <div className="CardList">
            <div className="scroll-2">
                {generateurCard}
            </div>
        </div>
    )
}

export default CardList
