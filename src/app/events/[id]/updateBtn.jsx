import React, { useState } from 'react';
import axios from 'axios'; // Importa axios para realizar la solicitud HTTP

function UpdateBtn({ params }) {
    const [submit, setSubmit] = useState({
        submitted: '',
    });

    const handleSubmitted = async () => {
        // Actualiza el estado local con "Si" cuando el botón es presionado
        setSubmit({ submitted: 'Si' });

        // Realiza una solicitud PUT al servidor para actualizar el estado en la tabla
        await axios.put('/api/events/' + params.id, submit);
    };

    return (
        <button
            className='bg-blue-500 hover:bg-blue-700 py-2 px-3 rounded text-white w-full mt-2'
            onClick={handleSubmitted}
        >
            Entregar
        </button>
    );
}

export default UpdateBtn;
