import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  View,
  Pressable,
  Text,
  FlatList,
} from 'react-native';
import moment from 'moment';
import Swiper from 'react-native-swiper';
import styles from './styles';

export default function Home() {
    const data = [
        { id: 1, title: 'Limpar a sala', name: 'Patricia' },
        { id: 2, title: 'Limpar a cozinha', name: 'Joao' },
        { id: 3, title: 'Limpar a varanda', name: 'Marcos' },
        { id: 4, title: 'Remover o lixo', name: 'Juliana' },
    ];

  type ItemProps = {title: string, name: string};

  const Item = ({ title, name }: ItemProps) => (
    <View style={styles.listItems}>
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
    <View style={styles.container}>
        <SafeAreaView style={{flex: 1}}>
        <Text style={styles.title}>{(selectedDate.toLocaleDateString([], {month: 'long'}))}</Text>
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
                    style={[styles.itemRow]}
                    key={index}>
                    {dates.map((item, dateIndex) => {
                    const isActive =
                    selectedDate.toDateString() === item.date.toDateString();
                    return (
                        <Pressable
                            key={dateIndex}
                            onPress={() => {
                                setDate(item.date);
                            }}
                            style={[
                                styles.item,
                                isActive && {
                                    backgroundColor: '#6941C6',
                                    borderWidth: 0
                                },
                            ]}
                        >
                            <Text style={isActive ? {color: '#fff'} : {color: '#000'}}>
                                {item.weekday}
                            </Text>
                            <View style={{alignItems: 'center'}}>
                                <Text style={isActive ? {color: '#fff'} : {color: '#000'}}>
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
            <Text style={styles.subtitle}>{selectedDate.toLocaleDateString()}</Text>
            <FlatList
            data={data}
            renderItem={({item}) => <Item title={item.title} name={item.name}/>}
            contentContainerStyle={{ gap: 12 }}
            />
        </SafeAreaView>
    </View>
  );
}

