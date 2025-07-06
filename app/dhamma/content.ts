export const dhammaPresentation: string[] = [
  "Le terme « Dhamma » recouvre plusieurs significations, dont celles d'« Enseignement » et de « Loi de la Nature ». Dans ce dernier sens, il désigne les lois universelles et incontournables qui régissent l'existence de tous les êtres vivants, à l'instar des lois fondamentales de la physique.",
  "Le Dhamma représente ainsi l'enseignement qui expose les lois primordiales de notre existence, ainsi que la manière de les utiliser à notre avantage afin d'éliminer l'insatisfaction et de se libérer des souffrances inhérentes à la condition humaine.",
  "Parmi tout ce qui nous est accessible aujourd'hui, les enseignements qui se rapprochent le plus de la parole même du Bouddha se trouvent dans les cinq collections qui suivent.",
];

// export const nikayaPresentationData: INikayaPresentationData[] = [
//   {
//     id: 'digha',
//     plTitle: 'Dīgha Nikāya',
//     frTitle: 'La Collection des Longs',
//     description:
//       "La Collection des Longs regroupe les 34 plus longs discours attribués au Bouddha. On y retrouve de longues explications sur des sujets vastes, tels que l'intérêt du renoncement, les pratiques menant à la libération — pour les moines comme pour les laïcs —, ou encore le récit des derniers jours du Bouddha.",
//     count: 5,
//     short: 'DN',
//   },
//   {
//     id: 'majjhima',
//     plTitle: 'Majjhima Nikāya',
//     frTitle: 'La Collection des Moyens',
//     description:
//       "La Collection des Moyens regroupe des discours de longueur intermédiaire, entre les longs développements du Dīgha Nikāya et les courts enseignements du Saṃyutta Nikāya. Elle comporte 152 suttas traitant de sujets variés: éthique, méditation, sagesse, perception de l'impermanence, débats et argumentaires adressés à ses contemporains.",
//     count: 104,
//     short: 'MN',
//   },
//   {
//     id: 'samyutta',
//     plTitle: 'Saṃyutta Nikāya',
//     frTitle: 'La Collection par Thèmes',
//     description:
//       "Le Saṃyutta Nikāya organise les enseignements qu'il contient de manière thématique, en 56 sections, chacune centrée sur un sujet spécifique: les sens, l'apparition conditionnée, les nobles vérités etc. Cet ouvrage contient près de trois mille discours de taille variable, majoritairement courts et concis.",
//     count: 628,
//     short: 'SN',
//   },
//   {
//     id: 'anguttara',
//     plTitle: 'Aṅguttara Nikāya',
//     frTitle: 'La Collection des Énumérations',
//     description:
//       'La Collection des Énumérations est subdivisée en onze ouvrages, chacun regroupant des enseignements organisés en fonction du nombre d’éléments qu’ils énumèrent plutôt que leur thème. Cette collection contient elle aussi des milliers de discours généralement courts traitant des sujets les plus variés.',
//     count: 646,
//     short: 'AN',
//   },
//   {
//     id: 'khuddaka',
//     plTitle: 'Khuddaka Nikāya',
//     frTitle: 'La Collection des Petits',
//     description:
//       'La Collection des Petits regroupe également des textes courts et est considérée comme constituée de deux strates de textes: Dhammapada, Udāna, Itivuttaka, Sutta Nipāta, Theragāthā-Therīgāthā et Jātaka forment la strate ancienne, et les autres livres sont des ajouts effectués dans les siècles qui ont suivi.',
//     count: 89,
//     short: 'KN',
//   },
// ];

