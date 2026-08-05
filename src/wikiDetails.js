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

const categoryProfiles = {
  characters: { kind: 'Personagem', status: 'Situação ainda não divulgada', historyTitle: 'Trajetória conhecida', relationTitle: 'Família e relações', contextTitle: 'Afiliações, lugares e acontecimentos' },
  organizations: { kind: 'Organização', status: 'Atuação descrita nas obras', historyTitle: 'Origem e atuação', relationTitle: 'Pessoas e estruturas relacionadas', contextTitle: 'Operações e alcance' },
  places: { kind: 'Local', status: 'Local conhecido no universo', historyTitle: 'Geografia e presença narrativa', relationTitle: 'Pessoas, instituições e acontecimentos', contextTitle: 'Importância no universo' },
  concepts: { kind: 'Conceito', status: 'Definição baseada no material publicado', historyTitle: 'Funcionamento conhecido', relationTitle: 'Conceitos e casos relacionados', contextTitle: 'Limites e consequências' },
  events: { kind: 'Evento', status: 'Acontecimento registrado na narrativa', historyTitle: 'Antecedentes e desenvolvimento', relationTitle: 'Participantes e consequências', contextTitle: 'Impacto posterior' },
  anomalies: { kind: 'Anomalia', status: 'Fenômeno documentado', historyTitle: 'Comportamento observado', relationTitle: 'Casos, lugares e evidências', contextTitle: 'Interpretações e riscos' },
  objects: { kind: 'Objeto', status: 'Presença documentada nas obras', historyTitle: 'Origem e utilização', relationTitle: 'Portadores, casos e conceitos', contextTitle: 'Função narrativa e material' }
};

const relationLabels = {
  characters: { characters: 'Relação pessoal ou narrativa', organizations: 'Afiliação ou contato', places: 'Local associado', concepts: 'Conceito ligado à trajetória', events: 'Evento relacionado', anomalies: 'Anomalia relacionada', objects: 'Objeto associado' },
  organizations: { characters: 'Pessoa relacionada', organizations: 'Instituição relacionada', places: 'Área de atuação', concepts: 'Linha de pesquisa ou princípio', events: 'Operação ou acontecimento', anomalies: 'Fenômeno estudado', objects: 'Recurso ou evidência' },
  places: { characters: 'Pessoa associada', organizations: 'Instituição presente', places: 'Região relacionada', concepts: 'Conceito associado', events: 'Acontecimento no local', anomalies: 'Fenômeno registrado', objects: 'Objeto encontrado ou utilizado' },
  concepts: { characters: 'Pessoa ligada ao conceito', organizations: 'Instituição relacionada', places: 'Local de manifestação', concepts: 'Conceito relacionado', events: 'Evento em que aparece', anomalies: 'Manifestação anômala', objects: 'Objeto relacionado' },
  events: { characters: 'Participante ou vítima', organizations: 'Organização envolvida', places: 'Local do acontecimento', concepts: 'Conceito central', events: 'Evento relacionado', anomalies: 'Fenômeno presente', objects: 'Objeto relevante' },
  anomalies: { characters: 'Pessoa exposta', organizations: 'Instituição investigadora', places: 'Local de ocorrência', concepts: 'Princípio relacionado', events: 'Caso associado', anomalies: 'Fenômeno relacionado', objects: 'Evidência ou vetor' },
  objects: { characters: 'Portador ou criador', organizations: 'Instituição relacionada', places: 'Local associado', concepts: 'Princípio de funcionamento', events: 'Caso ou uso registrado', anomalies: 'Reação observada', objects: 'Objeto relacionado' }
};

function findEntry(slug, allEntries) {
  return allEntries.find((item) => item.slug === slug);
}

function relationNote(entry, related) {
  if (!related) return 'A conexão foi indicada nas obras, mas os detalhes públicos permanecem limitados.';
  const first = related.summary?.trim() || related.body?.[0]?.trim();
  return first ? `${related.name}: ${first}` : `A entrada aparece ligada a ${related.name} no material publicado.`;
}

function automaticRelationships(entry, allEntries) {
  return entry.related.map((slug) => {
    const related = findEntry(slug, allEntries);
    return {
      slug,
      name: related?.name || slug,
      label: relationLabels[entry.category]?.[related?.category] || 'Conexão documentada',
      note: relationNote(entry, related)
    };
  });
}

function groupedNames(relationships, allEntries, categories) {
  const values = relationships
    .filter((relationship) => categories.includes(findEntry(relationship.slug, allEntries)?.category))
    .map((relationship) => relationship.name);
  return values.length ? values.join(' · ') : 'Nenhuma ligação desse tipo foi divulgada.';
}

