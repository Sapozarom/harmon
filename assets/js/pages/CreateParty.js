import { useMutation, useQueries, useQueryClient } from '@tanstack/react-query';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const CreateParty = () => {

    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const createGameMutation = useMutation({
        mutationFn: (event) => {
            event.preventDefault();
            const formData = new FormData(event.target)
            const response =  fetch('/api/game/create', {
                method: 'POST',
                body: formData,
            })
            return response;
        },
        onSuccess: () => {
            // queryClient.invalidateQueries(['party-list']);
            queryClient.invalidateQueries(['party-list']);
            navigate('/my-activities')
            
            // console.log('Party was created!');
        }
    })

    return(
        <>  
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-9 col-auto bg-light">
                    <div className="row justify-content-center">
                        <h1 className="display-6 text-center">Create Party</h1>

                        <form name="game" method="post" onSubmit={createGameMutation.mutate}>
                            <div id="game">
                                <div className="mb-3">
                                    <label htmlFor="game_name" className="form-label">Party name:</label>
                                    <input type="text" id="game_name" name="game[name]" className="form-control" />        
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="game_title" className="form-label">Activity name:</label>
                                    <input type="text" id="game_title" name="game[title]" className="form-control" />        
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="game_description" className="form-label">Descriprion:</label>
                                    <textarea id="game_description" name="game[description]" className="form-control" >
                                    </textarea>        
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="game_minSessionLength" className="form-label">Minimal session length (minutes):</label>
                                    <input type="text" id="game_minSessionLength" name="game[minSessionLength]" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <button type="submit" id="game_Save" name="game[Save]" className="btn btn-dark btn-lg btn">Save</button>
                                </div>
                                {/* <input type="hidden" id="game__token" name="game[_token]" value="58bd8.xMaW7Frm7Ruy2EicrL_VaKMgDEu0miQRMvPQg4mpOjU.hanVqx-NnlmE4A7Dmo2hMpNnZRjmqhdce7Kk6rHkbnSj9qegFKKsduGNBQ"> */}
                            </div>
                        </form>
                    </div> 
                </div>
            </div>
        </div>
            
        </>
    )
}

export default CreateParty;