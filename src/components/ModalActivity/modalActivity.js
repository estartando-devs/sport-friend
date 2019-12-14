import React from "react";
import "./modalActivity.scss";
import Map from "../Maps/maps";
import Button from "../../components/Button/button";
import Img from "../../assets/img.js";
import user from "../../assets/img/user.png";

export default function ModalActivity(props) {
  return (
    <main className="containerModal">
      <div className="modal">
        <i onClick={props.close} className="material-icons closeModal">
          close
        </i>
        <div className="testeBox">
          <section className="userModalActivi">
            <div className="userPoint">
              <div className="userPerfil">
                <img src={Img.clock} alt=""></img>
                <img src={Img.calendar} alt=""></img>
                <img src={Img.location} alt=""></img>
              </div>
              <div className="Texts">
                <p>
                  {props.card.moment.start_hour} -{" "}
                  {props.card.moment.finish_hour}
                </p>
                <p>
                  {props.card.date.day}/{props.card.date.month}/
                  {props.card.date.year}
                </p>
                <p>{props.card.place.meeting_point}</p>
              </div>
            </div>
            <div className="user">
              <img
                src={
                  props.card.author.photoURL ? props.card.author.photoURL : user
                }
                alt={props.card.author.displayName}
              />
              <h2>{props.card.author.displayName}</h2>
            </div>
          </section>
          <div className="description">
            <h2>{props.card.description}</h2>
          </div>
          <Button
            active={props.onClick}
            className="btnTeste "
            // value="Confirmar Atividade"
          >
            Confirmar Atividade
          </Button>
        </div>
        <Map cord={props.card.place.coordinates} />
        <Button
          active={props.onClick}
          className="btnConfirmar "
          // value="Confirmar Atividade"
        >
          Confirmar Atividade
        </Button>
      </div>
    </main>
  );
}