import { Country, City } from './../types/form';

export const getOptions = (data : Country[] | City[]) => {
   const options = data.map(item => (
    { value: item.name_ptbr,label: item.name_ptbr }
   ))
  return options
}