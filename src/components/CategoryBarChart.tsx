import type { CurrencyCode, ExchangeRates } from "../types/currency";
import type { CategoryStatistic } from "../types/statistics";
import convertCurrency from "../utils/convertCurrency";
import { formatCurrency } from "../utils/formatCurrency";

type CategoryBarChartProps = {
    statistics: CategoryStatistic[];
    title: string;
    currency: CurrencyCode;
    rates: ExchangeRates;
}

function CategoryBarChart({statistics, title, currency, rates}: CategoryBarChartProps) {
    if (statistics.length === 0) {
        return (
            <section className="category-bar-chart">
                <h2>{title}</h2>
                <p>No category data available.</p>
            </section>
        )
    }

    const maxTotal = statistics.reduce((max, statistic) => {
        if (statistic.total > max) {
            return statistic.total;
        }

        return max;
    }, 0);

    return (
        <section className="category-bar-chart">
            <h2>{title}</h2>
            <div className="category-bar-chart_list">
                {statistics.map(statistic => {
                    const barWidth = (statistic.total / maxTotal) * 100;

                    return (
                        <div key={statistic.category} className="category-bar-chart_row">
                            <span className="category-bar-chart_label">{statistic.category}</span>
                            <div className="category-bar-chart_track">
                                <div className="category-bar-chart_fill" style={{ width: `${barWidth}%` }}></div>
                            </div>
                            <span className="category-bar-chart_value">{formatCurrency(convertCurrency(statistic.total, currency, rates), currency)}</span>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default CategoryBarChart;