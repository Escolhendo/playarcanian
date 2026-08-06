const relationshipOverrides = {
  ikarius: [
    ['aphride', 'Irmã', 'Cresceram juntos sob os ensinamentos de Mountevoir. A relação mistura proteção, ironia, memória compartilhada e confiança em campo.'],
    ['mountevoir', 'Pai', 'O método de investigação de Ikarius nasceu dentro de casa; a morte do pai é o caso que ele nunca conseguiu encerrar.'],
    ['merius', 'Figura familiar e protetor', 'Conhecido na infância como “tio Newman”. Mountevoir confiou a ele a proteção de Ikarius, embora Merius tenha acompanhado sua vida à distância.'],
    ['gael', 'Chefe e mentor', 'Gael treinou Ikarius para distinguir informação de fato e tenta impedir que a investigação se transforme em obsessão.']
  ],
  aphride: [
    ['ikarius', 'Irmão', 'Conhece os hábitos, os limites e a culpa do irmão. Protege Ikarius sem abrir mão da própria autonomia.'],
    ['mountevoir', 'Pai', 'Compartilha com Ikarius a lembrança da infância, da fortaleza sob a mesa e da espera pelas voltas do pai.'],
    ['merius', 'Figura familiar', 'Acreditou durante vinte anos que Merius estivesse morto e esteve em seu funeral.'],
    ['nicolle', 'Parceira de missão', 'Recebe a missão de localizar Nicolle, retirá-la de Bravara e priorizar sua sobrevivência acima da coleta completa de dados.']
  ],
  mountevoir: [
    ['ikarius', 'Filho', 'Transmitiu ao filho o princípio de separar fatos, inferências e testes antes de construir uma explicação.'],
    ['aphride', 'Filha', 'Criou Aphride e Ikarius como duas crianças acostumadas a esperar sua volta das investigações.'],
    ['merius', 'Aliado próximo', 'Confiou a Merius a proteção de Ikarius antes de morrer.'],
    ['caso-mountevoir', 'Caso ligado à própria morte', 'A morte de Mountevoir deixou raízes, uma espiral e uma cadeia de decisões que continuou ativa por vinte anos.']
  ],
  merius: [
    ['mountevoir', 'Aliado e amigo', 'A promessa feita a Mountevoir orientou boa parte de suas decisões durante duas décadas.'],
    ['ikarius', 'Protegido', 'Interrompeu ameaças e apagou rastros, mas demorou a assumir o custo emocional de ter permanecido ausente.'],
    ['aphride', 'Protegida', 'Aphride também cresceu acreditando que ele estivesse morto.'],
    ['joel', 'Aliado', 'Joel confronta Merius quando prudência, culpa e medo passam a significar a mesma coisa.'],
    ['arnins', 'Vínculo de pesquisa e estratégia', 'Sua investigação se cruza com laboratórios, tecnologia e decisões dos Arnins.']
  ],
  joel: [
    ['elisabeth', 'Esposa e companheira', 'A relação com Elisabeth é o centro emocional de Menos Um e da decisão temporal que marca toda a trajetória de Joel.'],
    ['juan-campos', 'Colega de pesquisa', 'Juan participou das pesquisas que tornaram Nina possível e tentou interromper o experimento antes da ruptura.'],
    ['merius', 'Aliado', 'Trabalham juntos diante das rupturas e das pesquisas ligadas aos Arnins.'],
    ['ikarius', 'Aliado', 'Joel reconhece em Ikarius uma busca por respostas que não encerram automaticamente o passado.'],
    ['nina', 'Criação', 'O protótipo temporal foi batizado de Nina e deveria permitir um número limitado de travessias controladas.']
  ],
  elisabeth: [
    ['joel', 'Marido e companheiro', 'A relação dos dois é construída por vida compartilhada, trabalho, promessas, divergências e uma confiança que não elimina o conflito.'],
    ['nina', 'Ligação indireta', 'A tentativa de Joel de reencontrá-la é inseparável do experimento temporal e de suas consequências.'],
    ['realidade-menos-um', 'Mundo de origem', 'Sua vida com Joel antecede a ruptura que dá origem a novas realidades.']
  ],
  beatriz: [
    ['grande-roubo', 'Idealizadora do plano', 'Sua carta apresenta o Grande Roubo e transforma uma investigação familiar em uma operação de escala internacional.'],
    ['flavio', 'Antigo aliado', 'Os dois compartilham história, culpa e informações ligadas aos Filhos da Meia-Noite.'],
    ['filhos-meia-noite', 'Rede associada', 'Sua trajetória se cruza com pessoas acostumadas a sobreviver fora das estruturas oficiais.'],
    ['ikarius', 'Aliado de operação', 'Conduz Ikarius a Bayrule e o coloca diante de pessoas que conhecem partes diferentes do mesmo conflito.']
  ],
  gael: [
    ['ikarius', 'Agente e protegido profissional', 'Reconhece a capacidade de Ikarius, mas o afasta quando percebe que o caso está usando sua história pessoal contra ele.'],
    ['ciane', 'Direção', 'Comanda o centro e coordena equipes diante de ocorrências que instituições comuns não conseguem explicar.'],
    ['caso-santanna', 'Responsável institucional', 'O caso força Gael a equilibrar risco operacional, proteção da equipe e a ligação com Mountevoir.']
  ],
  hiussen: [
    ['codex', 'Objetivo central', 'Busca no Codéx uma forma de restaurar ou reconfigurar aquilo que sua realidade perdeu.'],
    ['realidade-menos-um', 'Origem ligada à perda', 'Sua trajetória é inseparável de uma realidade destruída e de uma família mencionada como parte dessa perda.'],
    ['merius', 'Adversário', 'Reconhece Merius como uma das figuras mais perigosas de sua realidade e o força a escolher entre vencer e salvar o mundo.'],
    ['ikarius', 'Alvo e contraponto', 'Tenta transformar desejo, perda e possibilidades alternativas em argumentos contra o método de Ikarius.']
  ],
  ezequiel: [
    ['clarice', 'Esposa', 'A rotina do casal — o portão, o almoço prometido e a lista de compras — dá dimensão humana ao caso que inicia Devaneios.'],
    ['mountevoir', 'Ligação profissional antiga', 'Ezequiel recebeu material relacionado ao caso Mountevoir vinte anos antes.'],
    ['mnt-04', 'Evidência associada', 'O lacre foi encontrado com ele depois de uma auditoria fraudulenta que o levou a reabrir uma caixa antiga.']
  ],
  clarice: [
    ['ezequiel', 'Marido', 'O casal dividia uma vida comum em Campo Forte antes de ser transformado em parte de uma mensagem.'],
    ['caso-santanna', 'Vítima central', 'Sua posição na cena mostra que o crime foi preparado para ser interpretado, não apenas executado.']
  ],
  helena: [
    ['ikarius', 'Parceiro de análise', 'Exige que Ikarius aplique o próprio método quando ele começa a concluir depressa demais.'],
    ['ciane', 'Colega e responsável técnica', 'Atua no arquivo anômalo e em procedimentos de contenção.'],
    ['mnt-04', 'Evidência analisada', 'Participa da recuperação do registro físico e dos testes que revelam a camada interna do lacre.']
  ],
  garry: [
    ['mirian', 'Parceira de campo', 'Os dois atravessam operações marítimas em que a análise precisa se transformar rapidamente em resgate.'],
    ['samira', 'Interlocutora científica', 'Os dois oferecem leituras complementares sobre espirais, matéria e memória.'],
    ['farol-talassa', 'Ocorrência associada', 'Seu nome aparece nos relatórios do Farol Tálassa e da série de eventos submarinos.']
  ],
  mirian: [
    ['garry', 'Parceiro de campo', 'Mantém as missões funcionando quando sensores, mergulho e evacuação precisam acontecer ao mesmo tempo.'],
    ['nereida-6', 'Operação associada', 'Participa das decisões de contenção e retirada na estação abissal.']
  ],
  flavio: [
    ['beatriz', 'Antiga aliada', 'Os dois compartilham história, culpa e informações ligadas aos Filhos da Meia-Noite.'],
    ['lily', 'Aliada', 'Lily atua ao lado dele no Submundo de Bayrule.'],
    ['filhos-meia-noite', 'Afiliação', 'Sua vida no submundo se cruza com a rede e com as consequências do Grande Roubo.']
  ],
  lily: [
    ['flavio', 'Aliado', 'Atua com Flávio em rotas e conflitos do Submundo de Bayrule.'],
    ['beatriz', 'Contato', 'A ligação com Beatriz passa por informações, dívidas e antigas alianças.'],
    ['kaji', 'Risco associado', 'Kaji representa uma das forças que controlam dívidas e circulação no submundo.']
  ],
  zane: [
    ['kaji', 'Credor e ameaça', 'A dívida imposta por Kaji afeta diretamente Zane e sua família.'],
    ['filhos-meia-noite', 'Rede associada', 'Sua situação o aproxima das pessoas e rotas ligadas ao grupo.']
  ],
  kaji: [
    ['zane', 'Devedor', 'Usa a dívida como instrumento de controle sobre Zane e sobre sua família.'],
    ['submundo-bayrule', 'Território de influência', 'Sua presença é ligada às hierarquias e negociações do submundo.'],
    ['flavio', 'Adversário ou contato', 'Os dois ocupam lados conflitantes das rotas e dívidas de Bayrule.']
  ],
  nicolle: [
    ['mark', 'Companheiro de infância', 'Mark tentou protegê-la durante os experimentos do L.A.C.H.R.Y.M.A.'],
    ['aphride', 'Parceira de missão', 'Aphride recebe a missão de encontrá-la e retirá-la de Bravara com vida.'],
    ['lachryma', 'Vítima e testemunha', 'Carrega no próprio corpo as consequências do programa e conhece aquilo que a Barney’s tentou ocultar.']
  ],
  mark: [
    ['nicolle', 'Companheira de infância', 'Mesmo preso, tentou protegê-la durante o programa L.A.C.H.R.Y.M.A.'],
    ['lachryma', 'Paciente e resultado', 'Foi tratado como resultado experimental, não como pessoa.'],
    ['sieg', 'Conexão de Chinama', 'A situação de Mark está ligada aos acontecimentos e confrontos ocorridos em Chinama.']
  ],
  lucarne: [
    ['nicolle', 'Contato e proteção', 'Sua rota se cruza com a tentativa de manter Nicolle fora do alcance das estruturas que a perseguem.'],
    ['bartolomeu-gosh', 'Local associado', 'O lugar funciona como ponto da trajetória compartilhada por Lucarne, Nicolle e Aphride.']
  ],
  samira: [
    ['arnins', 'Afiliação científica', 'Sua leitura das espirais e da matéria se conecta às pesquisas dos Arnins.'],
    ['garry', 'Interlocutor', 'Garry trata os fenômenos como comportamento observável; Samira amplia a interpretação sobre memória material.'],
    ['mnt-04', 'Objeto de estudo', 'O lacre e a reação da terra oferecem evidências para sua interpretação das espirais.']
  ],
  sieg: [
    ['mark', 'Conexão do L.A.C.H.R.Y.M.A.', 'A trajetória de Mark e o programa experimental se cruzam com os acontecimentos de Chinama.'],
    ['batalha-chinama', 'Evento associado', 'Sua presença está ligada ao confronto que consolida parte das lendas anteriores ao Grande Dia.']
  ],
  'juan-campos': [
    ['joel', 'Colega de pesquisa', 'Tentou convencer Joel a respeitar a fronteira que o experimento temporal estava prestes a atravessar.'],
    ['nina', 'Projeto compartilhado', 'Sua pesquisa sobre distorções no espaço-tempo contribuiu para tornar o protótipo possível.']
  ],
  paraiso: [
    ['joel', 'Aliado', 'Atua ao lado de Joel e de outras figuras ligadas aos Arnins diante das rupturas.'],
    ['bobo', 'Conexão narrativa', 'Os dois ocupam posições distintas diante da Rainha do Vazio, dos Juízes e dos Fragmentos.'],
    ['codex', 'Elemento associado', 'Sua história se cruza com o Codéx, Fragmentos e âncoras.']
  ],
  bobo: [
    ['rainha-vazio', 'Vínculo com a corte', 'Sua identidade e suas escolhas se desenvolvem em torno da Rainha do Vazio e dos Juízes.'],
    ['paraiso', 'Aliado ou contraponto', 'Os dois enfrentam papéis diferentes dentro de conflitos que envolvem Fragmentos e o Codéx.'],
    ['guitarra-bobo', 'Objeto associado', 'A guitarra funciona como elemento de identidade e ação.']
  ],
  vincent: [
    ['barneys', 'Afiliação e comando', 'Sua atuação se liga à Barney’s Company e às operações que ocultaram experimentos.'],
    ['mountevoir', 'Adversário', 'Seu nome aparece na cadeia de decisões que conduziu ao caso Mountevoir.'],
    ['mark', 'Responsabilidade sobre o programa', 'A situação de Mark é uma das consequências diretas das pesquisas conduzidas sob sua influência.'],
    ['chinama', 'Local associado', 'Parte de sua trajetória e de seus conflitos é ligada a Chinama.']
  ],
  'rainha-vazio': [
    ['bobo', 'Figura da corte', 'O Bobo ocupa uma posição próxima o bastante para observar, desafiar e sobreviver às regras da corte.'],
    ['juizes', 'Estrutura de poder', 'A rainha e os Juízes representam partes diferentes da autoridade ligada ao Vazio.'],
    ['hiussen', 'Conexão de conflito', 'Seus planos e as rupturas de Hiussen se cruzam em torno do Codéx e das espirais.']
  ]
};

