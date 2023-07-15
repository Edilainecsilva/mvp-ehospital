
from pydantic import BaseModel
from typing import Optional, List
from datetime import date, datetime


class AgendamentoSchema(BaseModel):
    nome: str = "Elaine dos Santos"
    email: str = "elaine@gmail.com"
    endereco: str = "Rua Antonio Marcos de Oliveira, 350, Tarraf"
    telefone: int = 17992556589
    data = datetime.strptime('27/04/2023', '%d/%m/%Y').date()
    mensagem: str = "Faço exame de vistas todos os anos"
    

class AgendamentoBuscaSchema(BaseModel):
    id: Optional[int] = 1
   


class AgendamentoViewSchema(BaseModel):
    id: int = 1
    nome: str = "Elaine dos Santos"
    email: str = "elaine@gmail.com"
    endereco: str = "Rua Antonio Marcos de Oliveira, 350, Tarraf"
    telefone: int = 17992556589
    data = datetime.strptime('27/04/2023', '%d/%m/%Y').date()
    mensagem: str = "Faço exame de vistas todos os anos"
    


class AgendamentoDelSchema(BaseModel):
    mesage: str
    id: int

def apresenta_agendamento(agendamento):
     
    return {
        "id": agendamento.id,
        "nome": agendamento.nome,
        "email": agendamento.email,
        "endereco": agendamento.endereco,
        "telefone": agendamento.telefone,
        "data": agendamento.data,
        "mensagem": agendamento.mensagem,
    }


class AgendamentoListaViewSchema(BaseModel):
    agendamentos: List[AgendamentoViewSchema]


def apresenta_lista_agendamento(agendamentos):
    result = []
    for agendamento in agendamentos:
        result.append(apresenta_agendamento(agendamento))
    return {"agendamentos": result}