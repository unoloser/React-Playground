import React, { component, Component } from 'react'
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,
    Breadcrumb, BreadcrumbItem, Button,
    Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Row, Col
} from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form'
import { Link } from 'react-router-dom'


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)

function renderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                </CardBody>
            </Card>
        </div>
    );
}

function renderComments({ comments, addComment, dishId }) {
    if (comments != null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li>
                                <p>{comment.comment}</p>
                                <p>{comment.rating} stars</p>
                                <p>-- {comment.author.firstname} {comment.author.lastname}</p>
                            </li>
                        )
                    })}
                </ul>
                <CommentForm dishId={dishId} addComment={addComment} />
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}


class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    handleSubmit(values) {
        this.toggleModal();
        // console.log("Current State is " + JSON.stringify(event));
        // alert("Current State is " + JSON.stringify(event));
        this.props.addComment(this.props.dishId, values.rating, values.comment);
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

                            <Label htmlFor="rating"> Rating</Label>
                            <Control.select model=".rating" name="rating"
                                className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </Control.select>



                            <Label htmlFor="yourName" > Your Name</Label>
                            <Control.text model=".yourName" id="yourName" name="yourName"
                                placeholder="Your Name"
                                className="form-control"
                                validators={{
                                    required,
                                    minLength: minLength(2),
                                    maxLength: maxLength(10)
                                }} />
                            <Errors
                                className="text-danger"
                                model=".yourName"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 letters',
                                    maxLength: 'Must be 10 letters or less'
                                }} />


                            <Label htmlFor="feedback" > Comment</Label>
                            <Control.textarea model=".message" id="message" name="message"
                                rows="6"
                                className="form-control" />

                            <div class="mt-4 col-md-12">
                                {/* add a gap */}
                            </div>
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="primary">
                                    Send
                                    </Button>
                            </Col>

                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }


}

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='./menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <renderDish dish={props.dish} />
                    <renderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dishId} />
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        )
    }
}






// class DishDetail extends Component {
//     constructor(props) {
//         super(props);
//         // console.log(props);
//         this.state = {
//             isModalOpen: false
//         }

//         this.toggleModal = this.toggleModal.bind(this);
//         // this.handleSubmit = this.handleSubmit.bind(this);

//     }

//     toggleModal() {
//         this.setState({ isModalOpen: !this.state.isModalOpen })
//     }

//     handleCommentSubmit(event) {
//         this.toggleModal();
//         console.log("Current State is " + JSON.stringify(event));
//         alert("Current State is " + JSON.stringify(event));
//     }

//     render() {

//         var commentsAll = this.props.comments;
//         console.log(this.props.dish.name);
//         const selected = commentsAll.map((commentOne) => {
//             return (
//                 <>
//                     {/* key as unique identifier */}
//                     {/* <div key={commentOne.id} className="col-12 col-md-5 mt-1"> */}
//                     <div key={commentOne.id} >
//                         {/* treat media list(mentioned before) and treat as list */}
//                         <p>{commentOne.comment}</p>
//                         <p>--{commentOne.author}, {commentOne.date}</p>
//                     </div>
//                 </>
//             );
//         });

//         // console.log(this.state.selectedDish);
//         return (
//             <div>
//                 <div className="row">
//                     <Breadcrumb>
//                         <BreadcrumbItem><Link to='/home'>Home</Link> </BreadcrumbItem>
//                         <BreadcrumbItem><Link to='/menu'>Menu</Link> </BreadcrumbItem>
//                         <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
//                     </Breadcrumb>
//                     <div className="col-12">
//                         <h3>  Menu</h3>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-12 col-md-5 m-1">
//                         <Card>
//                             <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
//                             <CardImgOverlay>

//                             </CardImgOverlay>
//                             <CardBody>
//                                 <CardTitle>{this.props.dish.name}</CardTitle>
//                                 <CardText>{this.props.dish.description}</CardText>
//                             </CardBody>
//                         </Card>
//                     </div>
//                     <div className="col-12 col-md-5 m-1">
//                         <b>Comments</b>
//                         <b>{""}</b>
//                         <div>
//                             {selected}
//                         </div>
//                         <Button type="submit" value="submit" className="bg-primary"
//                             onClick={this.toggleModal}>
//                             Send
//                         </Button>
//                     </div>
//                 </div>

//                 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
//                     <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
//                     <ModalBody>
//                         <LocalForm onSubmit={(values) => this.handleCommentSubmit(values)}>

//                             <Label htmlFor="rating"> Rating</Label>
//                             <Control.select model=".rating" name="rating"
//                                 className="form-control">
//                                 <option>1</option>
//                                 <option>2</option>
//                                 <option>3</option>
//                             </Control.select>



//                             <Label htmlFor="yourName" > Your Name</Label>
//                             <Control.text model=".yourName" id="yourName" name="yourName"
//                                 placeholder="Your Name"
//                                 className="form-control"
//                                 validators={{
//                                     required,
//                                     minLength: minLength(2),
//                                     maxLength: maxLength(10)
//                                 }} />
//                             <Errors
//                                 className="text-danger"
//                                 model=".yourName"
//                                 show="touched"
//                                 messages={{
//                                     required: 'Required',
//                                     minLength: 'Must be greater than 2 letters',
//                                     maxLength: 'Must be 10 letters or less'
//                                 }} />


//                             <Label htmlFor="feedback" > Comment</Label>
//                             <Control.textarea model=".message" id="message" name="message"
//                                 rows="6"
//                                 className="form-control" />

//                             <div class="mt-4 col-md-12">
//                                 {/* add a gap */}
//                             </div>
//                             <Col md={{ size: 10, offset: 2 }}>
//                                 <Button type="submit" color="primary">
//                                     Send
//                                     </Button>
//                             </Col>

//                         </LocalForm>
//                     </ModalBody>
//                 </Modal>

//             </div>

//         );
//     }
// }


export default DishDetail;