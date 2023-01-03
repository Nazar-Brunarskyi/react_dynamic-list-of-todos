import { FC } from 'react';

interface Props {
  filterType: string,
  onFilter: React.Dispatch<React.SetStateAction<string>>,
  query: string,
  onSearch: React.Dispatch<React.SetStateAction<string>>,
  onClean: () => void,
}

export const TodoFilter: FC<Props> = ({
  filterType,
  onFilter,
  query,
  onSearch,
  onClean,
}) => (
  <form className="field has-addons">
    <p className="control">
      <span className="select">
        <select
          data-cy="statusSelect"
          value={filterType}
          onChange={(event) => onFilter(event.currentTarget.value)}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </span>
    </p>

    <p className="control is-expanded has-icons-left has-icons-right">
      <input
        data-cy="searchInput"
        type="text"
        className="input"
        placeholder="Search..."
        value={query}
        onChange={(event) => onSearch(event.currentTarget.value)}
      />
      <span className="icon is-left">
        <i className="fas fa-magnifying-glass" />
      </span>

      <span className="icon is-right" style={{ pointerEvents: 'all' }}>
        {
          query && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={onClean}
            />
          )
        }
      </span>
    </p>
  </form>
);