import React from 'react';
import styled from 'styled-components';

const Expense = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="card left-card">
          <h2 className="card__title">Add Expense</h2>
        <form className="card__form">
            <input placeholder="Expense Title" />
            <input type="number" placeholder="Amount" />
            <select className="dropdown">
                <option value="others">Others</option>
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="entertainment">Entertainment</option>
                <option value="utilities">Utilities</option>
                {/* <option value="others">Others</option> */}
            </select>
            <input type="number" placeholder="Date" min="1" max="31"/>

            <select className="dropdown">
                <option value="">Select Month</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
            </select>

            <button className="expense">Add Expense</button>
        </form></div>

        <div className="card top-center-block">
          <span className='balance'>Balance : </span>
        </div>


        <div className="card center-card">
          {/* <h2>Budget Settings</h2> */}
          <span className="card__titlee">Your Total expenses</span>
        </div>

        <div className="card center-right">
          {/* <h2>Budget Settings</h2> */}
          <span className="card__titlee">Your budget</span>
        </div>


        <div className="card right-card">
            <form className="card__form">
            <span className="card__title">Set your budget</span>
                
                <input placeholder="What is your budget" />
                
                <select className="dropdown">
                  <option value="">Select Month</option>
                  <option value="january">January</option>
                  <option value="february">February</option>
                  <option value="march">March</option>
                  <option value="april">April</option>
                  <option value="may">May</option>
                  <option value="june">June</option>
                  <option value="july">July</option>
                  <option value="august">August</option>
                  <option value="september">September</option>
                  <option value="october">October</option>
                  <option value="november">November</option>
                  <option value="december">December</option>
                 </select>
  
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
    
  .top-center-block{
    width: 750px;
    height: 115px;
    position: absolute;
    margin-left: 21%;

    }

  .left-card {
    width: 600px;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .center-card {
    width: 600px;
    height: 66%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 200px;
  }

  .center-right {
    width: 600px;
    height: 66%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 200px;
  }

  .right-card {
    width: 600px;
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

  .balance{
    font-size: 24px;
    font-weight: 700;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 20px;
    display: block;
    border-bottom: 2px solid #000;
    width: 50%;
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
    .dropdown {
  padding: 12px;
  border: 4px solid #000;
  font-size: 16px;
  background-color: #fff;
  transition: all 0.3s ease;
  cursor: pointer;
}

.dropdown:focus {
  outline: none;
  transform: scale(1.05);
}

`;

export default Expense;