// Has access to the same state as the SmurfsList - Application level state through my redux create store
import React from 'react';
import { Button } from 'reactstrap';

// Hooks for redux instead of mapStateToProps
import { useSelector, useDispatch } from 'react-redux';

import { getData } from '../actions';

// rename to LoadButton so that I can actually make SmurfForm
// rest state for get data
const LoadButton = () => {
  const isFetchingData = useSelector(state => state.isFetchingData);

  const dispatch = useDispatch();

  return (
    <>
      {isFetchingData ? (
        <div>**We are fetching data**</div>
      ) : (
        <Button outline color="info" onClick={() => dispatch(getData())}>
        Get data
        </Button>
      )}
    </>
  );
};

export default LoadButton; 


