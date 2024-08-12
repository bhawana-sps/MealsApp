import { View, Dimensions, StyleSheet, Text } from "react-native"
import { PieChart } from "react-native-chart-kit"
import { MEALS } from "../data/dummy-data"
import Color from "../util/Color";

const screenWidth = Dimensions.get('window').width;
function calculateRatingsDistribution() {
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    MEALS.forEach(meal => {
        const rating = Math.round(meal.rating);
        if (distribution[rating] !== undefined) {
            distribution[rating] += 1;
        }
    });

    return [
        { name: '1 Star', count: distribution[1], color: Color.color_FF0000 },
        { name: '2 Stars', count: distribution[2], color: Color.color_FF7F00 },
        { name: '3 Stars', count: distribution[3], color: Color.color_FFFF00 },
        { name: '4 Stars', count: distribution[4], color: Color.color_85e425 },
        { name: '5 Stars', count: distribution[5], color: Color.color_427411 },
    ];
}

function PieChartScreen() {
    const data = calculateRatingsDistribution().map((item) => ({
        name: item.name,
        rating: item.count,
        color: item.color,
        legendFontColor: Color.color_7F7F7F,
        legendFontSize: 15,
    }));

    return (
        <View style={styles.container}>
            <View style={styles.chartContainer}>
                <PieChart
                    data={data}
                    width={screenWidth}
                    height={320}
                    chartConfig={{
                        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                    }}
                    accessor={'rating'}
                    backgroundColor={'transparent'}
                    paddingLeft={'90'}
                    hasLegend={false}
                />
            </View>
            <View style={styles.legendContainer}>
                {data.map((item, index) => (
                    <View key={index} style={styles.legendItem}>
                        <View style={[styles.legendColorBox, { backgroundColor: item.color }]} />
                        <Text style={styles.legendText}>{item.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:50
    },  
    chartContainer: {
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%',
    },
    legendContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 26,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 8,
        marginVertical: 4,
    },
    legendColorBox: {
        width: 16,
        height: 16,
        marginRight: 8,
    },
    legendText: {
        fontSize: 15,
        color: Color.color_7F7F7F,
    },
});

export default PieChartScreen