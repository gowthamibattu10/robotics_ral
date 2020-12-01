import React from 'react';
import AuthorService from '../services/AuthorService';

class AuthorComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            authors:[]
        }
    }

    componentDidMount(){
        AuthorService.getAuthor().then((response) => {
          //  console.log(response)
          const authors = [...response.data]
          console.log(authors)
            this.setState({ authors})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center">Authors List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td>  Id</td>
                            <td> First Name</td>
                            <td> Last Name</td>
                            <td> Email </td>
                            <td> contact No</td>
                            <td> books_id</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.authors.map(
                                author => 
                                <tr key = {author.id}>
                                     <td> {author.id}</td>   
                                     <td> {author.firstName}</td>   
                                     <td> {author.lastName}</td>   
                                     <td> {author.email}</td>
                                     <td> {author.contactno}</td> 
                                
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default AuthorComponent