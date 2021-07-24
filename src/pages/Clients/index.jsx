import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ButtonContainer,
  DataForm,
  Form,
  Input,
  Label,
  ModifiedButton,
} from "../../assets/components";
import { Container, Description, Title } from "../Home/styles";

import populate_products from '../../database/populate/clients.json'

export default function Clients() {
  const local_base_object = 'products';

  if (!localStorage.getItem(local_base_object)) {
    localStorage.setItem(local_base_object, JSON.stringify(populate_products))
  }
  

  const local_json_obj = JSON.parse(localStorage.getItem(local_base_object));
  const local_keys_obj = Object.keys(local_json_obj[0]);
  
  var obj_base = {};
  local_keys_obj.map((a) => {
    obj_base[a] = '';   
  });

  // state
  const [obj, setObj] = useState(obj_base);
  
  console.log(local_keys_obj, obj);

  function handleChange(e) {
    const field = e.target.getAttribute("id");
    const value = e.target.value;

    setObj({
      ...obj,
      [field]: value,
    });
  }

  function setDataToStorage(e) {
    e.preventDefault();


    console.log(obj);

    //add
    let save = [
      ...local_json_obj,
      obj
    ];

    localStorage.setItem(
      local_base_object,
      JSON.stringify(save)
    );

    setObj(obj_base);


    alert('Success');
  }  

  return (
    <Container>
    
      <Title>Manage {local_base_object}</Title>

      <Form onSubmit={setDataToStorage}>
        {/* <DataForm>
          <Label htmlFor="category">Categoria</Label>
          <Select id='category' value={obj.category} onChange={handleChange}>
            <option disabled value='' defaultValue>
              Selecione a Categoria
            </option>
            <option value="eletrodomestico">Eletrodomésticos</option>
            <option value="móveis">Movéis</option>
            <option value="celulares">Celulares</option>
            <option value="outros">Outros</option>
          </Select>
        </DataForm> */}


        {local_keys_obj.map((key) => {

          return(
            <DataForm>
              <Label htmlFor="type">{key}</Label>
              <Input
                placeholder={key}
                type="text"
                id={key}
                value={obj.[key]}
                onChange={handleChange}
                required
              />
            </DataForm>
          )
        })}

        
        {/* <DataForm>
          <Label htmlFor="description">Descrição</Label>
          <TextArea
            placeholder="Descrição com características e funcionalidades"
            type="text"
            id="description"
            value={obj.description}
            onChange={handleChange}
            required
          />
        </DataForm>
        <DataForm>
          <Label htmlFor="price">Preço</Label>
          <FormatedInput
            thousandSeparator={true}
            prefix={'R$ '}
            placeholder="Digite somente os números"
            id="price"
            value={obj.price}
            onChange={handleChange}
            required
          />
        </DataForm>
        <DataForm>
          <Label htmlFor="stock">Estoque</Label>
          <Input
            placeholder="Estoque em números inteiros"
            type="number"
            id="stock"
            value={obj.stock}
            onChange={handleChange}
            required
          />
        </DataForm> */}

        <ButtonContainer>
          <NavLink to="/">
            <ModifiedButton type="submit" backColor="transparent">
              Back
            </ModifiedButton>
          </NavLink>
          <ModifiedButton
            type="submit"
            backColor="lime"
            style={{ width: "12rem" }}
          >
            Save
          </ModifiedButton>
        </ButtonContainer>
      </Form>


      <div>
        <h1>List {local_base_object}</h1>
        <table id={'tabela'}>

          <thead>
            <tr>
              {local_keys_obj.map(data => {
                return (
                  <th>{data.toUpperCase()}</th>
                )
              })}
            </tr>

          </thead>

          <tbody>
            {local_json_obj.map(data => {
              return (
                <tr>
                  {local_keys_obj.map(key => {
                    return (
                      <td>{key !== 'image' ? data[key] : <img alt='link invalido' height={60} src={data[key]} />}</td>
                    )
                  })}
                </tr>
              )
            })}

          </tbody>

        </table>
      </div>


    </Container>
  );
}
