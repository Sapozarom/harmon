import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Form = ({activeDay}) => {


    const queryClient = useQueryClient();

    const { id }= useParams();
    const [day,setDay] = useState();
    const [month,setMonth] = useState();
    const [year, setYear] = useState();

    const [voteStatus, setVoteStatus] = useState(1);

    useEffect(() => {
        if (typeof activeDay !== 'undefined') {
            const splitedDate = activeDay.date.substring(0,10).split('-');
            setDay(parseInt(splitedDate[2]));
            setMonth(parseInt(splitedDate[1]));
            setYear(splitedDate[0]);
        }
    },[activeDay]);

   
    const checkVoteStatus = (event) => {
        setVoteStatus(event.target.value);
    }

    const dataMutation = useMutation({
        mutationFn: (event) => {
            event.preventDefault();
            console.log(id);
            const formData = new FormData(event.target)
            const response =  fetch('/api/send-vote/'+ id, {
                method: 'POST',
                body: formData,
            })
            return response;
        },
        onSuccess: () => {
            queryClient.invalidateQueries([activeDay.date.substring(0,10)])
        }
    })

    return(
        <>
            <p className="lead">{day}-{month}-{year}</p>
            {typeof activeDay !== 'undefined' ?  activeDay.status : 'status unknown'}
            <form name="vote" method="post" onSubmit={dataMutation.mutate}>
                <div className="row">
                    <div className="col-4"> 
                        {/* <input type="date" class="form-control " id="vote_date" name="vote[date]" value={activeDate} readonly/> */}
                       Your vote
                    </div>
                    <div className="col"> 
                        <div>
                            <select className={voteStatus == 0 ? "form-select bg-red" : "form-select bg-green" } onChange={checkVoteStatus} id="vote_vote" name="vote[vote]">
                                <option className="bg-green" value="1" >I'm in</option>
                                <option className="bg-red" value="0" >I'm out</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div className="row hidden-date">
                    <div className="col-4"> 
                        Date
                    </div>
                    <div className="col"> 
                    
                        <div>
                            <select className="form-select" id="vote_date_month" name="vote[date][month]" readOnly>
                                <option selected value={month}></option>
                            </select>
                            <select className="form-select" id="vote_date_day" name="vote[date][day]" readOnly>
                                <option selected value={day}></option>
                            </select>
                            <select className="form-select" id="vote_date_year" name="vote[date][year]" readOnly>
                                <option selected value={year}></option>
                            </select>
                     
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-4"> 
                        {/* <input type="date" class="form-control " id="vote_date" name="vote[date]" value={activeDate} readonly/> */}
                        Start time
                    </div>
                    <div className="col"> 
                    
                        <div className="form-time-input">
                        <select className="form-select " id="vote_startTime_hour" name="vote[startTime][hour]"><option value="0">00</option><option value="1">01</option><option value="2">02</option><option value="3">03</option><option value="4">04</option><option value="5">05</option><option value="6">06</option><option value="7">07</option><option value="8">08</option><option value="9">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option></select>
                        </div>
                        <div className="form-time-separator">
                        :
                        </div>
                        <div className="form-time-input">
                        <select className="form-select" id="vote_startTime_minute" name="vote[startTime][minute]"><option value="0">00</option><option value="1">01</option><option value="2">02</option><option value="3">03</option><option value="4">04</option><option value="5">05</option><option value="6">06</option><option value="7">07</option><option value="8">08</option><option value="9">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select>          
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-4"> 
                        {/* <input type="date" class="form-control " id="vote_date" name="vote[date]" value={activeDate} readonly/> */}
                        Finish time
                    </div>
                    <div className="col"> 
                    
                        <div className="form-time-input">
                            <select className="form-select" id="vote_finishTime_hour" name="vote[finishTime][hour]"><option value="0">00</option><option value="1">01</option><option value="2">02</option><option value="3">03</option><option value="4">04</option><option value="5">05</option><option value="6">06</option><option value="7">07</option><option value="8">08</option><option value="9">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option></select>
                        </div>
                        <div className="form-time-separator">
                            :
                        </div>
                        <div className="form-time-input">
                            <select className="form-select" id="vote_finishTime_minute" name="vote[finishTime][minute]"><option value="0">00</option><option value="1">01</option><option value="2">02</option><option value="3">03</option><option value="4">04</option><option value="5">05</option><option value="6">06</option><option value="7">07</option><option value="8">08</option><option value="9">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select>          
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-12">
                        <button type="submit" className="btn btn-dark">Save</button>
                    </div>
                </div>
            </form>

        </>

    )
}

export default Form;