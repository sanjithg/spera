import React from 'react';
import WhyChooseUs from './WhyChooseUs';

const ourFeatures = (props) =>{
  const whyChooseUs = props.features.map(feature => <WhyChooseUs key={feature.key} {...feature}/>)
  return (
    <section className="our_feature_area">
            <div className="container">
                <div className="tittle wow fadeInUp">
                    <h2>Our Features</h2>
                    <h4>Detailed Engineering Services for Highway & Bridge Projects</h4>
                </div>
                <div className="feature_row row">
                    <div className="col-md-6 feature_img">
                        <img src={require("../../assets/images/ourFeatures/feature-man.jpg")} alt=""/>
                    </div>
                    <div className="col-md-6 feature_content">
                        <div className="subtittle">
                            <h2>WHY CHOOSE US</h2>
                            <h5> We will operate and represent the company in a professional and responsible manner at all times which delivering quality products and services.</h5>
                        </div>
                        {whyChooseUs}
                    </div>
                </div>
            </div>
        </section>
  );
};

export default ourFeatures;
