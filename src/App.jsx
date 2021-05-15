import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import axios from "axios";
import "./App.css";
import CardList from "./CardList";

import Category from "./Category";

function App() {
    const [data, setData] = useState();
    const { pathname } = useLocation();

    useEffect(() => {
        const fetch = async () => {
            const phrase = pathname.slice(1);
            const result = await axios.get(
                `https://newsapi.org/v2/everything?q=${phrase}&pageSize=8&apiKey=18e6800aee25406a97d3131dbffede8e`
            );
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
