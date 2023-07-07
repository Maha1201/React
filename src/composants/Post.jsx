import React, { useState, useEffect } from "react";

function Creer() {
    const [posts, setPosts] = useState({
        nom: "xxx",
        description: "",
        prix: "15",
        photo: "sans",
        rubriques: [
            "/api/rubriques/1"
        ],
        quantiteTotale: 10
    });

    const [rubs, setRubs] = useState([])

    const fetchRub = () => {
        fetch("https://maha.amorce.org/api/rubriques")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setRubs(data['hydra:member']);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchRub()
    }, [])

    const postProd = () => {
        fetch('https://maha.amorce.org/api/produits', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(posts)
        })
            .then(function (response) {
                console.log(response.json());
            })
            .then((data) => {
                console.log(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handle = (e) => {
        let n = e.target.id;
        let value = e.target.value;
        let tmp = { ...posts };
        tmp[n] = value
        setPosts(tmp);
    }

    const handleRub = (e) => {
        let n = e.target.id;
        let value = e.target.value;
        let tmp = { ...posts };
        tmp[n] = ["/api/rubriques/" + value]
        setPosts(tmp);
    }

    return (
        <div>
            <div>
                <label htmlFor="nom">Nom : </label>
                <input type="text" id="nom" value={posts.nom} onChange={handle} /><br />

                <label htmlFor="description">Description : </label>
                <input type="text" id="description" value={posts.description} onChange={handle} /><br />

                <label htmlFor="prix">Prix : </label>
                <input type="text" id="prix" value={posts.prix} onChange={handle} /><br />

                <label htmlFor="quantiteTotale">Quantite totale :  </label>
                <input type="text" id="quantiteTotale" value={posts.quantiteTotale} onChange={handle} /><br />

                <label htmlFor="photo">Photo : </label>
                <input type="text" id="photo" value={posts.photo} onChange={handle} /><br />

                {rubs.map((rub) => (
                    <div>
                        <label htmlFor="rubriques" key={rub.id} >{rub.id}</label>
                        <input type="checkbox" id="rubriques" value={rub.id} onChange={handleRub} />
                    </div>
                ))}

                <input type="submit" value="Submit" id="submit" onClick={postProd} />

            </div>
        </div>
    )

}

export default Creer