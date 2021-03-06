import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'

import {MeridianDataType, RootTabParamList} from '@types'
import {
  FlatList,
  ListItemButton,
  ListItemContainer,
  ListItemText,
  Row,
  Text,
  ThemeContainer,
} from '@atoms'
import {ListBadge} from '@molecules'
import GROUP_DATA from '../../static/data/groupData'

type HomeScreenNavigationProp = StackNavigationProp<RootTabParamList, 'Main'>

type Props = {
  navigation: HomeScreenNavigationProp
}

export function Home({navigation}: Props) {
  const keyExtractor = (item: any) => item.meridianID

  // TODO: cannot figure out, why this fials.
  // MeridianDataType is correct type but flatlist hates it

  const renderItem = ({item}: {item: MeridianDataType | any}) => (
    <ListItemContainer>
      <ListItemButton
        onPress={() => {
          navigation.navigate('Main', {
            screen: 'PointsList',
            params: {
              id: item.meridianID,
              header: item.english,
              points: item.points,
            },
          })
        }}>
        <Row justifyContent="space-between">
          <Row>
            <ListBadge>{item.meridianID}</ListBadge>
            <ListItemText>{item.english}</ListItemText>
          </Row>
          <Text>0/{item.points.length}</Text>
        </Row>
      </ListItemButton>
    </ListItemContainer>
  )

  return (
    <ThemeContainer>
      <FlatList
        keyExtractor={keyExtractor}
        data={GROUP_DATA}
        renderItem={renderItem}
      />
    </ThemeContainer>
  )
}
