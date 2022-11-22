import React, {useState, useRef, useEffect} from 'react';
import { async } from 'regenerator-runtime';
import { Link } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import MemberOptions from './MemberOptions'


const PartyItem = ({activity, userData}) => {

    const [showMemberOptions, setShowMemberOptions] = useState(false);

    const handleCloseMemberOpt = () => setShowMemberOptions(false);
    const handleShowMemberOpt = () => setShowMemberOptions(true);



    const partyRoute = '/party/show/' + activity.id;
    const invitationalLink = '/game/invite/' + activity.slug;
        
        const copyInviLink = () => {
            // HTTP
            let textField = document.createElement('textarea')
            textField.innerText = invitationalLink
            document.body.appendChild(textField)
            textField.select()
            document.execCommand('copy')
            textField.remove()
            alert(invitationalLink);
        }
    return (
            <>
                <tr>  
                    <td  className="game-table host bg-light p-0">
                        {activity.hosted == userData ? 
                        (
                            <OverlayTrigger
                            delay={{ show: 250, hide: 400 }}
                            overlay={          
                                <Tooltip id="host-tooltip" >
                                    You are host of this party
                                </Tooltip>
                                }
                        >
                            <i id="{{game.id}}" className="fa-solid fa-user-gear info-icon" data-bs-toggle="modal"  data-bs-target="#adminOptions"> </i>

                        </OverlayTrigger>
                        ) : 
                        (
                           
                            <OverlayTrigger
                            delay={{ show: 250, hide: 400 }}
                            overlay={          
                                <Tooltip id="options-tooltip" >
                                    Options
                                </Tooltip>
                                }
                        >
                            <i id="{{game.id}}" className="fa-solid fa-gears info-icon" onClick={handleShowMemberOpt}></i>
                        </OverlayTrigger>
                        )}

                    </td>
                    <td className="game-table bg-light" >
                        {activity.name}
                    </td>
                    <td className="game-table bg-light host p-0" >
                        <OverlayTrigger
                            delay={{ show: 250, hide: 400 }}
                            overlay={          
                                <Tooltip id="options-tooltip" >
                                    {activity.description}
                                </Tooltip>
                                }
                        >
                            <i className="fa-solid fa-circle-info info-icon" ></i>
                        </OverlayTrigger>
                    </td>
                    <td className="game-table bg-light">
                        {activity.title}
                    </td>
                    <td className="game-table bg-light">
                        {activity.players}
                    </td>
                    <td className="game-table bg-light">
                        {/* PARTY STATUS */}
                        {activity.locked
                        ? (
                            <OverlayTrigger
                            delay={{ show: 250, hide: 400 }}
                            overlay={          
                                <Tooltip id="options-tooltip" >
                                    This party is locked
                                </Tooltip>
                                }
                            >
                                <i className="fa-solid fa-lock info-icon"></i>
                            </OverlayTrigger>

                        ) : (
                            <OverlayTrigger
                            delay={{ show: 250, hide: 400 }}
                            overlay={          
                                <Tooltip id="options-tooltip" >
                                    Options
                                </Tooltip>
                                }
                            >
                                <i 
                                id="{{game.slug}}" 
                                className="fa-solid fa-link info-icon"
                                onClick={copyInviLink}
                                ></i> 
                            </OverlayTrigger>
                            )
                        }

                        {activity.isActive
                        ? (
                            <OverlayTrigger
                            delay={{ show: 250, hide: 400 }}
                            overlay={          
                                <Tooltip id="options-tooltip" >
                                    You are ACTIVE member
                                </Tooltip>
                                }
                            >
                                <i className="fa-solid fa-person-running status-spacer"></i>
                            </OverlayTrigger>

                        ) : (
                            <OverlayTrigger
                            delay={{ show: 250, hide: 400 }}
                            overlay={          
                                <Tooltip id="options-tooltip" >
                                    You are INACTIVE member
                                </Tooltip>
                                }
                            > 
                            <i className="fa-solid fa-bed status-spacer" ></i>
                      
                            </OverlayTrigger>
                            )
                        }

                    </td>
                    <td className="game-table bg-light">
                        comming soon...
                    </td>
                    <td className="game-table bg-light">
                        <Link to={partyRoute} className="text-dark text-bold" > show </Link>
                        {/* <a className="text-dark text-bold" href={partyRoute}>Show</a> */}
                    </td>
                </tr>

                <MemberOptions 
                showMemberOptions = {showMemberOptions}
                handleCloseMemberOpt = {handleCloseMemberOpt}
                partyId = {activity.id} 
                activeMember = {activity.isActive}
                />
        </>
        )          

}

export default PartyItem