https://git-scm.com/docs/git-pull


Propósito: git pull busca alterações de um repositório remoto e as mescla no branch atual, garantindo que sua cópia local esteja atualizada.

Sintaxe: O comando básico é git pull <remote> <branch>, onde <remote> é tipicamente origin, e <branch> é o branch que você deseja atualizar.

Buscar e Mesclar: Consiste em duas etapas: buscar as alterações mais recentes (como git fetch) seguidas pela mesclagem delas no branch atual.

Opção de Rebase: Você pode usar --rebase para aplicar suas alterações locais sobre as alterações buscadas, mantendo um histórico de commits mais limpo.

Tratamento de Conflitos: Se houver conflitos durante a mesclagem, o Git pedirá que você os resolva antes de concluir o pull.

Configuração: Você pode definir comportamentos padrão para git pull usando configurações como pull.rebase


Você deve usar git fetch em vez de git pull quando quiser revisar as alterações no repositório remoto antes de mesclá-las ao seu branch local. O fetch baixa as atualizações sem aplicá-las, permitindo que você inspecione os commits e decida como proceder. Isso é útil para evitar conflitos indesejados e garantir que você tenha controle sobre o que está sendo integrado ao seu trabalho.

O git merge é a segunda etapa de um git pull. Quando você executa git pull, primeiro ele faz um git fetch para buscar as alterações do repositório remoto e, em seguida, realiza um git merge para integrar essas alterações ao seu branch atual. Assim, o merge combina as mudanças locais com as remotas.


Pull Request

Um pull request (PR) é uma solicitação para integrar alterações de uma branch em outra, geralmente em um repositório remoto. Ele é usado principalmente em plataformas de controle de versão, como GitHub, GitLab e Bitbucket.

Aqui estão alguns pontos importantes sobre pull requests:

Revisão de Código: Antes de mesclar as alterações, outros desenvolvedores podem revisar o código, discutir mudanças e sugerir melhorias.

Histórico de Discussões: O PR cria um histórico de discussões e comentários sobre as alterações, o que ajuda na colaboração e na documentação do processo.

Automação: Muitas plataformas permitem que você configure ações automáticas, como testes de integração contínua, que são executados quando um PR é aberto ou atualizado.

Mesclagem Controlada: Os pull requests permitem que você controle quando e como as alterações são integradas ao branch principal, promovendo um fluxo de trabalho mais organizado.

Em resumo, um pull request facilita a colaboração entre desenvolvedores, promovendo revisões e discussões antes que as alterações sejam mescladas ao código principal.


Para abrir um pull request (PR), siga estas etapas:

Faça suas alterações: Crie uma nova branch e faça suas alterações no código.

Envie sua branch: Use o comando git push para enviar sua branch para o repositório remoto. Por exemplo:

git push origin sua-branch

Abra o PR na plataforma: Vá até a interface do repositório remoto (como GitHub, GitLab ou Bitbucket). Você verá uma opção para abrir um pull request após enviar sua branch.

Preencha os detalhes: Adicione um título e uma descrição ao PR, explicando as mudanças e seu propósito.

Selecione a branch de destino: Escolha a branch na qual você deseja mesclar suas alterações (geralmente main ou develop).

Crie o PR: Clique no botão para criar o pull request. Depois, outros desenvolvedores podem revisar e comentar suas alterações.