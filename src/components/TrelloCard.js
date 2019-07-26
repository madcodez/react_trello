import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { Draggable } from 'react-beautiful-dnd';
import CardContent from '@material-ui/core/CardContent';


const TrelloCard = ({card ,index}) => {
  return (
    <Draggable draggableId={String(card.id)} index={index}>
            {(provided, snapshot) => (
            <div 
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                  
                            <Card style = {{ marginBottom : "10px"}}>
                            <CardContent>
                                    <Typography  color="textSecondary" gutterBottom>
                                           {card.text}
                                    </Typography>
                            </CardContent>
                            </Card>
                    
            </div>
            )}
  </Draggable>

  );
}
const styles = {
    cardContainer : {
        marginBottom : 5
    },
    container : {
        marginBottom : 8
    }
}

export default TrelloCard;