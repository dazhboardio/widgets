import React, { FC } from 'react';
import { ReloadOutlined, SyncOutlined } from '@ant-design/icons';

type RefreshButtonProps = {
  isLoading: boolean
  onRefresh: () => void
}
const RefreshButton: FC<RefreshButtonProps> = ({ isLoading, onRefresh }) => (isLoading ? (
  <SyncOutlined style={{ fontSize: '16px' }} spin />
) : (
  <ReloadOutlined style={{ fontSize: '16px', cursor: 'pointer' }} onClick={onRefresh} />
));

export default RefreshButton;
