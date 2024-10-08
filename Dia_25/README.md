Git branch
https://git-scm.com/docs/git-branch

O que é Git Merge? (ThePrimeagen/boot.dev):
    https://www.youtube.com/watch?v=BAtW9n5FgLM
    
GIT MERGE:
    Depois de criar a branch teste, pra voltar a trabalhar na main e juntar o que foi feito na teste, os passos são:
    1. git checkout main
    2. git merge <nome-da-branch-de-teste>
    3. git push origin main
    (caso não queira mais manter a branch de teste)
    4. git branch -d <nome-da-branch-de-teste>
    5. git push origin --delete <nome-da-branch-de-teste>


Criação de Ramificação (Branch):
    Você pode criar uma nova branch executando git branch <nome-da-branch>, mas isso não muda automaticamente para a nova branch (use git checkout ou git switch para fazer isso).

Listagem de Ramificações:
    Executar git branch lista todas as branches no repositório.
    Adicionar -r mostra as branches remotas, e -a lista tanto as branches locais quanto as remotas.

Exclusão de uma Ramificação:
    Use git branch -d <nome-da-branch> para excluir uma branch se ela já foi totalmente mesclada.
    Use -D para forçar a exclusão de uma branch mesmo que ela não tenha sido mesclada.

Renomeando uma Ramificação:
    O comando git branch -m <novo-nome-da-branch> renomeia a branch atual.
    Você também pode especificar git branch -m <nome-antigo> <nome-novo>.

Opções de Ramificação:
    -v mostra o último commit de cada branch.
    --contains <commit> lista as branches que contêm um commit específico.
    --merged lista as branches que foram mescladas na branch atual.
    --no-merged lista as branches que ainda não foram mescladas.

Referência HEAD:
    Uma branch no Git é essencialmente um ponteiro para um commit. Quando você troca de branch, a referência HEAD aponta para o último commit dessa branch.

Branches de Rastreamento:
    Use -u ou --set-upstream-to para configurar uma branch para rastrear uma branch remota (por exemplo, git branch -u origin/main).