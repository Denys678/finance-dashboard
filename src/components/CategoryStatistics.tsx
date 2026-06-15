import type { CategoryStatistic } from "../types/statistics";

type CategoryStatisticsProps = {
    statistics: CategoryStatistic[];
    title: string;
}

function CategoryStatistics({statistics, title}: CategoryStatisticsProps) {
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
                        {statistic.category}: {statistic.total}
                    </li>
                )}
            </ul>
        </section>
    );
}

export default CategoryStatistics;