


const url = process.env.NEXT_PUBLIC_API_URL as string

export const getGrades = async (page: number) => {
    const res = await fetch(`${url}grade?page=${page}`, {
        next: { revalidate: 3600 },
    })

    const data = await res.json()
    return data
}