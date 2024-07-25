import React from 'react';
import anime from 'animejs'
import {StyledH2} from '../BackgroundAnime/BackgroundAnime';

type ClickOnDotType = {
    gridWidth: number
    gridHeight: number
}


export const ClickOnDot = ({gridWidth, gridHeight}: ClickOnDotType) => {

    const DotGrid = () => {

        const dotClickHandler = (e: any) => {
            anime({
                targets: '.dot-point',
                scale: [
                    {value: 1.35, easing: 'easeOutSine', duration: 250},
                    {value: 1, easing: 'easeInOutQuad', duration: 500},
                ],
                translateY: [
                    {value: -15, easing: 'easeOutSine', duration: 250},
                    {value: 0, easing: 'easeInOutQuad', duration: 500},
                ],
                opasity: [
                    {value: 1, easing: 'easeOutSine', duration: 250},
                    {value: 0.5, easing: 'easeInOutQuad', duration: 500},
                ],
                delay: anime.stagger(100, {
                    grid: [gridWidth, gridHeight],
                    from: e.target.dataset.index,
                })
            })
        }

        const dots = []
        let index = 0;

        for (let i = 0; i < gridWidth; i++) {
            for (let j = 0; j < gridHeight; j++) {
                dots.push(
                    <div
                        onClick={dotClickHandler}
                        className="group cursor-pointer rounded-full p-2 transition-colors hover:bg-slate-600"
                        data-index={index}
                        key={`${i}-${j}`}
                    >
                        <div
                            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opasity-50 group-hover:from-indigo-600 group-hover:to-white"
                            data-index={index}
                        >
                        </div>
                    </div>
                )
                index++
            }
        }

        return (
            <>

                <div
                    style={{gridTemplateColumns: `repeat(${gridWidth}, 1fr)`}}
                    className="grid w-fit"
                >
                    {dots}
                </div>
            </>
        );
    };

    return (
        <div
            className="relative grid h-screen place-content-center px-8 rounded-xl"
        >
            <StyledH2>Click on the dot</StyledH2>
            <DotGrid/>
        </div>
    );
};



