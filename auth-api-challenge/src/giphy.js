import React, { useState, useEffect } from 'react';
import { Gif } from '@giphy/react-components';
import { Input, Typography } from 'antd';

const { Search } = Input;
const { Title } = Typography;

function Giphy(){
    const [gifs, setGifs] = useState(null);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const key = 'bUgd7CpBJRyJGRZqd3DYmSlCnCEVJYAb';
    const limite = 1;
    useEffect(() => {
        setLoading(true);
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}&limit=${limite}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setGifs(result);
                    setLoading(false);
                },
                (error) => {
                    console.log('error', error);
                }
            )
    }, [query])
    return(
        <div>
            <Title style={{color: '#1890FF'}}>GIPHY Search!</Title>
            <Search 
                placeholder="Search..."
                onSearch={e => setQuery(e)}
                enterButton="Search"
                size="large"
                loading={loading}
            />
            <div style={{display: 'flex', paddingTop: '20px', justifyContent: 'center'}}>
            { gifs 
                && gifs.data.map(gif => {
                    return <Gif gif={gif} width={200} size={200}/>
                })
            }
            </div>
        </div>
    );
}

export default Giphy;