import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useCustom } from './hooks';
import { IDataUsers } from './hooks';
import { useNavigate } from 'react-router-dom';

export const ListUsers = () => {

    const navigate = useNavigate();

    const {
        data: {
            dataUsers
        },
        method: {
            handleDelete
        } } = useCustom()

    const templateAction = (rowData: IDataUsers) => {
        return (
            <div className='w-full flex justify-center gap-4'>
                <Button label='ubah'
                    onClick={() => navigate(`/edit/${rowData.id}`)}
                />
                <Button label='hapus' onClick={() => handleDelete(rowData)} />
            </div>
        )
    }



    return (
        <div className="flex justify-center py-10">
            <div className='w-8/12 bg-gray-200 p-4 rounded-lg'>
                <h1 className="text-center text-xl">List Pengguna</h1>
                <div>
                    <DataTable showGridlines value={dataUsers}>
                        <Column field='name' header="NAMA" />
                        <Column field='email' header="EMAIL" />
                        <Column field='gender' header="GENDER" />
                        <Column
                            align={'center'}
                            body={templateAction} header="aksi" />
                    </DataTable>
                </div>
                <div className='flex p-2'>
                    <Button label='Tambah' onClick={() => navigate('/add')} />
                </div>
            </div>

        </div>
    )
}