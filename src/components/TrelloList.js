import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton'
import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';


const TrelloList = ({title, cards, listId,index}) => {

    
  return (
    <Draggable draggableId={String(listId)} index={index}  >
    {
        provided => (
            <div  ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            
            
                    <Droppable droppableId={String(listId)} >
                    {(provided, snapshot) => (
                    <div 
                        ref={provided.innerRef}
                        //style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                        {...provided.droppableProps}
                        style = {styles.container}
                    >
                
                        <div  >
                            <h2 >{title}</h2> 
                            {cards.map((card,index) => ( <TrelloCard  card={card} key={card.id} index={index}/>))}
                            {provided.placeholder}
                            <TrelloActionButton listId ={listId}/>
                            
                        </div>
                        
                    
                        
                    </div>
                    )}
                </Droppable>
            
            
            </div>
       
        )
    }

    </Draggable>


  );


}

const styles = {
    container : {
        
        backgroundColor : "#ccc",
        borderRadius : 3,
        width : 300,
        padding : "8px",
      //  height : "100%",
        marginRight: "8px"
       
    }
}

export default TrelloList;