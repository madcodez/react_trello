import React,{Component} from 'react';
import TrelloList from './TrelloList';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import {connect} from 'react-redux'
import {sort} from '../actions/cardAction'

class App extends Component {
  onDragEnd = ({destination , source ,draggableId,type}) => {
    // the only one that is required
    if(!destination){
      return;
    }

    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    ))

    
  };

      render(){ 
        
        const {lists} = this.props
       // console.log(lists)
        return (
          <DragDropContext onDragEnd={this.onDragEnd}>
            <div className="App">
                  <p>Hello Trello App</p>
                  <Droppable droppableId="all-lists" direction="horizontal"type ="list">
                    {provided => (
                            <div  {...provided.droppableProps}  ref={provided.innerRef} style ={styles.listContainer} >
                            {lists.map((list,index )=> (
                                <TrelloList listId={list.id} key ={list.id}title={list.title} cards={list.cards} index={index}/>
                            )) }
                              {provided.placeholder}
                            <TrelloActionButton list/>
                        </div>
                    )}
              
                  </Droppable>
                
                
                
            
            </div>
        </DragDropContext>
      )
    }
}
const styles = {
  listContainer:{
    display:"flex",
    
  }
}
const mapStateToProps = (state) => ({
    lists : state.lists
})


export default connect(mapStateToProps)(App);
