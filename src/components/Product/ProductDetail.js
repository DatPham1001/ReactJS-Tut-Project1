import React, { Component } from 'react'
import Header from '../Header';
import Axios from 'axios';
import './product.css';
const api = Axios.create({
    baseURL: 'http://localhost:8080/admin/'
})
class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: '',
        }
    }

    componentDidMount = () => {
        api.get('/product/' + this.props.match.params.id).then(res => {
            console.log(res.data);
            this.setState({ product: res.data })
        })
    }
    handleDelete = (e) => {
            api.delete('/product/'+ e)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        console.log(e);

    }
    render() {
        const product = this.state.product;
        return (
            <div>
                <Header></Header>
                <div className="container">
                    <div className="product-detail-header">
                        <div className="row">
                            <div className="col-lg-11">
                                <h1>{product.name}</h1>
                            </div>
                            <button onClick={() => (this.handleDelete(product.id))} className="delete-btn">Delete</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row col-lg-8">
                            <div className="col border-detail">
                                <img className="image-responsive" alt='' src={product.linkImage}></img>
                            </div>
                            <div className="col">
                                <h3>{product.price}.00 $</h3>
                                <button type="button" className="buy-btn" onClick={() => (alert('On development'))}>Mua luôn và ngay</button>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h5>Thông tin chi tiết</h5>
                            <div className="sold"><b >Quantity : {product.quantity}</b></div>
                            <div className="sold"><b>Sold : {product.soldQuanity}</b></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductDetail