import { ER } from './models/Endoplasmic_reticulum.jsx';
import { Nucleus } from './models/Cosmic_cell.jsx';
import { Golgi } from './models/Golgi_apparatuscomplex.jsx';
import { Mitochondria } from './models/Mitochondria.jsx';
import { Lysosome } from './models/Lysosome.jsx';
import { Ribosome } from './models/Ribosome.jsx';

export const modelConfig = {
  'Endoplasmic-reticulum': { component: ER, text: 'The journey of protein production and export begins with the DNA stored within the chromosome. which contains the genetic information needed for protein synthesis.' },
  'Nucleus': { component: Nucleus, text: 'The nucleus controls and regulates cell activities. It is here that the DNA from the chromosome is transcribed into RNA, specifically messenger RNA (mRNA), which carries the genetic instructions for protein synthesis.' },
  'Golgi': { component: Golgi, text: 'After being created in the RER, the protein is further modified and processed in the Golgi apparatus. Here, it undergoes various changes, such as the addition of sugar molecules or other modifications, to ensure proper functionality.' },
  'Mitochondria': { component: Mitochondria, text: 'Once the protein is fully processed, it is transported to the cell membrane. Then it leaves. The end.' },
  'Lysosome': { component: Lysosome, text: 'The Lysosome is an organelle that contains digestive enzymes. It digests excess or worn-out organelles, food particles, and engulfed viruses or bacteria.' },
  'Ribosome': { component: Ribosome, text: 'The Ribosome is a particle consisting of RNA and associated proteins that is involved in protein synthesis. In the ribosome, the mRNA from the DNA is translated into a chain of amino acids to form a protein.' },
};

export const modelOptions = Object.keys(modelConfig);