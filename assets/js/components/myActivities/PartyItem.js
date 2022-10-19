import React, {useState, useRef, useEffect} from 'react';
import { async } from 'regenerator-runtime';
import { Link } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const PartyItem = ({activity, userData}) => {

    const partyRoute = '/party/show/' + activity.id;
    const invitationalLink = '/game/invite/' + activity.slug;

        const optionsTooltip = (props) => (
          <Tooltip id="options-tooltip" {...props}>
            Options
          </Tooltip>
        );

        const hostTooltip = (props) => (
            <Tooltip id="options-tooltip" {...props}>
              You are host of this game
            </Tooltip>
          );

        const descriptionTooltip = (props) => (
            <Tooltip id="description-tooltip" {...props}>
              {activity.description}
            </Tooltip>
          );

        const lockedTooltip = (props) => (
        <Tooltip id="locked-tooltip" {...props}>
            Game is locked
        </Tooltip>
        );

        const linkTooltip = (props) => (
            <Tooltip id="link-tooltip" {...props}>
                Click to copy invitational link
            </Tooltip>
            );
        
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
                            overlay={hostTooltip}
                        >
                            <i id="{{game.id}}" className="fa-solid fa-user-gear info-icon" data-bs-toggle="modal"  data-bs-target="#adminOptions"> </i>

                        </OverlayTrigger>
                        ) : 
                        (
                           
                            <OverlayTrigger
                            delay={{ show: 250, hide: 400 }}
                            overlay={optionsTooltip}
                        >
                            <i id="{{game.id}}" className="fa-solid fa-gears info-icon" data-bs-toggle="modal" data-bs-title="Options" data-bs-target="#userOptions"></i>
                        </OverlayTrigger>
                        )}

                    </td>
                    <td className="game-table bg-light" >
                        {activity.name}
                    </td>
                    <td className="game-table bg-light host p-0" >
                        <OverlayTrigger
                            delay={{ show: 250, hide: 400 }}
                            overlay={descriptionTooltip}
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
                        {activity.locked
                        ? (
                            <OverlayTrigger
                            delay={{ show: 250, hide: 400 }}
                            overlay={lockedTooltip}
                            >
                                <i className="fa-solid fa-lock info-icon"></i>
                            </OverlayTrigger>

                        ) : (
                            <OverlayTrigger
                            delay={{ show: 250, hide: 400 }}
                            overlay={linkTooltip}
                            >
                                <i 
                                id="{{game.slug}}" 
                                className="fa-solid fa-link info-icon"
                                onClick={copyInviLink}
                                ></i> 
                            </OverlayTrigger>
                            )
                    }
                    </td>
                    <td className="game-table bg-light">
                        XX.XX.XXXX
                    </td>
                    <td className="game-table bg-light">
                        <Link to={partyRoute} className="text-dark text-bold" > show </Link>
                        {/* <a className="text-dark text-bold" href={partyRoute}>Show</a> */}
                    </td>
                </tr>
        </>
        )          

}

export default PartyItem