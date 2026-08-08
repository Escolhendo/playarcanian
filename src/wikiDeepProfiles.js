const unknown = 'Não divulgado no material publicado.';

export const deepWikiProfiles = {
  ikarius:{
    identity:[['Altura',unknown],['Idade',unknown],['Origem','Bravara'],['Residência','Cidade das Maravilhas'],['Ocupação','Investigador do C.I.A.N.E.'],['Família','Filho de Mountevoir; irmão de Aphride']],
    powers:['Passagens espaciais criadas a partir de uma imagem mental','Uso de Fragmento condicionado à compreensão do ponto de destino','Devaneios involuntários, tratados por Ikarius como informação não verificável e nunca como prova'],
    weapons:['Baralho de cartas de passagem','Ás de Copas','Coringa','Rei de Espadas — salto único preparado por Mountevoir'],
    techniques:['Fato / Inferência / Teste','Validação de destino por múltiplos sentidos','Portais curtos para reposicionar aliados e alterar ângulos de combate'],
    events:['Caso Sant’Anna','Caso Mountevoir','O Grande Roubo','Batalha de Koreth'],
    note:'O conflito central de Ikarius é metodológico: ele possui um poder que depende de imagem mental justamente quando a própria mente pode apresentar cenários convincentes que não são fatos.'
  },
  aphride:{
    identity:[['Altura',unknown],['Idade',unknown],['Origem','Bravara'],['Função','Infiltração e operações de campo'],['Família','Filha de Mountevoir; irmã de Ikarius']],
    powers:['Mobilidade e velocidade de combate acima do padrão humano','Leitura rápida de ambiente e mudança de rota sob pressão'],
    weapons:['Laços de ancoragem e contenção','Espada utilizada nos confrontos finais'],
    techniques:['Deslocamento entre fachadas com laços','Resgate aéreo','Marcação de posições para restringir movimento do adversário'],
    events:['O Grande Roubo','Operações em Bayrule','Batalha de Koreth'],
    note:'Aphride funciona como contraponto prático ao irmão: onde Ikarius quer provar uma rota, ela precisa mantê-lo vivo tempo suficiente para que a prova importe.'
  },
  joel:{
    identity:[['Altura',unknown],['Idade','Cronológica não divulgada; atravessa diferentes períodos e realidades'],['Origem','Realidade −1'],['Função','Cientista, viajante temporal e Guardião do Tempo'],['Família','Marido de Elisabeth']],
    powers:['Manipulação de intervalos temporais','Alteração de instantes de um ataque','Conhecimento adquirido através de rupturas e realidades'],
    weapons:['Espada do Guardião do Tempo','Nina — dispositivo temporal em forma de relógio'],
    techniques:['Intervenção no primeiro segundo de um ataque','Sincronização de tempo com ataques de aliados'],
    events:['Experimento Nina','Colapso da Realidade −1','Batalha de Koreth'],
    note:'Joel começou tentando vencer a perda com engenharia. O arco posterior trata exatamente do limite entre compreender uma possibilidade e decidir que se tem o direito de escolhê-la para todos.'
  },
  merius:{
    identity:[['Altura',unknown],['Idade',unknown],['Identidade pública','Rafael Corvino'],['Função','Investigador, estrategista e veterano ligado aos Arnins'],['Relação com os Santoro','Chamado de “tio Newman”; parentesco biológico não confirmado']],
    powers:['Liberação energética de escala extrema','Integração com símbolos Arnins','Combate em alta velocidade e grande impacto'],
    weapons:['O próprio Fragmento/manifestação energética','Relógio preservado como objeto de memória'],
    techniques:['Concentração de energia sob a pele','Descarga total para estabilização de ruptura'],
    events:['Caso Mountevoir','Retorno de Merius','Batalha de Koreth','Última descarga de Merius'],
    note:'Sua maior demonstração de força termina quando ele recusa transformar força em objetivo. Merius percebe que continuar vencendo o duelo significaria perder a realidade.'
  },
  beatriz:{
    identity:[['Altura',unknown],['Idade',unknown],['Função','Estrategista e combatente'],['Afiliação','Filhos da Meia-Noite / Grande Roubo']],
    powers:['Criação de gelo','Armaduras e paredes de gelo','Plataformas para locomoção','Congelamento de mecanismos'],
    weapons:['Espada de campo','Lanças e estruturas de gelo'],
    techniques:['Controle de terreno','Ataques a articulações e pontos frágeis','Uso combinado de gelo e combate próximo'],
    events:['Resgate dos 21','O Grande Roubo','Confronto com Vincent'],
    note:'Beatriz trata o poder como ferramenta operacional. A manifestação muda de forma conforme o problema: locomoção, defesa, arma, obstáculo ou resgate.'
  },
  flavio:{
    identity:[['Altura',unknown],['Idade',unknown],['Função','Combatente e operador do Submundo'],['Afiliação','Filhos da Meia-Noite']],
    powers:['Interação entre o Fragmento e a katana','Condução de energia cinética e vento através da lâmina'],
    weapons:['Katana herdada do pai'],
    techniques:['Absorção de energia cinética no fio','Redirecionamento de vento pelo metal','Golpes capazes de alcançar ligações de Fragmento'],
    events:['Resgate dos 21','Confronto com Kaji','Confronto com Hiussen'],
    note:'A katana é parte central de sua identidade de combate. Ela não é descrita apenas como arma afiada: funciona como interface entre técnica física, energia e Fragmentos.'
  },
  lily:{
    identity:[['Altura',unknown],['Idade',unknown],['Função','Operadora e sobrevivente do Submundo'],['Afiliação','Rede de Flávio e Beatriz']],
    powers:['Animação de madeira e matéria vegetal','Crescimento de plantas','Reorganização de materiais do ambiente','Transformação de resíduos em estruturas úteis'],
    weapons:['Ambiente manipulado como contenção e suporte'],
    techniques:['Imobilização com tábuas e raízes','Criação de massa amortecedora','Uso de plantas para observação e sobrevivência'],
    events:['Resgate dos 21','Confronto com Kaji'],
    note:'A habilidade de Lily elimina a fronteira rígida entre cenário e equipamento. O que está ao redor pode se tornar ferramenta, proteção ou armadilha.'
  },
  kaji:{
    identity:[['Altura',unknown],['Idade',unknown],['Nome','Kokogari Suyukaji'],['Função','Credor e figura de poder no Submundo de Bayrule']],
    powers:['Compressão do ar em lâminas invisíveis','Propulsão do próprio corpo através do vento'],
    weapons:['Nenhuma arma física necessária para a manifestação principal'],
    techniques:['Ataque de alta pressão à distância','Investida impulsionada pelo vento'],
    events:['Confronto com Kaji'],
    note:'Seu confronto com Flávio deixa visível uma regra importante de Arcanian: a melhor resposta a um Fragmento pode nascer de outro sistema, e não de uma força maior.'
  },
  nicolle:{
    identity:[['Altura',unknown],['Idade atual',unknown],['Identificação experimental','Teve o nome removido no L.A.C.H.R.Y.M.A.'],['Condição','Sobrevivente de implantação artificial']],
    powers:['Alteração local da realidade','Materialização de imagens e objetos','Transformação de matéria e projéteis'],
    weapons:['Martelo vermelho materializado','Objetos criados ou transformados pela manifestação'],
    techniques:['Uso de imagem mental','Condicionamento originalmente baseado em raiva, medo e dor','Reaprendizado do uso fora do gatilho imposto pelo laboratório'],
    events:['Implantação de Nicolle','Fuga de Nicolle'],
    note:'A obra deixa claro que raiva não é a essência do poder de Nicolle; é a rota que o laboratório condicionou para obter resposta previsível.'
  },
  mark:{
    identity:[['Altura',unknown],['Idade',unknown],['Classificação','Melhor resultado registrado do L.A.C.H.R.Y.M.A.'],['Condição','Hospedeiro de Fragmento adaptativo']],
    powers:['Adaptação a agressões e estímulos','Cópia e reconstrução de respostas','Regeneração progressivamente resistente'],
    weapons:['Nenhuma arma convencional necessária'],
    techniques:['Aprendizado após exposição','Reconstrução do corpo em torno de uma resposta'],
    events:['Fuga de Mark','Batalha de Chinama','O Grande Dia'],
    note:'A adaptação de Mark tem limite. Cada resposta aprendida cobra integridade do Fragmento, condição crucial quando Hiussen tenta usar o mesmo sistema como âncora.'
  },
  hiussen:{
    identity:[['Altura','Forma variável; medida física não aplicável de modo estável'],['Idade',unknown],['Origem','Realidade −1'],['Título','Rei dos Reis'],['Natureza','Presença externa rejeitada por Arcanian sem preparação prévia']],
    powers:['Adaptação à resposta que o atinge','Influência emocional à distância','Posse mediante abertura mental e âncora compatível','Uso de Espirais como memória material e reserva de presença','Reescrita do próprio corpo em torno de regras aprendidas'],
    weapons:['Não depende de arma convencional','Espirais e âncoras funcionam como infraestrutura de atuação'],
    techniques:['Aprender uma regra após contato suficiente','Consumir energia de âncoras para adaptação e regeneração','Explorar medo, culpa, desejo, trauma e condicionamento'],
    events:['O Grande Dia','Entrada de Hiussen em Arcanian','Batalha de Koreth'],
    note:'Hiussen é poderoso porque trata o mundo como sistema aprendível, não porque seja ilimitado. Influência não é presença; adaptação custa energia; posse exige abertura; e Arcanian o rejeita sem âncoras.'
  },
  ezequiel:{
    identity:[['Altura',unknown],['Idade',unknown],['Residência','Campo Forte, Paraícaba'],['Função','Delegado'],['Família','Marido de Clarice Sant’Anna']],
    powers:['Produção e controle de fogo','Muralhas e colunas de chamas','Técnica de corpo incandescente'],
    weapons:['Manifestação ígnea; nenhuma arma convencional destacada'],
    techniques:['Escalonamento do fogo de chama manual para cobertura corporal completa'],
    events:['Caso Sant’Anna','Auditoria fraudulenta do MNT-04'],
    note:'Sua morte abre Devaneios porque conecta um crime aparentemente novo a uma cadeia de evidências de vinte anos.'
  },
  lucarne:{
    identity:[['Altura',unknown],['Idade',unknown],['Função','Combatente ligado à proteção de Nicolle']],
    powers:['Manifestação de chamas associada ao combate'],
    weapons:['Foice em chamas'],
    techniques:['Ataques de contato com arma de haste','Pressão ofensiva coordenada com usuários de Fragmentos'],
    events:['Operações ligadas a Nicolle','Batalha de Koreth'],
    note:'Lucarne ocupa o espaço de combate frontal enquanto outros personagens alteram tempo, posição e terreno.'
  },
  vincent:{
    identity:[['Altura',unknown],['Idade',unknown],['Função','Fundador, executivo e articulador'],['Afiliação','Barney’s Company / L.A.C.H.R.Y.M.A.']],
    powers:['Cristalização de matéria por contato','Integração progressiva de linhas vítreas no corpo'],
    weapons:['Manifestação de cristalização; infraestrutura da Barney’s'],
    techniques:['Transformação de metal durante contato físico','Uso de rede corporativa e âncoras como extensão do próprio poder político'],
    events:['Coroação de Vincent','Criação/expansão do L.A.C.H.R.Y.M.A.','Queda de Vincent'],
    note:'Vincent confunde controle institucional com liberdade. A revelação final é que a estrutura criada para provar autonomia também o transforma na última peça de outro plano.'
  },
  mountevoir:{
    identity:[['Altura',unknown],['Idade',unknown],['Função','Investigador e combatente'],['Família','Pai de Ikarius e Aphride']],
    powers:['Conhecimento avançado de Fragmentos e regras espaciais','Preparação de cartas especiais para Ikarius'],
    weapons:['Espada','Cartas preparadas para o filho, incluindo o Rei de Espadas'],
    techniques:['Investigação de campo','Combate direto','Planejamento de contingências espaciais'],
    events:['Caso Mountevoir','Batalha de Chinama','O Grande Dia'],
    note:'Mesmo morto antes da investigação principal, Mountevoir continua presente através de método, evidências, cartas, lugares e escolhas que os filhos ainda precisam interpretar.'
  },
  bobo:{
    identity:[['Altura',unknown],['Idade',unknown],['Função','Agente ligado à corte do Vazio']],
    powers:['Ressonância direta com Fragmentos','Drenagem de matéria e energia através de som','Aumento de potência por absorção de servos'],
    weapons:['Guitarra negra com fissuras azuis'],
    techniques:['Acordes de ressonância','Mapeamento de respostas por sensor implantado'],
    events:['Teste de ressonância do Bobo'],
    note:'O Bobo transforma performance em experimento. A luta serve para machucar, mas também para medir o que um Fragmento faz quando é pressionado por uma frequência específica.'
  },
  paraiso:{
    identity:[['Altura','Forma variável / não divulgada'],['Idade',unknown],['Natureza','Entidade diretamente ligada aos Fragmentos'],['Afiliação','Aliados dos Arnins']],
    powers:['Projeção energética','Percepção de ressonância e de Fragmentos','Comunicação mental em situações documentadas'],
    weapons:['Não depende de arma convencional'],
    techniques:['Ataques energéticos','Leitura de alterações que afetam Fragmentos'],
    events:['Fundação dos Arnins','Batalha de Koreth'],
    note:'Paraíso é menos útil como “usuário de poder” e mais importante como evidência viva de que Fragmentos não são apenas objetos externos à consciência.'
  },
  gael:{
    identity:[['Altura','Descrito como alto; medida não divulgada'],['Idade',unknown],['Apelido','Caveira'],['Função','Chefe operacional do C.I.A.N.E.']],
    powers:['Nenhuma manifestação de Fragmento confirmada no material publicado'],
    weapons:['Equipamento institucional do C.I.A.N.E.; arma pessoal não destacada'],
    techniques:['Comando operacional','Controle de acesso a casos','Gestão de risco e imparcialidade investigativa'],
    events:['Caso Sant’Anna','Reabertura do arquivo Mountevoir'],
    note:'Gael é um limite humano importante para Ikarius: a organização precisa decidir quando a competência do investigador deixa de compensar o envolvimento pessoal.'
  },
  helena:{
    identity:[['Altura',unknown],['Idade','Pouco mais de cinquenta anos'],['Função','Responsável pelo arquivo anômalo e análise de evidências'],['Afiliação','C.I.A.N.E.']],
    powers:['Nenhuma manifestação de Fragmento confirmada'],
    weapons:['Câmaras, sensores, pinças e protocolos de contenção em vez de armamento pessoal'],
    techniques:['Cadeia de custódia','Análise de relevo e materiais','Teste controlado de evidências'],
    events:['Investigação do MNT-04','Caso Sant’Anna'],
    note:'Helena transforma o laboratório em extensão do método de Ikarius: uma hipótese só ganha valor quando consegue sobreviver a controle, medição e repetição.'
  },
  elisabeth:{
    identity:[['Altura',unknown],['Idade',unknown],['Função','Escritora; núcleo emocional da trajetória de Joel'],['Relação','Esposa e companheira de Joel Cartman'],['Linha principal associada','Realidade −1 / Vazio Absoluto']],
    powers:['Nenhuma manifestação de Fragmento confirmada no material usado pela Wiki'],
    weapons:['Nenhuma arma pessoal confirmada'],
    techniques:['Leitura emocional de Joel e contraponto às decisões do pesquisador','Presença recorrente em memórias e possibilidades temporais'],
    events:['Vida de Joel antes da ruptura','Experimento Nina','Possibilidades temporais vistas por Joel'],
    note:'Elisabeth não é tratada como prêmio ou explicação para Joel. Menos Um existe justamente para ampliar sua voz, a vida do casal e o que havia antes de a pesquisa temporal transformar intimidade em consequência.'
  },
  garry:{
    identity:[['Altura',unknown],['Idade',unknown],['Aparência','Pele acinzentada e olhos azuis intensos'],['Função','Pesquisador e analista de campo'],['Afiliação','Operações ligadas ao C.I.A.N.E. e aos Arnins']],
    powers:['Nenhuma manifestação de Fragmento explicitamente confirmada'],
    weapons:['Maleta de sensores e instrumentos técnicos','Equipamento de mergulho e contenção conforme a operação'],
    techniques:['Leitura de padrões físicos e eletrônicos','Improvisação técnica em campo','Prioridade de resgate sobre preservação de evidência'],
    events:['Farol Tálassa-4','Incidente de Nereida-6','Ataque do Kaiju','Batalha de Koreth'],
    note:'Garry trata fenômeno impossível como comportamento mensurável. No Farol Tálassa, prefere salvar um técnico a preservar o núcleo de prova; em Nereida, converte análise em evacuação sem abandonar a hipótese.'
  },
  mirian:{
    identity:[['Altura',unknown],['Idade',unknown],['Função','Operadora de campo e resgate'],['Afiliação','Guarda costeira / operações marítimas']],
    powers:['Nenhuma manifestação de Fragmento confirmada'],
    weapons:['Equipamento de resgate, mergulho e comunicação','Armamento pessoal não destacado no material publicado'],
    techniques:['Coordenação de retirada','Controle de tempo e oxigênio','Operação marítima sob falha estrutural'],
    events:['Farol Tálassa-4','Incidente de Nereida-6'],
    note:'Mirian funciona como contraponto operacional de Garry: enquanto ele mede o fenômeno, ela mede quanto tempo ainda existe para tirar pessoas vivas de dentro dele.'
  },
  samira:{
    identity:[['Altura',unknown],['Idade',unknown],['Função','Pesquisadora Arnin'],['Especialidade','Padrões de Espiral, matéria e memória material'],['Afiliação','Arnins']],
    powers:['Nenhuma manifestação pessoal de Fragmento confirmada'],
    weapons:['Instrumentação científica e sensores de campo'],
    techniques:['Comparação de padrões em carne, madeira, pedra e metal','Leitura de progressão angular das Espirais','Análise de memória material'],
    events:['Investigação das Espirais','Fundação dos Arnins','Batalha de Koreth'],
    note:'Samira ajuda a transformar a Espiral de símbolo em regra física: materiais diferentes podem ser obrigados a assumir a mesma progressão de dentro para fora.'
  },
  sieg:{
    identity:[['Altura',unknown],['Idade',unknown],['Título','Maior guerreiro de Chinama'],['Experiência','Quarenta anos sem recuar em batalha'],['Afiliação','Defesa de Chinama']],
    powers:['Nenhuma manifestação de Fragmento confirmada'],
    weapons:['Espada'],
    techniques:['Combate de linha de frente','Comando de tropas','Pressão frontal contra adversários de alta resistência'],
    events:['Batalha de Chinama','O Grande Dia'],
    note:'Sieg é apresentado como medida humana da ameaça. A reputação construída por quatro décadas não impede que Mark e Hiussen transformem a batalha em algo fora das regras militares que ele conhecia.'
  },
  'juan-campos':{
    identity:[['Altura',unknown],['Idade',unknown],['Título','Doutor'],['Especialidade','Distorções no espaço-tempo'],['Afiliação','Pesquisa temporal associada a Joel']],
    powers:['Nenhuma manifestação de Fragmento confirmada'],
    weapons:['Nenhuma arma confirmada'],
    techniques:['Pesquisa teórica de distorções temporais','Avaliação de risco científico'],
    events:['Desenvolvimento de Nina','Experimento Nina'],
    note:'A pesquisa de Juan torna o protótipo possível, mas ele também é a voz que tenta interromper o experimento quando o projeto deixa de parecer apenas uma descoberta científica.'
  },
  clarice:{
    identity:[['Altura',unknown],['Idade',unknown],['Residência','Campo Forte, Paraícaba'],['Família','Esposa de Ezequiel Sant’Anna']],
    powers:['Nenhuma manifestação de Fragmento confirmada'],
    weapons:['Nenhuma arma confirmada'],
    techniques:['Não se aplica'],
    events:['Caso Sant’Anna'],
    note:'A posição de Clarice na cena é parte da mensagem deixada ao investigador. A rotina do casal — portão, almoço prometido, compras — impede que o caso seja reduzido a um enigma abstrato.'
  },
  'rainha-vazio':{
    identity:[['Altura','Forma não tratada como medida estável'],['Idade',unknown],['Título','Rainha do Vazio'],['Natureza','Autoridade ligada ao Vazio'],['Afiliação','Ordem própria; relação complexa com os Juízes e Hiussen']],
    powers:['Interferência na ligação entre corpo e Fragmento','Manifestação e retirada através de sombras/rupturas','Conhecimento direto das regras de âncoras e do Vazio'],
    weapons:['Cajado'],
    techniques:['Sentenças que afetam vínculo entre corpo e Fragmento','Leitura de Espirais como infraestrutura de presença'],
    events:['Encontro no Vazio','Aviso sobre a Espiral coroada','Batalha de Koreth'],
    note:'A Rainha do Vazio não cabe em uma divisão simples entre aliada e antagonista. Ela conhece a prisão de Hiussen, os Juízes e as regras que separam influência de presença.'
  },
  zane:{
    identity:[['Altura',unknown],['Idade',unknown],['Residência','Submundo de Bayrule'],['Família','Filho e cuidador de uma mãe doente'],['Condição','Endividado sob influência de Kaji']],
    powers:['Nenhuma manifestação pessoal claramente separada da armadura no material publicado'],
    weapons:['Armadura especializada em perseguir/absorver Fragmento espacial'],
    techniques:['Uso da armadura contra deslocamento espacial','Aproximação e contenção de alvo'],
    events:['Conflito no gueto de Bayrule','Sobrecarga espacial envolvendo Ikarius'],
    note:'A armadura associada a Zane foi construída para caçar Fragmento espacial. Ao tocar Ikarius, absorve energia suficiente para provocar uma sobrecarga e uma ruptura local do espaço-tempo.'
  },
  amara:{
    identity:[['Altura',unknown],['Idade',unknown],['Função','Costureira, contrabandista humanitária e protetora'],['Residência','Fronteira sul de Chinama']],
    powers:['Nenhuma manifestação de Fragmento confirmada'],
    weapons:['Faca e recursos improvisados de sobrevivência; armamento principal não definido'],
    techniques:['Rotas de refugiados','Documentos falsos','Treinamento de Nicolle fora do condicionamento de raiva'],
    events:['Fuga de Nicolle','Ataque à oficina de Amara'],
    note:'Amara é a primeira pessoa a demonstrar para Nicolle que o gatilho de raiva foi ensinado pelo laboratório e não constitui a única linguagem possível para seu Fragmento.'
  },
  aster:{
    identity:[['Altura',unknown],['Idade','Criança; idade exata não divulgada'],['Origem','Realidade −1'],['Família','Filha de Hiussen']],
    powers:['Nenhum poder confirmado'],
    weapons:['Nenhuma arma confirmada'],
    techniques:['Não se aplica'],
    events:['Vida familiar da Realidade −1','Colapso da Realidade −1'],
    note:'Aster dá forma concreta ao que Hiussen chama de mundo perdido. Sua existência desloca a motivação do antagonista do abstrato para uma família que deixou de existir como realidade estável.'
  },
  'carlos-laboratorio':{
    identity:[['Altura',unknown],['Idade',unknown],['Função','Pesquisador e técnico de laboratório'],['Afiliação','Equipe científica ligada a Joel']],
    powers:['Nenhuma manifestação pessoal de Fragmento confirmada'],
    weapons:['Instrumentação de laboratório'],
    techniques:['Monitoramento de energia','Contenção experimental','Leitura de instabilidade em Fragmentos'],
    events:['Colapso do laboratório temporal'],
    note:'Carlos aparece dentro da camada científica do universo, onde um erro de leitura não significa apenas perder dados: pode significar permitir que a própria sala deixe de obedecer à geometria esperada.'
  },
  'sora-venn':{
    identity:[['Altura',unknown],['Idade',unknown],['Função','Engenheira e pesquisadora'],['Afiliação','Estação Abissal Nereida-6']],
    powers:['Nenhuma manifestação de Fragmento confirmada'],
    weapons:['Equipamentos da estação; arma pessoal não destacada'],
    techniques:['Engenharia em ambiente abissal','Protocolos de emergência e manutenção'],
    events:['Incidente de Nereida-6'],
    note:'Sora fica presa no laboratório inferior quando a estação começa a ceder. Seu resgate transforma a contagem técnica de cabos e oxigênio em uma decisão de vida ou morte.'
  },
  teo:{
    identity:[['Altura',unknown],['Idade','6 anos'],['Condição','Paciente infantil do L.A.C.H.R.Y.M.A.'],['Status','Morto durante o teste 42']],
    powers:['Nenhuma manifestação confirmada'],
    weapons:['Nenhuma'],
    techniques:['Não se aplica'],
    events:['Teste 42 do L.A.C.H.R.Y.M.A.'],
    note:'Téo é usado como pressão psicológica contra Nicolle. Sua morte rompe o condicionamento em vez de aperfeiçoá-lo e precede uma manifestação extrema em que o ambiente deixa de obedecer às regras comuns.'
  },
  marie:{
    identity:[['Altura',unknown],['Idade',unknown],['Título','Rainha das Chamas'],['Afiliação','Defesa de Chinama']],
    powers:['Manipulação de fogo em escala massiva','Compressão e direcionamento de muralhas de chamas'],
    weapons:['Manifestação ígnea; arma convencional não destacada'],
    techniques:['Cerco térmico de grande área','Controle concentrado de incêndio'],
    events:['Batalha de Chinama','O Grande Dia'],
    note:'Marie consegue envolver Mark em fogo forte o bastante para derreter pedra. A adaptação do Fragmento de Mark aprende a regra e devolve as chamas contra ela, deixando-a viva, porém cega.'
  },
  elena:{
    identity:[['Altura',unknown],['Idade',unknown],['Nome completo','Elena Volkov'],['Residência','Kyrna, Bayrule'],['Função','Contato que circula informação dentro da Barney’s']],
    powers:['Nenhuma manifestação de Fragmento confirmada'],
    weapons:['Nenhuma arma destacada'],
    techniques:['Leitura social e circulação de informação','Acesso indireto a segredos corporativos'],
    events:['Festa do Eclipse','O Grande Roubo'],
    note:'Elena não ocupa o cargo mais alto da Barney’s; sua importância vem do caminho que a informação percorre antes de chegar a quem manda. Ikarius a aborda sob o nome falso de Kai.'
  },
  asha:{
    identity:[['Espécie','Égua alada dos Arnins'],['Cor','Cinza'],['Idade',unknown],['Afiliação','Arnins']],
    powers:['Voo sustentado por asas e correntes de ar associadas às montarias Arnins'],
    weapons:['Não se aplica'],
    techniques:['Evacuação aérea','Travessia sem rotas oficiais'],
    events:['Queda de Namar','Evacuação de Alvor','Protocolo Ômega'],
    note:'Asha é uma montaria veterana que voou na queda de Namar e na evacuação de Alvor. Sua presença amplia a Fundação para além de laboratórios: os Arnins também preservam rotas e tradições de mobilização próprias.'
  },
  'raul-venn':{
    identity:[['Altura',unknown],['Idade',unknown],['Função','Fundador e dirigente'],['Afiliação','Filhos da Meia-Noite'],['Residência','Bayrule']],
    powers:['Nenhuma manifestação de Fragmento confirmada'],
    weapons:['Recursos e infraestrutura dos Filhos da Meia-Noite; arma pessoal não destacada'],
    techniques:['Negociação de sobrevivência','Gestão de rotas, recursos e alianças clandestinas'],
    events:['Parceria Barney’s–Filhos da Meia-Noite','Fragmentação dos Filhos da Meia-Noite'],
    note:'Raul aceita a parceria com a Barney’s como cálculo de sobrevivência. Os pagamentos encontrados depois mostram que pragmatismo e colaboração já não podiam ser separados com facilidade.'
  },
  codex:{
    identity:[['Tipo','Mecanismo/estrutura central'],['Local conhecido','Sob a árvore da Fundação, em Koreth'],['Criador',unknown],['Função conhecida','Manter as realidades ligadas']],
    powers:['Mantém conexão entre realidades','Pode ser usado como ponto de reorganização da realidade','Reage a rupturas e a forças ligadas aos Fragmentos'],
    weapons:['Protegido por infraestrutura Arnin e pela própria Fundação'],
    techniques:['Acesso restrito','Contenção por isolamento e defesa de Koreth'],
    events:['Fundação dos Arnins','Entrada de Hiussen','Batalha de Koreth'],
    note:'O Codéx não é tratado como um artefato comum nem como solução sem custo. A própria existência dele explica por que Koreth se torna um ponto estratégico para forças que querem preservar ou reescrever realidades.'
  },
  espiral:{
    identity:[['Tipo','Marca anômala e infraestrutura de ancoragem'],['Material','Pode surgir em carne, madeira, pedra, metal e outros meios'],['Origem definitiva',unknown],['Relação principal','Hiussen / memória material']],
    powers:['Força matéria a obedecer uma progressão/regra','Registra uma memória de obediência','Permite influência a distância quando usada como âncora','Consome energia armazenada a cada uso'],
    weapons:['Não é uma arma convencional; pode transformar ambiente, corpo ou máquina em instrumento'],
    techniques:['Ancoragem','Memória material','Ordens incompletas','Progressão angular de dentro para fora'],
    events:['Caso Mountevoir','Caso Sant’Anna','Nereida-6','Entrada de Hiussen'],
    note:'A Espiral deixa de ser apenas assinatura visual quando casos separados mostram a mesma regra em materiais diferentes. A pergunta da Wiki não é apenas “quem desenhou?”, mas “o que foi obrigado a aprender?”.'
  },
  nina:{
    identity:[['Tipo','Protótipo de máquina temporal em forma de relógio'],['Criador','Joel Cartman, com pesquisa ligada a Juan Campos'],['Capacidade planejada','Três saltos por carga'],['Estado','Protótipo associado à ruptura da Realidade −1']],
    powers:['Distribui pulsos de energia durante travessia temporal','Permite projeção de consciência','Pode transportar o corpo quando o protocolo é alterado'],
    weapons:['Não se aplica; é uma interface temporal'],
    techniques:['Protocolo de projeção','Controle de carga','Saltos temporais'],
    events:['Primeiro teste bem-sucedido','Projeção ao passado','Segundo salto corporal','Ruptura da Realidade −1'],
    note:'Nina nasce como instrumento científico limitado. O desastre não decorre de uma máquina “maligna”, mas da decisão de ultrapassar o protocolo antes de compreender as consequências da primeira travessia.'
  },
  ciane:{
    identity:[['Nome','Centro de Investigação de Anomalias Não Especificadas'],['Tipo','Organização investigativa'],['Sede conhecida','Bravara'],['Direção conhecida','Gael Oliveira / Caveira']],
    powers:['Não possui “poder” institucional; combina perícia, contenção e agentes especializados'],
    weapons:['Câmaras de contenção','Sensores','Viaturas e aeronaves','Equipamento de campo'],
    techniques:['Fato, inferência e teste','Cadeia de custódia','Classificação de anomalias','Reabertura de casos compatíveis'],
    events:['Caso Sant’Anna','Arquivo Mountevoir','Farol Morto','Nereida-6'],
    note:'O C.I.A.N.E. existe para impedir que “sobrenatural” vire desculpa para investigação ruim. Mesmo quando uma hipótese é absurda, ela precisa produzir algo que possa ser observado, testado e documentado.'
  },
  arnins:{
    identity:[['Tipo','Ordem antiga de pesquisadores e defensores'],['Base principal conhecida','Fundação em Koreth'],['Objetivo central','Proteger o Codéx e responder a ameaças entre realidades'],['Estrutura','Pesquisa, defesa, evacuação e rotas próprias']],
    powers:['Usuários e interfaces de Fragmentos variam entre membros','A Fundação canaliza energia do Codéx através da árvore dourada'],
    weapons:['Tecnologia de contenção','Armas e equipamentos de campo','Montarias aladas em operações de evacuação'],
    techniques:['Protocolo Ômega','Distribuição de equipes entre os doze reinos','Rotas sem dependência de portos controlados'],
    events:['Fundação de Koreth','Protocolo Ômega','Batalha de Koreth'],
    note:'Os Arnins não são apenas uma “facção de magos”. A ordem combina tradição, ciência, logística, defesa e pesquisa porque proteger o Codéx exige mais do que vencer lutas.'
  },
  barneys:{
    identity:[['Tipo','Conglomerado corporativo e rede de influência'],['Centro de poder conhecido','Bayrule / legado de Chinama'],['Figura central','Vincent'],['Relação','L.A.C.H.R.Y.M.A., logística, pesquisa e operações clandestinas']],
    powers:['Poder institucional, financeiro e logístico','Acesso a pesquisas anômalas e sistemas de classificação de Fragmentos'],
    weapons:['Segurança privada','Laboratórios','Transmissores','Infraestrutura de transporte e informação'],
    techniques:['Compartimentalização de dados','Parcerias com grupos locais','Auditorias e registros falsificados','Classificação de pessoas por valor experimental'],
    events:['Parceria com Filhos da Meia-Noite','Grande Roubo','Resgate dos 21','Entrada de Hiussen'],
    note:'A Barney’s é perigosa porque transforma violência em procedimento administrativo. Departamentos diferentes conhecem apenas pedaços do sistema, dificultando que qualquer funcionário enxergue a pergunta completa.'
  },
  lachryma:{
    identity:[['Nome','Projeto L.A.C.H.R.Y.M.A.'],['Tipo','Programa experimental de integração forçada com Fragmentos'],['Local histórico','Chinama / instalações associadas'],['Vítimas conhecidas','Mark, Nicolle, Téo e outros pacientes']],
    powers:['Não possui poder próprio; explora compatibilidade entre hospedeiros e Fragmentos'],
    weapons:['Implantes','Câmaras de teste','Condicionamento psicológico','Classificação de pacientes'],
    techniques:['Compatibilidade e rejeição','Implantação artificial','Condicionamento por medo, raiva e perda','Testes adaptativos'],
    events:['Implantação de Nicolle','Teste 42','Fuga de Mark','Resgate dos 21'],
    note:'O projeto tenta converter vínculo anômalo em processo replicável. O resultado é um sistema em que crianças e adultos deixam de ser pessoas e viram categorias de compatibilidade, regeneração ou descarte.'
  },
  kaiju:{
    identity:[['Tipo','Criatura de escala gigante'],['Dimensão exata',unknown],['Ocorrência ligada','Linha Abissal / rede de transmissores'],['Estado','Tratado como ser controlado, não simples alvo']],
    powers:['Força e escala massivas','Resposta condicionada por sinais externos'],
    weapons:['Corpo da própria criatura'],
    techniques:['A rede que a controla usa transmissores em vez de comando direto'],
    events:['Ataque do Kaiju','Operações de Garry na Linha Abissal'],
    note:'A resposta de Garry é importante para o cânone: destruir a criatura seria aceitar a interpretação mais simples. A operação muda quando os transmissores revelam que o comportamento dela está sendo imposto.'
  },
  'flor-vida':{
    identity:[['Nome usado pela Barney’s','Flor da Vida'],['Tipo','Amostra orgânica branca ligada a Fragmentos'],['Origem investigada','Raízes associadas a Mountevoir'],['Função','Manter Fragmento ligado à matéria quando deveria se desfazer']],
    powers:['Sustenta vínculos anômalos após morte ou falha do hospedeiro','Participa da reconstrução de corpos em experimentos documentados'],
    weapons:['Pode ser usada como componente de procedimentos, não como arma direta'],
    techniques:['Estabilização de vínculo','Combinação com condicionamento mental e ambiente'],
    events:['Pesquisas da Barney’s','Caso do hospedeiro de Kyrna','Experimentos ligados ao Bobo'],
    note:'A própria Wiki evita aceitar o nome corporativo como explicação: “Flor da Vida” não significa cura. O efeito documentado é obrigar um vínculo a continuar existindo quando deveria terminar.'
  },
  'grande-dia':{
    identity:[['Data','16 de maio de 1954'],['Local histórico','Chinama, atual Bayrule'],['Tipo','Evento de ruptura histórica'],['Núcleo','Mark, Mountevoir, Merius, Vincent, Hiussen e defensores de Chinama']],
    powers:['Não se aplica; o evento reúne múltiplas manifestações e âncoras'],
    weapons:['Espadas, fogo, Fragmentos e forças militares de Chinama'],
    techniques:['Defesa de linha de frente','Adaptação de Mark','Interferência de Hiussen através de âncora'],
    events:['Fuga de Mark','Batalha de Chinama','Transformação política de Chinama em Bayrule'],
    note:'O Grande Dia não ocorre em 1974. Ele pertence ao passado de Chinama e funciona como um dos grandes pontos de origem das lendas, experimentos e decisões que reaparecem em Devaneios.'
  },
  'grande-roubo':{
    identity:[['Tipo','Operação/infiltração'],['Região principal','Bayrule'],['Articulação','Beatriz e rede de aliados'],['Objetivo','Romper o controle de informação e alcançar dados/pessoas ligados à Barney’s']],
    powers:['Não se aplica; combina habilidades de vários participantes'],
    weapons:['Cartas e passagens de Ikarius','Gelo de Beatriz','Katana de Flávio','Recursos de infiltração de Aphride e aliados'],
    techniques:['Identidades falsas','Leitura de comportamento','Rotas do Submundo','Extração de dados sem sacrificar pessoas'],
    events:['Festa do Eclipse','Operações no Submundo','Exposição de dados da Barney’s'],
    note:'O Grande Roubo é menos sobre “roubar uma coisa” e mais sobre atravessar uma organização construída para impedir que qualquer pessoa veja o desenho completo.'
  },
  'realidade-menos-um':{
    identity:[['Designação','Realidade −1'],['Estado','Rompida / deixou de existir como realidade estável'],['Ligação','Joel, Elisabeth, Hiussen e a origem do conflito entre realidades'],['Local-chave','Montana, Lermaniac']],
    powers:['Não se aplica'],
    weapons:['Não se aplica'],
    techniques:['Sua ruptura ocorre após coexistência impossível gerada pelo salto corporal de Joel'],
    events:['Experimento Nina','Segundo salto','Colapso da Realidade −1'],
    note:'O texto distingue destruição de inexistência: a Realidade −1 não é simplesmente arrasada por guerra. A estrutura que a sustentava rompe quando versões incompatíveis passam a ocupar a mesma realidade.'
  },
  devaneio:{
    identity:[['Tipo','Fenômeno perceptivo/temporal ligado a Ikarius'],['Primeiros registros','Infância de Ikarius'],['Risco','Confundir possibilidade, memória e espaço presente'],['Uso como prova','Proibido pelo próprio método de Ikarius']],
    powers:['Apresenta cenários e detalhes convincentes que podem não pertencer à realidade atual','Pode interferir indiretamente no uso das passagens ao fornecer uma imagem falsa'],
    weapons:['Não se aplica'],
    techniques:['Validação por fatos independentes','Três sentidos/pontos antes de atravessar','Registro sem converter visão em evidência'],
    events:['Caso Sant’Anna','Treinamento de Ikarius','Possibilidades ligadas ao Codéx'],
    note:'O nome “Devaneio” é útil justamente porque não resolve o fenômeno. Para Ikarius, uma visão pode sugerir um teste, mas nunca entrar na coluna de fatos só por parecer real.'
  },
  'suji-74':{
    identity:[['Tipo','Ponto/estrutura associado às âncoras'],['Localização exata',unknown],['Relação','Orientação residual das Espirais após a retirada de Hiussen']],
    powers:['Funciona como referência para a orientação das marcas'],
    weapons:['Não se aplica'],
    techniques:['Rastreamento por direção e atividade residual de âncoras'],
    events:['Pós-batalha de Koreth','Reabertura de casos pelo C.I.A.N.E.'],
    note:'Depois da fuga de Hiussen, marcas distribuídas por diferentes casos perdem atividade, mas continuam orientadas para Suji-74. Isso transforma ocorrências antes isoladas em uma investigação de escala mundial.'
  },
  fragmentos:{
    identity:[['Natureza','Fenômeno/matéria anômala com integração a hospedeiros e objetos'],['Origem definitiva',unknown],['Aplicações conhecidas','Poderes, tecnologia, implantes, âncoras, energia e contenção']],
    powers:['As manifestações variam por hospedeiro','Podem alterar espaço, tempo, matéria, energia, adaptação, regeneração e percepção','Podem entrar em ressonância entre si ou com instrumentos específicos'],
    weapons:['Fragmentos podem ser canalizados por cartas, lâminas, instrumentos e outras interfaces','Nem todo usuário depende de arma física'],
    techniques:['Compatibilidade e rejeição','Implantação artificial','Ressonância','Ancoragem','Condicionamento de gatilhos'],
    events:['Projeto L.A.C.H.R.Y.M.A.','Resgate dos 21','Batalha de Chinama','Batalha de Koreth'],
    note:'“Fragmento” não descreve um único superpoder. É uma família de relações entre matéria, hospedeiro, regra e energia. A Wiki separa manifestação, compatibilidade, origem e interface para evitar tratar casos diferentes como se fossem a mesma coisa.'
  }
};

export function getDeepWikiProfile(slug){ return deepWikiProfiles[slug] || null; }
