const pt = [
  { number:'P', title:'Prólogo', summary:'Joel registra a criação de Nina, o primeiro salto temporal e a decisão que rompe a Realidade −1.', focus:['joel','nina','experimento-nina','realidade-menos-um'] },
  { number:'01', title:'Espirais', summary:'A morte de Ezequiel e Clarice repete o padrão do caso Mountevoir. Ikarius reabre o arquivo e reencontra Aphride e Merius.', focus:['caso-santanna','ezequiel','clarice','ikarius','mnt-04','retorno-merius'] },
  { number:'02', title:'Dia um', summary:'Merius explica os vinte anos de ausência, o grupo define a investigação e uma ocorrência no Farol Tálassa revela uma nova Espiral.', focus:['merius','caso-mountevoir','farol-talassa','garry','espiral'] },
  { number:'03', title:'O Grande Roubo', summary:'Em Kyrna, Beatriz apresenta o plano, o grupo enfrenta um hospedeiro e descobre que o caso alcança toda a realidade.', focus:['grande-roubo','beatriz','kyrna','paraiso','joel','hiussen'] },
  { number:'04', title:'O relógio corre', summary:'Kyrna tenta sobreviver ao desastre enquanto o C.I.A.N.E. reage, as raízes do Codéx adoecem e Aphride parte para encontrar Nicolle.', focus:['ciane','codex','aphride','nicolle','fundacao-arnins'] },
  { number:'05', title:'Velhos conhecidos', summary:'Joel e Merius pesquisam arquivos Arnins, confrontam decisões antigas e percebem que o medo também produziu silêncio.', focus:['joel','merius','arnins','lachryma','mountevoir'] },
  { number:'06', title:'O preço da cura', summary:'A dívida de Zane revela como remédios, famílias e recompensas sustentam o poder do Submundo de Bayrule.', focus:['zane','kaji','circulo-fogo','submundo-bayrule','barneys'] },
  { number:'07', title:'Dívidas antigas', summary:'Beatriz retorna aos Filhos da Meia-Noite e expõe a parceria que transformou rotas de ajuda em fonte de vítimas para a Barney’s.', focus:['filhos-meia-noite','beatriz','flavio','lily','parceria-barneys-filhos','lachryma'] },
  { number:'08', title:'Um grande problema', summary:'Aphride conduz Nicolle até Lucarne, enquanto Ikarius interroga o Bobo e delimita as regras conhecidas das âncoras e Fragmentos.', focus:['aphride','nicolle','lucarne','bobo','fragmentos','ancoras'] },
  { number:'09', title:'Árvores do passado', summary:'Um registro temporal de Joel e os arquivos mortos dos Arnins ligam experiências pessoais a uma ameaça preparada há décadas.', focus:['joel','elisabeth','arquivo-morto','codex','merius'] },
  { number:'10', title:'O deserto gelado', summary:'Ikarius atravessa as Montanhas de Mountevoir enquanto Garry e Mirian descobrem que os pulsos submarinos não são mensagem, mas ritmo de despertar.', focus:['montanhas-mountevoir','ikarius','garry','mirian','linha-abissal','kaiju'] },
  { number:'11', title:'Uma visita inesperada', summary:'Lucarne apresenta a cadeia de laboratórios e o grupo transforma medo em método antes que a próxima incursão comece.', focus:['lucarne','barneys','nicolle','hiussen','fato-inferencia-teste'] },
  { number:'12', title:'A luz do novo dia', summary:'Joel revisita 1988 e a vida com Elisabeth; no presente, Garry e Mirian preparam o Manda-01 para proteger a costa.', focus:['joel','elisabeth','nina','manda-01','garry','mirian'] },
  { number:'13', title:'O despertar do gigante', summary:'Nereida-6 afunda, um Kaiju desperta e as âncoras de Hiussen passam a responder como uma rede distribuída por Arcanian.', focus:['nereida-6','incidente-nereida','kaiju','ataque-kaiju','hiussen','ancoras'] },
  { number:'14', title:'A Barney’s Company', summary:'Kaji descobre que a empresa pretende eliminar os próprios intermediários, enquanto Beatriz e Flávio pagam o custo da guerra no Submundo.', focus:['barneys','kaji','beatriz','flavio','circulo-fogo'] },
  { number:'15', title:'O Grande Dia', summary:'O passado de Chinama revela Mark, Nicolle, Vincent e a origem política do L.A.C.H.R.Y.M.A. antes da batalha que mudou o continente.', focus:['grande-dia','chinama','mark','nicolle','vincent','lachryma','batalha-chinama'] },
  { number:'16', title:'A luz que ilumina o mundo', summary:'Hiussen invade Koreth em busca do Codéx. A batalha obriga cada personagem a escolher o que salvar e o que não pode mais recuperar.', focus:['batalha-koreth','hiussen','codex','ikarius','merius','aphride'] },
  { number:'17', title:'Próxima parada: Arcanian', summary:'Nas ruínas de Koreth, os sobreviventes nomeiam Suji-74, enterram seus mortos e entendem que a investigação agora pertence aos vivos.', focus:['suji-74','memorial-koreth','koreth','ikarius','agente-infeccioso'] }
];

const en = [
  { number:'P', title:'Prologue', summary:'Joel records the creation of Nina, the first temporal jump and the decision that tears Reality −1 apart.', focus:pt[0].focus },
  { number:'01', title:'Spirals', summary:'The deaths of Ezequiel and Clarice repeat the Mountevoir pattern. Ikarius reopens the file and meets Aphride and Merius again.', focus:pt[1].focus },
  { number:'02', title:'Day One', summary:'Merius explains twenty years of absence, the group defines the investigation, and an incident at Tálassa Lighthouse reveals a new Spiral.', focus:pt[2].focus },
  { number:'03', title:'The Great Robbery', summary:'In Kyrna, Beatriz presents the plan, the group confronts a host, and the case expands to the scale of an entire reality.', focus:pt[3].focus },
  { number:'04', title:'The Clock Is Running', summary:'Kyrna struggles through the disaster, C.I.A.N.E. reacts, the Codex roots begin to fail, and Aphride leaves to find Nicolle.', focus:pt[4].focus },
  { number:'05', title:'Old Acquaintances', summary:'Joel and Merius search Arnin records, confront old choices, and recognize how fear also produced silence.', focus:pt[5].focus },
  { number:'06', title:'The Price of a Cure', summary:'Zane’s debt exposes how medicine, family, and bounties sustain power in Bayrule’s Underworld.', focus:pt[6].focus },
  { number:'07', title:'Old Debts', summary:'Beatriz returns to the Children of Midnight and exposes the partnership that turned aid routes into a source of victims for Barney’s.', focus:pt[7].focus },
  { number:'08', title:'A Major Problem', summary:'Aphride leads Nicolle to Lucarne while Ikarius questions the Jester and defines the known rules of Anchors and Fragments.', focus:pt[8].focus },
  { number:'09', title:'Trees of the Past', summary:'A temporal record by Joel and the Arnins’ dead archives connect personal loss to a threat prepared over decades.', focus:pt[9].focus },
  { number:'10', title:'The Frozen Desert', summary:'Ikarius crosses the Mountevoir Mountains while Garry and Mirian learn that the underwater pulses are not a message but a waking rhythm.', focus:pt[10].focus },
  { number:'11', title:'An Unexpected Visit', summary:'Lucarne reveals the chain of laboratories, and the group turns fear into method before the next incursion begins.', focus:pt[11].focus },
  { number:'12', title:'The Light of a New Day', summary:'Joel revisits 1988 and his life with Elisabeth; in the present, Garry and Mirian prepare Manda-01 to protect the coast.', focus:pt[12].focus },
  { number:'13', title:'The Giant Awakens', summary:'Nereida-6 sinks, a Kaiju wakes, and Hiussen’s Anchors begin responding as a network spread across Arcanian.', focus:pt[13].focus },
  { number:'14', title:'The Barney’s Company', summary:'Kaji discovers that the company plans to erase its own intermediaries while Beatriz and Flávio pay the cost of war in the Underworld.', focus:pt[14].focus },
  { number:'15', title:'The Great Day', summary:'Chinama’s past reveals Mark, Nicolle, Vincent, and the political origin of L.A.C.H.R.Y.M.A. before the battle that changed the continent.', focus:pt[15].focus },
  { number:'16', title:'The Light That Illuminates the World', summary:'Hiussen invades Koreth in search of the Codex. The battle forces every character to decide what can still be saved.', focus:pt[16].focus },
  { number:'17', title:'Next Stop: Arcanian', summary:'Among Koreth’s ruins, the survivors name Suji-74, bury their dead, and understand that the investigation now belongs to the living.', focus:pt[17].focus }
];

