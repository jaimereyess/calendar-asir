import { NextResponse } from 'next/server'
import { conn } from '@/libs/mysql'

export async function GET () {
  try {
    const results = await conn.query('SELECT * FROM activities')
    return NextResponse.json(results)
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: error.message
      },
      {
        status: 500
      }
    )
  }
}

export async function POST (request) {
  try {
    const { name, subject, date_limit, moodle, drive } = await request.json()

    const result = await conn.query('INSERT INTO activities SET ?', {
      name,
      subject,
      date_limit,
      moodle,
      drive
    })
    console.log(result)

    return NextResponse.json({
      id: result.insertId,
      name,
      subject,
      date_limit,
      moodle,
      drive
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: error.message
      },
      {
        status: 500
      }
    )
  }
}
