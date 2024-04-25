import axios from "axios"
import { backend, eventRoutes } from "../../../../common/constants"

export const getEventList = async (
    setEventList
) => {
    try {
        const response = await axios.get(backend+eventRoutes.eventList);
        console.log(response)
        setEventList(response?.data?.data)
    } catch (error) {
        console.log(error)
    }
}