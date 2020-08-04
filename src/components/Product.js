import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:8080/admin/'
})
class Product extends Component {

    state = {
        products: []
    }

    constructor(props) {
        super(props);
        //Get all products API
        api.get('/products?page='+0+'&limit='+8).then(res => {
            console.log(res.data)
            this.setState({ products: res.data })
        })

    }
    getProducts() {

    }
    createProduct(){
        api.post('/product')
    }

    render() {
        var products = this.state.products;
        let allProducts = products.map((product, index) => {
            return (
                <div className="col-lg-3 col-md-3 card-container">
                    <div className="border" >
                        <div className="image-container">
                            <img className="image-responsive" src={product.linkImage} />
                        </div>

                        <div className="card-detail">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <a href="#" class="btn btn-primary">Nothing Yet</a>

                        </div>
                    </div>
                </div>

            )
        });
        return (
            <div>
                <Header></Header>

                <div className="container">
                    <div className=" row product-container">
                        {allProducts}
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(Product);