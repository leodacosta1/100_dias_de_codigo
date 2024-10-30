def contar_palavras(nome_arquivo, palavra):
    try:
        with open(nome_arquivo, 'r', encoding='utf-8') as arquivo:
            conteudo = arquivo.read().lower()
            palavras = conteudo.split()
            #num_palavras = len(palavras)
            #num_caracteres = len(conteudo)
            count = conteudo.count(palavra.lower()) # conta quantas vezes a palavra inputada pelo usuário aparece
            #return num_palavras, num_caracteres
            return count
    except FileNotFoundError:
        print(f'O arquivo {nome_arquivo} não foi encontrado')
        return None, None
    except Exception as e:
        print(f'Ocorreu um erro ao ler o arquivo: {e}')
        return None, None

def main():
     nome_arquivo = input("Digite o nome do arquivo a ser lido: ")
     palavra = input("Digite a palavra a ser contada: ")
     count = contar_palavras(nome_arquivo, palavra)
     
     if count is not None:
        print(f"A palavra '{palavra}' aparece {count} vezes no arquivo.")
     
     #num_palavras, num_caracteres = contar_palavras(nome_arquivo)
     

     # if num_palavras is not None and num_caracteres is not None:
     #   print(f"O número de palavras no arquivo é: {num_palavras} e o número de caracteres é {num_caracteres}")
        
        

if __name__ == '__main__':
    main()