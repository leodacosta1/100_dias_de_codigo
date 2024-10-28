texto = input("Digite seu texto: ")

def contar_palavras(texto):
    palavras = text.split()
    return len(palavras)

def contar_frases(texto):
    frases = texto.count('.') + texto.count('!') + texto.count('?')
    return frases

def contar_caracteres(texto):
    return len(texto)

palavras = contar_palavras(texto)
frases = contar_frases(texto)
caracteres = contar_caracteres(texto)

print(f"Numero de palavras: {palavras}")
print(f"Numero de frases: {frases}")
print(f"Numero de caracteres: {caracteres}")