import S from '@sanity/desk-tool/structure-builder';
import { GoSettings } from 'react-icons/go';

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
            // S.documentListItem().schemaType('').title('Frontpage'),
        ]);
