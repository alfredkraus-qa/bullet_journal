# Projeto - Meu Bullet Journal 📓

Este repositório foi criado para documentar meu projeto de Bullet Journal Digital, uma ferramenta que simula o uso de um caderno físico para fazer anotações de forma livre e personalizada, do jeito que você quiser.

O principal objetivo deste projeto é aprofundar meu entendimento sobre HTML, CSS, e JavaScript. Apesar de não ter como foco atuar como programador, estou utilizando esta experiência para compreender os conceitos fundamentais dessas ferramentas, o que será extremamente útil para meus objetivos futuros: automatizar testes em front-end e mobile.

## Ferramentas

<div style="display: inline_block"><br>
  <img align="center" alt="Alfred-HTML" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg">
  <img align="center" alt="Alfred-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg">
   <img align="center" alt="Alfred-JS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg">
  </div>
  
## Por que este projeto?

Há cerca de três anos, comecei a usar um bullet journal físico para me organizar melhor. Ele me ajuda a gerenciar tarefas, estabelecer objetivos e metas, acompanhar hábitos e registrar tudo o que considero importante. Esse hábito se tornou uma das melhores decisões que tomei nos últimos anos, e até hoje mantenho essa prática fielmente.

Escrever à mão se tornou uma verdadeira terapia para mim. Pensando nisso, decidi criar algo que pudesse simular essa experiência de forma prática e divertida, enquanto exploro os fundamentos do desenvolvimento web. Além disso, este projeto me permite fortalecer minhas bases de programação, visando aplicar esses conceitos futuramente em testes automatizados, tanto no front-end quanto no mobile.

## Desafios

Criar um bullet journal digital tem sido uma jornada desafiadora, especialmente:

• Encontrar o equilíbrio entre funcionalidade e design minimalista.

• Garantir que a interface seja intuitiva para qualquer usuário.

• Implementar funcionalidades dinâmicas, como utilizar texto, borracha, caneta livremente pelo caderno.

## Resultados do projeto

### Primeiro esboço feito com HTML e CSS


<img width="1440" alt="Screenshot 2025-01-03 at 17 58 38" src="https://github.com/user-attachments/assets/1366e01b-6c13-49e3-a77e-6f92d41dfec3" />

Inicialmente, não adicionei nenhum recurso em JavaScript, pois queria avaliar como o esboço ficaria. Enfrentei dificuldades no CSS devido à variedade de opções para estilizar o bullet journal, mas a abordagem minimalista me agradou e acredito que estou no caminho certo. A próxima etapa será adicionar ícones para as funcionalidades na lateral, inspirados no design do Miro. Em seguida, começarei a programar em JavaScript para dar vida aos bullets.

### Wireframe finalizado no HTML e CSS

<img width="1440" alt="Screenshot 2025-01-06 at 16 38 13" src="https://github.com/user-attachments/assets/2ac1329e-a2ea-46af-bf33-94a3587733fb" />

Finalizei a parte estética do bullet journal: adicionei uma "logo" para torná-lo mais atrativo, substituí as caixas de funcionalidades por ícones clicáveis e alterei o fundo para algo mais harmonioso. Já iniciei a implementação em JavaScript, criando as const e let como ponto de partida para dar funcionalidade ao projeto.

### Implementação em JavaScript

<img width="1439" alt="Screenshot 2025-01-09 at 17 42 37" src="https://github.com/user-attachments/assets/5a737b4b-6472-4bec-8e7d-66b3198229d6" />

Agora com o JavaScript, estou adicionando funcionalidades dinâmicas, como ferramentas para desenhar e apagar. 

A lógica está baseada em eventos do mouse, onde ações como clicar, mover e soltar ativam os diferentes modos. Além disso, configurei duas áreas de canvas independentes para tornar o uso mais versátil. Assim, o projeto começa a ganhar vida, aproximando-se da experiência de um caderno físico.

No momento, implementei apenas essas funcionalidades, e ambas estão funcionando como eu esperava. Entretanto, um dos desafios que encontrei até agora é que ainda não consigo desenhar na página direita do caderno, e estou buscando uma solução para ajustar essa lógica. Esse problema tem se mostrado mais desafiador do que eu imaginava. Assim que conseguir resolver essa questão, meu próximo passo será implementar as funcionalidades de marca-texto e inserção de texto, para dar continuidade ao desenvolvimento do projeto.

### Adicionando novas funcionalidades: marca-texto e inserir texto

<img width="1440" alt="Screenshot 2025-01-10 at 17 07 12" src="https://github.com/user-attachments/assets/bb7e5aec-2872-404e-9b28-99aabe0a54d6" />

Dando continuidade ao projeto, consegui resolver o problema da página direita, que não permitia desenhar ou apagar. Era apenas uma questão de ajustar uma lógica que estava implementada de forma incorreta. Além disso, implementei as duas ferramentas que estavam faltando: o marca-texto e a funcionalidade de inserir texto.

