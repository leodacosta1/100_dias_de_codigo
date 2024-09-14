import pandas as pd
import numpy as np

# Exemplo de criação de um DataFrame
data = {
    'nome': ['Ana', 'João', 'Maria', 'Pedro', 'Lucas', 'Carla'],
    'departamento': ['TI', 'RH', 'TI', 'Financeiro', 'TI', 'RH'],
    'salario': [5000, 4500, 5200, 6000, 4800, 4700]
}

df = pd.Dataframe(data)

# Filtragem dos funcionários de TI
funcionarios_ti = df[df['departamento'] == 'TI']
print(funcionarios_ti)