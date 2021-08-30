import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Alert = ({ alerts }) => {
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <AlertBody key={alert.id}>
        <div className={alert.alertType}>{alert.msg}</div>
      </AlertBody>
    ))
  );
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

const AlertBody = styled.div`
  .warning {
    background-color: firebrick;
    height: 4rem;
    width: 60%;
    margin: 0.5rem auto;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    border-radius: 0.5rem;
    font-weight: 400;
    font-size: 1.2rem;
  }

  .success {
    background-color: green;
    height: 4rem;
    width: 60%;
    margin: 0.5rem auto;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    border-radius: 0.5rem;
    font-weight: 400;
    font-size: 1.2rem;
  }

  .fa-times {
    cursor: pointer;
  }
`;

export default connect(mapStateToProps)(Alert);
