

const url = process.env.NEXT_PUBLIC_API_URL as string

export async function createhandshake(formData: FormData) {
    const res = await fetch(`${url}payment/initiateHandshake`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderId: formData.get('orderId') }),
    })
    const data = await res.json()
    return data
}

export async function PageRedirectionAction(formData: FormData) {

    const res = await fetch(`${url}payment/checkout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            orderId: formData.get('orderId'),
            token: formData.get('token'),
            returnUrl: formData.get('returnUrl'),
            requestHash: formData.get('requestHash'),
        }),
    })
    const data = await res.json()
    return data
}