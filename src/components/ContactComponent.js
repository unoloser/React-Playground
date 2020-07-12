import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form'

class Contact extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     firstname: '',
        //     lastname: '',
        //     telnum: '',
        //     email: '',
        //     agree: false,
        //     contactType: 'Tel.',
        //     message: '',
        //     touched: {
        //         firstname: false,
        //         lastname: false,
        //         telnum: false,
        //         email: false
        //     }
        // }

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);
        this.validate = this.validate.bind(this);
    }

    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.check : target.value;
    //     const name = target.name;

    //     this.setState({
    //         [name]: value
    //     })
    // }

    handleSubmit(event) {
        console.log("Current State is " + JSON.stringify(this.state));
        alert("Current State is " + JSON.stringify(this.state));
        event.preventDefault();
    }

    // handleBlur = (field) => (evt) => {
    //     this.setState({
    //         touched: { ...this.state.touched, [field]: true }
    //     })
    // }

    // validate(firstname, lastname, email, telnum) {
    //     const error = {
    //         firstname: '',
    //         lastname: '',
    //         telnum: '',
    //         email: ''
    //     };

    //     if (this.state.touched.firstname && firstname.length < 3)
    //         error.firstname = "Firstname should be longer than 3 chars"

    //     const reg = /^\d+$/;
    //     if (this.state.touched.telnum && !reg.test(telnum))
    //         error.telnum = "Only number permitted in tel."

    //     return error;
    // }

    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.email, this.state.telnum)
        return (
            <div className="container" >
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div class="mt-4 col-md-12">
                    {/* add a gap */}
                </div>
                <div className='row row-content'>
                    <div className="col-12">
                        <h3>Send your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" className="col-md-2">Firstname</Label>
                                <Col classname='col-md-4'>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur("firstname")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                                <Label htmlFor="lastname" className="col-md-2">Lastname</Label>
                                <Col classname='col-md-4'>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="telnum" className="col-md-2">Tel.</Label>
                                <Col classname='col-md-10'>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel."
                                        value={this.state.telnum}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onBlur={this.handleBlur("telnum")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" className="col-md-2">Email</Label>
                                <Col classname='col-md-10'>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" id="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {"  "}
                                            <strong> May I contact?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="feedback" className="col-md-2">Your Feedback</Label>
                                <Col classname='col-md-10'>
                                    <Input type="textarea" id="message" name="message"
                                        rows="6"
                                        value={this.state.message}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;