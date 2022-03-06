export default {
    title: 'SEO',
    name: 'seo',
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            description:
                'Heads up! This will override the page title.',
            validation: (Rule) =>
                Rule.max(60).warning('Should be under 60 characters'),
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text',
            validation: (Rule) =>
                Rule.max(155).warning(
                    'Should be under 155 characters'
                ),
        },
        // {
        //     title: 'Image',
        //     description: 'Facebook recommends 1200x630',
        //     name: 'image',
        //     type: 'mainImage',
        // },
    ],
};
