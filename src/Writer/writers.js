import React, { useState, useEffect } from 'react';
import Writer from './writer';
import './writers.css';


const Writers = (props) => {
    useEffect(()=>{
        props.loadData();
    }, []);
    
    const [ lencol ] = useState(3);
            
    const data_split = (data) => {
        let data_arr = []
        const final_row = parseInt(data.length / lencol, 10) + 1;

        for(var i = 0; i < final_row; i++){
            data_arr = data_arr.concat({
                id: "row_"+i,
                data: data.slice(i*lencol, (i+1)*lencol)});
        }
        
        return data_arr
    }

    return(
        <div className="writers-container">
            <div className="writers-table">
                    {data_split(props.userData).map( (row) => {
                        return(<div className="writers-row" key={row.id}>{row.data.map(
                            (col, idx) => {
                                return(
                                <div className={"writers-td"} key={col.id}>
                                    <div className="writers-td-inner">
                                        <Writer writer_name={col.username} writer_link={col.link} writer_follower={col.followers} writer_img={col.img}/>
                                    </div>
                                </div>)
                            }
                        )}</div>)
                    })}
            </div>
        </div>
    );
}

export default Writers;