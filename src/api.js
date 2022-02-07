import axios from 'axios';

export const getShips = async () =>{
    axios.get("/api/ships");
} 