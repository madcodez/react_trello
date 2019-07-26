import React from 'react';
import Card from '@material-ui/core/Card';
//import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button' 
import Textarea from 'react-textarea-autosize'
import {connect} from 'react-redux'
import {addList} from '../actions/listAction'
import {addCard} from '../actions/cardAction'


class TrelloActionButton extends React.Component{
    

    state = {
         formOpen: false
    }
    openForm =() => {
        this.setState({
            formOpen : true
        })
    }
    closeForm=e=>{
        this.setState({
            formOpen : false,
            text: ""
        })
    }

    renderAddButton = () => {
        const {list} = this.props
        const buttonText = list ? "Add another list" : "Add another card"
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor= list ? "white": "inherit"
        const buttonTextBackground = list ? "rgba(0,0,0,.25)" : "inherit"
        return(
            <div onClick={this.openForm} style={{...styles.openformButtonGroup,opacity: buttonTextOpacity, color : buttonTextColor,backgroundColor:buttonTextBackground}}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    } 
    handleChange= (e)=> {
        this.setState({
            text : e.target.value
        })
    }

    handleAddList = (e) => {
      
        const {dispatch} = this.props;
        const {text} = this.state;
       // console.log(text)
        if(text){
           dispatch(addList(text))
        }
        return ;
    }
    handleAddCard= (e) => {
       // console.log(this.props)
        const {dispatch , listId} = this.props;
        const {text} = this.state;
     
        if(text)   
            dispatch(addCard(text,listId))
        
            return;
    }

    renderForm=()=>{
        const {list} = this.props
        const placeholder = list ? "Enter list title... " : "Enter a title for the card";
        const buttonText = list ? "Add List" : "Add Card";

        return(
            
            <div >
                 <Card style={{
                     minWidth : 275,
                     minHeight : 85
                 }}>
                      <Textarea 
                      placeholder={placeholder} 
                      autoFocus 
                      onBlur={this.closeForm}
                      value={this.state.text}
                      onChange={this.handleChange}
                      style={{
                          resize: "none",
                          width: "100%",
                          outline:"none",
                          border:"none"
                    }}/>
                 </Card>
                 <div style = {styles.formButtonGroup}>
                 <Button varient ="contained"style={{color :  "white", backgroundColor : "#0341fc"}} onMouseDown={list ? this.handleAddList : this.handleAddCard}>
                    {buttonText}
                </Button>
                <Icon style={{marginLeft: 10,cursor : "pointer"}}>close</Icon>
                 </div>
               
            </div>
        )




    }
     render(){
         return this.state.formOpen ?this.renderForm() :  this.renderAddButton();
     }

  
}
const styles = {
    openformButtonGroup :{
        display : "flex",    
        alignItems:"center",
        cursor:"pointer",
        borderRadius:5,
        height:40,
        width :275
    
    },
    formButtonGroup:{
        marginTop : 10,
        display : "flex",
        alignItems:"center"

    }

}

export default connect()(TrelloActionButton)