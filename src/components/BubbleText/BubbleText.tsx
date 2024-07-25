import React, {ChangeEvent, useState} from 'react';
import s from './bubble.module.css';
import {Simulate} from 'react-dom/test-utils';
import input = Simulate.input;
import styled from 'styled-components';

export const BubblingText = () => {
    const [value, setValue] = useState('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onClickHandler = () => {
        setValue('')
    }

    return (
        <Container>
            <InputBlock>
                <input value={value} onChange={onChangeHandler} placeholder={"Enter text..."}/>
                <button onClick={onClickHandler}>
                    Clear
                </button>
            </InputBlock>
            <BubblingtextDiv>
                <BubbleText word={value}/>
            </BubblingtextDiv>
        </Container>

    );
};

type BubbleTextType = {
    word: string
}
const BubbleText = ({word}: BubbleTextType) => {
    return (

        <BubbleTextDiv>
            {word.split('').map((letter, index) => (
                <span className={s.hoverText} key={index}>
          {letter}
        </span>
            ))}
        </BubbleTextDiv>

    );
};


const BubblingtextDiv = styled.div`
  display: grid;
  background-color: #F4F4F8;
  padding: 30px;

`

const InputBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F4F4F8;

  & > input {
    width: 200px;
    height: 30px;
    overflow: auto;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-radius: 5px 0 0 5px;
    padding: 2px 10px;
    outline: none;

    &:focus, &:active {
      box-shadow: 0 0 5pt 0.5pt #D3D3D3;
    }
  }

  & > button {
    border: white solid 1px;
    border-radius: 0 5px 5px 0;
    padding: 2px 15px;
    background-color: #1D1E22;
    transition: all .2s ease-in-out;
    color: white;
    &:hover {
      opacity: 0.7;
      transition: all .5s ease-in-out;
    }
  }

`

const BubbleTextDiv = styled.h2`

  grid-auto-flow: row;
  text-align: center;
  font-size: 3rem;
  font-weight: 100;
  color: #b6b1b1;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
const Container = styled.div`
  display: grid;
  grid-template-rows: 10% auto;
  height: 100%;
`;