import React, { useState, useEffect } from 'react';
import { Row } from 'antd';
import CardMovie from './Card';
import Header from '../../Header';

function MovieList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(data => { setList(data) })
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            <Header />
            <Row justify="center" gutter={[16, 24]} style={{margin: '0 70px'}}>
                {list.map((movie, index) => {
                    return (
                        <CardMovie movie={movie} index={index}/>
                    )
                })}
            </Row>
        </>
    )
}

export default MovieList;