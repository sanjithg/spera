import React from 'react';
import WhyChooseUs from './WhyChooseUs';

const ourFeatures = (props) =>{
  const whyChooseUs = props.features.map(feature => <WhyChooseUs key={feature.key} {...feature}/>)
  return (
    <section className="our_feature_area">
            <div className="container">
                <div className="tittle wow fadeInUp">
                    <h2>Our Features</h2>
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
                </div>
                <div className="feature_row row">
                    <div className="col-md-6 feature_img">
                        <img src={require("../../assets/images/ourFeatures/feature-man.jpg")} alt=""/>
                    </div>
                    <div className="col-md-6 feature_content">
                        <div className="subtittle">
                            <h2>WHY CHOOSE US</h2>
                            <h5>There are many variations of passages of Lorem Ipsum available.</h5>
                        </div>
                        {whyChooseUs}
                    </div>
                </div>
            </div>
        </section>
  );
};

export default ourFeatures;
