import React from 'react';
import { useState } from "react";
import Axios from 'axios';
import Styles from '../form/Form.module.css'


export default function Form() {

  // Modelo (JSON)
  const [data, setData] = useState({
    nome: '',
    email: '', 
    endereco: '', 
    telefone: '',
    data: '',
    mensagem: '',
  })

    const handleSubmit = async (e) => {
      e.preventDefault();

        //transformando um objeto em Formdata
        const formData = new FormData();
        formData.append('nome', data.nome);
        formData.append('email', data.email);
        formData.append('endereco', data.endereco);
        formData.append('telefone', data.telefone);
        formData.append('data', data.data);
        formData.append('mensagem', data.mensagem);

        const url = 'http://127.0.0.1:5000/agendamento'
        const response = await Axios.post(url, formData);
        console.log('Correto', response.data);
        alert('Agendamento realizado com sucesso!')
        
      };
    
      const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
      }
    

  return (
    <div className={Styles.form}>
      <section>
        <form onSubmit={handleSubmit}>
          <label>Nome Completo</label>
          <input type='text' name='nome' placeholder='Seu nome completo'
            value={data.nome}
            onChange={handleChange} 
            required
          />

          <label>E-mail</label>
          <input type='email' name='email' placeholder='exemplo@gmail.com' 
            value={data.email}
            onChange={handleChange}
            required
          />

          <label>Endereço</label>
          <input type='text' name='endereco' placeholder='Seu endereço' 
            value={data.endereco}
            onChange={handleChange}
            required
          />

          <label>Telefone</label>
          <input type='tel' name='telefone' placeholder='11956989969' 
            value={data.telefone}
            onChange={handleChange}
            required
          />

          <label>Data</label>
          <input type='date' name='data' 
            value={data.data}
            onChange={handleChange}
            required
          />

          <label>Mensagem</label>
          <textarea type='textarea' name='mensagem' placeholder='Informação Adicional' 
            value={data.mensagem}
            onChange={handleChange}
            required
          />

        <br></br><br></br>
        
          <button>ENVIAR AGENDAMENTO</button>
          
        </form>
      </section>

    </div>
  );
}