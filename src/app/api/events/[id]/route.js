import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function GET(request, { params }) {
    try {
        const result = await conn.query('SELECT * FROM activities WHERE id = ?', [params.id])

        if (result.length === 0) {
            return NextResponse.json(
                {
                    message: "Actividad no encontrado"
                },
                {
                    status: 400
                }
            );
        }

        return NextResponse.json(result[0])

    } catch (error) {
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

export async function DELETE(request, { params }) {
    try {
        const result = await conn.query("DELETE FROM activities WHERE id = ?", [
            params.id,
        ]);

        if (result.affectedRows === 0) {
            return NextResponse.json(
                {
                    message: "Actividad no encontrado",
                },
                {
                    status: 404,
                }
            );
        }

        return new Response(null, {
            status: 204,
        });
    } catch (error) {
        return NextResponse.json(
            {
                message: error.message,
            },
            { status: 500 }
        );
    }
}

export async function PUT(request, { params }) {
    try {
        const data = await request.json()
        const result = await conn.query('UPDATE activities SET ? WHERE id = ?', [data, params.id])

        if (result.affectedRows === 0) {
            return NextResponse.json(
                {
                    message: "Actividad no encontrado"
                },
                {
                    status: 404
                }
            )
        }

        const updateActivity = await conn.query("SELECT * FROM activities WHERE id = ?", [params.id])


        return NextResponse.json(updateActivity[0])

    } catch (error) {
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
