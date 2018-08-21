import React from 'react';
import IndependentComponent from './IndependentComponent';

const whatWeOffer = (props) => {
  const innerComponents = props.offers.map(offer => <IndependentComponent key = {offer.image} {...offer}/>);
  return (
    <section className="what_we_area row">
          <div className="container">
              <div className="tittle wow fadeInUp">
                  <h2>WHAT WE OFFER</h2>
                  <h4>Planning and designing of roads and bridges</h4>
              </div>
              <div className="row construction_iner">
                  {innerComponents}
              </div>
          </div>
      </section>
  )
}

export default whatWeOffer;
