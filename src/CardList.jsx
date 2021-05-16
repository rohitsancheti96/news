import React from "react";
import dayjs from "dayjs";
import "./_CardList.scss";

function CardList({ data }) {
    return (
        <section className="list">
            {data &&
                data.map((item, i) => (
                    <div className="card" key={item.publishedAt}>
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

                            <a href={item.url} target="_blank">
                                more...
                            </a>
                        </footer>
                    </div>
                ))}
        </section>
    );
}

export default CardList;
