def fatorial(n):
    resultado = 1
    for i in range(1, n + 1):
        resultado *= i
    return resultado
    
num = int(input("Digite um número: "))

if num < 0:
    print(f"O fatorial de {num} não existe")
else:
    print(f"O fatorial de {num} é {fatorial(num)}")