export const nikayaPresentationMap: NikayaPresentationMap = {
  digha: {
    plTitle: 'Dīgha Nikāya',
    frTitle: 'La Collection des Longs',
    description:
      "La Collection des Longs regroupe les 34 plus longs discours attribués au Bouddha. On y retrouve de longues explications sur des sujets vastes, tels que l'intérêt du renoncement, les pratiques menant à la libération — pour les moines comme pour les laïcs —, ou encore le récit des derniers jours du Bouddha.",
    count: 5,
    short: 'DN',
  },
  majjhima: {
    plTitle: 'Majjhima Nikāya',
    frTitle: 'La Collection des Moyens',
    description:
      "La Collection des Moyens regroupe des discours de longueur intermédiaire, entre les longs développements du Dīgha Nikāya et les courts enseignements du Saṃyutta Nikāya. Elle comporte 152 suttas traitant de sujets variés: éthique, méditation, sagesse, perception de l'impermanence, débats et argumentaires adressés à ses contemporains.",
    count: 104,
    short: 'MN',
  },
  samyutta: {
    plTitle: 'Saṃyutta Nikāya',
    frTitle: 'La Collection par Thèmes',
    description:
      "Le Saṃyutta Nikāya organise les enseignements qu'il contient de manière thématique, en 56 sections, chacune centrée sur un sujet spécifique: les sens, l'apparition conditionnée, les nobles vérités etc. Cet ouvrage contient près de trois mille discours de taille variable, majoritairement courts et concis.",
    count: 628,
    short: 'SN',
  },
  anguttara: {
    plTitle: 'Aṅguttara Nikāya',
    frTitle: 'La Collection des Énumérations',
    description:
      'La Collection des Énumérations est subdivisée en onze ouvrages, chacun regroupant des enseignements organisés en fonction du nombre d’éléments qu’ils énumèrent plutôt que leur thème. Cette collection contient elle aussi des milliers de discours généralement courts traitant des sujets les plus variés.',
    count: 646,
    short: 'AN',
  },
  khuddaka: {
    plTitle: 'Khuddaka Nikāya',
    frTitle: 'La Collection des Petits',
    description:
      'La Collection des Petits regroupe également des textes courts et est considérée comme constituée de deux strates de textes: Dhammapada, Udāna, Itivuttaka, Sutta Nipāta, Theragāthā-Therīgāthā et Jātaka forment la strate ancienne, et les autres livres sont des ajouts effectués dans les siècles qui ont suivi.',
    count: 89,
    short: 'KN',
  },
};

// const samyuttaSubNikayaPresentationData = [
//   {
//     id: 1,
//     plTitle: "Sagāthā Vagga",
//     frTitle: "Avec Poésies",
//     range: "1-11",
//     subNikayaCardContent
//   }
// ];

// const subNikayaPresentationData = {
//   samyutta: [
//     {
//       id: 1,
//       plTitle: ""
//     }
//   ],
//   anguttara: undefined
// }

// obsolete, to be deleted when sure no longer needed
export const dighaSuttaData: ISuttaCardData[] = [
  {
    plTitle: 'Brahmajāla Sutta',
    frTitle: 'Le filet de Brahma',
    description:
      "Un long discours qui catégorise en 62 types les croyances que les hommes ont tendance à formuler au sujet de l'existence.",
    identifier: 'DN 1',
    translator: 'Rémy',
    readingTime: 25,
  },
  {
    plTitle: 'Sāmaññaphala Sutta',
    frTitle: 'Les fruits du renoncement',
    description: 'Le Bouddha explique en détail au roi Ajatassattou quels sont les fruits du renoncement.',
    identifier: 'DN 2',
    translator: 'Rémy',
    readingTime: 25,
  },
  {
    plTitle: 'Mahāparinibbāna Sutta',
    frTitle: "Le grand récit de l'Extinction complète",
    description:
      "Le récit des derniers jours du Bouddha, formant le plus long soutta. Celui-ci rappelle les points les plus importants de son enseignement et donne des instructions spécifiques concernant la pratique de ses disciples qui n'auront pas eu la chance de l'avoir connu personnellement, et donc très utiles à chacun de nous.",
    identifier: 'DN 16',
    translator: 'Rémy',
    readingTime: 45,
  },
  {
    plTitle: 'Mahāsatipaṭṭhāna Sutta',
    frTitle: "Le grand discours sur la mise en place de la présence d'esprit",
    description:
      "Le Mahāsatipaṭṭhāna Sutta est une référence fondamentale dans l'enseignement du Bouddha. Ce long discours décrit les instructions relatives aux différentes pratiques de méditations recommandées par le Bouddha, et contient également une explication détaillée des quatre nobles vérités.",
    identifier: 'DN 22',
    translator: 'Rémy',
    readingTime: 25,
  },
  {
    plTitle: 'Siṅgāla Sutta',
    frTitle: 'Discours à Singala',
    description:
      "Le Bouddha explique à Singala, un jeune homme qui cherche à respecter les dernières volontés de son père, comment on doit protéger les six directions. C'est une sorte de manuel de savoir-vivre expliquant les dangers qui guettent l'homme de foyer, comment choisir ses amis, comment se comporter vis-à-vis des uns et des autres, afin d'assurer son propre bien-être, celui de sa famille et de tous les proches, et d'acquérir et protéger la richesse.",
    identifier: 'DN 31',
    translator: 'Rémy',
    readingTime: 25,
  },
];
