"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

function Buttons({ activityId }) {

    const router = useRouter();

    return (
        <div className="flex gap-x-2 justify-end mt-2">
            <button
                className='bg-red-500 hover:bg-red-700 py-2 px-3 rounded text-white'
                onClick={async () => {
                    if (confirm('Are you sure you want to delete this activity?')) {
                        const res = await axios.delete('/api/events/' + activityId)
                        if (res.status === 204) {
                            router.push("/events")
                            router.refresh()
                        }
                    }
                }}
            >
                delete
            </button>
            <button className='bg-green-500 hover:bg-green-700 py-2 px-3 rounded text-white'
                onClick={() => {
                    router.push(`/events/edit/${activityId}`)
                }}
            >
                Edit
            </button>
        </div >
    )
}

export default Buttons
