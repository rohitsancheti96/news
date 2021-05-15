import React from "react";
import dayjs from "dayjs";
import "./CardList.css";

function CardList({ data }) {
    return (
        <section className="list">
            {data &&
                data.map((item) => (
                    <div className="card">
                        <div className="card-content">
                            <img
                                alt="cardImage"
                                src={item.urlToImage}
                                className="image"
                            />
                            <header>{item.title}</header>
                            <p className="details">{item.description}</p>
                            <footer>
                                <div>
                                    <p className="source">
                                        {item.source ? (
                                            item.source.name
                                        ) : (
                                            <span>{"\u00A0"}</span>
                                        )}
                                    </p>

                                    <p className="time">
                                        {dayjs(item.publishedAt).format(
                                            "YYYY-MM-DD"
                                        )}
                                    </p>
                                </div>

                                <p>more...</p>
                            </footer>
                        </div>
                    </div>
                ))}
        </section>
    );
}

export default CardList;
