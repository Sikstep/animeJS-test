import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import styled from "styled-components";
import img1 from '../../items/Plan1.webp';
import img2 from '../../items/Plan2.webp';
import img3 from '../../items/Plan3.webp';
import img4 from '../../items/Plan4.webp';
import img5 from '../../items/Plan5.webp';
import img6 from '../../items/Plan6.webp';
import img7 from '../../items/Plan7.webp';
import img8 from '../../items/Plan8.webp';

const imgs = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
};

export const Swiper = () => {
    const [imgIndex, setImgIndex] = useState(0);

    const dragX = useMotionValue(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragX.get();

            if (x === 0) {
                setImgIndex((pv) => {
                    if (pv === imgs.length - 1) {
                        return 0;
                    }
                    return pv + 1;
                });
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, []);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
            setImgIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((pv) => pv - 1);
        }
    };

    return (
        <Container>
            <CarouselContainer
                drag="x"
                dragConstraints={{
                    left: 0,
                    right: 0,
                }}
                style={{
                    x: dragX,
                }}
                animate={{
                    translateX: `-${imgIndex * 100}%`,
                }}
                transition={SPRING_OPTIONS}
                onDragEnd={onDragEnd}
            >
                <Images imgIndex={imgIndex} />
            </CarouselContainer>

            <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
            <GradientEdges />
        </Container>
    );
};

type ImagesType = {
    imgIndex: number
}
const Images = ({ imgIndex }: ImagesType) => {
    return (
        <>
            {imgs.map((imgSrc, idx) => {
                return (
                    <ImageItem
                        key={idx}
                        style={{

                            backgroundImage: `url(${imgSrc})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        animate={{
                            scale: imgIndex === idx ? 0.95 : 0.85,
                        }}
                        transition={SPRING_OPTIONS}
                    />
                );
            })}
        </>
    );
};

type DotsType = {
    imgIndex: number
    setImgIndex: Dispatch<SetStateAction<number>>
}
const Dots = ({
                  imgIndex,
                  setImgIndex,
              }: DotsType) => {
    return (
        <DotsContainer>
            {imgs.map((_, idx) => {
                return (
                    <DotButton
                        key={idx}
                        onClick={() => setImgIndex(idx)}
                        className={idx === imgIndex ? "active" : ""}
                    />
                );
            })}
        </DotsContainer>
    );
};

const GradientEdges = () => {
    return (
        <>
            <GradientEdgeLeft />
            <GradientEdgeRight />
        </>
    );
};

const Container = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #171717;
  padding: 2rem 0;
  height: 100%;
`;

const CarouselContainer = styled(motion.div)`
  display: flex;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

const ImageItem = styled(motion.div)`
  aspect-ratio: 16 / 9;
  max-width: 100%;
  max-height: 100%;
  width: 100vw;
  flex-shrink: 0;
  border-radius: 0.75rem;
  background-color: #262626;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const DotButton = styled.button`
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 9999px;
  background-color: #737373;
  transition: background-color 0.3s;

  &.active {
    background-color: #f5f5f5;
  }
`;

const GradientEdgeLeft = styled.div`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  width: 10vw;
  max-width: 100px;
  background: linear-gradient(to right, rgba(23, 23, 23, 0.5), rgba(23, 23, 23, 0));
`;

const GradientEdgeRight = styled.div`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  right: 0;
  top: 0;
  width: 10vw;
  max-width: 100px;
  background: linear-gradient(to left, rgba(23, 23, 23, 0.5), rgba(23, 23, 23, 0));
`;