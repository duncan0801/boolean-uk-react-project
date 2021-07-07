import { useEffect } from "react"
import useStore from "../store"

function useFetchUsers() {
    const users = useStore(state => state.users)
    const setUsers = useStore(state => state.setUsers)
    useEffect(()=> {
        return fetch(`http://localhost:4000/users?_embed=accounts`)
        .then(resp => resp.json())
        .then(setUsers)
    }, [])
}
export default useFetchUsers
