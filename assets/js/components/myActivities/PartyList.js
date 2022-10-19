import React, {useState, useRef, useEffect} from 'react';
import PartyItem from './PartyItem';

const PartyList = ({userData}) => {

    
    const [activityList, setActivityList] = useState([]);

    const getActivityList = async () => {
        const route = '/api/my-activities';
        const response = await fetch(`${route}`);
        const data = await response.json();

        setActivityList(data.activityTable);
    }

    useEffect(() => {
        getActivityList();
    },[]);
        
    return (
        <>
            <table className="table party-list bg-dark bg-gradient">
                <thead>
                    <tr>
                        <th className="game-table-header host bg-dark bg-gradient" scope="col"></th> 
                        <th className="game-table-header bg-dark bg-gradient" scope="col">Party</th>
                        <th className="game-table-header host bg-dark bg-gradient" scope="col"></th>
                        <th className="game-table-header bg-dark bg-gradient" scope="col">Activity</th>
                        <th className="game-table-header bg-dark bg-gradient" scope="col">Members</th>
                        <th className="game-table-header bg-dark bg-gradient" scope="col">Status</th>
                        <th className="game-table-header bg-dark bg-gradient" scope="col">Next session</th>
                        <th className="game-table-header bg-dark bg-gradient" scope="col">Link</th>
                    </tr>
                </thead>
                <tbody>
                {activityList.map((activity) => (
                    <PartyItem key={activity.id} activity={activity} userData={userData}/>
                ))}
                 
                </tbody>
            </table>
        </>
        )          

}

export default PartyList