const profileOverrides = {
  ikarius: { origin: 'Bravara', residence: 'Cidade das Maravilhas', occupation: 'Investigador do C.I.A.N.E.', family: 'Filho de Mountevoir; irmão de Aphride.', affiliation: 'C.I.A.N.E.', status: 'Ativo nos acontecimentos de Devaneios', works: ['Arcanian: Devaneios', 'Jogo'] },
  aphride: { origin: 'Bravara', occupation: 'Agente de infiltração e operações de campo', family: 'Filha de Mountevoir; irmã de Ikarius.', affiliation: 'Operações ligadas ao grupo de Merius', status: 'Ativa nos acontecimentos de Devaneios', works: ['Arcanian: Devaneios', 'Jogo'] },
  mountevoir: { occupation: 'Investigador', family: 'Pai de Ikarius e Aphride.', affiliation: 'Rede de investigação anterior aos eventos principais', status: 'Morto antes do início da investigação principal', works: ['Arcanian: Devaneios'] },
  merius: { occupation: 'Investigador e estrategista; empresário sob a identidade Rafael Corvino', family: 'Tratado por Ikarius e Aphride como “tio Newman”, sem parentesco biológico confirmado.', affiliation: 'Aliado de Mountevoir; ligado aos Arnins', status: 'Identidade pública construída após simular a própria morte', works: ['Arcanian: Devaneios', 'Jogo'] },
  joel: { origin: 'Realidade −1', occupation: 'Cientista e viajante temporal', family: 'Marido e companheiro de Elisabeth.', affiliation: 'Pesquisa temporal; aliados de Merius e dos Arnins', status: 'Ativo entre diferentes realidades', works: ['Arcanian: Devaneios', 'Arcanian: Menos Um', 'Jogo'] },
  elisabeth: { occupation: 'Escritora', family: 'Esposa e companheira de Joel.', affiliation: 'Vida e pesquisa compartilhadas com Joel', status: 'Seu destino é parte central da trajetória de Joel', works: ['Arcanian: Devaneios', 'Arcanian: Menos Um'] },
  beatriz: { occupation: 'Estrategista e articuladora', affiliation: 'O Grande Roubo; Filhos da Meia-Noite', status: 'Ativa nos acontecimentos de Devaneios', works: ['Arcanian: Devaneios'] },
  gael: { occupation: 'Diretor e chefe operacional', affiliation: 'C.I.A.N.E.', status: 'Ativo nos acontecimentos de Devaneios', works: ['Arcanian: Devaneios'] },
  hiussen: { origin: 'Realidade −1', occupation: 'Entidade ligada às rupturas', family: 'Uma família perdida é mencionada; identidades e parentescos não foram divulgados.', affiliation: 'Busca própria ligada ao Codéx', status: 'Ameaça ativa em Devaneios', works: ['Arcanian: Devaneios'] },
  ezequiel: { residence: 'Campo Forte, Paraícaba', occupation: 'Delegado', family: 'Marido de Clarice Sant’Anna.', affiliation: 'Polícia local; ligação antiga com o arquivo Mountevoir', status: 'Morto no início de Devaneios', works: ['Arcanian: Devaneios'] },
  clarice: { residence: 'Campo Forte, Paraícaba', family: 'Esposa de Ezequiel Sant’Anna.', status: 'Morta no início de Devaneios', works: ['Arcanian: Devaneios'] },
  helena: { occupation: 'Responsável pelo arquivo anômalo e análise de evidências', affiliation: 'C.I.A.N.E.', status: 'Ativa nos acontecimentos de Devaneios', works: ['Arcanian: Devaneios'] },
  garry: { occupation: 'Pesquisador e analista de campo', affiliation: 'Operações ligadas aos Arnins', status: 'Ativo nos acontecimentos de Devaneios', works: ['Arcanian: Devaneios', 'Arcanian: Tormenta — anunciado'] },
  mirian: { occupation: 'Operadora de campo e guarda costeira', affiliation: 'Operações marítimas', status: 'Ativa nos acontecimentos conhecidos', works: ['Arcanian: Devaneios', 'Arcanian: Tormenta — anunciado'] },
  flavio: { occupation: 'Operador do Submundo de Bayrule', affiliation: 'Filhos da Meia-Noite', status: 'Ativo nos acontecimentos de Devaneios', works: ['Arcanian: Devaneios'] },
  lily: { occupation: 'Operadora e aliada no Submundo de Bayrule', affiliation: 'Rede de Flávio e Beatriz', status: 'Ativa nos acontecimentos de Devaneios', works: ['Arcanian: Devaneios'] },
  zane: { occupation: 'Figura ligada às dívidas do Submundo de Bayrule', family: 'Possui família ameaçada pelas consequências da dívida; nomes não divulgados.', affiliation: 'Relações com os Filhos da Meia-Noite', status: 'Ativo nos acontecimentos conhecidos', works: ['Arcanian: Devaneios'] },
  kaji: { occupation: 'Credor e figura de poder no Submundo de Bayrule', affiliation: 'Hierarquias criminosas de Bayrule', status: 'Ativo nos acontecimentos conhecidos', works: ['Arcanian: Devaneios'] },
  nicolle: { occupation: 'Sobrevivente e testemunha do L.A.C.H.R.Y.M.A.', affiliation: 'Projeto L.A.C.H.R.Y.M.A. como vítima; posteriormente aliada de Aphride', status: 'Sobrevivente', works: ['Arcanian: Devaneios', 'Arcanian: Tormenta — anunciado'] },
  mark: { occupation: 'Paciente e principal resultado do L.A.C.H.R.Y.M.A.', affiliation: 'Projeto L.A.C.H.R.Y.M.A. como vítima', status: 'Situação protegida por spoilers', works: ['Arcanian: Devaneios', 'Arcanian: Tormenta — anunciado'] },
  lucarne: { occupation: 'Figura ligada às rotas de proteção de Nicolle', affiliation: 'Rede de aliados contra a Barney’s', status: 'Ativo nos acontecimentos conhecidos', works: ['Arcanian: Devaneios'] },
  samira: { occupation: 'Pesquisadora de espirais e memória material', affiliation: 'Arnins', status: 'Ativa nos acontecimentos de Devaneios', works: ['Arcanian: Devaneios', 'Arcanian: Tormenta — anunciado'] },
  sieg: { occupation: 'Combatente ligado a Chinama', affiliation: 'Conexões com Mark e o L.A.C.H.R.Y.M.A.', status: 'Situação protegida por spoilers', works: ['Arcanian: Devaneios', 'Arcanian: Tormenta — anunciado'] },
  'juan-campos': { occupation: 'Cientista e pesquisador de distorções no espaço-tempo', affiliation: 'Pesquisa temporal com Joel', status: 'Participação anterior à ruptura', works: ['Arcanian: Devaneios', 'Arcanian: Menos Um'] },
  paraiso: { occupation: 'Figura ligada a Fragmentos e ao Codéx', affiliation: 'Aliados dos Arnins', status: 'Ativo nos acontecimentos de Devaneios', works: ['Arcanian: Devaneios', 'Jogo'] },
  bobo: { occupation: 'Bobo da corte e agente imprevisível', affiliation: 'Corte da Rainha do Vazio', status: 'Ativo nos acontecimentos conhecidos', works: ['Arcanian: Devaneios', 'Jogo'] },
  vincent: { occupation: 'Executivo e articulador de operações experimentais', affiliation: 'Barney’s Company', status: 'Ativo na cadeia de eventos de Devaneios', works: ['Arcanian: Devaneios', 'Arcanian: Tormenta — anunciado'] },
  'rainha-vazio': { occupation: 'Soberana ligada ao Vazio', affiliation: 'Corte do Vazio e Juízes', status: 'Ativa nos acontecimentos conhecidos', works: ['Arcanian: Devaneios', 'Jogo'] },
  lachryma: { occupation: 'Programa experimental', affiliation: 'Pesquisas posteriormente ocultadas pela Barney’s Company', status: 'Encerrado ou fragmentado; consequências permanecem', works: ['Arcanian: Devaneios', 'Arcanian: Tormenta — anunciado'] },
  tormenta: { works: ['Arcanian: Tormenta'] }
};

