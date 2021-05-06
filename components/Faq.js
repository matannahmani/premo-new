import React, { useRef } from 'react';

const Faq = ({q,a,key}) => {
    const faqt = useRef();
    const handleClick = () => {
        const node = faqt.current;
        if (node.classList.contains('active'))
        {
            node.classList.remove('active')
            node.children[0].children[1].classList.add('faq-hide');
        } else
        {
             node.classList.add('active');
             node.children[0].children[1].classList.remove('faq-hide');
            }
    }
        return (
            <div key={key} className="accrodion-grp faq-accrodion" onClick={handleClick}>
                        <div className="accrodion" ref={faqt}>
                        <div className="accrodion-inner">
                            <div className="accrodion-title">
                                <h4>{q}</h4>
                            </div>
                            <div className="accrodion-content faq-hide">
                                <div className="inner">
                                    <p>{a}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
}
export default Faq;