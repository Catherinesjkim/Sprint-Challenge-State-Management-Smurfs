// we are going to use Redux hooks
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postData } from '../actions';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const SmurfForm = () => {
  const dispatch = useDispatch();
  const [ addSmurf, setAddSmurf ] = useState({
    name: '',
    age: '',
    height: ''
  })

  const handleChanges = e => {
    setAddSmurf({ ...addSmurf, [ e.target.name ]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postData(addSmurf));
    setAddSmurf({
      name: '',
      age: '',
      height: '',
      id: Date.now()
    })}

    const center = {
      margin: '1% auto'
    }

    const input = {
      fontStyle: 'italic'
    }

    // added a form to collect info fro a new smurf
    return (
      <>
        <Form inline onSubmit={handleSubmit}>
          <FormGroup style={center}>
            <Input
              style={input}
              type="text"
              name="name"
              placeholder="smurf name"
              onChange={handleChanges}
            />
            <Input
              style={input}
              type="text"
              name="age"
              placeholder="smurf age"
              onChange={handleChanges}
            />
            <Input
              style={input}
              type="text"
              name="height"
              placeholder="smurf height"
              onChange={handleChanges}
            />
            <Button outline color="info">
              Add Smurf
            </Button>
          </FormGroup>
        </Form>
      </>
    );
}

export default SmurfForm;