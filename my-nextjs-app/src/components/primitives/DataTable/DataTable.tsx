import type {FC, ReactNode, CSSProperties} from 'react';

import clsx from 'clsx';
import {Row, Icon, ProgressCircular} from '@/components/primitives';
import TableFooter from '@/components/primitives/DataTable/components/TableFooter';

import {mdiChevronDown} from '@mdi/js';

const alignments = {
  start: 'text-left',
  center: 'text-center',
  end: 'text-right',
};

interface HeaderItem {
  text: string | (() => ReactNode);
  value: string | ((val: TableItem) => ReactNode);
  align?: 'start' | 'center' | 'end';
  sortable?: boolean;
}

export interface TableItem {
  [key: string]: string | boolean | undefined;
}

interface DataTableProps {
  className?: string;
  style?: CSSProperties;
  headers: HeaderItem[];
  items: TableItem[];
  fixedHeader?: boolean;
  height?: string | number;
  loading?: boolean;
  hideFooter?: boolean;
  itemsPerPage?: string | number;
  onItemsPerPageChange?: (val: string | number) => void;
  page?: number;
  onPageChange?: (val: number) => void;
  pageCount?: number;
}

export const DataTable: FC<DataTableProps> = ({
  className,
  style,
  headers,
  items,
  fixedHeader,
  height,
  loading,
  hideFooter,
  itemsPerPage,
  onItemsPerPageChange,
  page,
  onPageChange,
  pageCount,
}) => {
  return (
    <div className={clsx(className, 'max-w-full leading-normal')}>
      <div style={{...style, height: height && `${height}px`}}>
        <table className="relative w-full border-spacing-0 text-light-blue">
          <thead
            className={clsx(fixedHeader && 'sticky top-0 bg-[#FBFBFB] z-10')}
          >
            <tr>
              {headers.map(({text, align = 'start', sortable = true}, i) => (
                <th
                  key={i}
                  role="columnheader"
                  className={clsx(
                    'group',
                    'h-[68px] select-none font-normal',
                    alignments[align],
                    sortable && 'pointer-events-auto cursor-pointer outline-0'
                  )}
                >
                  <Row justify={align} align="center">
                    {typeof text === 'function' ? (
                      <>{text()}</>
                    ) : (
                      <span className="opacity-40 group-hover:opacity-100 transition-all">
                        {text}
                      </span>
                    )}

                    {sortable && (
                      <Icon
                        name={mdiChevronDown}
                        color="light-blue"
                        className={clsx(
                          'ml-2 opacity-40 group-hover:opacity-100 transition-all'
                        )}
                      />
                    )}
                  </Row>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={headers.length} className="h-[98px] text-center">
                  <ProgressCircular indeterminate size="40" />
                </td>
              </tr>
            ) : !items?.length ? (
              <tr>
                <td
                  colSpan={headers.length}
                  className="h-[98px] font-semibold text-center"
                >
                  No data available
                </td>
              </tr>
            ) : (
              <>
                {items.map((item, i) => (
                  <tr key={i} className="hover:bg-[#54658e1a]">
                    {headers.map(({value, align = 'start'}, hi) => (
                      <td
                        key={hi}
                        className={clsx(
                          'group border-b-[1px] border-[#b2dfdbb3]',
                          'h-[68px]',
                          alignments[align]
                        )}
                      >
                        {typeof value === 'function'
                          ? value(item)
                          : item[value]}
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            )}
          </tbody>

          {!hideFooter && (
            <TableFooter
              headersLength={headers.length}
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={onItemsPerPageChange}
              page={page}
              onPageChange={onPageChange}
              pageCount={pageCount}
            />
          )}
        </table>
      </div>
    </div>
  );
};
