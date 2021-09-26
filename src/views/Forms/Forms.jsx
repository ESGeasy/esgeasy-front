import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import styles from './Forms.module.css'
import "react-buzzfeed-quiz/lib/styles.css";
import { Redirect } from "react-router-dom";
import { useState } from "react";

export default function Forms() {
    const [redirect, setRedirect] = useState(false);

    if (redirect) {
        return <Redirect to="/environment" />;
    }

    return (
        <div className={styles.mainContainer}>
            <BuzzFeedQuiz
            title={"Descubra o que te move!"}
            autoScroll={true}
            questions={[
                {
                    question: "Qual problema da humanidade é mais urgente para você?",
                    answers: [
                        {
                            answer: "Mudanças Climáticas",
                            resultID: 0,
                        },
                        {
                            answer: "Desigualdade Social",
                            resultID: 1,
                        },
                        {
                            answer: "Corrupção em instituições Públicas",
                            resultID: 2,
                        },
                        {
                            answer: "Todas as anteriores",
                            resultID: 3,
                        }
                    ],
                },
                {
                    question: "O que faz você gostar de uma empresa?",
                    answers: [
                        {
                            answer: "Investimento em inovação e novas tecnologias",
                            resultID: 0,
                        },
                        {
                            answer: "Preocupação com o meio ambiente",
                            resultID: 1,
                        },
                        {
                            answer: "Cuidado e investimento nos seus funcionários",
                            resultID: 2,
                        },
                        {
                            answer: "Todas as anteriores",
                            resultID: 3,
                        }
                    ],
                },
                {
                    question: "Qual dessas empresas você investiria?",
                    answers: [
                        {
                            answer: "Óleo, Gás e Combustíveis fósseis",
                            resultID: 0,
                        },
                        {
                            answer: "Metais e mineração",
                            resultID: 1,
                        },
                        {
                            answer: "Construção de rodovias ",
                            resultID: 2,
                        },
                        {
                            answer: "Têxteis e Vestuários",
                            resultID: 3,
                        }
                    ],
                },
                {
                    question: "Uma empresa perfeita deve:",
                    answers: [
                        {
                            answer: "Não possuir envolvimento com corrupção",
                            resultID: 0,
                        },
                        {
                            answer: "Possuir diversidade no quadro de funcionários",
                            resultID: 1,
                        },
                        {
                            answer: "Reinvestir seus lucros em comunidades locais",
                            resultID: 2,
                        },
                        {
                            answer: "Reciclar todos os seus resíduos",
                            resultID: 3,
                        }
                    ],
                },
                {
                    question: "Qual dessas empresas você investiria se tivesse oportunidade?",
                    answers: [
                        {
                            answer: "Apple",
                            onAnswerSelection: () =>
                            setRedirect(true),
                            resultID: 0,
                        },
                        {
                            answer: "Petrobrás",
                            onAnswerSelection: () =>
                            setRedirect(true),
                            resultID: 1,
                        },
                        {
                            answer: "Caixa economica federal",
                            onAnswerSelection: () =>
                            setRedirect(true),
                            resultID: 2,
                        },
                        {
                            answer: "Startups inovadoras",
                            onAnswerSelection: () =>
                            setRedirect(true),
                            resultID: 3,
                        }
                    ],
                }       
            ]}
            />
        </div>
    );
};
