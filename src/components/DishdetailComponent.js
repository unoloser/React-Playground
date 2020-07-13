import React, { component, Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap'
import { Link } from 'react-router-dom'


class DishDetail extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
    }



    render() {

        var commentsAll = this.props.comments;
        console.log(this.props.dish.name);
        const selected = commentsAll.map((commentOne) => {
            return (
                <>
                    {/* key as unique identifier */}
                    {/* <div key={commentOne.id} className="col-12 col-md-5 mt-1"> */}
                    <div key={commentOne.id} >
                        {/* treat media list(mentioned before) and treat as list */}
                        <p>{commentOne.comment}</p>
                        <p>--{commentOne.author}, {commentOne.date}</p>
                    </div>
                </>
            );
        });

        // console.log(this.state.selectedDish);
        return (
            <div>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link> </BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link> </BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>  Menu</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardImgOverlay>
                                <CardTitle><b>{this.props.dish.name}</b></CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <b>Comments</b>
                        <b>{""}</b>
                        <div>
                            {selected}
                        </div>
                    </div>
                </div>
                <Button type="submit" color="primary">
                    Send
                </Button>
            </div>

        );
    }
}


export default DishDetail;