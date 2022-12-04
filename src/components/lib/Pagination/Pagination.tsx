import { Icon } from '@iconify/react';
import type { FC } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';
import type PaginationProps from './PaginationProps';

const Pagination: FC<PaginationProps> = ({ setPage, count, page }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        {/* @ts-ignore */}
        <ReactPaginate
          breakLabel="..."
          onPageChange={(selectedItem) => setPage(selectedItem.selected + 1)}
          pageRangeDisplayed={2}
          pageCount={count}
          renderOnZeroPageCount={() => null}
          className={styles.container}
          pageClassName={styles.page}
          activeClassName={styles.active__page}
          previousLabel={
            <button
              disabled={page <= 1}
              className={`${styles.navigator} ${styles.navigator__previous}`}
            >
              <Icon icon="gg:chevron-left" className="text-xl" />
            </button>
          }
          nextLabel={
            <button
              disabled={page === count}
              className={`${styles.navigator} ${styles.navigator__next}`}
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
