import React from "react";
import {useSelector} from "react-redux";

import {GameCover} from "../../components/game-cover";
import {GameGenre} from "../../components/game-genre";
import {GameBuy} from "../../components/game-buy";

import './game-page.css';


export const GamePage = () => {
    const game = useSelector((state) => state.game.currentGame);

    if(!game) return null; //из-за отсутствия бека чтобы при обновлении не крашилось

    return (
        <div className="game-page">
            <h1 className="game-page__title">{game.title}</h1>
            <div className="game-page__content">
                <div className="game-page__left">
                    <iframe width="90%" height="400px" src={game.video} title="Youtube video Player" frameBorder="null">
                    </iframe>
                </div>
                <div className="game-page__right">
                    <GameCover image={game.image} />
                    <p>{game.description}</p>
                    <p className="secondary-text">Популярыне метки этого продукта:</p>
                    {game.genres.map((genre) => <GameGenre genre={genre} key={genre} />)}
                    <div className="game-page__buy-game"><GameBuy game={game}/></div>
                </div>
            </div>
        </div>
    );
};