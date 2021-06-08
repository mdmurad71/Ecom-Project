import React, {Component,Fragment} from 'react';
import Slider from "react-slick";
import {Link} from "react-router-dom";

class SliderHome extends Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed:3000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

          let sliderData= this.props.data;
          let sliderView= sliderData.map((sliderList,i)=>{

          return  <div className="container-fluid bg-light overflow-hidden w-100 shadow-sm">
            <div style={{backgroundColor:sliderList.bg_color}}>
            <div className="row card-body" style={{height:"380px"}}>
               <div className="col-md-6 sliderTitleDiv text-center ">

                 <h1 style={{color:sliderList.text_color}} className="sliderTitle mt-5">{sliderList.title}</h1>
                 <h6 style={{color:sliderList.text_color}} className="sliderSubTitle">{sliderList.sub_title}</h6>
                 <Link to={"productDetails/"+sliderList.product_code} className="btn site-btn px-5">More Info</Link>
               </div>

               <div className="col-md-6 text-center">
               <img className="slider-img mt-5" src="/images/laptop.jpg" alt="laptop.jpg"></img>

               </div>
               
               </div> 

               </div>
            </div>

          });

    



          return (
           
              <Slider {...settings}>



                {sliderView}

              {/* <div className="container-fluid bg-secondary overflow-hidden w-100 shadow-sm">
               <div className="row card-body" style={{height:"380px"}}>
                 <div className="col-md-6 sliderTitleDiv text-center">

                   <h1 className="sliderTitle text-white mt-5">Microsoft surface 3</h1>
                   <h6 className="sliderSubTitle text-white">Fuel your orginality with the
                   latest from surface, incliding the new everyday, everywhwre</h6>
                   <button className="btn site-btn px-5">More Info</button>
                 </div>

                 <div className="col-md-6 text-center">
                 <img className="slider-img mt-5" src="/images/laptop.jpg" alt="laptop.jpg"></img>

                 </div>
                 
                 </div> 


              </div> */}

         



{/* 
                <div>
                  <img className="slider-img" src="/images/pic24.jpg" alt="pic4.jpg"></img>
                </div>
                <div>
                <img className="slider-img" src="/images/pic25.jpg" alt="pic4.jpg"></img>
                </div>
                <div>
                <img className="slider-img" src="/images/pic26.jpg" alt="pic4.jpg"></img>
                </div>
                <div>
                <img className="slider-img" src="/images/pic23.jpg" alt="pic4.jpg"></img>
                </div> */}
                
              </Slider>
            
        );
    }
}

export default SliderHome;