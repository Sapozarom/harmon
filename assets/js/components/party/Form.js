import React, {useEffect, useState} from 'react';

const Form = ({activeDate}) => {
    return(
        <>

            <form name="vote" method="post">
                <div className="row">
                    <div className="col-4"> 
                        <input type="date" class="form-control " id="exampleFormControlInput1" placeholder="h" value={activeDate} readonly/>
                    </div>
                    <div className="col"> 
                        <div>
                            <select className="form-select" id="vote_vote" name="vote[vote]">
                                <option className="bg-green" value="1">I'm in</option>
                                <option className="bg-red" value="0">I'm out</option>
                            </select>
                     
                        </div>
                    </div>
                </div>
{/* 
                <div className="row mt-2">
                    <div className="col-4"> 
                        Start
                    </div>
                    <div className="col"> 
                    <div class="form-time-input">
                        <label for="start-hours" class="form-label" >test</label>
                        <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="h" />
                    </div>
                    <div class="form-time-separator">
                    :
                    </div>

                    <div class="form-time-input">
                        <label for="start-minutes" class="form-label" hidden></label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="m" />
                    </div>
                    </div>

                </div>

                
                <div className="row mt-2">
                    <div className="col-4"> 
                        Finish
                    </div>
                    <div className="col"> 
                    <div class="form-time-input">
                        <label for="start-hours" class="form-label" hidden></label>
                        <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="h" />
                    </div>
                    <div class="form-time-separator">
                    :
                    </div>

                    <div class="form-time-input">
                        <label for="start-minutes" class="form-label" hidden></label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="m" />
                    </div>
                    </div>

                </div> */}

                <div className="row mt-2">
                    <div class="col-12">
                        <button type="submit" class="btn btn-dark">Save</button>
                    </div>
                </div>
            </form>

            {/* <form name="vote" method="post">
            <label for="start-minutes" class="form-label" >asd</label>
            <input type="text" class="form-control"  placeholder="m" id="vote_test" name="vote[test]" />
            <button type="submit" class="btn btn-dark">Save</button>
            </form> */}
        </>

    )
}

export default Form;