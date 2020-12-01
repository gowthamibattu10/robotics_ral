import React, { Component } from 'react'
import BookOrderService from '../services/BookOrderService';

class ViewBookOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //this.props.match.params.issueId,
            orderid:this.props.match.params.orderid,
            booksorder: {}
        }
    }

    componentDidMount(){
        BookOrderService.getBookOrderById(this.state.orderid).then( res => {

            this.setState({booksorder: res.data});
            //console.log(res.data);
        })
        //console.log(this.state.booksissued);
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Books OrderDetails</h3>
                    <div className = "card-body">
                        
                        <div className = "row">
                            <label> Quantity: </label>
                            <div> { this.state.booksorder.quantity}</div>
                        </div>
                        <div className = "row">
                            <label> OrderDate: </label>
                            <div> { this.state.booksorder.orderDate }</div>
                        </div>
                        <div className = "row">
                            <label> OrderStatus :</label>
                            <div> { this.state.booksorder.orderStatus }</div>
                        </div>
                        {/* <div className = "row">
                            <label> User </label>
                            <div> { this.state.booksissued.users}</div>
                        </div>
                        <div className = "row">
                            <label> Books </label>
                            <div> { this.state.booksissued.books }</div>
                        </div> */}
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewBookOrderComponent