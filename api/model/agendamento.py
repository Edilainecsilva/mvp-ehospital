from sqlalchemy import Column, String, Integer, Date


from  model import Base


class Agendamento(Base):
    __tablename__ = 'agendamento'

    id = Column("pk_agendamento", Integer, primary_key=True)
    nome = Column(String(140), unique=True)
    email = Column(String(50))
    endereco = Column(String(200))
    telefone = Column(Integer)
    data = Column(Date)
    mensagem = Column(String(200))
    """categoria = Column(String(200))  -- colocar como checkbox? plano de saude, exame de vista?"""
     

    def __init__(self, nome:str, email:str, endereco:str, telefone:int, mensagem:str,
                 data:Date ):
        """
        Cria um Agendamento

        Arguments:
            nome: nome do paciente.
            email: contado do paciente
            telefone: contado do paciente
            mensagem: para descrever um breve resumo do porque do agendamento
            data_insercao: data de quando o produto foi inserido à base
        """
        self.nome = nome
        self.email = email
        self.endereco = endereco
        self.telefone = telefone
        self.mensagem = mensagem
        if data:
            self.data = data