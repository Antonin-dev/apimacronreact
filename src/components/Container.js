import React from 'react';
import Banner from './Banner';
import CardList from './CardList';
import '../App.scss';
import { useParams } from 'react-router';


function Container(props) {

    const {id} = useParams();
    const url = `http://macronfact.antonin-dev.fr/factjson/${id}`;
    

    

    return (
        <div className="Container">
            <div className="scroll">
                <Banner />
                <CardList 
                url = {url}
                />
            </div>
        </div>
    )
}

export default Container
