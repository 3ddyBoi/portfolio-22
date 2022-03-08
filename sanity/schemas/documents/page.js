export default {
    type: 'document',
    name: 'page',
    title: 'Page',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'navMenu',
            type: 'reference',
            title: 'Navigation menu',
            to: [{ type: 'cta' }],
        },
    ],
};