const es = [
  { number:'P', title:'Prólogo', summary:'Joel registra la creación de Nina, el primer salto temporal y la decisión que desgarra la Realidad −1.', focus:pt[0].focus },
  { number:'01', title:'Espirales', summary:'Las muertes de Ezequiel y Clarice repiten el patrón Mountevoir. Ikarius reabre el archivo y se reencuentra con Aphride y Merius.', focus:pt[1].focus },
  { number:'02', title:'Día uno', summary:'Merius explica veinte años de ausencia, el grupo define la investigación y un incidente en el Faro Tálassa revela una nueva Espiral.', focus:pt[2].focus },
  { number:'03', title:'El Gran Robo', summary:'En Kyrna, Beatriz presenta el plan, el grupo enfrenta a un huésped y descubre que el caso alcanza a toda una realidad.', focus:pt[3].focus },
  { number:'04', title:'El reloj corre', summary:'Kyrna intenta sobrevivir al desastre, el C.I.A.N.E. reacciona, las raíces del Códex enferman y Aphride parte en busca de Nicolle.', focus:pt[4].focus },
  { number:'05', title:'Viejos conocidos', summary:'Joel y Merius investigan archivos Arnin, confrontan decisiones antiguas y reconocen que el miedo también produjo silencio.', focus:pt[5].focus },
  { number:'06', title:'El precio de la cura', summary:'La deuda de Zane revela cómo las medicinas, la familia y las recompensas sostienen el poder del Submundo de Bayrule.', focus:pt[6].focus },
  { number:'07', title:'Deudas antiguas', summary:'Beatriz vuelve a los Hijos de la Medianoche y expone la alianza que convirtió rutas de ayuda en una fuente de víctimas para Barney’s.', focus:pt[7].focus },
  { number:'08', title:'Un gran problema', summary:'Aphride conduce a Nicolle hasta Lucarne mientras Ikarius interroga al Bufón y delimita las reglas conocidas de las Anclas y los Fragmentos.', focus:pt[8].focus },
  { number:'09', title:'Árboles del pasado', summary:'Un registro temporal de Joel y los archivos muertos de los Arnin conectan pérdidas personales con una amenaza preparada durante décadas.', focus:pt[9].focus },
  { number:'10', title:'El desierto helado', summary:'Ikarius cruza las Montañas de Mountevoir mientras Garry y Mirian descubren que los pulsos submarinos no son un mensaje, sino un ritmo de despertar.', focus:pt[10].focus },
  { number:'11', title:'Una visita inesperada', summary:'Lucarne presenta la cadena de laboratorios y el grupo transforma el miedo en método antes de la siguiente incursión.', focus:pt[11].focus },
  { number:'12', title:'La luz del nuevo día', summary:'Joel vuelve a 1988 y a su vida con Elisabeth; en el presente, Garry y Mirian preparan el Manda-01 para proteger la costa.', focus:pt[12].focus },
  { number:'13', title:'El despertar del gigante', summary:'Nereida-6 se hunde, un Kaiju despierta y las Anclas de Hiussen comienzan a responder como una red distribuida por Arcanian.', focus:pt[13].focus },
  { number:'14', title:'La Barney’s Company', summary:'Kaji descubre que la empresa pretende eliminar a sus propios intermediarios mientras Beatriz y Flávio pagan el costo de la guerra.', focus:pt[14].focus },
  { number:'15', title:'El Gran Día', summary:'El pasado de Chinama revela a Mark, Nicolle, Vincent y el origen político de L.A.C.H.R.Y.M.A. antes de la batalla que cambió el continente.', focus:pt[15].focus },
  { number:'16', title:'La luz que ilumina el mundo', summary:'Hiussen invade Koreth en busca del Códex. La batalla obliga a cada personaje a decidir qué todavía puede salvarse.', focus:pt[16].focus },
  { number:'17', title:'Próxima parada: Arcanian', summary:'Entre las ruinas de Koreth, los supervivientes nombran Suji-74, entierran a sus muertos y comprenden que la investigación pertenece a los vivos.', focus:pt[17].focus }
];

