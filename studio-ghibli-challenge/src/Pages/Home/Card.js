import React from 'react';
import { Col, Card } from 'antd';
import { cardStyle, selectHeadStyle } from './Styles';
import { Link } from 'react-router-dom';

function CardMovie({ movie, index }) {
    return (
        <Col span={8}>
            <Link to={`/detail/${movie.id}`}>
                <Card
                    hoverable
                    title={movie.title}
                    bordered={true}
                    headStyle={selectHeadStyle(index)}
                    bodyStyle={{ maxHeight: '222px' }}
                    style={cardStyle}
                >
                    <p >{movie.description}</p>
                </Card>
            </Link>
        </Col>
    )
}
export default CardMovie