import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Header from '../../Header';
import { Row, Col, Card } from 'antd';
import { cardStyle, selectHeadStyle } from './Styles';

function Detail() {
    const [movie, setMovie] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${params.id}`)
            .then(res => res.json())
            .then(data => { setMovie(data) })
            .catch(err => console.log(err));
    }, [])
    return (
        <>
            <Header />
            <Row justify={"center"}>
                <Col span={20}>
                    <Card
                        title={movie.title}
                        headStyle={selectHeadStyle}
                        style={cardStyle}
                    >
                        <p>
                            {movie.description}
                        </p>
                        <p>
                            <strong>Diretor: </strong>
                            {movie.director}
                        </p>
                        <p>
                            <strong>Produtor: </strong>
                            {movie.produtor}
                        </p>
                        <p>
                            <strong>Ano de lançamento: </strong>
                            {movie.release_date}
                        </p>
                        <p>
                            <strong>Pontuação: </strong>
                            {movie.rt_score}
                        </p>

                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Detail;