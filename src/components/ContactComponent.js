import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Row, Col } from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form'


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)
const isNumber = (val) => !isNaN(Number(val))
const validEmail = (val) => /^[A-Z0-9._%+=]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)


class Contact extends Component {
    constructor(props) {
        super(props);


        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        console.log("Current State is " + JSON.stringify(event));
        alert("Current State is " + JSON.stringify(event));
    }


    render() {
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
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row classname="form-group">
                                <Label htmlFor="firstname" className="col-md-2">Firstname</Label>
                                <Col classname='col-md-4'>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(10)
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 3 letters',
                                            maxLength: 'Must be 10 letters or less'
                                        }} />
                                </Col>
                                <Label htmlFor="lastname" className="col-md-2">Lastname</Label>
                                <Col classname='col-md-4'>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(10)
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 3 letters',
                                            maxLength: 'Must be 10 letters or less'
                                        }} />
                                </Col>
                            </Row>

                            <Row classname="form-group">
                                <Label htmlFor="telnum" className="col-md-2">Tel.</Label>
                                <Col classname='col-md-10'>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel."
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(10),
                                            maxLength: maxLength(13),
                                            isNumber
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 10 digits',
                                            maxLength: 'Must be 13 digits or less',
                                            isNumber: 'Must be a phone number, without +'
                                        }} />
                                </Col>
                            </Row>

                            <Row classname="form-group">
                                <Label htmlFor="email" className="col-md-2">Email</Label>
                                <Col classname='col-md-10'>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required,
                                            validEmail
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid email address'
                                        }} />
                                </Col>
                            </Row>

                            <Row classname="form-group">
                                <Col md={{ size: 6, offset: 2 }}>
                                    <div className="form-check" >
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree" id="agree"
                                                classname="form-check-input"
                                            /> {"  "}
                                            <strong> May I contact?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row classname="form-group">
                                <Label htmlFor="feedback" className="col-md-2">Your Feedback</Label>
                                <Col classname='col-md-10'>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>

                            <Row classname="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;