const it = [
  { number:'P', title:'Prologo', summary:'Joel registra la creazione di Nina, il primo salto temporale e la decisione che lacera la Realtà −1.', focus:pt[0].focus },
  { number:'01', title:'Spirali', summary:'Le morti di Ezequiel e Clarice ripetono lo schema Mountevoir. Ikarius riapre il fascicolo e ritrova Aphride e Merius.', focus:pt[1].focus },
  { number:'02', title:'Giorno uno', summary:'Merius spiega vent’anni di assenza, il gruppo definisce l’indagine e un incidente al Faro Tálassa rivela una nuova Spirale.', focus:pt[2].focus },
  { number:'03', title:'Il Grande Furto', summary:'A Kyrna, Beatriz presenta il piano, il gruppo affronta un ospite e scopre che il caso coinvolge un’intera realtà.', focus:pt[3].focus },
  { number:'04', title:'Il tempo corre', summary:'Kyrna tenta di sopravvivere al disastro, il C.I.A.N.E. reagisce, le radici del Codex si ammalano e Aphride parte alla ricerca di Nicolle.', focus:pt[4].focus },
  { number:'05', title:'Vecchie conoscenze', summary:'Joel e Merius studiano gli archivi Arnin, affrontano decisioni passate e riconoscono che anche la paura ha prodotto silenzio.', focus:pt[5].focus },
  { number:'06', title:'Il prezzo della cura', summary:'Il debito di Zane mostra come medicine, famiglia e taglie sostengano il potere del Sottomondo di Bayrule.', focus:pt[6].focus },
  { number:'07', title:'Vecchi debiti', summary:'Beatriz torna dai Figli della Mezzanotte e rivela l’accordo che ha trasformato le rotte di aiuto in una fonte di vittime per Barney’s.', focus:pt[7].focus },
  { number:'08', title:'Un grosso problema', summary:'Aphride conduce Nicolle da Lucarne mentre Ikarius interroga il Giullare e definisce le regole note di Ancore e Frammenti.', focus:pt[8].focus },
  { number:'09', title:'Alberi del passato', summary:'Un registro temporale di Joel e gli archivi morti degli Arnin collegano perdite personali a una minaccia preparata per decenni.', focus:pt[9].focus },
  { number:'10', title:'Il deserto gelato', summary:'Ikarius attraversa i Monti Mountevoir mentre Garry e Mirian scoprono che gli impulsi sottomarini non sono un messaggio, ma un ritmo di risveglio.', focus:pt[10].focus },
  { number:'11', title:'Una visita inattesa', summary:'Lucarne mostra la catena dei laboratori e il gruppo trasforma la paura in metodo prima della prossima incursione.', focus:pt[11].focus },
  { number:'12', title:'La luce del nuovo giorno', summary:'Joel torna al 1988 e alla vita con Elisabeth; nel presente, Garry e Mirian preparano Manda-01 per difendere la costa.', focus:pt[12].focus },
  { number:'13', title:'Il risveglio del gigante', summary:'Nereida-6 affonda, un Kaiju si risveglia e le Ancore di Hiussen iniziano a rispondere come una rete estesa su Arcanian.', focus:pt[13].focus },
  { number:'14', title:'La Barney’s Company', summary:'Kaji scopre che l’azienda vuole eliminare i propri intermediari, mentre Beatriz e Flávio pagano il costo della guerra nel Sottomondo.', focus:pt[14].focus },
  { number:'15', title:'Il Grande Giorno', summary:'Il passato di Chinama rivela Mark, Nicolle, Vincent e l’origine politica del L.A.C.H.R.Y.M.A. prima della battaglia che cambiò il continente.', focus:pt[15].focus },
  { number:'16', title:'La luce che illumina il mondo', summary:'Hiussen invade Koreth alla ricerca del Codex. La battaglia costringe ogni personaggio a decidere cosa può ancora essere salvato.', focus:pt[16].focus },
  { number:'17', title:'Prossima fermata: Arcanian', summary:'Tra le rovine di Koreth, i sopravvissuti chiamano la frattura Suji-74, seppelliscono i morti e comprendono che l’indagine appartiene ai vivi.', focus:pt[17].focus }
];

