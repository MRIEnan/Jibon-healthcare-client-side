import {useState,useEffect} from 'react';

const useServices = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://whispering-oasis-97191.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setServices(data);
        });
    },[]);
    return {services}
}

export default useServices;