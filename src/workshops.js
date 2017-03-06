import React from 'react';

const workshops = [
  [
    {
      title: 'Medytacja – głęboka modlitwa',
      description: 'Kalasancjusz przypomina, że głęboka modlitwa jest tak potrzebna dla duszy, jak powietrze dla ciała. Zajęcia na tym warsztacie zaczniemy tak, jak medytację kalasantyńską – od wyciszenia się. A potem będziemy rozmawiać o tym, czym jest ta modlitwa, jak możemy ją dziś praktykować i jak wyglądała w pierwszych wspólnotach pijarskich.',
      leaders: [
        {
          slug: 'pindelski',
          name: 'o. Mateusz Pindelski SP',
        },
      ],
    },
    {
      title: 'Czytamy Pismo Święte i Ojców Kościoła',
      description: (
        <div>
          <p>Listy św. Józefa Kalasancjusza zawierają wiele odwołań do Biblii. Zobaczymy wspólnie: jakie teksty cytuje i jak je rozumie w kontekście spraw, które porusza w listach. W ten sposób dowiemy się wiele o sposobie czytania Biblii, a równocześnie poznamy lepiej duchowość Założyciela Zakonu Szkół Pobożnych.</p>
          <p>Kalasancjusz, napisał blisko 6 tys. listów adresowanych do współbraci, osób duchownych i świeckich. Dzięki pracy archiwistów Domu Generalnego w Rzymie udało się zabezpieczyć i zdigitaliować bezcenne dla Zakonu pisma. Oryginalny tekst listów jest dostępny w serwisie scripta.scolopi.net stworzonym przez Ricardo Cerverona.</p>
        </div>
      ),
      leaders: [
        {
          slug: 'adamusiak',
          name: 'o. Łukasz Adamusiak SP',
        }
      ]
    },
    {
      title: 'Nieskończona cierpliwość i inne cnoty kalasantyńskie',
      description: (
        <div>
          <p>Głównym celem tego warsztatu będzie zrozumienie istoty cnót kalasantyńskich oraz praktyczne ich zastosowanie. Wyjaśnimy sobie, czym jest cnota, dlaczego z ironią mówi się o człowieku cnotliwym, a następnie przeanalizujemy najbardziej charakterystyczne cnoty w duchowości św. Józefa Kalasancjusza: pokorę, ubóstwo, prostotę, miłość i cierpliwość. Przyjrzymy się obiegowym wyobrażeniom o nich i ich faktycznemu znaczeniu. W świetle teologii zobaczymy, jak je rozumiał założyciel Pijarów.</p>
          <p>W tym celu:</p>
          <ul>
            <li>przeanalizujemy 5 listów Kalasancjusza,</li>
            <li>odniesiemy ich przesłanie do przykładów z życia,</li>
            <li>nie braknie prezentacji oraz krótkich filmów,</li>
            <li>znajdziemy czas na twórczość własną i odkryjemy praktyczne zastosowania wskazówek Kalasancjusza w naszym życiu.</li>
          </ul>
        </div>
      ),
      leaders: [
        {
          slug: 'bochenek',
          name: 'o. Dominik Bochenek SP',
        }
      ],
    },
  ],
  [
    {
      title: 'Nieustannie się módlcie! – praktyka modlitwy w codzienności',
      description: (
        <div>
          <p>Razem z Wami chcemy poznać wskazania św. Józefa Kalasancjusza dotyczące praktykowania modlitwy osadzonej w naszym życiu i w życiu Kościoła.</p>
          <ul>
            <li>czym była modlitwa nieustająca w szkołach pijarskich;</li>
            <li>jak dziś może być praktykowana,</li>
            <li>czego dzieci uczą nas o modlitwie,</li>
            <li>czym jest bojaźń Boża i jak ją może przeżywać człowiek dorosły.</li>
          </ul>
        </div>
      ),
      leaders: [
        {
          slug: 'duc',
          name: 's. Monika Duc SP',
        },
        {
          slug: 'jurga',
          name: 's. Joanna Jurga SP',
        },
      ]
    },
    {
      title: 'Sposób poznawania siebie',
      description: 'Na tym warsztacie będziemy odkrywać piękno i bogactwo życia duchowego oraz jego dynamikę. W szczególności porozmawiamy o rozpoznawaniu własnych pragnień, zdolności, umiejętności, ale i ograniczeń. Dla Kalasancjusza narzędziem służącym do tego celu była asceza. Praktyki ascetyczne działają jak wyjście na pustynię: ograniczając wpływ bodźców zewnętrznych, pozwalają nam łatwiej poznać samych siebie i czynią nas bardziej wrażliwymi na odczytywanie natchnień Ducha Świętego w codziennym życiu.',
      leaders: [
        {
          slug: 'wolan',
          name: 'o. Jacek Wolan SP',
        }
      ]
    },
    {
      title: 'Muzyka w pijarskich tonacjach. Kalasancjusz i dźwięki',
      description: (
        <div>
          <p>Czy Kalasancjusz był muzykalny? Czy muzyka Mu nie przeszkadzała? Co sądził o edukacji muzycznej dzieci? Czy muzyka może być kalasantyńska?</p>
          <p>Te i inne pytania podejmiemy na warsztacie. Umiejętność śpiewu nie jest potrzebna, żeby wziąć udział w warsztacie, ale śpiewających czekają dodatkowe atrakcje.</p>
        </div>
      ),
      leaders: [
        {
          slug: 'wasacz',
          name: 'Gabriela Wąsacz',
        },
      ],
    },
    {
      title: 'Kalasancjusz i dziecko w sztuce',
      description: 'Kalasancjusz i jego życie, dziecko i jego świat są stałymi tematami dzieł o. Mirka. Korzystając z bogactwa jego wrażliwości uczestnicy będą mogli poznać różne sposoby prezentowania Kalasancjusza i jego dzieła w sztuce oraz sposoby interpretowania sztuki współczesnej.',
      leaders: [
        {
          slug: 'baranski',
          name: 'o. Mirek Barański SP',
        }
      ]
    }
  ]
];

