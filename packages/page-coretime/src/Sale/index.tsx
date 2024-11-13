import { useApi } from "@polkadot/react-hooks";
import Summary from "./Summary.js"
import { CoretimeInformation } from "@polkadot/react-hooks/types";
import { Button, CardSummary, Progress, SummaryBox } from "@polkadot/react-components";
import { useTranslation } from "../translate.js";
import { formatNumber } from '@polkadot/util';
import ProgresBar from "@polkadot/react-components/ProgresBar";

interface Props {
    coretimeInfo: CoretimeInformation
}

function Sale({ coretimeInfo }: Props): React.ReactElement<Props> {
    const { api, isApiReady } = useApi();
    const { t } = useTranslation();
    // const available = Number(coretimeInfo?.salesInfo?.coresOffered) - Number(coretimeInfo?.salesInfo.coresSold)
    const available = 1
    return (
        <div>
            {coretimeInfo &&
                <Summary
                    api={isApiReady ? api : null}
                    config={coretimeInfo?.config}
                    region={coretimeInfo?.region}
                    saleInfo={coretimeInfo?.salesInfo}
                    status={coretimeInfo?.status}
                />}
            <div style={{ marginTop: '4rem', display: 'grid', gap: '2rem', gridTemplateColumns: '1fr 3fr', justifyItems: 'center', alignItems: 'stretch', flexFlow: '1' }}>

                <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', justifySelf: 'right', backgroundColor: 'white', borderRadius: '4px', padding: '24px', width: 'fit-content' }}>
                    <SummaryBox>
                        <CardSummary label="current price">100 DOT</CardSummary>
                        {/* {!!available && <CardSummary label="cores avaiable">{available}</CardSummary>}
                        {!available && <p style={{ fontSize: '12px' }}> Currently there are no cores available for purchase</p>} */}

                    </SummaryBox>
                    {!!available && <div style={{ marginTop: '8px' }}>
                        <Button label={t('Purchase a core')} isBasic onClick={() => window.alert('yo')} isDisabled={!available} />
                    </div>}
                </div>
                <div style={{ backgroundColor: 'white', borderRadius: '4px', padding: '24px', width: 'fit-content', justifySelf: 'left', }}>
                    <SummaryBox>
                        <section>
                            <CardSummary label="current phase">Renewals</CardSummary>

                            <CardSummary label="current phase end">11th Nov 2024</CardSummary>
                            <CardSummary label="last block">12313123123</CardSummary>
                            <CardSummary label="fixed price">{formatNumber(coretimeInfo?.salesInfo.endPrice)}</CardSummary>
                            <CardSummary label="sellout price">{formatNumber(coretimeInfo?.salesInfo.selloutPrice)}</CardSummary>
                        </section>
                        <section>

                        </section>
                    </SummaryBox>
                    <ProgresBar sections={[
                        {
                            value: 7,
                            total: 7,
                            label: 'Renewals'
                        },
                        {
                            value: 7,
                            total: 14,
                            label: 'Price discovery'
                        },
                        {
                            value: 0,
                            total: 7,
                            label: 'Fixed price'
                        }
                    ]} />
                </div>
            </div>
        </div>
    )
}

export default Sale