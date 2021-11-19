import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

const SignUp = () => {
  const [user, setUser] = useState();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    api
      .post(
        `/usuario/novousuario?nome=${data.nome}&email=${data.email}&senha=${data.senha}`,
        data
      )
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
      })
      .catch(() => {
        alert("Erro");
      });
    console.log(data);
  };

  return (
    <div className="content first-content">
      <div className="first-column">
        <div className="logo"></div>
        <h2 className="title title-primary">Bem vindo(a) ao Frivel</h2>
        <p className="description description-primary">
          Para se manter conectado com a gente
        </p>
        <p className="description description-primary">
          por favor faça o login com suas informações pessoais
        </p>

        <Link to="/login">
          <button id="signin" className="btn btn-primary">
            Entrar
          </button>
        </Link>
      </div>
      <div className="second-column">
        <h2 className="title title-second">Criar conta</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <label className="label-input">
            <input name="nome" {...register("nome")} placeholder="Nome" />
          </label>
          {errors.nome?.type === "required" && "campo Nome é obrigatório."}
          <label className="label-input">
            <input
              name="email"
              {...register("email")}
              type="email"
              placeholder="Email"
            />
          </label>
          {errors.email && "campo Email é obrigatório."}

          <label className="label-input">
            <input {...register("senha")} placeholder="Senha" />
          </label>
          {errors.senha && "campo Senha é obrigatório."}
          <input name="senha" className=" btn-second" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
