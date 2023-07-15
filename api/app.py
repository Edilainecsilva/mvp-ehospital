from email.mime import base
from sqlalchemy.exc import IntegrityError

from flask_openapi3 import Info, Tag
from flask_openapi3 import OpenAPI
from flask_cors import CORS
from flask import redirect

from model import Session, Agendamento
from logger import logger
from schemas import *


info = Info(title="API refente ao MVP da sprint II", version="1.0.0")
app = OpenAPI(__name__, info=info)
CORS(app)

# definindo tags
agendamento_tag = Tag(name="Agendamento", description="Adição, visualização e remoção de agendamentos à base")


@app.get('/')
def home():
    return redirect('/openapi')


@app.post('/agendamento', tags=[agendamento_tag],
          responses={"200": AgendamentoViewSchema, "409": ErrorSchema, "400": ErrorSchema})
def add_agendamento(form: AgendamentoSchema):
    """Adiciona um novo agendamento à base de dados

    Retorna uma representação dos agendamentos e comentários associados.
    """
    session = Session()
    agendamento = Agendamento(
        nome=form.nome,
        email=form.email,
        endereco=form.endereco,
        telefone=form.telefone,
        data=form.data,
        mensagem=form.mensagem
        )
    logger.debug(f"Adicionando agendamento de nome: '{agendamento.nome}'")
    try:
        # adicionando agendamento
        session.add(agendamento)
        # efetivando o camando de adição de novo item na tabela
        session.commit()
        logger.debug(f"Adicionado agendamento de nome: '{agendamento.nome}'")
        return apresenta_agendamento(agendamento), 200
    except IntegrityError as e:
        error_msg = "agendamento de mesmo nome já salvo na base :/"
        logger.warning(f"Erro ao adicionar agendamento '{agendamento.nome}', {error_msg}")
        return {"mesage": error_msg}, 409
    except Exception as e:
        error_msg = "Não foi possível salvar novo item :/"
        logger.warning(f"Erro ao adicionar agendamento '{agendamento.nome}', {error_msg}")
        return {"mesage": error_msg}, 400


@app.get('/agendamento', tags=[agendamento_tag],
         responses={"200": AgendamentoViewSchema, "404": ErrorSchema})
def get_agendamento(query: AgendamentoBuscaSchema):
    """Faz a busca por um agendamento a partir do id do agendamento

    Retorna uma representação dos agendamentos e comentários associados.
    """
    agendamento_id = query.id
    logger.debug(f"Coletando dados sobre agendamento #{agendamento_id}")
    session = Session()
    agendamento = session.query(Agendamento).filter(Agendamento.id == agendamento_id).first()
    if not agendamento:
        error_msg = "agendamento não encontrado na base :/"
        logger.warning(f"Erro ao buscar agendamento '{agendamento_id}', {error_msg}")
        return {"mesage": error_msg}, 400
    else:
        logger.debug(f"agendamento econtrado: '{agendamento.nome}'")
        return apresenta_agendamento(agendamento), 200


@app.get('/agendamentos', tags=[agendamento_tag],
         responses={"200": AgendamentoListaViewSchema, "404": ErrorSchema})
def get_agendamentos():
    """Lista todos os agendamentos cadastrados na base

    Retorna uma lista de representações de agendamentos.
    """
    logger.debug(f"Coletando lista de agendamentos")
    session = Session()
    agendamentos = session.query(Agendamento).all()
    print(agendamentos)
    if not agendamentos:
        error_msg = "agendamento não encontrado na base :/"
        logger.warning(f"Erro ao buscar por lista de agendamentos. {error_msg}")
        return {"mesage": error_msg}, 400
    else:
        logger.debug(f"Retornando lista de agendamentos")
        return apresenta_lista_agendamento(agendamentos), 200


@app.delete('/agendamento', tags=[agendamento_tag],
            responses={"200": AgendamentoDelSchema, "404": ErrorSchema})
def del_agendamento(query: AgendamentoBuscaSchema):
    """Deleta um agendamento a partir do id informado

    Retorna uma mensagem de confirmação da remoção.
    """
    agendamento_id = query.id

    logger.debug(f"Deletando dados sobre agendamento #{agendamento_id}")
    session = Session()

    if agendamento_id:
        count = session.query(Agendamento).filter(Agendamento.id == agendamento_id).delete()

    session.commit()
    if count:
        logger.debug(f"Deletado agendamento #{agendamento_id}")
        return {"mesage": "agendamento removido", "id": agendamento_id}
    else: 
        error_msg = "agendamento não encontrado na base :/"
        logger.warning(f"Erro ao deletar agendamento #'{agendamento_id}', {error_msg}")
        return {"mesage": error_msg}, 400
