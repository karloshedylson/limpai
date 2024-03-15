import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  Text,
  FlatList,
} from 'react-native';
import moment from 'moment';
import Swiper from 'react-native-swiper';

export default function Tab() {
  const data = [
    {
      id: 1,
      title: 'Limpar a sala',
      name: 'Patricia'
    },
    {
      id: 2,
      title: 'Limpar a cozinha',
      name: 'Joao'
    },
    {
      id: 3,
      title: 'Limpar a varanda',
      name: 'Marcos'
    },
    {
      id: 4,
      title: 'Remover o lixo',
      name: 'Juliana'
    },
  ];

  type ItemProps = {title: string, name: string};

  const Item = ({ title, name }: ItemProps) => (
    <View style={{height: 70, backgroundColor: '#fefefe', padding: 10, justifyContent: 'center', marginHorizontal: 10}}>
      <Text>{title}</Text>
      <Text>{name}</Text>
    </View>
  );

  const swiperRef = useRef();
  const [selectedDate, setDate] = useState(new Date());
  const [week, setWeek] = useState(0);

  const weeks = React.useMemo(() => {
    const start = moment().add(week, 'weeks').startOf('week');

    return [-1, 0, 1].map(adj => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(adj, 'week').add(index, 'day');

        return {
          weekday: date.toDate().toLocaleDateString([], {weekday: 'short'}),
          date: date.toDate(),
        };
      });
    });
  }, [week]);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>{(selectedDate.toLocaleDateString([], {month: 'long'}))}</Text>
        <View style={[styles.picker]}>
          <Swiper
            index={1}
            ref={swiperRef}
            loop={false}
            showsPagination={false}
            onIndexChanged={ind => {
              if (ind === 1) {
                return;
              }
              setTimeout(() => {
                const newIndex = ind - 1;
                const newWeek = week + newIndex;
                setWeek(newWeek);
                setDate(moment(selectedDate).add(newIndex, 'week').toDate());
                swiperRef.current.scrollTo(1, false);
              }, 100);
            }}>
            {weeks.map((dates, index) => (
              <View
                style={[styles.itemRow, { paddingHorizontal: 16 }]}
                key={index}>
                {dates.map((item, dateIndex) => {
                  const isActive =
                  selectedDate.toDateString() === item.date.toDateString();
                  return (
                    <Pressable
                      key={dateIndex}
                      onPress={() => setDate(item.date)}
                      style={[
                        isActive && {
                          backgroundColor: '#cecece',
                        },
                      ]}>
                      <View>
                        <Text>
                          {item.weekday}
                        </Text>
                        <Text>
                          {item.date.getDate()}
                        </Text>
                      </View>
                    </Pressable>
                  );
                })}
              </View>
            ))}
          </Swiper>
        </View>
        <Text>{selectedDate.toLocaleDateString()}</Text>
        <FlatList
        data={data}
        renderItem={({item}) => <Item title={item.title} name={item.name}/>}
        contentContainerStyle={{ gap: 20 }}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  picker: {
    flex: 1,
    maxHeight: 74,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  itemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: -4,
  }
});