import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Contact from './ContactComponent';
import { connect } from 'react-redux'

// Redux
const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

class Main extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        const HomePage = () => {
            // console.log(this.state.promotions)
            return (
                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishwithID = ({ match }) => {
            return (
                <DishDetail dish={this.props.dishes.filter((dish) => (dish.id === parseInt(match.params.dishID, 10)))[0]} comments={this.props.comments.filter((comment) => (comment.dishId === parseInt(match.params.dishID, 10)))} />
            );
        }


        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishID' component={DishwithID} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };



    // render() {
    //     if (this.state.selectedDish == null) {
    //         return (
    //             <div>
    //                 <Header />
    //                 <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
    //                 {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
    //                 <Footer />
    //             </div>
    //         );
    //     }
    //     else {
    //         // console.log(this.state.selectedDish)
    //         return (
    //             <div>
    //                 <Header />
    //                 <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
    //                 <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
    //                 <Footer />
    //             </div>
    //         );
    //     }
    // }
}

export default withRouter(connect(mapStateToProps)(Main));