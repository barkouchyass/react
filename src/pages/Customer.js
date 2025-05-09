import { Link, useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import NotFound from "../components/NotFound";
import { baseUrl } from "../shared";
export default function Customer() {
    const { id } = useParams();
    const [customer, setCustomer] = useState();
    const [notFound, setNotFound] = useState();
    const navigate = useNavigate()
    useEffect(() => {
        const url = baseUrl + "api/customers/" + id;
        fetch(url)
            .then((response) => {
                if (response.status === 404) {
                    setNotFound(true);
                }
                return response.json();
            })
            .then((data) => {
                setCustomer(data.customer);
            })
    }, [])

    return (
        <>
            {notFound ? <p>the with id {id} was not found</p> : null}
            {customer ? <div>
                <p> {customer.id} </p>
                <p> {customer.name} </p>
                <p> {customer.industry} </p>
            </div> : null}
            <button
                onClick={(e) => {
                    const url = baseUrl + 'api/customers/' + id;
                    fetch(url, {method :'DELETE', headers:{
                        'Content_Type' : 'application/json',
                    }})
                    .then((response)=>{
                        if(!response.ok){
                            throw new Error("something went wrong");
                        }
                        navigate('/customers');
                    })
                    
                    .catch((e)=>{
                        console.log(e);
                    })
                }}
            >Delete</button>
            <br />
            <Link to="/customers">Go back</Link>
        </>
    )
}