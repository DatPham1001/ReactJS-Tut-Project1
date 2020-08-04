import React, { Component } from 'react';
import Header from '../Header';
import Axios from 'axios';
import './style.css';
import CategoryDetail from './CategoryDetail';
const api = Axios.create({
    baseURL: 'http://localhost:8080/admin/'
})
class CategoryList extends Component {


    constructor(props) {
        super(props);
        //Get all categories API
        api.get('/categories').then(res => {
            this.setState({ categories: res.data })
        })
        this.state = {
            categories: [],
            categoryDetail: {
                createDate: '',
                editDate: '',
                description: ''
            }
        }

    }
    // document.querySelector('.bg-modal').style.display = 'flex';

    categoryClicked = (index) => {
        document.querySelector('.bg-modal').style.display = 'flex';
        // console.log(this.state.categories[index]);
        this.setState({
            categoryDetail: {
                name: this.state.categories[index].name,
                createDate: this.state.categories[index].createDate,
                editDate: this.state.categories[index].editDate,
                description: this.state.categories[index].description
            }
        })
    }
    render() {

        var categories = this.state.categories;
        var categoryDetail = this.state.categoryDetail;
        let categoriesName = categories.map((category, index) => {
            return (
                <div>
                    <li className="category-name" value={index} onClick={e => this.categoryClicked(e.target.value)}>
                        {category.name}
                    </li>

                </div>
            )
        });
        return (
            <div>
                <Header></Header>
                <div className=" container">
                    <div className="row justify-content-md-center">
                        <div className="col-lg-4">
                            <div className="category-list-container">
                                <table className="table category-name-container ">
                                    <thead>
                                        <tr>
                                            <th scope="col ">Category Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categoriesName}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <CategoryDetail description={categoryDetail.description} createDate={categoryDetail.createDate} editDate={categoryDetail.editDate}>
                    {categoryDetail.name}
                </CategoryDetail>




            </div>
        );
    }
}

export default CategoryList;