const profileCopy = {
  pt:{
    categories:{
      characters:['Personagem','Situação ainda não divulgada','Trajetória conhecida','Família e relações','Afiliações, lugares e acontecimentos'],
      organizations:['Organização','Atuação descrita nas obras','Origem e atuação','Pessoas e estruturas relacionadas','Operações e alcance'],
      places:['Local','Local conhecido no universo','Geografia e presença narrativa','Pessoas, instituições e acontecimentos','Importância no universo'],
      concepts:['Conceito','Definição baseada no material publicado','Funcionamento conhecido','Conceitos e casos relacionados','Limites e consequências'],
      events:['Evento','Acontecimento registrado na narrativa','Antecedentes e desenvolvimento','Participantes e consequências','Impacto posterior'],
      anomalies:['Anomalia','Fenômeno documentado','Comportamento observado','Casos, lugares e evidências','Interpretações e riscos'],
      objects:['Objeto','Presença documentada nas obras','Origem e utilização','Portadores, casos e conceitos','Função narrativa e material']
    },
    facts:{type:'Tipo',name:'Nome completo',alias:'Também conhecido como',role:'Atuação',family:'Família e parentesco',affiliation:'Afiliação',origin:'Origem',place:'Local associado',status:'Situação',first:'Primeira aparição',works:'Presença nas obras',classification:'Classificação',designation:'Designação',other:'Outro nome',function:'Função no universo',people:'Pessoas relacionadas',organizations:'Organizações relacionadas',places:'Lugares associados',connections:'Número de conexões'},
    none:'Nenhuma ligação desse tipo foi divulgada.', notApplicable:'Não se aplica.', unknown:'Não divulgado no material publicado.', noAlias:'Nenhum outro nome divulgado', variable:'Não confirmada ou variável.', noPlace:'Não estabelecido de forma pública.', noFamily:'Nenhum parentesco foi identificado no material publicado até o momento.', overview:'Visão geral', presence:'Presença nas obras', documented:'Conexão documentada', noConnection:'Nenhuma conexão adicional foi estabelecida no material publicado.', relationNote:(name,text)=>`${name}: ${text}`, relationFallback:(name)=>`A entrada aparece ligada a ${name} no material publicado.`, context:(name)=>`As conexões acima organizam ${name} no universo sem transformar informações ainda não publicadas em fatos.`, work:(work)=>`${work}. A entrada é apresentada, citada ou anunciada nesse projeto conforme o material público disponível.`, groups:[['Personagens',['characters']],['Organizações',['organizations']],['Lugares',['places']],['Conceitos e anomalias',['concepts','anomalies']],['Eventos e objetos',['events','objects']]]
  },
  en:{
    categories:{characters:['Character','Documented in the published material','Known trajectory','Family and relationships','Affiliations, places and events'],organizations:['Organization','Activity documented in the works','Origin and activity','Related people and structures','Operations and reach'],places:['Location','Known location in the universe','Geography and narrative presence','People, institutions and events','Importance in the universe'],concepts:['Concept','Definition based on published material','Known operation','Related concepts and cases','Limits and consequences'],events:['Event','Event recorded in the narrative','Background and development','Participants and consequences','Later impact'],anomalies:['Anomaly','Documented phenomenon','Observed behaviour','Cases, places and evidence','Interpretations and risks'],objects:['Object','Documented presence in the works','Origin and use','Holders, cases and concepts','Narrative and material function']},
    facts:{type:'Type',name:'Full name',alias:'Also known as',role:'Role',family:'Family and kinship',affiliation:'Affiliation',origin:'Origin',place:'Associated location',status:'Status',first:'First appearance',works:'Presence in works',classification:'Classification',designation:'Designation',other:'Other name',function:'Function in the universe',people:'Related people',organizations:'Related organizations',places:'Associated locations',connections:'Number of connections'},
    none:'No connection of this type has been disclosed.',notApplicable:'Not applicable.',unknown:'Not disclosed in the published material.',noAlias:'No other name disclosed',variable:'Unconfirmed or variable.',noPlace:'Not publicly established.',noFamily:'No family relationship has been identified in the published material.',overview:'Overview',presence:'Presence in the works',documented:'Documented connection',noConnection:'No additional connection has been established in the published material.',relationNote:(name,text)=>`${name}: ${text}`,relationFallback:(name)=>`The published material links this entry to ${name}.`,context:(name)=>`The links above place ${name} within the universe without presenting unpublished information as fact.`,work:(work)=>`${work}. The entry is presented, mentioned or announced in this project according to the available public material.`,groups:[['Characters',['characters']],['Organizations',['organizations']],['Locations',['places']],['Concepts and anomalies',['concepts','anomalies']],['Events and objects',['events','objects']]]
  },
  es:{
    categories:{characters:['Personaje','Documentado en el material publicado','Trayectoria conocida','Familia y relaciones','Afiliaciones, lugares y acontecimientos'],organizations:['Organización','Actividad descrita en las obras','Origen y actividad','Personas y estructuras relacionadas','Operaciones y alcance'],places:['Lugar','Lugar conocido en el universo','Geografía y presencia narrativa','Personas, instituciones y acontecimientos','Importancia en el universo'],concepts:['Concepto','Definición basada en el material publicado','Funcionamiento conocido','Conceptos y casos relacionados','Límites y consecuencias'],events:['Acontecimiento','Acontecimiento registrado en la narración','Antecedentes y desarrollo','Participantes y consecuencias','Impacto posterior'],anomalies:['Anomalía','Fenómeno documentado','Comportamiento observado','Casos, lugares y pruebas','Interpretaciones y riesgos'],objects:['Objeto','Presencia documentada en las obras','Origen y uso','Portadores, casos y conceptos','Función narrativa y material']},
    facts:{type:'Tipo',name:'Nombre completo',alias:'También conocido como',role:'Función',family:'Familia y parentesco',affiliation:'Afiliación',origin:'Origen',place:'Lugar asociado',status:'Situación',first:'Primera aparición',works:'Presencia en las obras',classification:'Clasificación',designation:'Designación',other:'Otro nombre',function:'Función en el universo',people:'Personas relacionadas',organizations:'Organizaciones relacionadas',places:'Lugares asociados',connections:'Número de conexiones'},
    none:'No se ha revelado ninguna conexión de este tipo.',notApplicable:'No se aplica.',unknown:'No revelado en el material publicado.',noAlias:'No se ha revelado otro nombre',variable:'No confirmada o variable.',noPlace:'No establecido públicamente.',noFamily:'No se ha identificado parentesco en el material publicado.',overview:'Visión general',presence:'Presencia en las obras',documented:'Conexión documentada',noConnection:'No se ha establecido ninguna conexión adicional en el material publicado.',relationNote:(name,text)=>`${name}: ${text}`,relationFallback:(name)=>`El material publicado vincula esta entrada con ${name}.`,context:(name)=>`Las conexiones anteriores sitúan a ${name} en el universo sin presentar información no publicada como un hecho.`,work:(work)=>`${work}. La entrada aparece, se menciona o se anuncia en este proyecto según el material público disponible.`,groups:[['Personajes',['characters']],['Organizaciones',['organizations']],['Lugares',['places']],['Conceptos y anomalías',['concepts','anomalies']],['Acontecimientos y objetos',['events','objects']]]
  },
  it:{
    categories:{characters:['Personaggio','Documentato nel materiale pubblicato','Percorso noto','Famiglia e relazioni','Affiliazioni, luoghi ed eventi'],organizations:['Organizzazione','Attività descritta nelle opere','Origine e attività','Persone e strutture collegate','Operazioni e portata'],places:['Luogo','Luogo noto nell’universo','Geografia e presenza narrativa','Persone, istituzioni ed eventi','Importanza nell’universo'],concepts:['Concetto','Definizione basata sul materiale pubblicato','Funzionamento noto','Concetti e casi collegati','Limiti e conseguenze'],events:['Evento','Evento registrato nella narrazione','Antefatti e sviluppo','Partecipanti e conseguenze','Impatto successivo'],anomalies:['Anomalia','Fenomeno documentato','Comportamento osservato','Casi, luoghi e prove','Interpretazioni e rischi'],objects:['Oggetto','Presenza documentata nelle opere','Origine e utilizzo','Portatori, casi e concetti','Funzione narrativa e materiale']},
    facts:{type:'Tipo',name:'Nome completo',alias:'Conosciuto anche come',role:'Ruolo',family:'Famiglia e parentela',affiliation:'Affiliazione',origin:'Origine',place:'Luogo associato',status:'Stato',first:'Prima apparizione',works:'Presenza nelle opere',classification:'Classificazione',designation:'Designazione',other:'Altro nome',function:'Funzione nell’universo',people:'Persone collegate',organizations:'Organizzazioni collegate',places:'Luoghi associati',connections:'Numero di collegamenti'},
    none:'Non è stato rivelato alcun collegamento di questo tipo.',notApplicable:'Non applicabile.',unknown:'Non rivelato nel materiale pubblicato.',noAlias:'Nessun altro nome rivelato',variable:'Non confermata o variabile.',noPlace:'Non stabilito pubblicamente.',noFamily:'Nessuna parentela è stata identificata nel materiale pubblicato.',overview:'Panoramica',presence:'Presenza nelle opere',documented:'Collegamento documentato',noConnection:'Nessun collegamento aggiuntivo è stato stabilito nel materiale pubblicato.',relationNote:(name,text)=>`${name}: ${text}`,relationFallback:(name)=>`Il materiale pubblicato collega questa voce a ${name}.`,context:(name)=>`I collegamenti precedenti collocano ${name} nell’universo senza presentare informazioni non pubblicate come fatti.`,work:(work)=>`${work}. La voce è presentata, citata o annunciata in questo progetto secondo il materiale pubblico disponibile.`,groups:[['Personaggi',['characters']],['Organizzazioni',['organizations']],['Luoghi',['places']],['Concetti e anomalie',['concepts','anomalies']],['Eventi e oggetti',['events','objects']]]
  },
  ja:{
    categories:{characters:['人物','出版資料で確認済み','確認された経歴','家族と関係','所属・場所・出来事'],organizations:['組織','作品内で活動を確認','起源と活動','関係する人物と構造','作戦と範囲'],places:['場所','世界内で確認された場所','地理と物語上の役割','人物・組織・出来事','世界における重要性'],concepts:['概念','出版資料に基づく定義','確認された仕組み','関連概念と事件','限界と結果'],events:['出来事','物語に記録された出来事','背景と展開','参加者と結果','その後の影響'],anomalies:['異常現象','記録された現象','観測された挙動','事件・場所・証拠','解釈と危険'],objects:['物品','作品内で存在を確認','起源と用途','所持者・事件・概念','物語上・物質上の機能']},
    facts:{type:'種別',name:'正式名',alias:'別名',role:'役割',family:'家族・親族',affiliation:'所属',origin:'出自',place:'関連場所',status:'状況',first:'初登場',works:'登場作品',classification:'分類',designation:'名称',other:'別称',function:'世界内の機能',people:'関連人物',organizations:'関連組織',places:'関連場所',connections:'接続数'},
    none:'この種類の関係はまだ公開されていません。',notApplicable:'該当なし。',unknown:'出版資料では未公開です。',noAlias:'別名は公開されていません',variable:'未確認または変動します。',noPlace:'公開情報では確定していません。',noFamily:'出版資料で親族関係は確認されていません。',overview:'概要',presence:'登場作品',documented:'確認された関係',noConnection:'出版資料で追加の関係は確認されていません。',relationNote:(name,text)=>`${name}：${text}`,relationFallback:(name)=>`出版資料では${name}との関係が示されています。`,context:(name)=>`上の関係は、未公開情報を事実化せずに${name}を世界内へ位置づけます。`,work:(work)=>`${work}。公開資料に基づき、この企画で登場・言及・発表されています。`,groups:[['人物',['characters']],['組織',['organizations']],['場所',['places']],['概念と異常現象',['concepts','anomalies']],['出来事と物品',['events','objects']]]
  }
};

