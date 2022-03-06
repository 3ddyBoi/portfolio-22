export default {
    name: 'siteSettings',
    type: 'document',
    title: 'Site Settings',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            title: 'Search Engine Optimization',
            name: 'seo',
            description:
                'These will be the default meta tags on all pages that have not set their own',
            type: 'seo',
        },
        {
            type: 'color',
            name: 'primaryColorLight',
            title: 'Primary brand color lightmode',
        },
        {
            type: 'color',
            name: 'primaryColorLightVariant',
            title: 'Primary brand color variant lightmode',
        },
        {
            type: 'color',
            name: 'secondaryColorLight',
            title: 'Secondary brand color lightmode',
        },
        {
            type: 'color',
            name: 'secondaryColorLightVariant',
            title: 'Secondary brand color variant lightmode',
        },
        {
            type: 'color',
            name: 'thirdColorLight',
            title: 'Third brand color lightmode',
        },
        {
            type: 'color',
            name: 'primaryTextColorLight',
            title: 'Primary text color lightmode',
        },
        {
            type: 'color',
            name: 'secondaryTextColorLight',
            title: 'Secondary text color lightmode',
        },
    ],
};