function buildContextParagraphs(entry, relationships, allEntries) {
  const groups = [
    ['Personagens', ['characters']],
    ['Organizações', ['organizations']],
    ['Lugares', ['places']],
    ['Conceitos e anomalias', ['concepts', 'anomalies']],
    ['Eventos e objetos', ['events', 'objects']]
  ];
  return groups
    .map(([label, categories]) => {
      const names = groupedNames(relationships, allEntries, categories);
      return names.startsWith('Nenhuma') ? null : `${label}: ${names}.`;
    })
    .filter(Boolean)
    .concat([`As conexões acima são apresentadas como relações editoriais entre entradas. Elas ajudam a localizar ${entry.name} no universo sem transformar informações ainda não publicadas em fatos.`]);
}

function getWorks(entry, override) {
  return entry.meta?.works || override.works || ['Arcanian: Devaneios — Episódio I'];
}

function getFamily(entry, override) {
  if (entry.category !== 'characters') return 'Não se aplica.';
  return entry.meta?.family || override.family || 'Nenhum parentesco foi identificado no material publicado até o momento.';
}

function buildFacts(entry, allEntries, relationships, override, category) {
  const relatedOrganizations = groupedNames(relationships, allEntries, ['organizations']);
  const relatedPlaces = groupedNames(relationships, allEntries, ['places']);
  const relatedPeople = groupedNames(relationships, allEntries, ['characters']);
  const works = getWorks(entry, override);

  if (entry.category === 'characters') {
    return [
      ['Tipo', category.kind],
      ['Nome completo', entry.name],
      ['Também conhecido como', entry.alias || 'Nenhum outro nome divulgado'],
      ['Atuação', entry.meta?.occupation || override.occupation || entry.tag || 'Função não divulgada'],
      ['Família e parentesco', getFamily(entry, override)],
      ['Afiliação', entry.meta?.affiliation || override.affiliation || (relatedOrganizations.startsWith('Nenhuma') ? 'Não confirmada ou variável.' : relatedOrganizations)],
      ['Origem', entry.meta?.origin || override.origin || 'Não divulgada no material publicado.'],
      ['Local associado', entry.meta?.residence || override.residence || (relatedPlaces.startsWith('Nenhuma') ? 'Não estabelecido de forma pública.' : relatedPlaces)],
      ['Situação', entry.meta?.status || override.status || category.status],
      ['Primeira aparição', entry.meta?.firstAppearance || 'Não especificada editorialmente.'],
      ['Presença nas obras', works.join(' · ')]
    ];
  }

  return [
    ['Classificação', category.kind],
    ['Designação', entry.name],
    ['Outro nome', entry.alias || 'Nenhum outro nome divulgado'],
    ['Função no universo', entry.meta?.occupation || override.occupation || entry.tag || 'Função descrita na narrativa'],
    ['Pessoas relacionadas', relatedPeople],
    ['Organizações relacionadas', relatedOrganizations],
    ['Lugares associados', relatedPlaces],
    ['Situação conhecida', entry.meta?.status || override.status || category.status],
    ['Primeira aparição', entry.meta?.firstAppearance || 'Não especificada editorialmente.'],
    ['Presença nas obras', works.join(' · ')],
    ['Número de conexões', String(relationships.length)]
  ];
}

export function getWikiProfile(entry, allEntries) {
  const category = categoryProfiles[entry.category] || categoryProfiles.concepts;
  const override = profileOverrides[entry.slug] || {};
  const manual = relationshipOverrides[entry.slug];
  const relationships = manual
    ? manual.map(([slug, label, note]) => ({ slug, label, note, name: findEntry(slug, allEntries)?.name || slug }))
    : automaticRelationships(entry, allEntries);
  const works = getWorks(entry, override);
  const body = (entry.body || []).filter(Boolean);
  const history = body.length ? body : [entry.summary];
  const relationParagraphs = entry.category === 'characters'
    ? [getFamily(entry, override), ...relationships.map((item) => `${item.label} — ${item.name}. ${item.note}`)]
    : relationships.map((item) => `${item.label} — ${item.name}. ${item.note}`);

  return {
    facts: buildFacts(entry, allEntries, relationships, override, category),
    relationships,
    works,
    sections: [
      {
        title: 'Visão geral',
        paragraphs: [entry.summary, history[0]].filter((value, index, array) => value && array.indexOf(value) === index)
      },
      {
        title: category.historyTitle,
        paragraphs: [history[1] || history[0], ...history.slice(2)].filter(Boolean)
      },
      {
        title: category.relationTitle,
        paragraphs: relationParagraphs.length ? relationParagraphs : ['Nenhuma conexão adicional foi estabelecida no material publicado.']
      },
      {
        title: category.contextTitle,
        paragraphs: buildContextParagraphs(entry, relationships, allEntries)
      },
      {
        title: 'Presença nas obras',
        paragraphs: works.map((work) => `${work}. A entrada é apresentada, citada ou anunciada dentro desse projeto conforme o material público disponível.`)
      }
    ]
  };
}
