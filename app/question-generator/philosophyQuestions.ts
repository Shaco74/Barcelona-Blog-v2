const philosophyQuestions = [
  {
    question: 'Kindheit im 22. Jahrhundert - War früher alles besser?',
    description:
      '“Früher war alles besser.” Vielleicht kennst du diesen Spruch von deinen Eltern. Unsere Eltern sind ohne Internet oder Smartphones aufgewachsen - für uns kaum vorstellbar. Wenn du aus der Generation Z bist, bist du wahrscheinlich als Kind und Teenager mit Handy und Co. aufgewachsen. Manche Forscher/innen meinen, dass der frühzeitige Kontakt mit elektronischen Medien (wie Smartphones, Tablets, Spielkonsolen) schlecht für die Entwicklung des Kindes ist. Die soziale Integration, der Kontakt zu Gleichaltrigen und das Selbstbewusstsein der Kinder würde darunter leiden. Was sagst du dazu?',
  },
  {
    question: 'Gene oder Umwelt - Wie entsteht unsere Persönlichkeit?',
    description:
      'Sind Intelligenz und Persönlichkeitsmerkmale angeboren oder werden sie erst durch Umwelteinflüsse im Laufe unseres Heranwachsens entwickelt? Wissenschaftler/innen sind sich einig, dass es eine Kombination aus beiden ist. Aber welche Faktor hat deiner Meinung nach den größeren Einfluss auf unsere Persönlichkeitsentwicklung?',
  },
  {
    question: 'Bis dass der Tod uns scheidet - Gibt es die ewige Liebe?',
    description:
      'In der heutigen Zeit werden Hochzeiten weniger und Scheidungen häufiger. Mit einem Menschen für den Rest seines Lebens glücklich zusammensein. Ist das eine Wunschvorstellung oder Realität?',
  },
  {
    question: 'Macht uns Social Media krank?',
    description:
      'Facebook, Instagram, TikTok, Twitter,… Das Positive an Social Media ist uns allen bekannt. Es macht Spaß, man ist mit Menschen weltweit verbunden und man hat mittlerweile eine Chance Karriere mittels Social Media zu machen. Aber was sind die Schattenseiten davon? Kann Social Media auch eine Belastung sein?',
  },
  {
    question: 'Ist Sterbehilfe moralisch vertretbar?',
    description:
      'In Europa gibt es nur vier Länder, in denen Sterbehilfe erlaubt ist: Belgien, Luxemburg, Schweiz und Niederlanden. Im Rest Europas ist “Tötung auf Verlangen” strafbar. Ob Sterbehilfe moralisch vertretbar ist, da spalten sich die Meinungen. Hier ein kleine Gedankenreise:\nEin 80-jähriger Mann erkrankt an einer tötlichen Krankheit und möchte Sterbehilfe beantragen. Würdest du ihm dabei helfen, eine Klinik aufzusuchen, die seinem Wunsch nachgeht? Und wie sieht es aus, wenn eine 40 jährige Frau, die seit 20 Jahren an einer schweren chronischen Depression leidet, Sterbehilfe beanspruchen möchte?',
  },
  {
    question: 'Was ist das größte Problem der Menschheit?',
    description:
      'Diese Frage kann man auf zwei verschiedene Art und Weisen beantworten. Entweder man fokussiert sich auf Umweltbedingungen (z.B. Klimawandel), die problematisch für die Menschheit sind, oder man fokussiert sich auf die Eigenschaften des Menschen selbst (z.B. Hass, Neid).',
  },
  {
    question: 'Leben wir in einer Simulation?',
    description:
      'Unsere Welt ist nur eine Computersimulation, die von einer höher entwickelten Zivilisation erschaffen wurde. Somit existieren wir nicht, sondern sind selbst nur Simulationen. Das ist eine vereinfachte Erklärung der Simulationshypothese. In Wahrheit ist sie viel komplexer und besteht aus drei Hypothesen. Aber die Grundaussage bleibt dieselbe: Wir leben in einer Simulation. Für wie wahrscheinlich hält ihr diese Theorie?',
  },
  {
    question: 'Glaubst du an Gott oder eine höhere Macht im Universum?',
    description:
      'Ist Gott der Ursprung von Allem oder nur ein vom Menschen geschaffenes Konstrukt?',
  },
  {
    question:
      'Wie stehst du zu einer Ein- oder Zwei-Kind-Politik um der Überbevölkerung entgegenzuwirken?',
    description:
      'Ist es ethisch vertretbar, Menschen vorzuschreiben, wie viele Kinder sie bekommen dürfen oder ist gesteuerte Familienplanung eine Verletzung des Menschenrechts? Gäbe es wirksamere Strategien um der Überbevölkerung entgegenzuwirken?',
  },
  {
    question: 'Sollte privater Waffenbesitz verboten werden?',
    description:
      'Ist Waffenbesitz ein Grundrecht oder eine Gefährdung für die Gesellschaft? Dieses Thema ist vor allem in den USA sehr aktuell. Schließlich sind Amerikaner mit rund 393 Millionen Kleinwaffen die am meist bewaffnete Bevölkerung (Karp, 2018, Small Army Survey: Estimating Global Civilian Held Firearms Numbers). In keinem anderen Land gibt es so viele Tote durch Schusswaffen.',
  },
  {
    question: 'Ist künstliche Intelligenz eine Gefahr für die Menschheit?',
    description:
      'Im Bezug auf künstliche Intelligenz gehen die Meinungen auseinander. Manche betrachten sie als große Gefahr und befürchten, dass sie früher oder später die Menschheit ausschalten wird. Zum Beispiel hat Stephen Hawking kurz vor seinem Tod gemeint, dass die Forschung zur künstlichen Intelligenz zwar Chancen für die Menschheit biete, aber das Risiko des Missbrauches nicht zu unterschätzen sei. Auch Elon Musk warnt vor den Risiken der KI-Forschung. Es gibt jedoch auch viele mögliche Einsatzgebiete, bei denen die KI einen positiven Beitrag leisten kann. Wir stehen jedoch noch ganz am Anfang der Entwicklung einer KI. Wir werden sehen, was die Zukunft bringt. Wie denkst du darüber?',
  },
  {
    question: 'Sind Männer und Frauen mittlerweile gleichberechtigt?',
    description:
      'Wenn man die Geschichte des Feminismus betrachtet, hat sich bis jetzt einiges getan. Aber sind wir schon an dem Punkt angelangt, wo man von Gleichberechtigung sprechen kann?',
  },
  {
    question: 'Warum sind Menschen rassistisch?',
    description:
      'Nicht jeder Mensch ist rassistisch, aber wir alle habe Vorurteile (auch wenn wir das nicht zugeben wollen). Oft sind wir uns unseren Vorurteilen gar nicht bewusst, wie zahlreiche Studien belegen. Wenn es uns nicht bewusst ist, ist es schwierig, sich davon zu befreien. Was wir aber tun können, ist, unsere Vorurteile wahrzunehmen, sie anzuerkennen und zu kontrollieren. Das beantwortet jedoch nicht die Frage warum Menschen rassistisch werden? Was führt Menschen dazu so viel Hass gegen fremde Menschen zu verspüren? Kein Kind der Welt kommt mit Vorurteilen auf die Welt. Ab wann und wie bekommen wir diese Stereotype und Vorurteile indoktriniert?',
  },
  {
    question: 'Pro Life oder Pro Choice - Ist Abtreibung moralisch vertretbar?',
    description:
      'Pro Life Vertreter/innen haben die Meinung, dass die Abtreibung eines Embryos bzw. Fötus gleichzusetzen ist mit Mord. Pro Choice betonen das Recht auf Selbstbestimmung der Frau über ihren Körper. Zwei immer wieder aufkommende Fragen zu diesem Thema sind: Kann ein Fötus (zum Zeitpunkt der Abtreibung) schon Schmerzen empfinden? Hat ein Fötus bereits ein Ich-Gefühl bzw. ein Bewusstsein? Was sind eure Argumente für oder gegen das Recht auf Abtreibung?',
  },
  {
    question: 'Was würdest du gerne am Schulsystem verändern wollen?',
    description:
      'Bist du mit deinem Schulsystem zufrieden oder gibt es Dinge, die verbesserungswürdig sind? Verschiedene Länder haben unterschiedliche Schulsysteme. Gibt es vielleicht ein Land, dass deiner Meinung nach ein gut funktionierendes Schulsystem hat?',
  },
  {
    question: 'Würdest du gerne unsterblich sein wollen, wenn es möglich wäre?',
    description:
      'Viele Menschen haben Angst vor dem Tod. Die Idee eines unbegrenzten Lebens ist für viele Menschen erstrebenswert. Es gibt Forscher/innen auf der Welt, die an verschiedene Maßnahmen arbeiten, um die Unsterblichkeit möglich zu machen. Der russische Milliardär Dmitry Itskov glaubt sogar daran, Menschen bis zum Jahr 2045 unsterblich machen zu können. Nach seiner Idee würden Menschen jedoch nicht mehr in ihren eigenen Körpern existieren. Er möchte das menschliche Bewusstsein auf einen Online-Avatar übertragen. Angenommen sein Projekt funktioniert. Würdest du daran teilnehmen? Was würdest du alles tun, wenn du unsterblich wärst? Wie würde sich dein jetziges Leben verändern?',
  },
  {
    question: 'Gibt es Altruismus oder ist er ein Mythos?',
    description:
      'Altruismus ist im Allgemeinen ein prosoziales, selbstloses Verhalten zum Wohle der Anderen. Man tut etwas Gutes für eine andere Person, ohne eine Gegenleistung zu erwarten. Ein Beispiel dafür wären ehrenamtliche Mitarbeiter in einem Obdachlosenheim. Sie helfen benachteiligten Menschen ohne dafür Geld zu bekommen. Aber gibt es wirklich selbstloses Verhalten? Kann es nicht sein, dass der ehrenamtliche Mitarbeiter seiner Tätigkeit nachgeht, um Anerkennung zu erlangen oder um sich gut zu fühlen? Kann man dann noch von Selbstlosigkeit sprechen?',
  },
  {
    question: 'Ist ein Tierleben genauso viel wert wie ein Menschenleben?',
    description:
      'Es ist offensichtlich, dass Menschenleben und Tierleben in unserer Gesellschaft nicht für gleich wertvoll gehalten werden (siehe Massentierhaltung, Trophy-Hunting etc.). Es gibt nicht nur einen Unterschied zwischen Mensch und Tier, sondern auch zwischen Tier und Tier. Hier ein Beispiel: Denk an dein Haustier. Höchst wahrscheinlich liebst du dein Haustier und siehst es als gleichberechtigt an. Und dann denk an ein Huhn. Ist das Leben eines Huhn minderwertiger, weil es in unserer Gesellschaft als Nutztier bezeichnet wird? Immanuel Kant meinte, dass ein Menschenleben wertvoller als ein Tierleben sei. Seine Begründung: Tiere hätten nicht die Fähigkeit zu vernünftigem und moralischem Denken und deshalb seien sie auch moralisch weniger wert als Menschen. Was ist deine Meinung?',
  },
  {
    question: 'Was motiviert dich primär in deiner Arbeit? Das Geld oder die Arbeit selbst?',
    description:
      'Beide Faktoren spielen wahrscheinlich eine Rolle. Schließlich können wir ohne Geld nicht überleben. Wenn wir von unserer Arbeit nicht leben können, ist es egal, wie erfüllend die Arbeit ist. Wie wäre es, wenn die Situation umgekehrt ist? Du hasst deine Arbeit, aber verdienst überdurchschnittlich viel. Für welche Option würdest du dich entscheiden: Wenig Geld und erfüllende Arbeit oder viel Geld und Arbeit, die du hasst? Was ist der bessere Motivator für dich - Geld oder persönliche Erfüllung?',
  },
  {
    question: 'Ist Patriotismus gut oder gefährlich?',
    description:
      'Die Definition von Patriotismus lautet: “(begeisterte) Liebe zum Vaterland, vaterländische Gesinnung” (Oxford Languages). Manche sehen Patriotismus positiv, manche sehen Patriotismus kritischer. Unter den Kritikern wird oft diskutiert, wo denn die Grenze zwischen Patriotismus und Nationalismus sei? Nationalismus ist ein übersteigertes Nationalbewusstsein. Die eigene Nation wird überbewertet und die anderen Nationen werden abgewertet. Ein stark übersteigerter Nationalismus kann gefährliche Folgen haben (wie es der Nationalsozialismus gezeigt hat). Ist Patriotismus wirklich ein Vorbote von Nationalismus oder ein gesunder Stolz auf sein Vaterland?',
  },
  {
    question: 'Jeder hat die gleichen Chancen - Fakt oder Unsinn?',
    description:
      'Kevin ist ein 6-jähriger Junge, der aus einem wohlhabenden Elternhaus stammt. Der Vater ist CEO eines erfolgreichen Unternehmens, die Mutter Chirurgin. Daniel ist 6 Jahre alt und stammt aus einer ärmlichen Familie, die am Ende des Monats kein Geld für Essen mehr hat. Der Vater arbeitet als Fabrikarbeiter, die Mutter als Reinigungskraft. Haben diese zwei Menschen dieselben Chancen im Leben? Wie sieht die Sache aus, wenn zwei Personen denselben sozioökonomischen Hintergrund haben, aber verschiedenen Nationalitäten angehören (z.B. Afro-amerikanisch vs. kaukasisch)? Beeinflussen Nationalität, sozioökonomischer Status, Geschlecht,… unsere Chancen im Leben? Oder ist durch harte Arbeit alles erreichbar?',
  },
  {
    question: 'Ist es in Ordnung manchmal zu lügen?',
    description:
      'Wie würde eine Welt mit Menschen aussehen, die nicht lügen? Deine Freundin hat gerade ein Kind bekommen und schickt dir laufend Babyfotos auf WhatsApp. Du findest es hässlich. Ist es in diesem Fall nicht einfach besser zu lügen oder nur die halbe Wahrheit zu sagen? Wenn du total ehrlich zu ihr wärst (ihr Kind als hässlich bezeichnet), dann verletzt du mit Sicherheit ihre Gefühle. Ist es das wert? Hier ein anderes Beispiel: Bei einem Bewerbungsschreiben stellt man sich meistens besser dar als man wirklich ist. Mal ehrlich, niemand ist 100% stressresistent und trotzdem schreibt es jeder in seiner Bewerbung. Ist es legitim ein bisschen die Wahrheit zu verändern, um seine Chancen auf den Job zu erhöhen?',
  },
  {
    question: 'Wie stehst du zum bedingungslosen Grundeinkommen?',
    description:
      'Die Idee des bedingungslosen Grundeinkommens ist, dass alle Bürger/innen jeden Monat vom Staat eine gewisse Menge an Geld erhalten ohne etwas dafür tun zu müssen. Es soll den Lebensunterhalt aller Menschen sichern. Es gibt Argumente für und gegen das bedingungslose Grundeinkommen. Manche fürchten, dass die Arbeitsmotivation nachlassen würde. Manche meinen hingegen, dass es die Arbeitsmotivation steigern würde. Existenzängste würden wegfallen. Menschen würden ihre Kreativität entdecken und ausleben. Wie stehst du zu dem bedingungslosen Grundeinkommen?',
  },
  {
    question: 'Warum sind Menschen neidisch?',
    description:
      'Neid ist ein Gefühl, bei dem man jemand anderen etwas nicht gönnt und/oder dasselbe haben möchte. Was führt eine Person dazu, auf jemanden neidisch zu sein? Ist es die Unzufriedenheit mit dem eigenen Leben oder ist es ein ausgeprägtes Bedürfnis nach Gerechtigkeit?',
  },
  {
    question: 'Gibt es eine Sache auf der Welt, die jeder Mensch schön findet?',
    description:
      'Gibt es eine universelle Schönheit? Ein Sonnenuntergang, Ryan Gosling, das Meer, Musik… Fällt dir eine Sache ein, die alle Menschen auf der Welt schön finden könnten?',
  },
  {
    question: 'Gibt es Objektivität oder ist alles subjektiv?',
    description:
      'Objektivität ist die vom Individuum unabhängige Beurteilung einer Sache. Ein Ereignis oder ein Sachverhalt wird also so wahrgenommen bzw. beschrieben, wie er ist (ohne subjektiven Verzerrungen). Subjektivität beschreibt die Annahme, dass unsere Wahrnehmung durch unsere Erfahrungen, unser Denken und Fühlen beeinflusst wird. Eine extreme philosophische Theorie ist der Konstruktivismus. Diese besagt, dass Objektivität unmöglich sei. Jeder Einzelne würde sich seine Wirklichkeit selbst konstruieren. Es gebe somit keine Tatsachen, sondern nur Interpretationen. Wie denkst du darüber?',
  },
  {
    question: 'Gibt es das Schicksal?',
    description:
      'Hattest du schon einmal das Gefühl zum richtigen Zeitpunkt am richtigen Ort gewesen zu sein? Ist das Schicksal oder Zufall? Wird unser Leben von einer höheren Macht gelenkt? Gibt es Dinge in unserem Leben, die vorbestimmt sind, worüber wir keine Kontrolle haben? Oder ist doch alles nur Zufall? So viele Fragen und keine einheitliche Antwort. Trotzdem hat jeder eine Meinung dazu. Glaubst du an Schicksal oder an eine glückliche Fügung?',
  },
  {
    question: 'Wie wichtig ist Geld im Leben?',
    description:
      'Macht Geld glücklich? Verschiedene Forscher/innen haben sich bereits mit diesem Thema beschäftigt. Eine allgemeingültige Antwort gibt es noch nicht. Viele Forscher/innen sind sich jedoch einig, das Geld bis zu einem gewissen Grad glücklich machen kann. Der US-amerikanische Wirtschaftswissenschaftler Forscher Richard Easterlin hat beispielsweise herausgefunden, das Geld glücklich machen kann, wenn Menschen am Existenzminimum leben. Klingt logisch. Aber wie sieht’s mit dem/der Durchschnittsbürger/in aus? Andere Studien weisen darauf hin, dass Geld glücklich machen kann. Wenn jedoch eine bestimmte Jahreseinkommen-Grenze überschritten wurde, hat es den gegenteiligen Effekt. Dann gibt es noch Forscher/innen, die wiederum sagen, viel Geld macht doch glücklich. Wie man sieht, herrscht Uneinigkeit darüber in der Wissenschaft. Der nächste Kritikpunkt ist: Korrelation ist nicht Kausalität. Wir wissen also nicht in welche Richtung der Zusammenhang zwischen Geld und Glück geht. Es gibt zwei mögliche Richtungen: (1) Je mehr Geld wir haben, desto glücklicher sind wir. (2) Je glücklicher wir sind, desto mehr Geld verdienen wir.',
  },
  {
    question: 'Was hältst du von Religionen?',
    description:
      'Religionen können friedliebend sein aber auch Konflikte auslösen. Der Streit darüber, welche die richtige Religion ist, hat schon häufig in der Geschichte zu Kriegen geführt. Diese Frage enthält unzählige weitere Fragen. Man kann sich damit beschäftigen, ob Religionen wahr sind. Man kann Gott oder die Kirche hinterfragen. Sind Religionen eine vom Menschen fabrizierte Geschichte oder eine Eingebung Gottes? Religion ist ein sehr emotionsgeladenes Thema. Respektiert die Meinungen anderer und hört dem Anderen zu.',
  },
  {
    question: 'Was ist ein Rezept zum Glücklichsein?',
    description:
      'Bist du glücklich? Kannst du dir erklären, warum du glücklich bist? Falls du momentan nicht glücklich bist - halte durch. Jeder Mensch kann es lernen glücklich zu sein (egal wie beschissen die Umstände sind). Was für Eigenschaften oder Verhaltensweisen weisen glückliche Menschen auf? Fällt dir was ein?',
  },
  {
    question: 'Werden wir die globale Erwärmung rechtzeitig stoppen können?',
    description:
      'Das Pariser Abkommen (2015) ist die erste Klimaschutzvereinbarung, der sich viele Länder auf der Welt angeschlossen haben. Das große Ziel dieses Abkommen ist, der globalen Erwärmung entgegenzuwirken. Temperatursenkung (globale Erderwärmung max. 2 Grad Celsius), Reduzierung der Treibhausgasemissionen, Unterstützung ärmerer Länder sind (vereinfacht gesagt) die Ziele des Pariser Abkommens. Aber schaffen wir es diese Ziele zu erreichen bevor es zu spät ist? Sind die bisherigen Maßnahmen wirksam oder braucht es neue Maßnahmen? Wie stellen wir sicher, dass die Maßnahmen eingehalten werden?',
  },
  {
    question: 'Ist die Todesstrafe moralisch vertretbar?',
    description:
      'In 93 Ländern auf der Welt gibt es noch eine gesetzlich geregelte Todesstrafe (Stand 2019). Im Jahr 2019 wurden weltweit 3334 Menschen zum Tode verurteilt. Ist diese Strafe angebracht? Sollen Mörder und Schwerverbrecher mit ihrem Tod bezahlen? - Nach dem Motto Auge um Auge, Zahn um Zahn. Manche meinen ja, manche nein. Die Gegner der Todesstrafe betonen, dass die Hinrichtung eines Verurteilten grundlegende Menchenrechte verletzen. Außerdem gäbe es keinen wissenschaftlichen Beweis, das die Todesstrafe eine abschreckende Wirkung erziele und so die Kriminalität senke. Wie siehst du das?',
  },
  {
    question: 'Was ist ein Rezept zum Unglücklichsein?',
    description:
      'Die Frage wird dir bekannt vorkommen. Zwei Fragen zuvor haben wir nach dem Rezept zum Glücklichsein gefragt. Jetzt bist du gefragt, darüber nachzudenken, was Menschen unglücklich macht. Gibt es bestimmte Eigenschaften und Verhaltensweisen, die unglückliche Menschen miteinander gemeinsam haben?',
  },
  {
    question: 'Sind Menschen von Natur aus gut oder werden manche Menschen böse geboren?',
    description:
      'Da wären wir wieder bei der altbekannten Grundfrage “Anlage oder Umwelt?”. Wird eine Person mit einer schweren antisozialen Persönlichkeitsstörung (Psychopathie) mit der Krankheit geboren oder wird sie durch Umweltbedingungen erst entwickelt?',
  },
  {
    question: 'Wie würde die Welt aussehen, wenn jeder Mensch dieselbe Meinung hat?',
    description:
      'Friedlich, sterbenslangweilig oder beides? Welche Auswirkungen hätte das wohl auf die menschliche Weiterentwicklung oder den technologischen Fortschritt?',
  },
  {
    question: 'Gibt es einen freien Willen?',
    description:
      'Steuer ich mein Gehirn oder steuert es mich? Wenn ich mein Gehirn steuere, wer oder was ist dann dieses “Ich”? Ist es mein Körper oder ein kleines Männchen in meinem Kopf? Und wenn mich mein Gehirn steuert, habe ich dann überhaupt keinen Wahlmöglichkeiten mehr? Wenn ein Mensch jemanden ermordet, hatte er dann überhaupt eine Wahl, wenn er von seinem Gehirn gesteuert ist?',
  },
  {
    question: 'Wer oder was bin ich?',
    description:
      'Wir sind Menschen. Das ist klar. Aber wenn man länger darüber nachdenkt, ist die Frage damit noch immer nicht beantwortet. Wer bin ich? Bin ich mein Körper, meine Seele oder mein Gehirn?',
  },
  {
    question: 'Was ist Nichts?',
    description:
      'Hast du dich schon einmal gefragt was genau “Nichts” ist? Gibt es überhaupt irgendetwas das wirklich Nichts ist? Aber wenn irgendetwas Nichts ist, dann kann es gar nicht Nicht sein. Denn ein Etwas kann nicht Nichts sein. Eine kleine Vorwarnung: Diese Frage kann einen in den Wahnsinn treiben, also lieber nicht zu lange drüber nachdenken.',
  },
  {
    question: 'Was ist richtig und was ist falsch?',
    description:
      'Wer sagt, was richtig oder falsch ist? Was für den Einen richtig ist, ist für den anderen falsch. Was für den Einen falsch ist, ist für den Anderen richtig. Was ist für dich richtig und was falsch? Nach welchen Prinzipien handelst du und sollten deiner Meinung nach auch andere handeln?',
  },
  {
    question: 'Was ist Zeit?',
    description:
      'Was ist Vergangenheit, Gegenwart und Zukunft? Ist Zeit unabhängig von unserem Sein? Oder ist Zeit ein Konstrukt, das auf unserer Selbstwahrnehmung basiert?',
  },
  {
    question: 'Gibt es eine Seele?',
    description:
      'Seele (oder Psyche) hat unterschiedliche Bedeutungen. Eine Definition von Seele lautet: “Gesamtheit dessen, was das Fühlen, Empfinden, Denken eines Menschen ausmacht”. Im spirituellen Sinne ist die Seele immateriell, nicht an den Körper gebunden und unsterblich. Diese philosophische Frage ist auch heute noch aktuell. Wie hängen Körper und Geist zusammen? Ist es eine Einheit oder sind es zwei getrennte Systeme? Ist die Seele bzw. unsere Psyche nur unser Gehirn?',
  },
  {
    question: 'Ist jeder Mensch gleich viel wert?',
    description:
      'Initial werden die meisten Menschen mit Ja antworten. Aber sind Menschen, die schlimme Verbrechen begangen haben, genauso viel Wert wie Menschen, die keine Verbrechen begangen haben? Ist das Leben eines Massenmörders genauso viel wert wie das Leben aller anderen Menschen?',
  },
  {
    question: 'Wäre eine Welt ohne Grenzen möglich?',
    description:
      'Denkst du, verursache eine Welt ohne Grenzen Frieden oder pures Chaos? Die Vorstellung einer Welt ohne Grenzen und Fremdenhass ist traumhaft. Aber ist diese Vorstellung realistisch?',
  },
  {
    question: 'Ist Wissenschaft und Religion vereinbar?',
    description:
      'Bei Religion geht es um Glauben und bei der Wissenschaft um Fakten. Sind Wissenschaft und Religion überhaupt vereinbar? Die Evolutionstheorie widerlegt faktisch die Schöpfungstheorie. Oder widerlegt die Schöpfungstheorie die Evolutionstheorie? Dies würden einige Gläubige behaupten. Inwiefern kann man gläubig sein und gleichzeitig die Evolutionstheorie vertreten?',
  },
  {
    question: 'Sollten alle Drogen legalisiert werden?',
    description:
      'Was würde passieren, wenn alle Drogen auf der Welt legalisiert werden? Würde Chaos ausbrechen und die Anzahl drogensüchtiger Menschen explodieren? Oder würde es die Anzahl sogar verringern? Einige Studien weisen darauf hin, dass Kriminalisierung mehr Drogenabhängig erzeuge. Drug Charity Release behauptete, dass Drogenkonsumenten eine bessere Chance hätten, nicht in die Sucht zu fallen, wenn sie nicht „in die Strafjustiz verwickelt“ wären (oceanrecoverycentre.com, Pros and Cons of Legalising Drugs). Was sagst du dazu?',
  },
  {
    question: 'Was bedeutet Gerechtigkeit?',
    description:
      'Das Kernprinzip der Gerechtigkeit ist (laut Wikipedia), dass Gleiches gleich und Ungleiches ungleich behandelt wird. Eine simple Definition, bei der jedoch einige Fragen offen bleiben. Wer entscheidet ob zwei Einzelfälle gleich oder ungleich sind? Sollte nicht jeder Mensch vor dem Gesetz gleich behandelt werden?',
  },
  {
    question:
      'Sind Nahtoderfahrungen ein Hinweis auf ein Leben nach dem Tod oder eine Täuschung des Gehirns?',
    description:
      'Sind Nahtoderfahrungen ein Blick in das Jenseits und ein Beweis für die Existenz Gottes oder doch nur eine Produktion unseres Gehirns? Berichte von Nahtoderfahrungen haben für viele Menschen eine beruhigende Wirkung. Es nimmt ihnen ein wenig die Angst vor dem Tod. Schließlich berichten Menschen mit Nahtoderfahrungen von einem Ort voll Liebe und Geborgenheit. Einige sagen sogar, sie wären am liebsten dort geblieben. Wissenschaftler gehen davon aus, dass es für Nahtoderfahrungen neurobiologische Erklärungen gibt. Eine Studie konnte herausfinden, dass das Gehirn kurz vor dem Tod hyperaktiv ist. Diese extreme Hirnaktivität könnte zu extremen Sinneseindrücken und Halluzinationen führen. Das Phänomen ist jedoch bis heute nicht geklärt und bedarf noch einiger Forschung. Deshalb lässt sich über dieses Thema gut philosophieren.',
  },
  {
    question: 'Was ist Liebe?',
    description:
      'Liebe in Worte zu fassen ist schwierig. Für jeden fühlt sich Liebe anders an. Jeder Mensch liebt anders. Wir haben unterschiedliche Bedürfnisse und wollen auch unterschiedlich geliebt werden. Wie sieht Liebe für dich aus?',
  },
  {
    question: 'Gibt es einen Sinn des Lebens? Wenn ja, was ist er?',
    description:
      'Was ist der Sinn oder Zweck des Lebens? Gibt es einen allgemeingültigen Sinn des Lebens oder ist er von Person zu Person verschieden? Die nächste Frage ist, brauchen wir überhaupt einen Sinn? Reicht es nicht aus, einfach zu leben?',
  },
  {
    question: 'Glaubst du, dass es ein Leben nach dem Tod gibt?',
    description:
      'Himmel, Hölle, das Jenseits - Fantasie oder Fakt? Das werden wir wohl erst wissen, wenn wir nicht mehr auf der Welt sind. Aber was denkst du, was passieren wird? Ist nach dem Tod, einfach Nichts oder haben wir eine Seele, die nach unserem Ableben an einen anderen Ort geht?',
  },
  {
    question: 'Wie sieht ein gutes Leben für dich aus?',
    description:
      'Wie müsste dein Leben aussehen, dass du dich angekommen fühlst? Familie, Traumjob oder Unabhängigkeit? Wie würde es sich anfühlen, wenn du dein Ziel erreicht hast? Und wie würde dein Alltag aussehen?',
  },
  {
    question: 'Wie entsteht Hass?',
    description:
      'Hass ist eine leidenschaftliche, extreme Abneigung gegenüber eine Person, einer Gruppe oder anderen Dingen. Hasst man etwas oder jemanden um sein Ego zu schützen? Basiert er auf Neid oder Unzufriedenheit mit sich selbst? Hass kann viele Gründe haben. Und vielleicht sind die Entstehungsgründe von Person zu Person verschieden. Denkst du, dass es universale Bedingungen gibt, die zu Hass und übertriebener Feindseligkeit führen?',
  },
  {
    question:
      'Gibt es einen Zusammenhang zwischen unserem heutigen Lebensstil und dem Anstieg psychischer Erkrankungen ?',
    description:
      'Es gibt verschiedene Faktoren, die Entstehung einer psychische Erkrankung begünstigen können. Dazu zählen biologische, psychische und soziale Ursachen. Weltweit leiden ca. 350 Mio. Menschen an einer Depression. Angststörungen, Depressionen, Burnout, Alkoholsucht, Zwangsstörungen und (im höheren Alter) Demenz zählen zu den häufigsten Erkrankungen im Erwachsenenalter. Die Forschung weist darauf hin, dass übermäßiger Konsum von Social Media für den Anstieg von Depressionen (und Suiziden) verantwortlich sein kann. Machen uns unsere Smartphones und Social-Media Plattformen krank? Welche andere Faktoren könnten verantwortlich dafür sein?',
  },
  {
    question:
      'Wenn du dazu in der Lage wärst, Erinnerungen aus deinem Gedächtnis zu löschen, würdest du es tun?',
    description:
      'Gibt es eine Erfahrung in deinem Leben, die du gerne nicht gemacht hättest? Vielleicht war es etwas Traumatisches oder einfach ein peinlicher Moment in deinem Leben. Hätte es einen positiven Effekt auf dein Leben, wenn du diese Erinnerung aus deinem Gedächtnis löscht? Es gibt das Sprichwort: “Erfahrungen machen uns zu dem, was wir sind.” Gute sowie schlechte Erfahrungen prägen unsere Persönlichkeit. Würde sich daher unsere Persönlichkeit verändern, wenn wir eine Erfahrung aus unserem Gedächtnis löschen?',
  },
  {
    question: 'Führen strengere Gesetz zu zu einer friedlicheren Welt oder zu mehr Kriminalität?',
    description:
      'Können härtere Bestrafungen das Kriminalitätsproblem lösen und für mehr Sicherheit sorgen? Oder löst es sogar einen gegenteiligen Effekt aus? Ist härtere Bestrafung eine wirksame Abschreckung, die jemanden von einer Straftat abhält? Manche Studien sind zu dem Ergebnis gekommen, dass harte Strafen die Rückfallquote von Kriminellen sogar erhöhen. Und welchen Einfluss haben härtere Strafen auf die Durchschnittsbevölkerung? Sorgt es für ein höheres Sicherheitsgefühl?',
  },
  {
    question: 'Welchen Rat würdest du deinem jüngeren Ich geben?',
    description:
      'Was würdest du deinem jüngeren Ich raten, wenn du die Möglichkeit dazu hättest? Würdest du ihm/ihr sagen, dass er/sie sich weniger Sorgen machen soll? Oder würdest du ihm/ihr raten, mehr Risiken einzugehen? Was würdest du deinem jüngeren Ich raten, wenn du die Möglichkeit dazu hättest?',
  },
  {
    question: 'Der letzte Tag auf der Erd - Was würdest du tun?',
    description:
      'Stell dir vor, du wüsstest, dass morgen die Welt untergeht. Was würdest du an deinem letzten Tag auf der Erde tun? Würdest du deine Familie und Freunde um dich haben wollen? Würdest du die Welt bereisen? Oder würdest du einfach nur zu Hause bleiben und die Zeit mit deinen Liebsten verbringen?',
  },
  {
    question: 'Wenn du Zeitreisen könntest, in welche Zeit würdest du reisen?',
    description:
      'Welche Zeitperiode würdest du gerne besuchen? Würdest du in die Vergangenheit oder in die Zukunft reisen? Und warum?',
  },
  {
    question: 'Was für Spuren hast du bisher in deinem Leben hinterlassen?',
    description:
      'Wie hast du dein Umfeld beeinflusst? Was hast du bisher erreicht? Was möchtest du in deinem Leben noch erreichen?',
  },
]

export default philosophyQuestions
