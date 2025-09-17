module.exports = async function (context, req) {
    try {
        const docs = context.bindings.inputDocument || [];
        if (docs.length) {
            return { status: 200, body: docs[0] };
        }
        const date = (req.params && req.params.date) || '(unknown)';
        return { status: 404, body: { error: `No data found for date ${date}` } };
    } catch (e) {
        context.log.error(e);
        return { status: 500, body: { error: String(e?.message || e) } };
    }
};
