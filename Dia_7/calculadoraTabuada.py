tabuada = int(input("Digite um número: "));

tabela = 1;

TomBombadil = True;

while TomBombadil: # because Tom Bombadil just is O_O!
    resultado = tabuada * tabela
    print(f"{tabuada} x {tabela} = {resultado}")
    tabela += 1
    if tabela >= 11:
        break