"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { getBaseUrl } from '../util/baseURL';

const DeleteButton = ({ id }) => {
    const router = useRouter();
    const baseURL = getBaseUrl();

    const handleDelete = async () => {
        try {
            const baseURL =getBaseUrl()
            const data = await fetch(`${baseURL}/api/post/${id}`, {
                method: 'DELETE'
            });

            if (data.ok) {
                router.push('/'); // Siirry takaisin etusivulle, kun posti on poistettu
            } else {
                console.error('Error deleting post:', data.statusText);
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const handleUpdate = async () => {
        try {
            const baseURL =getBaseUrl()
            const data = await fetch(`${baseURL}/api/post/${id}`, {
                method: 'PUT'
            });

            if (data.ok) {
                router.push('/'); // Siirry takaisin etusivulle, kun posti on päivitetty
            } else {
                console.error('Error updating post:', data.statusText);
            }
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    const handleInsert = async () => {
        try {
            // Tee INSERT-toiminto täällä
            // Voit lisätä tarvittavan logiikan tietokannan tietojen lisäämiseksi
        } catch (error) {
            console.error('Error inserting post:', error);
        }
    };

    return (
        <div className='flex justify-between items-center space-x-2'>
            <button
                onClick={handleDelete}
                type="button"
                className="bg-red-700 py-2 px-4 rounded-md text-white"
            >
                Delete
            </button>
            <button
                onClick={handleUpdate}
                type="button"
                className="bg-indigo-700 py-2 px-4 rounded-md text-white"
            >
                Update
            </button>
            <button
                onClick={handleInsert}
                type="button"
                className="bg-green-700 py-2 px-4 rounded-md text-white"
            >
                Insert
            </button>
        </div>
    );
};

export default DeleteButton;
