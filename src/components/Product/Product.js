import Axios from 'axios';
import React, { Component } from 'react';
import Header from '../Header';
import '../style.css';
import './product.css';
import AddProductModal from './AddProductModal';
import { Link } from 'react-router-dom';
const api = Axios.create({
    baseURL: 'http://localhost:8080/admin/'
})

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            showAddModal: false,
            closeAddmodal: true,
            productsPerPage: 8,
            currentPage: 0,
            //from API
            totalProducts: 9,
        }

    }
    componentDidMount() {
        api.get('/products?page=' + this.state.currentPage + '&limit=' + this.state.productsPerPage).then(res => {
            this.setState({ products: res.data })
        })
    }
    componentWillUnmount() { }
    handleShow = () => {
        this.setState({ showAddModal: true });
        console.log('tr');
    }

    handleProductDetail = (product) => {
        console.log(product.id);
        this.props.history.push('/product/' + product.id)

    }
    deleteProduct = (id) => {
        api.delete('/product/' + id)
    }
    paginate = (number) => {
        const page = (number-1)*this.state.productsPerPage;
        api.get('/products?page=' + page + '&limit=' + this.state.productsPerPage).then(res => {
            this.setState({ products: res.data })
        })
    }
    render() {
        let products = this.state.products;
        let allProducts = products.map((product, index) => {
            return (
                <div key={index} className="col-lg-3 col-md-3 card-container">
                    <div className="border" >
                        {/* <div className="image-container" onClick={() => this.handleProductDetail(product)}>/ */}
                        <Link to={"/product/" + product.id}>
                            <img alt='' className="image-responsive" src={product.linkImage} />
                        </Link>
                        {/* </div> */}
                        <div className="card-detail">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <button href="#" className="btn btn-primary">Nothing Yet</button>

                        </div>
                    </div>
                </div>
            )
        });

        //pagination
        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(this.state.totalProducts / this.state.productsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div>
                <Header></Header>
                <div className="container">
                    <div className="add-btn-container">
                        <AddProductModal></AddProductModal>
                    </div>
                    <div className=" row product-container">
                        {allProducts}
                    </div>


                    {/* Pagination */}
                    <nav>
                        <ul className='pagination'>
                            {pageNumbers.map(number => (
                                <li key={number} className='page-item'>
                                    <button onClick={() => this.paginate(number)} className='page-link'>
                                        {number}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Product;