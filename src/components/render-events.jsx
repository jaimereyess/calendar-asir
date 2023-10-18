export async function loadActivities() {
    const { data } = await axios.get('http://localhost:3000/api/events')
    return data
}

export async function renderEvents() {
    const activities = await loadActivities()
}
