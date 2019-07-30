import { MatPaginatorIntl } from '@angular/material';

export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();

  const frRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) { return `0 de ${length}`; }

    length = Math.max(length, 0);
    const startIndex = page * pageSize;

    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} de ${length}`;
  };

  customPaginatorIntl.itemsPerPageLabel = 'Items_Label:'; // Items per page
  customPaginatorIntl.nextPageLabel = 'Suivant'; // Next Page
  customPaginatorIntl.previousPageLabel = 'Précédent'; // Previous Page

  customPaginatorIntl.lastPageLabel = '11';
  customPaginatorIntl.getRangeLabel = frRangeLabel;
  customPaginatorIntl.firstPageLabel = '11';

  return customPaginatorIntl;
}
