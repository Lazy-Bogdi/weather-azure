module.exports = async function (context, req) {
    try {
        const body = req.body || {};
        const date = body.date;
        const avg_temp = body.avg_temp;

        if (!date || avg_temp === undefined) {
            return { status: 400, body: { error: 'Missing required fields: date, avg_temp' } };
        }

        const document = { id: date, date, avg_temp };
        context.bindings.outputDocument = document;

        return { status: 201, body: { status: 'saved', document } };
    } catch (e) {
        context.log.error(e);
        return { status: 500, body: { error: String(e?.message || e) } };
    }
};
