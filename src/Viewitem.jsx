import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";




const Viewitem = () => {

    let [data, setData] = useState([]);

    async function getData() {
        let response = await axios.get("http://192.168.0.120:3001/viewitem")
        setData(response.data)
    }
    useEffect(() => {
        getData();
    }, [])
    return (

        <div><h1>product name</h1>
            {
                data.map((item) => {
                    return (
                        <div style={{ display: "flex", float: "left", margin: "50px" }}>
                            <div>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600/100px180" />
                                    <Card.Body>
                                        <Card.Title>product category{item.p_categery}</Card.Title>
                                        <Card.Text>
                                            product name:{item.p_name}
                                        </Card.Text>
                                        <Card.Text>
                                            price:{item.price} INR
                                        </Card.Text>
                                        {
                                            (item.quentity < 10)
                                                ? (item.quentity === 0)
                                                    ? (<Card.Text style={{ color: "red" }}>
                                                        out of stock
                                                    </Card.Text>)
                                                    : (<Card.Text style={{ color: "red" }}>
                                                        avilable: only{item.quentity} left
                                                    </Card.Text>)
                                                : (<Card.Text style={{ color: "green" }}>
                                                </Card.Text>)
                                        }


                                        <Button variant="primary">read more</Button>
                                    </Card.Body>
                                </Card>

                            </div>
                        </div>
                    )

                })
            }

        </div>

    )
}

export default Viewitem