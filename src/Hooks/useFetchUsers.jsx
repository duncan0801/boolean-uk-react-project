import { useEffect } from "react"
import useStore from "../store"

function useFetchUsers() {
    const users = useStore(state => state.users)
    const setUsers = useStore(state => state.setUsers)
    useEffect(()=> {
        fetch(`http://localhost:4000/users`)
        .then(resp => resp.json())
        .then(setUsers)
    }, [])
    return users
}
export default useFetchUsers
