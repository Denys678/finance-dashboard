import type { CurrencyCode } from "../types/currency";
import type { CategoryStatistic } from "../types/statistics";
import { formatCurrency } from "../utils/formatCurrency";

type CategoryStatisticsProps = {
    statistics: CategoryStatistic[];
    title: string;
    currency: CurrencyCode;
}

function CategoryStatistics({statistics, title, currency}: CategoryStatisticsProps) {
    if (statistics.length === 0) {
        return (
            <section>
                <h2>{title}</h2>
                <p>No category statistics available yet</p>
            </section>
        );
    } 

    return (
        <section>
            <h2>{title}</h2>
            <ul>
                {statistics.map((statistic) => 
                    <li key={statistic.category}>
                        {statistic.category}: {formatCurrency(statistic.total, currency)}
                    </li>
                )}
            </ul>
        </section>
    );
}

export default CategoryStatistics;