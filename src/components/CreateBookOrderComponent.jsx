import React, { Component } from 'react'
import BookOrderService from '../services/BookOrderService';

class CreateBookOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            orderid: this.props.match.params.orderid,
            quantity: '',
            orderDate: '',
            orderStatus: ''
            
            // books: '',
        }
       // this.onChange = this.onChange.bind(this);
        this.saveOrUpdateBookOrder = this.saveOrUpdateBookOrder.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.orderid === '_add'){
            return 
        }else{
            BookOrderService.getBookOrderById(this.state.orderid).then( (res) =>{
                let booksorder = res.data;
                this.setState({ quantity: booksorder.quantity,
                    orderDate: booksorder.orderDate,
                    orderStatus: booksorder.orderStatus
                    // books:bookissued.books
                });
            });
        }        
    }
    saveOrUpdateBookOrder = (e) => {
        e.preventDefault();
        let booksorder = { quantity: this.state.quantity,
            orderDate: this.state.orderDate,
            orderStatus: this.state.orderStatus,
             books: null
        };
        console.log('booksorder => ' + JSON.stringify(booksorder));

        // step 5
        if(this.state.orderid === '_add'){
            console.log(booksorder);
            BookOrderService.createBookOrder(booksorder).then(res =>{
                this.props.history.push('/booksorder');
            });
        }else{
            BookOrderService.updateBookOrder(booksorder, this.state.orderid).then( res => {
                this.props.history.push('/booksorder');
            });
        }
    }
    
    onChange = (e) =>this.setState({[e.target.name]:e.target.value});

    cancel(){
        this.props.history.push('/booksorder');
    }

    getTitle(){
        if(this.state.orderid === '_add'){
            return <h3 className="text-center">Add Books Order</h3>
        }else{
            return <h3 className="text-center">Update Books Order</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                    <div className="form-group">
                        <label>Quantity:</label>
                        <input placeholder="quantity" name="quantity" className="form-control"  value={this.state.quantity} onChange={this.onChange}/>
                    </div>
                        <div className = "row">
                            <label> OrderDate: </label>
                            <input placeholder="orderDate" name="orderDate" className="form-control"  value={this.state.orderDate} onChange={this.onChange}/>
                        </div>
                        <div className = "row">
                            <label> OrderStatus :</label>
                            <input placeholder="orderStatus" name="orderStatus" className="form-control"  value={this.state.orderStatus} onChange={this.onChange}/>
                        </div>

                    {/* 

                    <div className="form-group">
                        <label>Books</label>
                        <input type="text"  name="books" className="form-control" value={this.state.books} onChange={this.onChange}/>
                    </div> */}

                                        <button className="btn btn-success" onClick={this.saveOrUpdateBookOrder}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateBookOrderComponent