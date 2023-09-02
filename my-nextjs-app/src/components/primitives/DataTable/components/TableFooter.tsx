import type {FC} from 'react';

import {useEffect} from 'react';
import {Row, Button, Icon, Select} from '@/components/primitives';

import {
  mdiChevronLeft,
  mdiChevronRight,
  mdiPageFirst,
  mdiPageLast,
  mdiMinus,
} from '@mdi/js';

const itemsPerPageOptions = [
  {text: '5', value: 5},
  {text: '10', value: 10},
  {text: '15', value: 15},
];

interface TableFooterProps {
  headersLength: number;
  itemsPerPage?: string | number;
  onItemsPerPageChange?: (val: string | number) => void;
  page?: number;
  onPageChange?: (val: number) => void;
  pageCount?: number;
}

const TableFooter: FC<TableFooterProps> = ({
  headersLength,
  itemsPerPage = 10,
  onItemsPerPageChange,
  page = 1,
  onPageChange,
  pageCount,
}) => {
  const handlePrevClick = () => {
    onPageChange && onPageChange(page - 1);
  };

  const handleNextClick = () => {
    onPageChange && onPageChange(page + 1);
  };

  const handleFirstPageClick = () => {
    onPageChange && onPageChange(1);
  };

  const handleLastPageClick = () => {
    onPageChange && pageCount && onPageChange(pageCount);
  };

  useEffect(() => {
    if (pageCount && page > pageCount) onPageChange && onPageChange(1);
  }, [page, pageCount, onPageChange]);

  return (
    <tfoot className="bg-[#FBFBFB]">
      <tr>
        <td colSpan={headersLength} className="h-[98px] text-light-blue">
          <Row align="center" justify="end" className="gap-x-6">
            items per page:
            <div className="w-[104px]">
              <Select
                value={itemsPerPage}
                items={itemsPerPageOptions}
                dense
                onChange={onItemsPerPageChange}
              />
            </div>
            <Row align="center" className="gap-x-4 -ml-2">
              <Row>
                <Button
                  color="light-blue"
                  icon
                  disabled={page < 2}
                  onClick={handleFirstPageClick}
                >
                  <Icon name={mdiPageFirst} color="current" />
                </Button>
                <Button
                  color="light-blue"
                  icon
                  disabled={page < 2}
                  onClick={handlePrevClick}
                >
                  <Icon name={mdiChevronLeft} color="current" />
                </Button>
              </Row>

              <div>
                {page} of{' '}
                {pageCount ? pageCount : <Icon name={mdiMinus} dense />}
              </div>

              <Row>
                <Button
                  color="light-blue"
                  icon
                  disabled={!pageCount || page === pageCount}
                  onClick={handleNextClick}
                >
                  <Icon name={mdiChevronRight} color="current" />
                </Button>
                <Button
                  color="light-blue"
                  icon
                  disabled={!pageCount || page === pageCount}
                  onClick={handleLastPageClick}
                >
                  <Icon name={mdiPageLast} color="current" />
                </Button>
              </Row>
            </Row>
          </Row>
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
