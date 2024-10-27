valorPrincipal = float(input("Digite o valor principal: "))
taxaDeJuros = float(input("Digite a taxa de juros anual (%): "))
quantidadeDeAnos = int(input("Digite a quantidade de anos: "))

def CalculaJurosCompostos(valorPrincipal, taxaDeJuros, quantidadeDeAnos):
    montante = valorPrincipal * (1 + (taxaDeJuros / 100)) ** quantidadeDeAnos
    return montante

montante = CalculaJurosCompostos(valorPrincipal, taxaDeJuros, quantidadeDeAnos)
print(f"O montante após {quantidadeDeAnos} anos será: {montante:.2f}")