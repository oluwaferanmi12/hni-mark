import { TableLoading } from '@/components/atoms/tables';
import { TableWrapper } from '@/components/molecules/wrappers'
import React, { useState } from 'react'

export const WalletTable = () => {
    const [tableLoading ,setTableLoading] = useState(true);
    const [wallTransactions, setWallTransactions] = useState([]);
  return (
    <TableWrapper>
        
        {tableLoading ? <TableLoading /> : wallTransactions.length}
    </TableWrapper>
  )
}
