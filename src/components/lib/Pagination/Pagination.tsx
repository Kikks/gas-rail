import './Pagination.scss';

import { Icon } from '@iconify/react';
import type { FC } from 'react';
import ReactPaginate from 'react-paginate';

import type PaginationProps from './PaginationProps';

const Pagination: FC<PaginationProps> = ({ setPage, count, page }) => {
  return (
    <div className={'pagination__wrapper'}>
      <div>
        {/* @ts-ignore */}
        <ReactPaginate
          breakLabel="..."
          onPageChange={(selectedItem) => setPage(selectedItem.selected + 1)}
          pageRangeDisplayed={2}
          pageCount={count}
          renderOnZeroPageCount={() => null}
          className={'pagination__container'}
          pageClassName={'pagination__page'}
          activeClassName={'pagination__active__page'}
          previousLabel={
            <button
              disabled={page <= 1}
              className={`${'pagination__navigator'} ${'pagination__navigator__previous'}`}
            >
              <Icon icon="gg:chevron-left" className="text-xl" />
            </button>
          }
          nextLabel={
            <button
              disabled={page === count}
              className={`${'pagination__navigator'} ${'pagination__navigator__next'}`}
            >
              <Icon icon="gg:chevron-right" className="text-xl" />
            </button>
          }
        />
      </div>
    </div>
  );
};

export default Pagination;
