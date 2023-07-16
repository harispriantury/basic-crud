import { InputText } from "primereact/inputtext"
import { Dropdown } from "primereact/dropdown"
import { useEffect, useState } from "react"
import { Button } from "primereact/button";
import { useNavigate, useParams } from "react-router-dom";
import { useValidateUser } from "../../data/UseValidateUser";
import { ErrorText } from "../components/ErrorText";
import { postUser, updateUser } from "../../fetch/fetchApi";
import { IDataUsers } from "./hooks";

interface IGenders {
    name: string,
    value: string,
}

export interface IPayload {
    name: string,
    email: string,
    gender: string | null
}

export const FormUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<{ [k: string]: string }>({});
    const [selectedGender, setSelectedGender] = useState<string | null>(null);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const genders: IGenders[] = [
        { name: 'Laki-laki', value: 'laki-laki' },
        { name: 'Perempuan', value: 'perempuan' },
    ]

    const handleChange = (e: string) => {
        setSelectedGender(e)
    }

    const handleSubmit = async () => {
        setSubmitted(true)
        const confirm = validate()

        if (!confirm) {
            alert('Silahkan isi semua input')
        } else {
            const payload: IPayload = {
                name: name,
                email: email,
                gender: selectedGender ? selectedGender : null
            }
            if (location.pathname.includes('edit')) {
                await updateUser(Number(id), payload)
            } else {
                await postUser(payload);
            }
            navigate('/')
        }

    }



    const validate = (): boolean => {
        const payload: IPayload = {
            name,
            email,
            gender: selectedGender ? selectedGender : null
        }

        const error = useValidateUser(payload);
        setErrors({})
        if (Object.keys(error).length > 0) {
            setErrors(error)
            return false
        }
        return true


    }

    const getDetailUser = async (id: number | undefined) => {
        const url = `http://localhost:5000/users/${id}`
        const response = await fetch(url)
        const data: IDataUsers = await response.json();
        if (data) {
            setName(data.name);
            setEmail(data.email);
            setSelectedGender(data.gender)
        }
    }

    useEffect(() => {
        if (submitted) {
            validate()
        }
    }, [name, email, selectedGender])

    useEffect(() => {
        if (location.pathname.includes('edit')) {
            getDetailUser(Number(id))
        }
    }, [])
    return (
        <div className="flex justify-center py-10">
            <div className="bg-gray-200 w-8/12 p-4 rounded-lg">
                <h1 className="text-center text-xl">{location.pathname.includes('edit') ? 'Edit Pengguna' : 'Tambah Pengguna'}</h1>
                <div className="grid grid-cols-2 gap-y-5 p-5">
                    <label htmlFor="">Nama</label>
                    <div>
                        <InputText value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukan Nama Anda" />
                        {
                            errors?.name && (
                                <ErrorText label={errors.name} />
                            )
                        }
                    </div>
                    <label htmlFor="">Email</label>
                    <div>
                        <InputText value={email} onChange={(e) => setEmail(e.target.value)
                        } placeholder="Masukan Email Anda" />
                        {
                            errors?.email && (
                                <ErrorText label={errors.email} />
                            )
                        }
                    </div>
                    <label htmlFor="">Gender</label>
                    <div>
                        <Dropdown value={selectedGender} options={genders} optionLabel="value" placeholder="Pilih salah satu" onChange={(e) => handleChange(e.value)} />
                        {
                            errors?.gender && (
                                <ErrorText label={errors.gender} />
                            )
                        }
                    </div>
                </div>
                <div className="w-full flex justify-end gap-4">
                    <Button label="Kembali" onClick={() => navigate('/')} />
                    <Button label="Simpan" onClick={handleSubmit} />
                </div>
            </div>
        </div>
    )
}