function findEntry(slug, allEntries) { return allEntries.find((item) => item.slug === slug); }

function categoryData(entry, t) { return t.categories[entry.category] || t.categories.concepts; }

function automaticRelationships(entry, allEntries, t) {
  return (entry.related || []).map((slug) => {
    const related = findEntry(slug, allEntries);
    const first = related?.summary?.trim() || related?.body?.[0]?.trim();
    return { slug, name:related?.name || slug, label:t.documented, note:first ? t.relationNote(related?.name || slug, first) : t.relationFallback(related?.name || slug) };
  });
}

function relationshipsFor(entry, allEntries, lang, t) {
  const manual = lang === 'pt' ? relationshipOverrides[entry.slug] : null;
  return manual ? manual.map(([slug,label,note])=>({slug,label,note,name:findEntry(slug,allEntries)?.name || slug})) : automaticRelationships(entry,allEntries,t);
}

function groupedNames(relationships, allEntries, categories, t) {
  const values=relationships.filter((r)=>categories.includes(findEntry(r.slug,allEntries)?.category)).map((r)=>r.name);
  return values.length ? values.join(' · ') : t.none;
}

function getWorks(entry, override) { return entry.meta?.works || override.works || ['Arcanian: Devaneios — Episódio I']; }
function getFamily(entry, override, t) { return entry.category !== 'characters' ? t.notApplicable : entry.meta?.family || override.family || t.noFamily; }

