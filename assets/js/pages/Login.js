import { useMutation, useQueries, useQueryClient } from '@tanstack/react-query';
import React, {useState} from 'react';


const Login = () => {

    const queryClient = useQueryClient();
    
    const loginMutation = useMutation({
        mutationFn: (event) => {
            event.preventDefault();
            // console.log(id);
            const formData = new FormData(event.target)
            const response =  fetch('/api/login', {
                method: 'POST',
                body: formData,
            })
            return response;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['user']);
            console.log('YAY!');
        }
    })

    return(
        <>  
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-5 bg-light pb-3">
                        <h1 className="display-5 mb-4">Login</h1>
                                    
                        <form 
                        // onSubmit={loginMutation.mutate} 
                        method="post"
                        action="/login">
                            <label htmlFor="username" className="form-label mt-3">Email:</label>
                            <input className="form-control" type="text" id="username" name="_username" defaultValue="" />

                            <label className="form-label mt-3" htmlFor="password">Password:</label>
                            <input className="form-control" type="password" id="password" name="_password" />

                            <button className="btn btn-dark mt-3" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Login;