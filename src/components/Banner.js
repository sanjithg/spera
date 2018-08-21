import React from 'react';

const banner = (props) => {
  const links = props.links.map(link => (<li>
      <a key={link.link} className={link.active} href={link.link}>{link.text}</a>
    </li>));

  return(
      <section className="banner_area" data-stellar-background-ratio="0.5">
        <h2>{props.header}</h2>
        <ol className="breadcrumb">
            {links}
        </ol>
      </section>
  )
};

export default banner;
