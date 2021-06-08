
import Axios from 'axios';
import React, {Component,Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import ApiURL from '../../api/ApiURL';
import SliderLoader from '../placeholder/SliderLoader';
import MegaMenu from "./MegaMenu";
import SliderHome from "./SliderHome";
export default class HomeTop extends Component {

constructor(){
    super();
    this.state={
         MenuData: [],
         sliderData:[],
         isLoading:"TopSection",
         maindiv:"d-none"
        }
}

componentDidMount(){
    Axios.get(ApiURL.categoryGetData).then(response=>{
        this.setState({MenuData:response.data})
    }).catch(error=>{

    });

    Axios.get(ApiURL.sliderInfo).then(response=>{
        this.setState({sliderData:response.data,isLoading:"d-none",maindiv:""})
    }).catch(error=>{

    });
}






    render() {
        return (
            <Fragment>

                <SliderLoader isLoading={this.state.isLoading}/>
            <div maindiv={this.state.maindiv}>
            <Container className="p-0 TopSection  overflow-hidden" style={{ marginTop: '3.5rem'}} fluid={true}>
                <Row className="p-0 m-0 overflow-hidden">
                    <Col className="p-0 m-0 overflow-hidden" lg={3} md={3} sm={12}>
                            <MegaMenu data={this.state.MenuData}/>
                    </Col>
                    <Col className="p-0 m-0 overflow-hidden" lg={9} md={9} sm={12}>
                            <SliderHome data={this.state.sliderData}/>
                    </Col>
                </Row>
            </Container>
            </div>
        </Fragment>
        )
    }
}
