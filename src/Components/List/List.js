import React from 'react'

import './List.css'
import Card from '../Card/Card'
import backlogicon from "../../Assets/Images/Backlog.svg";
import todoicon from "../../Assets/Images/To-do.svg";
import doneicon from "../../Assets/Images/Done.svg";
import progressicon from "../../Assets/Images/in-progress.svg";
import cancelicon from "../../Assets/Images/Cancelled.svg";
import Icon0 from '../../Assets/Images/No-priority.svg'; // Adjust the path and filename as needed
import Icon1 from '../../Assets/Images/low.svg';
import Icon2 from '../../Assets/Images/medium.svg';
import Icon3 from '../../Assets/Images/high.svg';
import Icon4 from '../../Assets/Images/urgent.svg';
let cardCount = 0;

export default function List(props) {
  return (
    <>
        <div className="list-container">
            <div className="list-header">
                <div className="list-header-left">
                    {
                        {
                            'status' : <>{
                                {
                                    'Backlog': <div className="list-icon">
                                      <img src={backlogicon} alt="icon" />
                                    </div>,
                                    'Todo': <div className="list-icon">
                                      <img src={todoicon} alt="icon" />
                                    </div>,
                                    'In progress': <div className="list-icon">
                                      <img src={progressicon} alt="icon" />
                                    </div>,
                                    'Done': <div className="list-icon">
                                       <img src={doneicon} alt="icon" />
                                    </div>,
                                    'Cancelled': <div className="list-icon">
                                     <img src={cancelicon} alt="icon" />
                                    </div>
                                }[props.listTitle]
                            } </>,
                            'user': <></>,
                            'priority' : <>{
                                {
                                  0: <div className="card-tag-icon"><img src={Icon0} alt="No Priority" width={22} height={22} /></div>,
                                  1: <div className="card-tag-icon"><img src={Icon1} alt="Low Priority" width={22} height={22} /></div>,
                                  2: <div className="card-tag-icon"><img src={Icon2} alt="Medium Priority" width={22} height={22} /></div>,
                                  3: <div className="card-tag-icon"><img src={Icon3} alt="High Priority" width={22} height={22} /></div>,
                                  4: <div className="card-tag-icon"><img src={Icon4} alt="Urgent" width={22} height={22} /></div>,

                                }[props.listTitle]
                            } </>
                        }[props.groupValue]
                    }

                    <div className="list-title">
                        {
                            {
                                'priority' : <>{
                                                props.priorityList
                                                    ? props.priorityList.map(priorityProperty => (
                                                        priorityProperty.priority === props.listTitle
                                                        ? <>{priorityProperty.name}</>
                                                        : null
                                                    ))
                                                    : null
                                                }</>,
                                'status' : <>{props.listTitle}</>,
                                'user' : <>{props.listTitle}</>
                            }[props.groupValue]
                        }
                    </div>
                    <div className="list-sum">{cardCount}</div>
                </div>
                <div className="list-header-right">
                    <div className="list-add-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z"/></svg>
                    </div>
                    <div className="list-option-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"><path fill="currentColor" d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm-7 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 3 7.8zm14 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 17 7.8z"/></svg>
                    </div>
                </div>
            </div>

            <div className="list-card-items">
                {
                    props.ticketDetails.map(ticket => {
                        if(ticket.status === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.priority === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.userObj.name === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        return null
                    }, cardCount = 0)

                }
            </div>
        </div>
    </>
  )
}
