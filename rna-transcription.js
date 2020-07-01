export const toRna = (dna) => {
  let translation = {
    'G':'C',
    'C':'G',
    'T':'A',
    'A':'U',
  }
  let rna = dna.replace(/[GCTA]/g, m => translation[m])
  return rna;  
};
