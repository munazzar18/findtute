const url = process.env.NEXT_PUBLIC_API_URL as string


export const getSubjects = async (page: number) => {
    const res = await fetch(`${url}subjects?page=${page}`,
        {
            cache: 'no-store',
        })
    const data = await res.json()
    return data
}