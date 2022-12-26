import { useEffect, useState } from "react"

const useDevices = () => {
    
    const [devices, setDevices] = useState([])

    useEffect(() => {
        fetch('https://safe-crag-17725.herokuapp.com/devices')
            .then(res => res.json())
            .then(data => setDevices(data))
    }, [])
    return [devices,setDevices]
}
export default useDevices;