import React, { useState, useEffect } from "react";

function Creer() {
    const [posts, setPosts] = useState("slt", "dfsdf", 3, "skdf", [{ nom: "plop" }], 20);
    const [text, setText] = useState("");

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

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <form action="https://maha.amorce.org/api/produits" method="POST">
                <div>
                    <label htmlFor="nom">Nom : </label>
                    <input type="text" id="nom" /><br />

                    <label htmlFor="description">Description : </label>
                    <input type="text" id="description" /><br />

                    <label htmlFor="prix">Prix : </label>
                    <input type="text" id="prix" /><br />

                    <label htmlFor="quantite_totale">Quantite totale :  </label>
                    <input type="text" id="quantite_totale" /><br />

                    <label htmlFor="photo">Photo : </label>
                    <input type="text" id="photo" /><br />

                    <input type="submit" value="Submit" id="submit" onClick={postProd} />
                </div>
            </form>
        </div>
    )

}

export default Creer