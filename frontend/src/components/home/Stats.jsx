import { useEffect, useState } from "react";

const stats = [
    {
        number: 10,
        suffix: "+",
        label: "Years Experience",
    },
    {
        number: 5000,
        suffix: "+",
        label: "Happy Members",
    },
    {
        number: 20,
        suffix: "+",
        label: "Expert Trainers",
    },
    {
        number: 50,
        suffix: "+",
        label: "Modern Equipment",
    },
];

const Stats = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = 5000;
        const duration = 1800;
        const increment = end / (duration / 20);

        const timer = setInterval(() => {
            start += increment;

            if (start >= end) {
                start = end;
                clearInterval(timer);
            }

            setCount(Math.floor(start));
        }, 20);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-dark text-white border-top border-bottom border-secondary py-5">
            <div className="container py-3">

                <div className="row text-center g-4">

                    {stats.map((stat, index) => {
                        let displayNumber = stat.number;

                        // Different speed/value based on final number
                        if (stat.number === 5000) {
                            displayNumber = count;
                        } else {
                            displayNumber = Math.min(
                                stat.number,
                                Math.floor((count / 5000) * stat.number)
                            );
                        }

                        return (
                            <div
                                className="col-6 col-lg-3"
                                key={index}
                            >
                                <div className="py-2">

                                    <h2 className="text-danger fw-bold display-5 mb-2">
                                        {displayNumber}
                                        {stat.suffix}
                                    </h2>

                                    <p className="text-secondary mb-0">
                                        {stat.label}
                                    </p>

                                </div>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default Stats;