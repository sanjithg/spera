import React from 'react';
import Feature from './Feature.js';

const features = (props) => {
  const features = props.features.map(feature => <Feature key = {feature.key} {...feature}/>);

  return (
    <section className="professional_builder row">
      <div className="container">
         <div className="row builder_all">
              {features}
         </div>
      </div>
    </section>)
};

export default features;
