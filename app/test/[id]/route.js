import {query} from "../../../lib/db";

export async function GET(request,  { params }) {
    const id = params.id;

    const result = await query(`SELECT * FROM test_table WHERE id = ${id}`);

    return Response.json({data: result[0]});
}

export async function PUT(request, {params}){
    const { searchParams } = new URL(request.url)
    const name = searchParams.get('name')
    const id = params.id;

    const result = await query(`UPDATE test_table SET name = '${name}' WHERE id = ${id}`);

    return Response.json({data: result});
}

export async function DELETE(request, {params}){
    const id = params.id;

    const result = await query(`DELETE FROM test_table WHERE id = ${id}`);

    return Response.json({data: result});
}
