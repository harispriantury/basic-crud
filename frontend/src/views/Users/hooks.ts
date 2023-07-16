import { useEffect, useState } from "react";
import { deleteUser } from "../../fetch/fetchApi";

export interface IDataUsers {
  name: string;
  email: string;
  gender: string;
  id: number;
}

export const useCustom = () => {
  const [dataUsers, setDataUsers] = useState<IDataUsers[]>([]);

  const getDataUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();
      setDataUsers(data as IDataUsers[]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (dataUser: IDataUsers) => {
    const ask = confirm(`Apakah kamu akan menghapus ${dataUser.name} ?`);
    if (ask) {
      await deleteUser(dataUser.id);
      getDataUsers();
    }
  };

  useEffect(() => {
    getDataUsers();
  }, []);

  return {
    data: {
      dataUsers
    },
    method: {
      handleDelete
    }
  };
};
