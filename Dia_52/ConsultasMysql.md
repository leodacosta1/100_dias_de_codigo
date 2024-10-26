# 3 cláusulas pra escolher os dados que você quer exibir com Mysql:
# select: lista de atributos
# from: lista de tabelas
# where: condição

# Consultas feitas no banco em Mysql do dia de código 51 (youtube)

-- Recuperar o primeiro nome do funcionário com salário maior ou igual a 30000
select pnome, salario
from funcionario
where salario >= 30000;

-- Recuperar a data de nascimento e o endereço do funcionário cujo nome seja 'João B. Silva'
select datanasc, endereco
from funcionario
where pnome = 'João' AND minicial = 'B' AND unome = 'Silva'; 


# Consultas feitas no banco em Mysql do dia de código 52 (youtube)

--Recuperar todos os valores de atributo de qualquer FUNCIONÁRIO que trabalhe no DEPARTAMENTO número 5
select *
from funcionario
where dnr = 5;

-- Calcular a remuneração mensal dos funcionários e depois adicionar o bônus de 50
select pnome, salario/12 + 50 as salario_mensal_bonus
from funcionario