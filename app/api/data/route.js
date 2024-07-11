export async function GET(request) {
    const data = {
        name: "Daniil",
        age: "25",
        city: "Stockholm"
    }
    return new Response(JSON.stringify(data));
}

export async function POST(request) {
    return new Response(request.body);
}

export async function PUT(request) {
    return new Response(request.body);
}

export async function DELETE(request) {
    return new Response(request.body);
}
