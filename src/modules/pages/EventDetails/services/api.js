import axios from "axios";
import { backend, eventRoutes } from "../../../../common/constants";

export const getEventDetials = async (
    depId,
    setEvent
)=>{
    try {
        const response = await axios.get(backend + eventRoutes.eventRegisterList+depId);
        console.log(response)
        setEvent(response?.data?.data)
    } catch (error) {
        console.log(error)
    }
}