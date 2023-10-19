'use client'
import { useState } from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import './calendar.css'
import Link from 'next/link'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 6,
  color: 'black'
}

export default function TransitionsModal ({ day, month }) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div onClick={handleOpen} className='box w-96'>
      {day}
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleOpen}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id='transition-modal-title' variant='h6' component='h2'>
              {day} de {month}
            </Typography>
            <Typography id='transition-modal-description p-2 pb-10' sx={{ mt: 2, mb: 2 }}>
              No hay tareas pendientes
            </Typography>
            <span className='mt-20'>
              <Link
                href='/new'
                className=' bg-blue-500 rounded-lg hover-blue-600 cursor-pointer py-2 px-3'
              >
                Crear nueva actividad
              </Link>
            </span>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
