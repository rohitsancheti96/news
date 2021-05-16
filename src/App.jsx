import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import axios from "axios";
import "./_App.scss";
import CardList from "./CardList";

import Category from "./Category";

function App() {
    const [data, setData] = useState();
    const { pathname } = useLocation();

    useEffect(() => {
        const fetch = async () => {
            const phrase =
                pathname === "/"
                    ? `top-headlines?country=us&`
                    : `everything?q=${pathname.slice(1)}&`;
            const result = await axios.get(
                `https://newsapi.org/v2/${phrase}pageSize=8&apiKey=18e6800aee25406a97d3131dbffede8e`
            );
            setData(result.data.articles);
        };
        fetch();
    }, [pathname]);

    return (
        <>
            <Category />
            <Switch>
                <Route path="/" component={() => <CardList data={data} />} />
            </Switch>
        </>
    );
}

export default App;
