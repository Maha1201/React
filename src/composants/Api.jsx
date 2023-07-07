import { useState, useEffect } from 'react'

function Api() {
    const [prods, setProds] = useState([])

    const fetchProd = () => {
        fetch("https://maha.amorce.org/api/produits")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setProds(data['hydra:member']);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchProd()
    }, [])

    return (
        <>
            <ul>
                {prods.map((prod) => (
                    <li key={prod.id}>
                        {prod.nom}<br></br>
                        {prod.prix}<br></br>
                        {prod.id}<br></br>
                        {prod.rubriques.map((rub => (
                            <div key={rub.id}>
                                {rub.nom}
                            </div>
                        )))}<br></br>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Api