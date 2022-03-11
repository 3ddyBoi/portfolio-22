import S from '@sanity/desk-tool/structure-builder';
import { GoSettings } from 'react-icons/go';
import { MdMenu } from 'react-icons/md';

export default () =>
    S.list()
        .title('Content')
        .items([
            S.documentListItem()
                .schemaType('siteSettings')
                .title('Site Settings')
                .icon(GoSettings)
                .child(
                    S.document()
                        .schemaType('siteSettings')
                        .documentId('siteSettings')
                ),
            S.documentListItem()
                .title('Page Builder')
                .child(
                    S.list()
                        .title('Landing Pages')
                        .items([
                            S.listItem()
                                .title('Navigation Menus')
                                .icon(MdMenu)
                                .schemaType('navMenu')
                                .child(
                                    S.documentTypeList(
                                        'navMenu'
                                    ).title('Navigation Menus')
                                ),
                            S.listItem()
                                .title('Routes')
                                .schemaType('route')
                                .child(
                                    S.documentTypeList('route')
                                        .title('Routes')
                                        .child((documentId) =>
                                            S.document()
                                                .documentId(
                                                    documentId
                                                )
                                                .schemaType('route')
                                                .views([
                                                    S.view.form(),
                                                ])
                                        )
                                ),
                        ])
                ),
        ]);