Agora, ambas as ferramentas estão funcionando perfeitamente e cumprindo seus propósitos. A lógica do marca-texto foi relativamente simples de implementar, pois segue uma estrutura similar às funções de desenho e borracha. Já para a funcionalidade de inserir texto, precisei investir mais tempo para compreender o comportamento correto dos inputs, mas, no final, consegui alcançar o resultado desejado.

Com isso, considero o projeto funcional, mas ainda pretendo fazer alguns ajustes para torná-lo mais dinâmico e interativo.

Assim que concluir esses ajustes finais, criarei uma branch separada para a versão 1, onde documentarei todas as melhorias realizadas. Também farei um vídeo ou GIF demonstrando o funcionamento na prática para compartilhar aqui.

### Resultado final - Meu Bullet Jornaul Versão 1.0

https://github.com/user-attachments/assets/52060bae-9bc5-4f19-82da-94cdb945e18c


[Projeto Finalizado - Meu Bullet Journal](https://alfredkraus-qa.github.io/bullet_journal/)

Depois de alguns dias de trabalho, consegui incluir duas novas funcionalidades no projeto: o zoom para o caderno e a movimentação da barra de ferramentas dentro dele. Embora o resultado tenha ficado diferente do que eu inicialmente planejava, as funcionalidades estão funcionando bem.

Finalmente, após muitos altos e baixos, decidi concluir a primeira versão deste projeto. A versão 1.0 está longe do modelo ideal que eu tinha imaginado, mas é totalmente funcional e atendeu com sucesso às minhas expectativas iniciais.

## Considerações finais

O projeto Meu Bullet Journal foi uma jornada de aprendizado e autodescoberta. Desde o início, o principal objetivo era explorar as bases de HTML, CSS e JavaScript, habilidades essenciais para a próxima etapa da minha carreira: a automação de testes. Apesar de enfrentar diversos desafios ao longo deste projeto, cada obstáculo superado representou uma oportunidade de crescimento e uma etapa concluída nessa jornada.

Com a versão 1.0 finalizada, posso dizer que o projeto atingiu seu propósito inicial, apesar de estar longe do ideal. Consegui implementar funcionalidades dinâmicas como ferramentas de desenho, borracha, marca-texto e inserção de texto, além de adicionar recursos como zoom e movimentação da barra de ferramentas. Essas adições me permitiram experimentar de forma prática conceitos fundamentais de programação e design.

Com base nisso, compartilho os principais aprendizados obtidos durante o desenvolvimento deste projeto:

**1. HTML bem estruturado:** O uso de uma organização **semântica** e clara facilitou a integração com CSS e JavaScript, tornando o código mais manutenível e escalável.

**2. Estilização responsiva:** Técnicas como **Flexbox**, gradientes e sombras foram aplicadas para criar uma interface atraente e funcional.

**3. Manipulação de canvas:** Ferramentas como lápis, borracha e marca-texto foram implementadas usando o **contexto 2D do canvas**, explorando propriedades como **lineTo(), stroke() e clearRect()**.

**4. Interatividade dinâmica:** A alternância de ferramentas e o movimento do container de ferramentas mostraram como **eventos do DOM**, como **click e mousemove**, podem melhorar a experiência do usuário.

**5. Zoom com rolagem do mouse:** A aplicação de transformações CSS **(scale())** permitiu um zoom fluido, aprimorando a usabilidade da interface.

Ao refletir sobre essas experiências, decidi encerrar momentaneamente o desenvolvimento deste projeto. Embora ele tenha sido uma importante base de aprendizado, meu foco principal continua sendo o domínio das ferramentas que me permitirão avançar no campo de automação de testes. Não vejo motivos para expandir o projeto no momento, mas levo comigo uma enorme satisfação por tudo o que construí até aqui.

Este projeto foi de grande importância para meus estudos e marcou o início da minha caminhada na área de Quality Assurance (QA). O aprendizado obtido com ele será aplicado diretamente em projetos futuros, com um foco mais direcionado ao meu objetivo profissional.

Por fim, agradeço aos recursos que me acompanharam nesta jornada, como os tutoriais do W3Schools e os vídeos do saudoso Gustavo Guanabara do Curso em Vídeo, que foram peças-chave no desenvolvimento deste projeto. 

## Material de Pesquisa

[SITE - W3SCHOOLS](https://www.w3schools.com/)

[YOUTUBE - CURSO EM VIDEO](https://www.youtube.com/c/CursoemV%C3%ADdeo/playlists)

##

A todos que explorarem este repositório, deixo meu convite: sinta-se à vontade para compartilhar sugestões e feedbacks. Eles são sempre bem-vindos e serão valiosos para meus próximos passos.

**Obrigado por acompanhar minha jornada até aqui!** 💡✨