function buildFacts(entry, allEntries, relationships, override, category, t) {
  const orgs=groupedNames(relationships,allEntries,['organizations'],t), places=groupedNames(relationships,allEntries,['places'],t), people=groupedNames(relationships,allEntries,['characters'],t), works=getWorks(entry,override), f=t.facts;
  if(entry.category==='characters') return [[f.type,category[0]],[f.name,entry.name],[f.alias,entry.alias||t.noAlias],[f.role,entry.meta?.occupation||override.occupation||entry.tag||t.unknown],[f.family,getFamily(entry,override,t)],[f.affiliation,entry.meta?.affiliation||override.affiliation||(orgs===t.none?t.variable:orgs)],[f.origin,entry.meta?.origin||override.origin||t.unknown],[f.place,entry.meta?.residence||override.residence||(places===t.none?t.noPlace:places)],[f.status,entry.meta?.status||override.status||category[1]],[f.first,entry.meta?.firstAppearance||t.unknown],[f.works,works.join(' · ')]];
  return [[f.classification,category[0]],[f.designation,entry.name],[f.other,entry.alias||t.noAlias],[f.function,entry.meta?.occupation||override.occupation||entry.tag||t.unknown],[f.people,people],[f.organizations,orgs],[f.places,places],[f.status,entry.meta?.status||override.status||category[1]],[f.first,entry.meta?.firstAppearance||t.unknown],[f.works,works.join(' · ')],[f.connections,String(relationships.length)]];
}

