import React, { Component } from 'react';
import { Container,Card } from 'reactstrap';
import { Media,CardBody,CardImg,CardTitle,CardText,CardSubtitle } from 'reactstrap';
import axios from 'axios';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            reviews:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/api/posts').then((res)=>{
            this.setState({ 
                reviews: res.data
            })
        })
    }
    render(){
        return (
            <div style={{margin:"150px",}}>
            <Container>
                <Card>  
                <Media>
                    <img src={this.props.user.avatar}
                        style={{borderRadius:"50%",padding:"50px"}} height='20%' width="20%"
                        alt="Avatar" />
                    <div style={{padding:"50px"}}>
                    <h1>{this.props.user.username}</h1>
                    <p className='ml-5 mt-1'>bio</p>
                    </div>
                </Media>
                <div style={{padding:"50px"}}>
                    <h3>Reviews</h3>         
                    <CardImg top width="100%" alt="Poster" />
                    <CardBody>
                        <CardTitle tag="h5">Movie Name</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Details</CardSubtitle>
                        <CardText>Review for that movie</CardText>
                    </CardBody>
                </div>
                </Card>
            </Container>
            </div>
        );
    };
}

export default Profile;