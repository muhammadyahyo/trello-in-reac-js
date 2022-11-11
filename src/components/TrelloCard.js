import React, { Component } from 'react';
import {Card, Typography, CardContent} from '@material-ui/core'
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components'

const CardContainer = styled.div`
    margin-bottom: 8px;
`

class TrelloCard extends Component {
    render() {
        const {text, id, index} = this.props
        return (
            <Draggable draggableId={String(id)} index={index}>
                
                    {provided => (
                        <CardContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            
                                <Card  sx={{ minWidth: 275 }}>
                                <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {text}
                                        </Typography>
                                </CardContent>         
                                </Card>
                            
                        </CardContainer>
                    )}
                    
                
            </Draggable>
        );
    }
}


export default TrelloCard;