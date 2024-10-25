frase = input("Digite uma frase: ")

numeroDeCaracteres = len(frase)
print(f"Número de caracteres: {numeroDeCaracteres}")

frase_invertida = ""
for char in frase:
    frase_invertida = char + frase_invertida

print(f"Frase invertida: {frase_invertida}")

palavras = frase.split()
print("Palavras em linhas separadas:")
for palavra in palavras:
    print(palavra)