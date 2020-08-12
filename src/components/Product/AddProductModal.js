import React, { Component } from 'react';
import './product.css';
import Axios from 'axios';
const api = Axios.create({
    baseURL: 'http://localhost:8080/admin/'
})
export default class AddProductModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            quantity: '',
            linkImange: '',
            price: '',
            categoryId:'',
            categories: [],
        }
    }

    // addProduct = () => {
    //     api.get('/products?page=' + this.currentPage + '&limit=' + this.state.productsPerPage).then(res => {
    //         console.log(res.data)
    //         this.setState({ products: res.data })
    //     })
    // }
    componentDidMount() {
        api.get('/categories').then(res => {
            this.setState({ categories: res.data })
        })
    }
    handleChange = (index) => {
        this.setState({categoryId : this.state.categories[index].id})
      }
   
    handleSaveChange = () => {
        const product = {
            name: this.state.name,
            price: this.state.price,
            quantity: this.state.quantity,
            linkImage: this.state.linkImage,
            description: this.state.description,
            categoryId: this.state.categoryId,
            // categoryid
        }
        api.post(`/product`, { product })
            .then(res => {
                console.log(res.data);
            })
        console.log({ product });
        console.log('clicked');
    
    }
    handleSelect = () => {
        console.log('selected');
    }
    render() {
        let categories = this.state.categories;
        let categoriesName = categories.map((category, index) => {
            return (
                <option  className="select-font" key={index} value={index}>{category.name}</option>
            )
        });
        return (
            <div>
                <button type="button" className="btn1 btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Add Product
                </button>
                <div className="modal-container container">
                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-container container">
                            <div className="modal-dialog modal-lg-add" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Add Product</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="modal-detail">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h5>Name</h5>
                                                </div>
                                                <div className="col-lg-9">
                                                    <input type="text" className="add-product-bar"
                                                        placeholder="Product Name" value={this.state.name}
                                                        onChange={(e) => this.setState({ name: e.target.value })}></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-detail">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h5>Price</h5>
                                                </div>
                                                <div className="col-lg-9">
                                                    <input type="text" className="add-product-bar"
                                                        placeholder="Product Price" value={this.state.price}
                                                        onChange={(e) => this.setState({ price: e.target.value })}></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-detail">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h5>Quantity</h5>
                                                </div>
                                                <div className="col-lg-9">
                                                    <input type="text" className="add-product-bar"
                                                        placeholder="Product Quantity" value={this.state.quantity}
                                                        onChange={(e) => this.setState({ quantity: e.target.value })}></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-detail">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h5>Image URL</h5>
                                                </div>
                                                <div className="col-lg-9">
                                                    <input type="text" className="add-product-bar"
                                                        placeholder="Product url Image" value={this.state.linkImage}
                                                        onChange={(e) => this.setState({ linkImage: e.target.value })}></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-detail">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h5>Description</h5>
                                                </div>
                                                <div className="col-lg-9">
                                                    <input type="text" className="add-product-bar"
                                                        placeholder="Product Description" value={this.state.description}
                                                        onChange={(e) => this.setState({ description: e.target.value })}></input>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-detail"></div>
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <h5 style={{ paddingTop: '10px'}}>Category</h5>
                                            </div>
                                            <div className="col-lg-9">
                                                <div className="category-select-box">
                                                    <select onChange={(e) => this.handleChange(Number(e.target.value))} className="browser-default custom-select custom-select-lg mb-3">
                                                        {/* <option  className="select-font">Select category</option> */}
                                                        {categoriesName}

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" onClick={this.handleSaveChange}>Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
