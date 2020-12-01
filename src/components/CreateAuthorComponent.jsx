import React, { Component } from 'react'
import AuthorService from '../services/AuthorService';

class CreateAuthorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            contactNo:''
        }
        // this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        // this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        // this.changeEmailHandler = this.changeEmailHandler.bind(this);
        // this.changeContactHandler = this.changeEmailHandler.bind(this);
        this.saveOrUpdateAuthor = this.saveOrUpdateAuthor.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            AuthorService.getAuthorById(this.state.id).then( (res) =>{
                let author = res.data;
                this.setState({firstName: author.firstName,
                    lastName: author.lastName,
                    emailId : author.email,
                    contactNo: author.contactno
                });
            });
        }        
    }
    saveOrUpdateAuthor = (e) => {
        e.preventDefault();
        let author = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.email, contactNo: this.state.contactno};
        console.log('author => ' + JSON.stringify(author));

        // step 5
        if(this.state.id === '_add'){
            AuthorService.createAuthor(author).then(res =>{
                this.props.history.push('/authors');
            });
        }else{
            AuthorService.updateAuthor(author, this.state.id).then( res => {
                this.props.history.push('/authors');
            });
        }
    }
    
    // changeFirstNameHandler= (event) => {
    //     this.setState({firstName: event.target.value});
    // }

    // changeLastNameHandler= (event) => {
    //     this.setState({lastName: event.target.value});
    // }

    // changeEmailHandler= (event) => {
    //     this.setState({email: event.target.value});
    // }

    // changeContactHandler= (event) => {
    //     this.setState({contactno: event.target.value});
    // }
    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }
    cancel(){
        this.props.history.push('/authors');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Author</h3>
        }else{
            return <h3 className="text-center">Update Author</h3>
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
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> ContactNO: </label>
                                            <input placeholder="Contact no" name="contactno" className="form-control" 
                                                value={this.state.contactno} onChange={this.onChange}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateAuthor}>Save</button>
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

export default CreateAuthorComponent