const ja = [
  { number:'P', title:'プロローグ', summary:'JoelはNinaの完成、最初の時間跳躍、そして現実−1を引き裂いた決断を記録する。', focus:pt[0].focus },
  { number:'01', title:'螺旋', summary:'EzequielとClariceの死がMountevoir事件の型を繰り返す。Ikariusは記録を開き、AphrideとMeriusに再会する。', focus:pt[1].focus },
  { number:'02', title:'第一日', summary:'Meriusが二十年の不在を説明し、捜査が始動する。Tálassa灯台の事件は新たな螺旋を示す。', focus:pt[2].focus },
  { number:'03', title:'大強奪', summary:'KyrnaでBeatrizが計画を提示し、一行は宿主と対峙する。事件は一つの現実全体を脅かす規模へ広がる。', focus:pt[3].focus },
  { number:'04', title:'時は走る', summary:'Kyrnaが災害に耐える中、C.I.A.N.E.が動き、Codexの根が病み、AphrideはNicolleを探しに向かう。', focus:pt[4].focus },
  { number:'05', title:'古い知人', summary:'JoelとMeriusはArninの記録を調べ、過去の選択と、恐怖が生んだ沈黙に向き合う。', focus:pt[5].focus },
  { number:'06', title:'治療の代価', summary:'Zaneの借金を通じて、薬、家族、懸賞金がBayrule地下社会の支配を支える仕組みが明らかになる。', focus:pt[6].focus },
  { number:'07', title:'古い負債', summary:'Beatrizは「真夜中の子ら」へ戻り、救援路をBarney’sの被験者供給網へ変えた協定を暴く。', focus:pt[7].focus },
  { number:'08', title:'大きな問題', summary:'AphrideがNicolleをLucarneへ導く一方、Ikariusは道化師を尋問し、アンカーと断片の既知の規則を整理する。', focus:pt[8].focus },
  { number:'09', title:'過去の樹々', summary:'Joelの時間記録とArninの死蔵資料が、個人的な喪失と数十年かけて準備された脅威を結びつける。', focus:pt[9].focus },
  { number:'10', title:'凍てつく砂漠', summary:'IkariusがMountevoir山脈を越える間、GarryとMirianは海底の脈動が通信ではなく覚醒のリズムだと知る。', focus:pt[10].focus },
  { number:'11', title:'予期せぬ訪問', summary:'Lucarneが研究施設の連鎖を示し、一行は次の侵入を前に恐怖を捜査方法へ変える。', focus:pt[11].focus },
  { number:'12', title:'新しい日の光', summary:'Joelは1988年とElisabethとの生活を再訪する。現在ではGarryとMirianが海岸防衛のためManda-01を準備する。', focus:pt[12].focus },
  { number:'13', title:'巨人の目覚め', summary:'Nereida-6が沈み、Kaijuが目覚め、HiussenのアンカーがArcanian全域の分散網として応答し始める。', focus:pt[13].focus },
  { number:'14', title:'Barney’s Company', summary:'Kajiは企業が仲介者まで抹消する計画を知り、BeatrizとFlávioは地下社会の戦争の代価を支払う。', focus:pt[14].focus },
  { number:'15', title:'大いなる日', summary:'Chinamaの過去からMark、Nicolle、Vincent、L.A.C.H.R.Y.M.A.の政治的起源、そして大陸を変えた戦いが明らかになる。', focus:pt[15].focus },
  { number:'16', title:'世界を照らす光', summary:'HiussenがCodexを求めKorethへ侵入する。戦いは全員に、何を救い何を取り戻せないか選ばせる。', focus:pt[16].focus },
  { number:'17', title:'次の停車地：Arcanian', summary:'Korethの廃墟で生存者たちは亀裂をSuji-74と名付け、死者を弔い、捜査が生きる者のものになったと理解する。', focus:pt[17].focus }
];

const guides = { pt, en, es, it, ja };

export function getBookGuide(lang) {
  return guides[lang] || guides.pt;
}
