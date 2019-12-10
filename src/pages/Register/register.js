import React, { useState } from 'react';
import firebase from "../../services/firebase";
import { Link } from "react-router-dom";
import Logo from '../../components/Logo/logo'
import Input from '../../components/Input/input'
import Button from '../../components/Button/button'


import './register.scss';

export default function Register(props) {
    const [form, setForm] = useState({})
    const [step, setStep] = useState(1);

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [passwordConfirm, setPasswordConfirm] = useState("");
    // const [quote, setQuote] = useState("");

    async function onRegister() {
        if(form.password !== form.passwordConfirm){
            alert("Por favor, confirme a senha corretamente")
        } else {
            try {
                // await firebase.register(name, email, password)
                await firebase.register(form)
                props.history.replace("/")
            } catch (error) {
                alert(error.message)
            }
        }
    }

    async function changeForm (event) {
        await setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        console.log(form)
    }

    function handleStep () {
        console.log(step)
        switch(step){
            case 1: 
                return (
                <>
                    <Link to="/login"><i className="material-icons navegate">navigate_before</i></Link>
                    <Input id="name" type="text" name="name" placeholder="Nome" autoComplete="off" autoFocus={true} onChange={e => changeForm(e)} />
                    <Input id="age" type="text" name="age" placeholder="Idade" autoComplete="off" onChange={e => changeForm(e)} />
                    <Input id="datebirth" type="text" name="datebirth" placeholder="Data de Nascimento" autoComplete="off" onChange={e => changeForm(e)} />
                    <Input id="adress" type="text" name="adress" placeholder="Endereço" autoComplete="off" onChange={e => changeForm(e)} />

                    <Button type="submit" className="cadastrar" onClick={() => setStep(2)} >Próximo</Button>
                </>
                );
            case 2:
                return (
                <>
                    <i onClick={() => setStep(1)} className="material-icons navegate">navigate_before</i>
                    <Input id="email" type="email" name="email" placeholder="Email" autoComplete="off" onChange={e => changeForm(e)} />
                    <Input id="password" type="password" name="password" placeholder="Senha" icon="visibility_off" autoComplete="off" onChange={e => changeForm(e)} />
                    <Input id="passwordConfirm" type="password" name="passwordConfirm" placeholder="Confirmar Senha" icon="visibility_off" autoComplete="off" changeForm={e => changeForm(e)} />

                    <Button type="submit" className="cadastrar" onClick={onRegister} >Cadastrar</Button>
                </>
                )
        }
    }

    return (
        <section className="containerRegister">
            {/* <Link to="/login"><i className="material-icons navegate">navigate_before</i></Link> */}
            <span className="step">{step}/2</span>
            <Logo />
            <form onSubmit={e => e.preventDefault() && false}>
                {handleStep()}
            </form>
            {/* <Link to="/">Home</Link> */}
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </section>
    );
}
