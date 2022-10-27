import { useFetch } from "./../../hooks/useFetch";
import { FormValidation } from "./FormValidation";
import { yupResolver } from "./../../../../node_modules/@hookform/resolvers/yup/src/yup";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { City, Country, FormData } from "../../../types/form";
import { getOptions } from "../../../utils/getOptions";

export function useFormLogic() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(FormValidation) });

  const [countries, setCountries] = useState<Country[]>([] as Country[]);
  const [cities, setCities] = useState<City[]>([] as City[]);

  useEffect(() => {
    (async () => {
      setCountries(await useFetch("https://amazon-api.sellead.com/country"));
      setCities(await useFetch("https://amazon-api.sellead.com/city"));
    })();
  }, []);
  
  const countryOptions = getOptions(countries);
  const cityOptions = getOptions(cities);

  const onFormSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    alert(
      "Formulário enviado! Abra o console do navegador para como as informações serão enviadas."
    );
  };

  return {
    handleSubmit,
    register,
    onFormSubmit,
    countryOptions,
    control,
    cityOptions,
    errors,
  };
}
