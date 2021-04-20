import { AnimatePresence, motion } from "framer-motion"
import Spinner from './Spinner';
const WithdrawlRead = ({step}) => (
    <AnimatePresence>
    {step === 0 &&
    <motion.div
    key='quit0'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{width: '300px',maxHeight: '300px',overflowY: 'auto'}}
    >
제 21조 (회원계약 해지 등) 약관 확인 안내
제21조 (회원계약 해지 등)
 
① 회원은 언제든지 회원계약의 해지를 신청할 수 있으며, 회사는 관련 법령에서 정하는 바에 따라 이를 즉시 처리하여야 합니다. 다만, 회원에게 미수금이 있을 경우에는 미수금에 대한 결제를 완료한 이후에 해지 신청이 가능합니다.

② 회원이 회원계약을 해지할 경우, 회사는 회원 정보를 삭제할 수 있습니다. 단, 비식별화 된 데이터는 해지 이후에도 통계의 목적으로 이용할 수 있습니다.

③ 회원계약 해지로 인해 발생한 불이익에 대한 책임은 회원 본인이 부담해야 하며, 회사는 회원에게 부가적으로 제공한 각종 무상 혜택을 회수할 수 있습니다.
 
④ 회사는 다음 각 호의 경우 회원계약을 해지할 수 있습니다.
 
1. 회원이 회사가 제공하는 서비스 등의 원활한 진행을 방해하는 행위를 하거나 시도한 경우

2. 회원이 고의로 회사의 영업을 방해한 경우

3. 회원이 회사가 제공하는 서비스 이용 중 또는 서비스에 대하여 위법한 행위를 하거나 하려고 한 경우

4. 다른 회원의 권리나 명예, 신용 기타 정당한 이익을 침해하거나 법령 또는 선량한 풍속 기타 사회질서에 위배되는 행위를 한 경우

5. 회원이 회사가 인정하지 아니하는 방법 혹은 부정하게 타인의 아이디를 이용하여 쿠폰 등의 혜택을 취득 또는 사용하는 경우

6. 회원이 고의로 결제오류 기타 정상적인 결제를 회피하려는 행위를 하거나 시도한 사실이 확인된 경우

7. 회원에게 회원계약의 승낙 거부 사유가 있음이 사후에 확인된 경우

8. 회원이 본 약관, 지침 또는 회원이 동의한 다른 약관에 위배되는 행위를 한 경우 

9. 위법 또는 부당한 행위를 한 경우

10. 기타 회사가 합리적인 판단에 기하여 서비스의 제공을 거부할 필요가 있다고 인정할 경우

⑤ 회사가 회원계약을 해지하는 경우 회사는 회원에게 해지 사유를 밝혀 해지 의사를 통지합니다. 이 경우 회사는 해지를 하기 전에 상당한 기간을 정하여 회원에게 이의 신청의 기회를 부여할 수 있습니다.

⑥ 회원계약이 회사에 의해 해지되는 경우 회원의 재이용 신청에 대해 회사는 승낙을 거절할 수 있습니다

⑦ 회원의 귀책사유로 인해 회원계약이 해지됨으로써 발생한 손해는 당해 회원이 부담하여야하며, 회사는 관련 법령에 규정이 없는 한 책임을 부담하지 않습니다.

    </motion.div>}
    {step === 1 &&
        <motion.div
        key='quit1'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{width: '300px',maxHeight: '300px',overflowY: 'auto'}}
        >
        Premo account not recoverable. You can't restore it after withdrawal, so please choose carefully before deciding.
        </motion.div>
        }
        {step === 2 &&
        <motion.div
        key='quit1'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{width: '300px',display: 'flex',alignItems: 'center',justifyContent: 'center',height: '150px'}}
        >
            <Spinner/>
        </motion.div>
        }
    </AnimatePresence>
)
export default WithdrawlRead