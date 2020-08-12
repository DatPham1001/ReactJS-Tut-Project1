import React, { Component } from 'react';
import './style.css';
class CategoryDetail extends Component {
    closeModal() {
        document.querySelector('.bg-modal').style.display = 'none';
    }
    render() {
        return (
            <div>
                <div className="bg-modal">
                    <div className="modal-content">
                        <img alt='' className="x-icon"
                            src="https://cdn3.iconfinder.com/data/icons/ui-icons-5/16/cross-small-01-512.png"
                            onClick={this.closeModal}></img>
                        <div className="container">
                            <div className="category-detail-container">
                                <h1>Category</h1>
                                <h2>{this.props.children}</h2>
                            </div>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Description</td>
                                        <td>{this.props.description}</td>
                                    </tr>
                                    <tr>
                                        <td>Created Date</td>
                                        <td>{this.props.createDate}</td>
                                    </tr>
                                    <tr>
                                        <td>Edited Date</td>
                                        <td>{this.props.editDate}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryDetail;