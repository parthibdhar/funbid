export async function POST(req: Request): Promise<any> {
    console.log("delete user end point called")
    const endPoint: (string | undefined) = "https://us-central1-biding-firebase.cloudfunctions.net/deleteUser";

    const { uid } = await req.json();
    console.log(uid)
    if (endPoint) {
        try {
            console.log("hi in try")
            const response = await fetch(endPoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Set the appropriate content type for your request
                },
                body: JSON.stringify({
                    uid
                }), // Convert data to JSON format
            });

            // if (!response.ok) {
            //     throw new Error('Network response was not ok');
            // }
            // If the response is successful, you can handle the result here
            const result = await response.json();
            console.log('POST request successful:', result);
            return Response.json({ result })
        } catch (error) {
            console.error('Error during POST request:', error);
        }
    }
}