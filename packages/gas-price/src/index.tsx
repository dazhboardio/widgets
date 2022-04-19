import React, { useEffect } from 'react';
import { Col, Row, Divider } from 'antd';
import styled, { useTheme } from 'styled-components';
import { useEtherscanQuery } from '@dazhboardio/core';
import RefreshButton from './components/RefreshButton';

const Wrapper = styled.div`
  padding: 12px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin-bottom: 0;
  }
`;

const PriceItem = styled.div`
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.palette.darkGrey}77;
  padding: 8px;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PriceItemTitle = styled.span`
  font-weight: bold;
  font-size: 1rem;
`;

function GasPriceWidget() {
  // const [{ prices, isLoading }, getGasPrice] = useGetGasPrice()
  const {
    data,
    isLoading,
    refetch: getGasPrice,
  } = useEtherscanQuery({
    module: 'account',
    action: 'balance',
  });
  const prices: any = data;
  const theme: any = useTheme();
  useEffect(() => {
    getGasPrice();
  }, [getGasPrice]);

  return (
    <Wrapper>
      <Header>
        <h3>Ethereum Gas Tracker</h3>
        <RefreshButton isLoading={isLoading} onRefresh={getGasPrice} />
      </Header>
      <Divider style={{ margin: '8px 0' }} />
      <Row gutter={8}>
        <Col span={8}>
          <PriceItem>
            <PriceItemTitle>Low</PriceItemTitle>
            <div style={{ color: theme.palette.green }}>
              {prices?.safe}
              {' '}
              gwei
            </div>
            <div style={{ color: theme.palette.darkGrey, fontSize: '0.8rem' }}>
              Base:
              {' '}
              {prices?.base}
            </div>
          </PriceItem>
        </Col>
        <Col span={8}>
          <PriceItem>
            <PriceItemTitle>Medium</PriceItemTitle>
            <div style={{ color: theme.palette.blue }}>
              {prices?.propose}
              {' '}
              gwei
            </div>
            <div style={{ color: theme.palette.darkGrey, fontSize: '0.8rem' }}>
              Base:
              {' '}
              {prices?.base}
            </div>
          </PriceItem>
        </Col>
        <Col span={8}>
          <PriceItem>
            <PriceItemTitle>High</PriceItemTitle>
            <div style={{ color: theme.palette.red }}>
              {prices?.fast}
              {' '}
              gwei
            </div>
            <div style={{ color: theme.palette.darkGrey, fontSize: '0.8rem' }}>
              Base:
              {' '}
              {prices?.base}
            </div>
          </PriceItem>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default GasPriceWidget;
