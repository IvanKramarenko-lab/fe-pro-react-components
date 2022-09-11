import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ title, text }) => {
  return (
    <li className="list__item">
      <h2>{title}</h2>
      <p>{text}</p>
    </li>
  );
};

ListItem.prototype = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ListItem;
