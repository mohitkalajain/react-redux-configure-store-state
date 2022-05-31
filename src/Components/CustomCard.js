import React from "react";
import { useSelector } from "react-redux";
import { Card,  Image } from 'semantic-ui-react'
function CustomCard() {
  const { name, bio, designation,country } = useSelector(
    (state) => {
      return state;
    }
  );
  return (
    <Card className='centered'>
    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{designation}</Card.Meta>
      <Card.Description>
        {bio}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        {country}
      </a>
    </Card.Content>
    
  </Card>
  );
}

export default CustomCard