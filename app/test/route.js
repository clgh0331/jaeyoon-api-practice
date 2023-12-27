import {query} from "../../lib/db";

export async function GET() {
    const result = await query('SELECT * FROM test_table');

    return Response.json({data: result});
}

export async function POST(req) {
    const { name } = await req.json()

    const result = await query(`INSERT into test_table(name) values (\'${name}\');`)

    return Response.json({data: result});
}
