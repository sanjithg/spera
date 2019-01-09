import React from 'react';
import Service from './Service';
import ServiceHeading from './ServiceHeading';

const ourServices = (props) => {
  const services = props.services.map(service => {
    if(service.show){
      return(<Service key={service.image} {...service}/> );
    }}
  );
  const headings = props.headings.map(heading => <ServiceHeading
    key={heading}
    heading={heading}
    clicked = {props.clicked}
    active={(heading === props.active)? 'active': null}
    />
  );

  return (<section className="our_services_area">
        <div className="container">
            <div className="tittle wow fadeInUp">
                <h2>Our Services</h2>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
            </div>
            <div className="portfolio_inner_area">
                <div className="portfolio_filter">
                    <ul>
                        {headings}
                    </ul>
                </div>
                <div className="portfolio_item">
                <div className="grid-sizer"></div>
                   {services}
                </div>
            </div>
        </div>
    </section>);
};

export default ourServices;
