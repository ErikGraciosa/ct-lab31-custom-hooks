import React from 'react';
import PropTypes from 'prop-types';
import DetailsCard from '../../components/detailsCard/DetailsCard';
import { useDetails } from '../../hooks/characters';

function Details({ match }) {
  const { loading, info } = useDetails(match.params.id);
  
  if(loading) return <h1>Still loading details info</h1>;
  return (
    <div>
      <DetailsCard {...info}/>
    </div>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Details;
