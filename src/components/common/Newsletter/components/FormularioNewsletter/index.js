import React from 'react';
import { useForm } from 'react-hook-form';
import { CampoTexto } from '../../../../forms/CampoTexto';
import Botao from '../../../Botao';
import './styles.css';

function FormularioNewsletter() {
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm({
    defaultValues: {
      nome: '',
      email: '',
    },
    shouldFocusError: false,
  });

  const onSubmit = (data) => {
    const { nome, email } = data;
    // eslint-disable-next-line no-alert
    alert(`Parabéns ${nome}, seu email (${email}) foi cadastrado com sucesso!`);
    reset({
      nome: '',
      email: '',
    });
  };

  return (
    <form
      className="formulario-newsletter"
      onSubmit={handleSubmit(onSubmit)}
    >
      <CampoTexto
        type="text"
        placeholder="Seu nome"
        error={errors.nome}
        {...register('nome', {
          required: {
            value: true,
            message: 'Campo obrigatório',
          },
          minLength: {
            value: 3,
            message: 'Mínimo de 3 caracteres',
          },
        })}
      />
      <CampoTexto
        type="email"
        placeholder="Seu e-mail"
        error={errors.email}
        {...register('email', {
          required: {
            value: true,
            message: 'Campo obrigatório',
          },
          pattern: {
            value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
            message: 'E-mail inválido',
          },
        })}
      />
      <Botao
        type="submit"
        label="Enviar"
      />
    </form>
  );
}

export default FormularioNewsletter;
