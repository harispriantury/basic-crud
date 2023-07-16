import { IPayload } from "../views/Users/Form";

export const useValidateUser = (payload: IPayload) => {
  const errors: { [k: string]: string } = {};
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (payload.name === "") {
    errors.name = "Input nama harus diisi";
  }
  if (payload.email === "") {
    errors.email = "Input email harus diisi";
  } else if (!reg.test(payload.email)) {
    errors.email = "Format email salah";
  }
  if (!payload.gender) {
    errors.gender = "Input gender harus diisi";
  }

  return errors;
};
