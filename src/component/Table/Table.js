import React from 'react';
import usersData from '../../users.json';
import { useState } from 'react';
import { Table as RTable, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';

export default function Table() {
  const [users, setUsers] = useState(usersData);

  return (
    <RTable data={users}>
      <Column width={100}>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey='id' />
      </Column>{' '}
      <Column width={100}>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey='first_name' />
      </Column>{' '}
    </RTable>
  );
}
