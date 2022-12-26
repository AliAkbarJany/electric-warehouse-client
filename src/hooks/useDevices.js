import { useEffect, useState } from "react"

const useDevices = () => {
    
    const [devices, setDevices] = useState([])

    useEffect(() => {
        fetch('https://electric-warehose-server.onrender.com/devices')
            .then(res => res.json())
            .then(data => setDevices(data))
    }, [])
    return [devices,setDevices]
}
export default useDevices;