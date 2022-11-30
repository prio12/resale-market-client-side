import { useEffect, useState } from "react"

const useBuyers = email =>{
    const [isBuyer, setIsBuyer] = useState(false);
    useEffect(() =>{
        if(email){
            fetch(`https://resale-server-side-seven.vercel.app/users/buyer/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsBuyer(data.isBuyer)
            })
        }
    },[email])
    return [isBuyer]
}
export default useBuyers;