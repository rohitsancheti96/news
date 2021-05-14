import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import CardList from "./CardList";
import axios from "axios";
import Category from "./Category";

function App() {
    const [data, setData] = useState();
    const { pathname } = useLocation();
    console.log(pathname);

    useEffect(() => {
        const fetch = async () => {
            const phrase = pathname.slice(1);
            console.log(phrase);
            const result = await axios.get(
                `https://newsapi.org/v2/everything?q=${phrase}&pageSize=8&apiKey=18e6800aee25406a97d3131dbffede8e`
            );
            console.log(result);
            setData(result.data.articles);
        };
        fetch();
    }, [pathname]);

    return (
        <>
            <Category />

            <Switch>
                <Route
                    path="/:term"
                    component={() => <CardList data={data} />}
                />
            </Switch>
        </>
    );
}

export default App;
