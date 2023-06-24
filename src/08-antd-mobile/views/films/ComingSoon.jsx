import React, {useEffect, useState} from 'react';
import axios from "axios";

export default function ComingSoon() {
    const[list, setList] = useState([])
    useEffect(() => {
        axios({
            url: "/ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=91BA24B00F8011EE979C0D63FA4C2B44130CE5E865E74D628EE0FE6F33618384&optimus_risk_level=71&optimus_code=10"
        }).then(res => {
            setList(res.data["coming"])
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            <ul>
                {list.map(item => <li key={item["id"]}>{item["nm"]}</li> )}
            </ul>
        </div>
    );
}

