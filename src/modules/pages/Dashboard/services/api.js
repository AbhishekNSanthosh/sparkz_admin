import axios from "axios"
import { backend, eventRoutes } from "../../../../common/constants"

export const getEventList = async (
    setEventList
) => {
    try {
        const response = await axios.get(backend + eventRoutes.eventList);
        console.log(response)
        setEventList(response?.data?.data)
    } catch (error) {
        console.log(error)
    }
}

export const getEventListByDep = async (
    setEventList,
    dep
) => {
    try {
        const response = await axios.get(backend + eventRoutes.eventLisByDep+dep);
        console.log(response)
        setEventList(response?.data?.data)
    } catch (error) {
        console.log(error)
    }
}

export const getEventStats = async (
    setStats
) => {
    try {
        const response = await axios.get(backend + eventRoutes.eventCount);
        console.log(response)
        setStats(response?.data?.data)
    } catch (error) {
        console.log(error)
    }
}