const people = [
  [
    {
      slug: 'aguado',
      className: 'special',
      name: 'Pedro Aguado Cuesta',
      subheading: 'Gość specjalny',
      description: 'Od 2009 roku Przełożony Generalny Zakonu Pijarów. Pochodzi z Bilbao w Kraju Basków (Hiszpania). Był uczniem pijarskim w rodzinnym mieście. Wstąpił do Zakonu Pijarów i został wyświęcony na księdza w 1982 r. Oprócz wykształcenia teologicznego ma licencjat z pedagogiki. Po święceniach pracował jako nauczyciel i duszpasterz w szkołach pijarskich w Pampelunie i Bilbao. Później został również mianowany formatorem i przełożonym kleryków. W latach 1988-2009 był przełożonym swojej prowincji zakonnej.',
    },
    {
      slug: 'bochenek',
      name: 'Dominik Bochenek',
      description: 'Pijar, kapłan od 3 lat, katecheta i duszpasterz pijarskiego gimnazjum w Łowiczu, duszpasterz Odnowy w Duchu Świętym „Kana”. Prowadzi scholę dziecięcą „Dzieci Królowej Pokoju”, grupę animatorów Calasanz oraz gimnazjalną Oazę Nowego Życia. Organizator ogólnopolskich przeglądów teatrów i schól pijarskich. Interesuje się duchowością, psychologią, matematyką i muzyką.',
    },
    {
      slug: 'matras',
      name: 'Józef Matras',
      description: 'Pijar, wyświęcony na księdza w 1996 roku. Od tamtej pory pracował jako katecheta i duszpasterz w Krakowie i w Warszawie. Przez wiele lat służył pijarskim klerykom jako ojciec duchowny oraz magister studentatu międzynarodowego w Rzymie. Od 2011 roku Przełożony Polskiej Prowincji Zakonu Pijarów. Sekretna pasja: układanie krzyżówek.',
    },

    {
      slug: 'wasacz',
      name: 'Gabriela Wąsacz',
      description: 'Absolwentka Akademii Muzycznej w Krakowie, teoretyk muzyki, nauczyciel Zespołu Szkół Muzycznych nr 1 w Rzeszowie, dyrygent Małego Chóru Świętego Józefa Kalasancjusza. Osoba bez której trudno sobie wyobrazić oprawę muzyczną wielu spotkań młodzieży pijarskiej w Polsce i za granicą. Wielbicielka historii muzyki i śpiewu chóralnego, zarażająca wiarą w to, że „śpiewać każdy może”…',
    },
  ],
  [
    {
      slug: 'adamusiak',
      name: 'Łukasz Adamusiak',
      description: 'Od 13 lat w Zakonie Pijarów, od 2015 roku odpowiada za formację najmłodszych adeptów życia pijarskiego w Domu Nowicjatu w Rzeszowie. Absolwent Wydziału Elektroniki Politechniki Wrocławskiej. Studiował i ukończył teologię na Papieskim Uniwersytecie Gregoriańskim. Interesuje się historią i duchowością Pisma Świętego.',
    },
    {
      slug: 'duc',
      name: 'Monika Duc od Jezusa Przyjaciela',
      description: 'Od Jezusa Przyjaciela – pijarka z Żywca rodem. Z zamiłowania: jeździ na rowerze, chodzi po górach i uczy hiszpańskiego. Absolwentka teologii na Uniwersytecie Kard. St. Wyszyńskiego. „Jako dziewczyna jeździłam na dni skupienia do pijarek i w wieku 18 lat rozpoczęłam formację zakonną. Od tego momentu w moim życiu jest coraz więcej radości, przygód i niespodzianek. Od 2009 roku towarzyszę młodym osobom w rozpoznawaniu ich drogi życiowej oraz staram się, aby inni poznali nasz charyzmat i styl życia”.'
    },
    {
      slug: 'misiura',
      name: 'Grzegorz Misiura',
      description: 'Urodzony pod Turbaczem, pijar w 9. roku kapłaństwa. Ukończył teologię na Papieskim Uniwersytecie Gregoriańskim w Rzymie. Ukończył Szkołę wychowawców i formatorów seminaryjnych. Duszpasterz i katecheta w szkołach pijarskich: w Łowiczu, Krakowie i – obecnie – w Poznaniu. Przez 4 lata członek Zespołu Ewangelizacyjno-Powołaniowego w Polskiej Prowincji Zakonu Pijarów. ',
    },
  ],
  [
    {
      slug: 'baranski',
      name: 'Mirek Barański',
      description: 'Pijar, kapłan od 30 lat. Przyszedł na świat nad Zalewem Wiślanym, ale od wielu lat mieszka i pracuje w Wiedniu, gdzie do zeszłego roku był proboszczem najstarszej pijarskiej parafii pw. Matki Bożej Wiernej (Maria Treu). Absolwent Liceum Sztuk Plastycznych w Gdyni i Papieskiej Akademii Teologicznej w Krakowie. Jest rzeźbiarzem, malarzem, grafikiem oraz ilustratorem. Od 2003 organizuje w Wiedniu wystawy w ramach Kunstforum Piaristen. ',
    },
    {
      slug: 'jurga',
      name: 'Joanna Jurga od Jezusa Cierpliwego',
      description: 'Obecnie najmłodsza pijarka w Polsce. „Poznałam siostry pijarki przez Facebooka. (Kto by pomyślał, że Pan Bóg posłuży się takim narzędziem?!) Krok po kroku trwa dla mnie pełna niespodzianek przygoda z Panem Bogiem w charyzmacie pijarskim. Uwielbiam długie spacery a szczególnie wędrówki po górach. Odpoczynek dają mi: gitara i aparat fotograficzny. Niesamowitą radość sprawia mi odkrywanie Bożej Miłości razem z uczestniczkami rekolekcji dla dziewcząt”.',
    },
    {
      slug: 'pindelski',
      name: 'Mateusz Pindelski',
      description: 'Pochodzi z Krakowa, pijar, ksiądz od 15 lat. Duszpasterz i nauczyciel, doktor nauk humanistycznych specjalizujący się w poezji Karola Wojtyły. Pełniąc obowiązki Asystenta Generalnego i Postulatora Generalnego Zakonu, przez 6 lat mieszkał w domu św. Józefa Kalasancjusza w Rzymie, więc miał okazję poznać go z bliska. ',
    },
  ],
];

export {
  workshops,
  people,
};