function contextParagraphs(entry, relationships, allEntries, t) {
  return t.groups.map(([label,categories])=>{const names=groupedNames(relationships,allEntries,categories,t);return names===t.none?null:`${label}: ${names}.`;}).filter(Boolean).concat([t.context(entry.name)]);
}

export function getWikiProfile(entry, allEntries, lang='pt') {
  const t=profileCopy[lang] || profileCopy.pt, category=categoryData(entry,t), override=lang==='pt'?(profileOverrides[entry.slug]||{}):{}, relationships=relationshipsFor(entry,allEntries,lang,t), works=getWorks(entry,override), body=(entry.body||[]).filter(Boolean), history=body.length?body:[entry.summary];
  const relationParagraphs=entry.category==='characters'?[getFamily(entry,override,t),...relationships.map((r)=>`${r.label} — ${r.name}. ${r.note}`)]:relationships.map((r)=>`${r.label} — ${r.name}. ${r.note}`);
  return { facts:buildFacts(entry,allEntries,relationships,override,category,t), relationships, works, sections:[
    {title:t.overview,paragraphs:[entry.summary,history[0]].filter((v,i,a)=>v&&a.indexOf(v)===i)},
    {title:category[2],paragraphs:[history[1]||history[0],...history.slice(2)].filter(Boolean)},
    {title:category[3],paragraphs:relationParagraphs.length?relationParagraphs:[t.noConnection]},
    {title:category[4],paragraphs:contextParagraphs(entry,relationships,allEntries,t)},
    {title:t.presence,paragraphs:works.map(t.work)}
  ]};
}
