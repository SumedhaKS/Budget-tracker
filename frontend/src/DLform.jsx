import React from 'react';
import styled from 'styled-components';

const Expense = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="card left-card">
          <span className="card__title">Your Personal Planner</span>
          <p className="card__subtitle">
            Tell me how much you spent and I'll tell you how poor you are gonna become
          </p>
          <form className="card__form">
            <input placeholder="What is your expense" />
            <input placeholder="How much is your expense" />
            <button className="expense">Add expense</button>
          </form>
        </div>

        <div className="card center-card">
          <h2>Budget Settings</h2>
          <span className="card__titlee">Your Total expenses</span>
        </div>


        <div className="card right-card">
            <span className="cardd__title">Set budget</span>
            <form className="card__form">
                <input placeholder="What is your budget" />
                <button className="expense">Add budget</button>
            </form>
            
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;

  display: flex;
  align-items: center;
  justify-content: center; /* center container horizontally and vertically */

  .container {
    display: flex;
    width: 90vw;
    height: 90vh;
    gap: 40px; /* space between the two cards */
  }

  .card {
    background: #fff;
    border: 8px solid #000;
    box-shadow: 15px 15px 0 #000;
    padding: 30px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .left-card {
    width: 320px;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .center-card {
    width: 800px;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .right-card {
    width: 320px;
    height: 95%; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .card__title {
    font-size: 24px;
    font-weight: 700;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 10px;
    display: block;
    border-bottom: 2px solid #000;
    width: 50%;
  }

    .card__titlee {
    font-size: 24px;
    font-weight: 700;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 700px;
    display: block;
    border-bottom: 2px solid #000;
    width: 50%;
  }

    .cardd__title {
    font-size: 24px;
    font-weight: 700;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 700px;
    display: block;
    border-bottom: 2px solid #000;
    width: 50%;
  }

  .card__subtitle {
    font-size: 16px;
    line-height: 1.4;
    color: #333;
    margin-bottom: 20px;
    padding-bottom: 10px;
  }

  .card__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .card__formm {
    display: flex;
    flex-direction: column;
    gap: 20px;
    }

  .card__form input {
    padding: 12px;
    border: 4px solid #000;
    font-size: 16px;
    background-color: #fff;
    transition: all 0.3s ease;
  }

  .card__form input:focus {
    outline: none;
    transform: scale(1.05);
  }

  .expense {
    border: 4px solid #000;
    background: #000;
    color: #fff;
    padding: 12px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .expense:hover {
    background: #fff;
    color: #000;
    transform: translateY(-5px);
    box-shadow: 0 5px 0 #000;
  }

  .expense:active {
    animation: shake 0.5s ease-in-out;
    transform: translateY(0);
    box-shadow: none;
  }

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export default Expense;
